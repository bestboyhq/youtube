<script lang="ts">
	import { roasts } from '#lib/roasts.ts';
</script>

<svelte:head>
	<title>Roasts</title>
</svelte:head>

<section>
	<p class="label"><span>01</span> <span class="faint">/ 01</span> Roasts</p>
	<h1>Roasts. <span>Drag the divider to see what changed.</span></h1>

	<ol>
		{#each roasts as roast, i (roast.slug)}
			<li>
				<a href="/roasts/{roast.slug}">
					<span class="index">{String(i + 1).padStart(2, '0')}</span>
					<span class="title">{roast.title}</span>
					<span class="url">{new URL(roast.url).host}</span>
					<time datetime={roast.date}>{roast.date}</time>
					<svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
						<path d="M2 7h10M8 3l4 4-4 4" />
					</svg>
				</a>
			</li>
		{/each}
	</ol>
</section>

<style>
	section {
		position: relative;
		width: var(--col);
		margin-inline: auto;
		padding: 112px var(--pad);
	}

	.label {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 36px;
		color: var(--fg-secondary);
		font: 12px/16px var(--font-mono);
	}

	.label span:first-child {
		color: var(--fg-default);
	}

	.label::after {
		content: '';
		flex: 1;
		height: 1px;
		margin-left: 8px;
		background: var(--border-default);
	}

	.faint,
	h1 span {
		color: var(--fg-faint);
	}

	h1 {
		font-size: clamp(34px, 4.6vw, 52px);
		line-height: 1.06;
		letter-spacing: -0.035em;
	}

	h1 span {
		display: block;
	}

	ol {
		margin: 56px 0 0;
		padding: 0;
		list-style: none;
		border-top: 1px solid var(--border-default);
	}

	li {
		border-bottom: 1px solid var(--border-default);
	}

	li a {
		display: grid;
		grid-template-columns: 40px 1fr auto auto 14px;
		align-items: center;
		gap: 24px;
		min-height: 64px;
		padding: 0 12px;
		margin-inline: -12px;
		border-radius: 8px;
	}

	.index,
	.url,
	time {
		color: var(--fg-faint);
		font: 12px/16px var(--font-mono);
	}

	.url {
		color: var(--fg-secondary);
		font-size: 13px;
	}

	.title {
		font-size: 17px;
		font-weight: 550;
		letter-spacing: -0.01em;
	}

	svg path {
		fill: none;
		stroke: var(--fg-faint);
		stroke-width: 1.5;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	@media (hover: hover) and (pointer: fine) {
		li a:hover {
			background: var(--surface-hover);
		}

		li a:hover path {
			stroke: var(--fg-default);
		}
	}

	@media (max-width: 1023px) {
		section {
			padding-block: 80px;
		}
	}

	@media (max-width: 639px) {
		li a {
			grid-template-columns: 28px 1fr 14px;
			gap: 12px;
		}

		.url,
		time {
			display: none;
		}
	}
</style>
