<script lang="ts">
	import type { Quote } from './quotes';

	let { quotes }: { quotes: Quote[] } = $props();
</script>

<div class="quotes" class:single={quotes.length === 1} class:two={quotes.length === 2}>
	{#each quotes as quote}
		<figure class="quote">
			<blockquote>{quote.text}</blockquote>
			<figcaption>
				<span class="quote-avatar">{quote.initials}</span>
				<span><strong>{quote.name}</strong><small>{quote.role}</small></span>
			</figcaption>
		</figure>
	{/each}
</div>

<style>
	.quotes {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 16px;
		margin-top: 44px;
	}

	.quotes.two {
		grid-template-columns: repeat(2, 1fr);
	}

	.quotes.single {
		grid-template-columns: minmax(0, 680px);
		justify-content: center;
	}

	.quote {
		display: flex;
		flex-direction: column;
		padding: 26px;
		border-radius: 22px;
		background: var(--g50);
	}

	.quote blockquote {
		color: var(--g800);
		font-size: 14.5px;
		line-height: 1.55;
		text-wrap: pretty;
	}

	.quote figcaption {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-top: auto;
		padding-top: 24px;
	}

	.quote-avatar {
		display: grid;
		flex: none;
		place-items: center;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background: var(--g150);
		color: var(--g700);
		font-size: 10.5px;
		font-weight: 700;
	}

	.quote figcaption strong {
		display: block;
		font-size: 12px;
		font-weight: 650;
	}

	.quote figcaption small {
		display: block;
		color: var(--g500);
		font-size: 11px;
	}

	.quotes.single .quote {
		padding: clamp(28px, 4vw, 44px);
	}

	.quotes.single blockquote {
		font-family: Fraunces, 'Iowan Old Style', Georgia, serif;
		font-size: clamp(19px, 2vw, 24px);
		font-weight: 500;
		line-height: 1.4;
		letter-spacing: -0.02em;
	}

	@media (max-width: 900px) {
		.quotes,
		.quotes.two {
			grid-template-columns: 1fr;
		}
	}
</style>
