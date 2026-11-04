<svelte:head>
	<title>Landing page roasts</title>
</svelte:head>

<section class="hero">
	<h1>
		Landing page roasts.
		<span>Slop in, a real page out.</span>
	</h1>
	<p>
		Simon takes a real landing page apart on video and rebuilds it without the slop. Every roast
		keeps the site as it was beside the page it became.
	</p>
	<a class="button" href="/roasts">See the roasts</a>
</section>

<style>
	.hero {
		width: var(--col);
		margin-inline: auto;
		padding: 112px var(--pad);
	}

	h1 {
		font-size: clamp(38px, 6vw, 68px);
		line-height: 1.02;
		letter-spacing: -0.04em;
	}

	h1 span {
		display: block;
		color: var(--fg-faint);
	}

	p {
		max-width: 640px;
		margin-top: 24px;
		color: var(--fg-muted);
		font-size: 19px;
		line-height: 1.55;
	}

	.button {
		display: inline-flex;
		align-items: center;
		height: 44px;
		margin-top: 32px;
		padding: 0 20px;
		border-radius: 999px;
		background: var(--surface-inverse);
		color: var(--surface-root);
		font-size: 15px;
		font-weight: 550;
		letter-spacing: -0.005em;
		transition: scale 150ms var(--ease-out);
	}

	.button:active {
		scale: 0.97;
		transition-duration: 80ms;
	}

	@media (hover: hover) and (pointer: fine) {
		.button:hover {
			background: var(--surface-inverse-hover);
		}
	}

	@media (max-width: 1023px) {
		.hero {
			padding-block: 80px;
		}
	}

	@media (max-width: 859px) {
		p {
			font-size: 17px;
		}
	}
</style>
