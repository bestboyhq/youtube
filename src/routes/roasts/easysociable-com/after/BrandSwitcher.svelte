<script lang="ts">
	import CarouselSlide, { type Slide } from './CarouselSlide.svelte';

	const brands = [
		{
			label: 'EasySociable',
			accent: '#a57203',
			surface: '#fdfaf1',
			handle: '@easysociable'
		},
		{
			label: 'Buji',
			accent: '#8a5a00',
			surface: '#f8f2e6',
			handle: '@buji_ai'
		}
	];

	const brandSlides: Slide[] = [
		{
			name: 'EasySociable',
			badge: 'CLAUDE CODE',
			index: '/ 01',
			title: ['Stop reminding', 'Claude. Make it'],
			accent: ['automatic.'],
			body: '(4 hooks I set up on day one.)'
		},
		{
			name: '不急同学',
			badge: 'CLAUDE CODE',
			index: '/ 01',
			title: ['Stop reminding', 'Claude. Make it'],
			accent: ['automatic.'],
			body: '(4 hooks I set up on day one.)'
		}
	];

	let brand = $state(0);
</script>

{#snippet checkIcon()}
	<svg class="icon" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
		<path d="M2.6 7.3 5.5 10.2 11.4 4.3" />
	</svg>
{/snippet}

<div class="brand-stage">
	<div class="brand-toggle" role="group" aria-label="Switch Brand">
		{#each brands as item, index}
			<button
				type="button"
				class:active={brand === index}
				aria-pressed={brand === index}
				onclick={() => (brand = index)}
			>
				<span class="mono">{item.label.slice(0, 1)}</span>
				<span>{item.label}</span>
			</button>
		{/each}
	</div>
	<div class="brand-covers">
		{#each brands as item, index}
			<div
				class="cover"
				class:front={brand === index}
				aria-hidden={brand !== index}
				style:--tilt={index === 0 ? '-2deg' : '2deg'}
			>
				<CarouselSlide
					slide={brandSlides[index]}
					accent={item.accent}
					surface={item.surface}
					handle={item.handle}
				/>
			</div>
		{/each}
	</div>
	<p class="brand-caption" aria-live="polite">
		{@render checkIcon()}
		{brand === 0 ? 'EasySociable Brand selected' : 'Buji Brand selected'}
	</p>
</div>

<style>
	.brand-stage {
		padding: clamp(22px, 2.6vw, 30px);
		border-radius: 30px;
		background: var(--g100);
	}

	.brand-toggle {
		display: flex;
		justify-content: center;
		gap: 4px;
		padding: 4px;
		border-radius: 999px;
		background: var(--g150);
		width: fit-content;
		margin-inline: auto;
	}

	.brand-toggle button {
		display: inline-flex;
		align-items: center;
		gap: 7px;
		padding: 5px 11px 5px 5px;
		border-radius: 999px;
		color: var(--g600);
		font-size: 11.5px;
		font-weight: 600;
		transition:
			background 200ms ease,
			color 200ms ease,
			box-shadow 200ms ease;
	}

	.brand-toggle .mono {
		display: grid;
		place-items: center;
		width: 24px;
		height: 24px;
		border-radius: 50%;
		background: var(--g100);
		color: var(--g700);
		font-size: 9.5px;
		font-weight: 700;
		transition:
			background 200ms ease,
			color 200ms ease;
	}

	.brand-toggle button.active {
		background: var(--g50);
		color: var(--g900);
		box-shadow: 0 5px 14px -8px rgb(27 21 20 / 0.3);
	}

	.brand-toggle button.active .mono {
		background: var(--roast-accent);
		color: #3d2c00;
	}

	.brand-covers {
		position: relative;
		width: min(100%, 400px);
		aspect-ratio: 4 / 5;
		margin: 28px auto 0;
	}

	.brand-covers::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 0;
		border-radius: 20px;
		background: var(--roast-accent);
		transform: rotate(3deg);
	}

	.cover {
		position: absolute;
		inset: 0;
		z-index: 1;
		overflow: hidden;
		border-radius: 20px;
		box-shadow: 0 26px 50px -34px rgb(27 21 20 / 0.55);
		opacity: 0;
		transform: rotate(var(--tilt)) scale(0.96);
		transition:
			opacity 380ms ease,
			transform 380ms cubic-bezier(0.2, 0.7, 0.2, 1);
	}

	.cover.front {
		opacity: 1;
		transform: rotate(var(--tilt)) scale(1);
	}

	.cover :global(.slide) {
		border-radius: 20px;
	}

	.brand-caption {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 7px;
		margin-top: 18px;
		color: var(--g500);
		font-size: 12px;
		font-weight: 550;
	}

	.brand-caption :global(.icon) {
		color: var(--roast-accent-ink);
		stroke-width: 2;
	}

	@media (max-width: 900px) {
		.brand-stage {
			width: min(100%, 540px);
			margin-inline: auto;
		}
	}
</style>
