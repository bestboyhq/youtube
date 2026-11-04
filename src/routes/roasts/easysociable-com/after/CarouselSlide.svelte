<script module lang="ts">
	export type Slide = {
		name: string;
		badge: string;
		index: string;
		title: string[];
		accent: string[];
		body: string;
		chips?: string[];
	};
</script>

<script lang="ts">
	let {
		slide,
		accent = '#a57203',
		surface = '#fdfaf1',
		handle
	}: { slide: Slide; accent?: string; surface?: string; handle?: string } = $props();
</script>

<div class="frame" style:--slide-accent={accent} style:--slide-surface={surface}>
	<div class="slide">
		<div class="top">
			<span class="name">{slide.name}</span>
			<span class="badge">{slide.badge}</span>
		</div>
		<p class="index">{slide.index}</p>
		<p class="title">
			{#each slide.title as line, i}{line}{#if i < slide.title.length - 1}<br />{/if}{/each}
			{#if slide.accent.length > 0}
				<br /><span class="accent"
					>{#each slide.accent as line, i}{line}{#if i < slide.accent.length - 1}<br
							/>{/if}{/each}</span
				>
			{/if}
		</p>
		<p class="body">{slide.body}</p>
		{#if slide.chips}
			<div class="chips">
				{#each slide.chips as chip}<span>{chip}</span>{/each}
			</div>
		{/if}
		<div class="foot">
			<span>SWIPE →</span>
			<span>{handle ?? 'SAVE FOR LATER'}</span>
		</div>
	</div>
</div>

<style>
	.frame {
		container-type: inline-size;
		width: 100%;
		font-family: Inter, ui-sans-serif, system-ui, sans-serif;
	}

	.slide {
		position: relative;
		display: flex;
		flex-direction: column;
		width: 100%;
		aspect-ratio: 4 / 5;
		overflow: hidden;
		padding: 8cqw;
		border-radius: 2.6cqw;
		background: var(--slide-surface);
		color: #322201;
		box-shadow: 0 16px 34px -24px rgb(50 34 1 / 0.35);
	}

	.top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2cqw;
	}

	.name {
		font-size: 3.4cqw;
		font-weight: 700;
		letter-spacing: -0.04em;
	}

	.badge {
		flex: none;
		padding: 1.4cqw 2.8cqw;
		border-radius: 999px;
		background: #e5e0d9;
		color: #2a2a2a;
		font-size: 2.1cqw;
		font-weight: 700;
		letter-spacing: 0.14em;
		line-height: 1;
	}

	.index {
		margin-top: 4.6cqw;
		color: var(--slide-accent);
		font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
		font-size: 3.6cqw;
		font-weight: 600;
		line-height: 1;
	}

	.title {
		margin-top: 2.2cqw;
		font-size: 9.1cqw;
		font-weight: 650;
		letter-spacing: -0.045em;
		line-height: 1.01;
	}

	.accent {
		color: var(--slide-accent);
	}

	.body {
		max-width: 78cqw;
		margin-top: 5.4cqw;
		color: #6f5a33;
		font-size: 3.2cqw;
		line-height: 1.42;
	}

	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: 1.6cqw;
		margin-top: 4.6cqw;
	}

	.chips span {
		padding: 1.5cqw 3cqw;
		border-radius: 999px;
		background: #e5e0d9;
		color: #322201;
		font-size: 2.5cqw;
		font-weight: 600;
	}

	.foot {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: auto;
		color: #6f6a64;
		font-size: 2cqw;
		font-weight: 700;
		letter-spacing: 0.14em;
	}

	@media (prefers-reduced-motion: no-preference) {
		.frame {
			animation: settle 0.4s cubic-bezier(0.2, 0.7, 0.2, 1) both;
		}
	}

	@keyframes settle {
		from {
			opacity: 0.86;
		}
		to {
			opacity: 1;
		}
	}
</style>
