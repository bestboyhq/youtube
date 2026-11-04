<!--
	A full-viewport before/after slider over the roast's own before/ and after/ pages.
	Both pages scroll together, by the share of their height scrolled.
-->
<script lang="ts">
	import '#lib/bestboy.css';
	import { page } from '$app/state';

	let { title }: { title: string } = $props();

	let position = $state(50);
	let dragging = $state(false);
	let stage: HTMLElement;
	let before: HTMLIFrameElement;
	let after: HTMLIFrameElement;
	/** The window we just scrolled ourselves, so its scroll event is not mirrored back. */
	let echo: Window | null = null;

	function moveTo(clientX: number) {
		const { left, width } = stage.getBoundingClientRect();
		position = Math.min(100, Math.max(0, ((clientX - left) / width) * 100));
	}

	function onkeydown(event: KeyboardEvent) {
		const step = event.shiftKey ? 10 : 1;
		const next = {
			ArrowLeft: position - step,
			ArrowDown: position - step,
			ArrowRight: position + step,
			ArrowUp: position + step,
			PageDown: position - 10,
			PageUp: position + 10,
			Home: 0,
			End: 100
		}[event.key];
		if (next === undefined) return;
		event.preventDefault();
		position = Math.min(100, Math.max(0, next));
	}

	/** Scrolls the other frame to the same share of its height. */
	function mirror(from: HTMLIFrameElement) {
		if (echo === from.contentWindow) {
			echo = null;
			return;
		}
		const to = from === before ? after : before;
		const source = from.contentDocument?.scrollingElement;
		const target = to.contentDocument?.scrollingElement;
		if (!source || !target) return;
		const share = source.scrollTop / Math.max(1, source.scrollHeight - source.clientHeight);
		const top = Math.round(share * (target.scrollHeight - target.clientHeight));
		if (Math.abs(target.scrollTop - top) < 1) return;
		echo = to.contentWindow;
		to.contentWindow?.scrollTo({ top, behavior: 'instant' });
	}

	/** Mirrors a frame's scrolling, again after each page it loads. */
	function frame(node: HTMLIFrameElement) {
		let win: Window | null = null;
		const onscroll = () => mirror(node);
		const unbind = () => win?.removeEventListener('scroll', onscroll);
		const bind = () => {
			unbind();
			win = node.contentWindow;
			win?.addEventListener('scroll', onscroll);
		};
		bind();
		node.addEventListener('load', bind);
		return () => {
			node.removeEventListener('load', bind);
			unbind();
		};
	}
</script>

<svelte:head>
	<title>{title} roast</title>
	<link rel="icon" href="/bestboy.svg" />
</svelte:head>

<div class="stage" class:dragging bind:this={stage} style:--x="{position}%">
	<iframe title="{title} before" src="{page.url.pathname}/before" bind:this={before} {@attach frame}
	></iframe>
	<iframe
		class="after"
		title="{title} after"
		src="{page.url.pathname}/after"
		bind:this={after}
		{@attach frame}
	></iframe>

	<span class="label" class:hidden={position < 12} style:left="24px">Before</span>
	<span class="label" class:hidden={position > 88} style:right="24px">After</span>

	<div
		class="divider"
		role="slider"
		tabindex="0"
		aria-label="Divider between before and after"
		aria-orientation="horizontal"
		aria-valuemin={0}
		aria-valuemax={100}
		aria-valuenow={Math.round(position)}
		aria-valuetext="{Math.round(position)}% before"
		onpointerdown={(event) => {
			event.currentTarget.setPointerCapture(event.pointerId);
			dragging = true;
			moveTo(event.clientX);
		}}
		onpointermove={(event) => dragging && moveTo(event.clientX)}
		onpointerup={() => (dragging = false)}
		onpointercancel={() => (dragging = false)}
		{onkeydown}
	>
		<span class="knob">
			<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
				<path d="M8 6 4 10l4 4M12 6l4 4-4 4" />
			</svg>
		</span>
	</div>
</div>

<style>
	.stage {
		position: fixed;
		inset: 0;
		overflow: hidden;
		background: var(--surface-root);
	}

	iframe {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		border: 0;
	}

	.after {
		clip-path: inset(0 0 0 var(--x));
	}

	.dragging iframe {
		pointer-events: none;
	}

	.label {
		position: absolute;
		bottom: 24px;
		display: flex;
		align-items: center;
		height: 30px;
		padding: 0 12px;
		border-radius: 999px;
		background: color-mix(in srgb, var(--surface-root) 82%, transparent);
		backdrop-filter: blur(12px) saturate(1.4);
		box-shadow:
			0 0 0 1px var(--ring-faint),
			0 2px 8px rgb(0 0 0 / 0.16);
		color: var(--fg-default);
		font-size: 13px;
		font-weight: 500;
		pointer-events: none;
		transition: opacity 180ms;
	}

	.hidden {
		opacity: 0;
	}

	.divider {
		position: absolute;
		inset-block: 0;
		left: var(--x);
		width: 44px;
		margin-left: -22px;
		display: grid;
		place-items: center;
		cursor: ew-resize;
		touch-action: none;
		outline: none;
	}

	.divider::before {
		content: '';
		position: absolute;
		inset-block: 0;
		left: 21px;
		width: 2px;
		background: var(--surface-inverse);
		box-shadow: 0 0 0 1px color-mix(in srgb, var(--surface-root) 50%, transparent);
	}

	.knob {
		position: relative;
		display: grid;
		place-items: center;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: var(--surface-elevated);
		box-shadow:
			0 0 0 1px var(--ring-faint),
			0 1px 1px rgb(0 0 0 / 0.12),
			0 8px 24px -4px rgb(0 0 0 / 0.32);
		color: var(--fg-secondary);
		transition: scale 150ms var(--ease-out);
	}

	.knob path {
		fill: none;
		stroke: currentColor;
		stroke-width: 1.8;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.dragging .knob {
		scale: 0.94;
		color: var(--fg-default);
	}

	.divider:focus-visible .knob {
		outline: 2px solid var(--brand);
		outline-offset: 2px;
	}

	@media (hover: hover) and (pointer: fine) {
		.divider:hover .knob {
			color: var(--fg-default);
		}
	}
</style>
