<script lang="ts">
	import CarouselSlide from './CarouselSlide.svelte';
	import { slides } from './slides';

	let demoStep = $state(0);
	let demoAuto = $state(true);

	$effect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			demoStep = 3;
			return;
		}
		if (!demoAuto) return;
		const id = window.setInterval(() => {
			demoStep = (demoStep + 1) % 4;
		}, 2800);
		return () => window.clearInterval(id);
	});
</script>

<div class="share-demo">
	<div class="phone phone-agent" aria-hidden="true">
		<div class="phone-screen">
			<div class="phone-status"><span>9:41</span><span class="status-dots"></span></div>
			<div class="mini-carousel">
				<CarouselSlide slide={slides[2]} />
				<span class="mini-counter">3 / 6</span>
			</div>
			<div class="sheet">
				<p class="sheet-title">Share with client</p>
				<div class="perm-row"><span>Can view</span><span class="switch on"></span></div>
				<div class="perm-row"><span>Can edit</span><span class="switch"></span></div>
				<div class="perm-row"><span>Can publish</span><span class="switch"></span></div>
				<div class="sheet-link">
					<span>easysociable.com/s/3kf9</span>
					{#if demoStep >= 1}<span class="copied">Copied</span>{/if}
				</div>
				<button class="sheet-pill" class:active={demoStep === 1} type="button" tabindex="-1">
					{demoStep >= 1 ? 'Link copied' : 'Copy link'}
				</button>
			</div>
		</div>
	</div>

	<div class="phone phone-client" aria-hidden="true">
		<div class="phone-screen">
			<div class="phone-status"><span>9:41</span><span class="status-dots"></span></div>
			<div class="client-head">
				<span class="client-avatar">M</span>
				<span>Maya shared a carousel<small>3 minutes ago</small></span>
			</div>
			<div class="mini-carousel">
				<CarouselSlide slide={slides[2]} />
			</div>
			<div class="comment" class:show={demoStep >= 2}>
				<span class="comment-avatar">J</span>
				<p>Can slide 3 say "in minutes"?</p>
			</div>
			<button class="approve" class:approved={demoStep === 3} type="button" tabindex="-1">
				{demoStep === 3 ? 'Approved ✓' : 'Approve'}
			</button>
		</div>
	</div>

	<div class="demo-track">
		{#each ['Share', 'Copy link', 'Client opens', 'Approved'] as label, index}
			<button
				type="button"
				class:on={demoStep === index}
				aria-label={label}
				aria-pressed={demoStep === index}
				onclick={() => {
					demoAuto = false;
					demoStep = index;
				}}
			></button>
		{/each}
	</div>
</div>

<style>
	.share-demo {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 12px;
		align-items: stretch;
		justify-items: center;
	}

	.phone {
		display: flex;
		width: 100%;
		max-width: 268px;
		padding: 6px;
		border-radius: 36px;
		background: var(--g200);
		box-shadow: 0 32px 60px -44px rgb(0 0 0 / 0.9);
	}

	.phone-screen {
		display: flex;
		flex: 1;
		flex-direction: column;
		overflow: hidden;
		padding: 9px;
		border-radius: 30px;
		background: var(--paper);
		color: var(--paper-ink);
	}

	.phone-client .approve {
		margin-top: auto;
	}

	.phone-status {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 3px 7px 7px;
		color: var(--paper-ink);
		font-size: 8.5px;
		font-weight: 700;
	}

	.status-dots {
		width: 26px;
		height: 5px;
		border-radius: 3px;
		background: var(--paper-3);
	}

	.mini-carousel {
		position: relative;
		overflow: hidden;
		border-radius: 13px;
	}

	.mini-counter {
		position: absolute;
		top: 7px;
		right: 7px;
		padding: 2px 6px;
		border-radius: 999px;
		background: rgb(17 12 11 / 0.55);
		color: #fff;
		font-size: 7.5px;
		font-weight: 600;
	}

	.sheet {
		margin-top: 8px;
		padding: 10px;
		border-radius: 14px;
		background: var(--paper-2);
	}

	.sheet-title {
		font-size: 9.5px;
		font-weight: 700;
		letter-spacing: -0.01em;
	}

	.perm-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 4.5px 0;
		color: var(--paper-muted);
		font-size: 8.5px;
	}

	.switch {
		position: relative;
		width: 22px;
		height: 13px;
		border-radius: 999px;
		background: var(--paper-3);
	}

	.switch::after {
		content: '';
		position: absolute;
		top: 2px;
		left: 2px;
		width: 9px;
		height: 9px;
		border-radius: 50%;
		background: var(--paper);
		transition: left 200ms ease;
	}

	.switch.on {
		background: var(--roast-accent);
	}

	.switch.on::after {
		left: 11px;
		background: #3d2c00;
	}

	.sheet-link {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 6px;
		margin-top: 6px;
		padding: 6px 8px;
		border-radius: 8px;
		background: var(--paper);
		color: var(--paper-muted);
		font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
		font-size: 7.5px;
	}

	.copied {
		color: var(--roast-accent-ink);
		font-family: Inter, sans-serif;
		font-weight: 700;
	}

	.sheet-pill {
		width: 100%;
		height: 26px;
		margin-top: 7px;
		border-radius: 8px;
		background: var(--paper-ink);
		color: var(--paper);
		font-size: 8.5px;
		font-weight: 650;
		transition:
			background 220ms ease,
			color 220ms ease;
	}

	.sheet-pill.active {
		background: var(--roast-accent);
		color: #3d2c00;
	}

	.client-head {
		display: flex;
		gap: 7px;
		align-items: center;
		padding: 2px 4px 8px;
		color: var(--paper-ink);
		font-size: 8.5px;
		font-weight: 600;
	}

	.client-avatar {
		display: grid;
		place-items: center;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: var(--roast-accent);
		color: #3d2c00;
		font-size: 8px;
		font-weight: 700;
	}

	.client-head small {
		display: block;
		color: var(--g500);
		font-size: 7.5px;
		font-weight: 500;
	}

	.comment {
		display: flex;
		gap: 6px;
		align-items: flex-start;
		margin-top: 8px;
		opacity: 0;
		transform: translateY(4px);
		transition:
			opacity 280ms ease,
			transform 280ms ease;
	}

	.comment.show {
		opacity: 1;
		transform: none;
	}

	.comment-avatar {
		display: grid;
		flex: none;
		place-items: center;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: var(--paper-3);
		color: var(--paper-ink);
		font-size: 7px;
		font-weight: 700;
	}

	.comment p {
		padding: 6px 8px;
		border-radius: 10px 10px 10px 3px;
		background: var(--paper-2);
		color: var(--paper-muted);
		font-size: 8px;
		line-height: 1.35;
	}

	.approve {
		width: 100%;
		height: 26px;
		margin-top: 8px;
		border-radius: 8px;
		background: var(--paper-ink);
		color: var(--paper);
		font-size: 8.5px;
		font-weight: 650;
		transition:
			background 260ms ease,
			color 260ms ease;
	}

	.approve.approved {
		background: var(--roast-accent);
		color: #3d2c00;
	}

	.demo-track {
		grid-column: 1 / -1;
		display: flex;
		justify-content: center;
		gap: 6px;
		margin-top: 4px;
	}

	.demo-track button {
		width: 8px;
		height: 8px;
		border-radius: 999px;
		background: var(--g300);
		transition:
			width 220ms ease,
			background 220ms ease;
	}

	.demo-track button.on {
		width: 22px;
		background: var(--roast-accent-ink);
	}

	@media (max-width: 900px) {
		.share-demo {
			width: min(100%, 560px);
			margin-inline: auto;
		}
	}

	@media (max-width: 620px) {
		.phone {
			max-width: 250px;
		}
	}
</style>
