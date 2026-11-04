<!--
	Light, system, or dark, stored in localStorage.theme and applied as data-theme on <html>.
	The pre-paint script in app.html applies the stored one before the first paint.
	The selected segment's look comes from data-theme in CSS, so it is right before hydration too.
-->
<script lang="ts">
	import { onMount } from 'svelte';
	import { tip } from '#lib/tooltip.ts';

	type Theme = 'light' | 'system' | 'dark';

	const themes: { value: Theme; label: string; tip: string; path: string[] }[] = [
		{
			value: 'light',
			label: 'Light theme',
			tip: 'Light',
			path: [
				'M12 2V4.22M12 19.78V22M22 12H19.78M4.22 12H2M19.07 19.07L17.5 17.5M6.5 6.5L4.93 4.93M4.93 19.07L6.5 17.5M17.5 6.5L19.07 4.93M17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12Z'
			]
		},
		{
			value: 'system',
			label: 'System theme',
			tip: 'System',
			path: [
				'M8.5 15.33C7.4 15.33 6.5 14.43 6.5 13.33V10.66C6.5 9.56 7.4 8.66 8.5 8.66C9.6 8.66 10.5 9.56 10.5 10.66V13.33C10.5 14.43 9.6 15.33 8.5 15.33Z',
				'M17.5 10C17.5 9.26 16.9 8.67 16.17 8.67H15.21C14.27 8.67 13.51 9.43 13.51 10.37C13.51 10.94 13.88 11.45 14.42 11.64L16.6 12.37C17.14 12.55 17.51 13.06 17.51 13.63C17.51 14.57 16.75 15.34 15.81 15.34H14.85C14.11 15.34 13.52 14.74 13.52 14.01',
				'M17 22H7C4.24 22 2 19.76 2 17V7C2 4.24 4.24 2 7 2H17C19.76 2 22 4.24 22 7V17C22 19.76 19.76 22 17 22Z'
			]
		},
		{
			value: 'dark',
			label: 'Dark theme',
			tip: 'Dark',
			path: [
				'M12 12C14.37 9.57 14.95 5.91 13.46 2.87C13.37 2.65 13.41 2.39 13.57 2.21C13.73 2.03 13.98 1.96 14.21 2.03C15.99 2.49 17.62 3.42 18.92 4.71C22.95 8.63 23.03 15.08 19.11 19.11C15.08 23.03 8.64 22.95 4.72 18.92C3.42 17.62 2.49 16 2.03 14.21C1.96 13.98 2.03 13.73 2.21 13.57C2.39 13.41 2.65 13.37 2.87 13.46C5.92 14.95 9.57 14.37 12 12Z'
			]
		}
	];

	let theme = $state<Theme>('system');
	const buttons: HTMLButtonElement[] = [];

	onMount(() => {
		const chosen = document.documentElement.dataset.theme;
		theme = chosen === 'light' || chosen === 'dark' ? chosen : 'system';
	});

	function select(next: Theme) {
		if (next === theme) return;
		theme = next;
		const update = () => {
			const root = document.documentElement;
			if (next === 'system') delete root.dataset.theme;
			else root.dataset.theme = next;
			try {
				if (next === 'system') localStorage.removeItem('theme');
				else localStorage.setItem('theme', next);
			} catch {
				// storage blocked: the choice lasts for this page only
			}
		};
		const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduced || !document.startViewTransition) update();
		else document.startViewTransition(update);
	}

	function onkeydown(event: KeyboardEvent) {
		const index = themes.findIndex((t) => t.value === theme);
		const next = {
			ArrowLeft: index - 1,
			ArrowUp: index - 1,
			ArrowRight: index + 1,
			ArrowDown: index + 1,
			Home: 0,
			End: themes.length - 1
		}[event.key];
		if (next === undefined) return;
		event.preventDefault();
		const wrapped = (next + themes.length) % themes.length;
		select(themes[wrapped].value);
		buttons[wrapped].focus();
	}
</script>

<div class="seg" role="radiogroup" aria-label="Theme" tabindex="-1" {onkeydown}>
	<span class="indicator" aria-hidden="true"></span>
	{#each themes as { value, label, tip: text, path }, i (value)}
		<button
			bind:this={buttons[i]}
			type="button"
			class="pill {value}"
			role="radio"
			aria-checked={value === theme}
			aria-label={label}
			tabindex={value === theme ? 0 : -1}
			onclick={() => select(value)}
			use:tip={text}
		>
			<svg viewBox="0 0 24 24" aria-hidden="true">
				{#each path as d (d)}<path {d} />{/each}
			</svg>
		</button>
	{/each}
</div>

<style>
	.seg {
		--i: 1;
		position: relative;
		display: inline-flex;
		align-items: center;
		gap: 2px;
		padding: 2px;
		border-radius: 9px;
		background: var(--control-track);
		isolation: isolate;
	}

	:global(:root[data-theme='light']) .seg {
		--i: 0;
	}

	:global(:root[data-theme='dark']) .seg {
		--i: 2;
	}

	.indicator {
		position: absolute;
		top: 2px;
		bottom: 2px;
		left: 2px;
		z-index: -1;
		width: 28px;
		border-radius: 7px;
		background: var(--control-raised);
		box-shadow:
			inset 0 0 0 0.5px var(--border-default),
			0 1px 2px rgb(0 0 0 / 0.08),
			0 0 0 0.5px rgb(0 0 0 / 0.02);
		translate: calc(var(--i) * 30px) 0;
		transition: translate 250ms cubic-bezier(0.32, 0.72, 0, 1);
	}

	.pill {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 28px;
		height: 24px;
		padding: 0;
		border: 0;
		border-radius: 7px;
		background: none;
		color: var(--fg-muted);
		cursor: pointer;
		transition: scale 150ms var(--ease-out);
	}

	.pill:active {
		scale: 0.97;
		color: var(--fg-secondary);
		transition-duration: 80ms;
	}

	:global(:root:not([data-theme])) .system,
	:global(:root[data-theme='light']) .light,
	:global(:root[data-theme='dark']) .dark {
		color: var(--fg-default);
	}

	.pill:focus-visible {
		outline: 2px solid var(--brand);
		outline-offset: 1px;
	}

	svg {
		width: 14px;
		height: 14px;
		fill: none;
		stroke: currentColor;
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	@media (hover: hover) and (pointer: fine) {
		.pill:hover {
			color: var(--fg-secondary);
		}
	}

	/* A finger needs 44px: each segment's hit area is 44px tall and splits the gaps with its neighbors,
	   and the end segments reach outward until they are 44px wide. */
	@media (pointer: coarse) {
		.pill::after {
			content: '';
			position: absolute;
			inset: -10px -1px;
		}

		.pill:first-of-type::after {
			left: -15px;
		}

		.pill:last-of-type::after {
			right: -15px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.indicator,
		.pill {
			transition: none;
		}
	}
</style>
