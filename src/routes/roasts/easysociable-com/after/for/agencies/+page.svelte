<script lang="ts">
	import BrandSwitcher from '../../BrandSwitcher.svelte';
	import QuoteGrid from '../../QuoteGrid.svelte';
	import ShareDemo from '../../ShareDemo.svelte';
	import SubpageFooter from '../../SubpageFooter.svelte';
	import SubpageNav from '../../SubpageNav.svelte';
	import { quotes } from '../../quotes';
	import '../../base.css';
	import '../../subpage.css';

	const root = '/roasts/easysociable-com/after';
	const creatorPath = `${root}/for/creators`;
	const pricingPath = `${root}/#pricing`;

	const roster = [
		{ initials: 'B', name: 'Buji', meta: '@buji_ai', stat: '8', active: true },
		{ initials: 'N', name: 'Northline', meta: '@northline.studio', stat: '6', active: false },
		{ initials: 'C', name: 'Casa Verde', meta: '@casaverde', stat: '4', active: false },
		{ initials: 'M', name: 'Meridian', meta: '@meridian.co', stat: '3', active: false }
	];
</script>

<svelte:head>
	<title>EasySociable for agencies: every client, one studio</title>
	<meta
		name="description"
		content="Run every client Brand from one studio, send review links clients can open without an account, and pay for the carousels you actually ship. 14 days free."
	/>
	<link rel="icon" href="/roasts/easysociable-com/favicon.svg" />
	<link
		rel="preload"
		href="/roasts/easysociable-com/inter-latin-j6BbcsN8.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		href="/roasts/easysociable-com/fraunces-latin-BOz5zopO.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<link rel="stylesheet" href="/roasts/easysociable-com/site.css" />
</svelte:head>

{#snippet arrow()}
	<svg class="icon" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
		<path d="M2.8 7h8.4M7.6 3.2 11.4 7l-3.8 3.8" />
	</svg>
{/snippet}

{#snippet checkIcon()}
	<svg class="icon" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
		<path d="M2.6 7.3 5.5 10.2 11.4 4.3" />
	</svg>
{/snippet}

<div class="page">
	<SubpageNav
		context="For agencies"
		links={[
			{ href: '#brands', label: 'Brands' },
			{ href: '#review', label: 'Client review' },
			{ href: pricingPath, label: 'Pricing' },
			{ href: creatorPath, label: 'For creators' }
		]}
		cta={{ href: 'https://easysociable.com/contact', label: 'Talk to us' }}
	/>

	<main>
		<section class="sub-hero">
			<div class="rail sub-hero-grid">
				<div class="sub-hero-copy">
					<p class="eyebrow">For agencies</p>
					<h1 class="display h1">Every client.<br /><span class="mark">One seat.</span></h1>
					<p class="lead">
						Run every client Brand from one studio. Send review links clients can open without an
						account, and pay for the carousels you actually ship.
					</p>
					<div class="sub-actions">
						<a class="pill pill-accent pill-lg" href="https://easysociable.com/contact">
							Talk to us
							{@render arrow()}
						</a>
						<a class="pill pill-soft pill-lg" href="#review">See client review</a>
					</div>
					<p class="sub-note">Usage that grows with the roster. Add a Brand when you sign one.</p>
				</div>

				<div class="sub-art">
					<div class="roster" aria-hidden="true">
						<div class="roster-head">
							<div>
								<p class="roster-label">Your studio</p>
								<p class="roster-title">6 client Brands</p>
							</div>
							<span class="roster-chip">4 due this week</span>
						</div>
						<ul class="roster-list">
							{#each roster as client}
								<li class="roster-row" class:active={client.active}>
									<span class="roster-avatar">{client.initials}</span>
									<span class="roster-name">{client.name}<small>{client.meta}</small></span>
									<span class="roster-stat">{client.stat} posts</span>
								</li>
							{/each}
						</ul>
						<div class="roster-foot">
							<div class="roster-bar"><span></span></div>
							<p>42 of 60 carousels this month</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="wrap" id="brands">
			<div class="rail sub-split">
				<div class="sub-copy">
					<p class="eyebrow">Brands</p>
					<h2 class="display h2">Switch the studio <em>in one click.</em></h2>
					<p class="lead">
						Every client keeps its own colors, fonts, logo and voice. Open a Brand and every new
						carousel comes out right. Move one to another Brand and the layout follows.
					</p>
					<ul class="sub-list">
						<li>{@render checkIcon()}Every client Brand in one seat</li>
						<li>{@render checkIcon()}Colors, fonts and logo travel with the Brand</li>
						<li>{@render checkIcon()}Hand a carousel to a teammate without a handoff doc</li>
					</ul>
				</div>
				<div class="sub-visual"><BrandSwitcher /></div>
			</div>
		</section>

		<section class="band" id="review">
			<div class="rail wrap">
				<div class="sub-split reverse">
					<div class="sub-copy">
						<p class="eyebrow">Client review</p>
						<h2 class="display h2">Send a link. <em>Not a PDF.</em></h2>
						<p class="lead">
							Your client opens the carousel in any browser, comments on the slide and approves. No
							account, no download, no "slide 4" email.
						</p>
						<ul class="sub-list">
							<li>{@render checkIcon()}View, edit or publish permissions</li>
							<li>{@render checkIcon()}Comments land on the exact slide</li>
							<li>{@render checkIcon()}Approval is visible to the whole team</li>
						</ul>
					</div>
					<div class="sub-visual"><ShareDemo /></div>
				</div>
			</div>
		</section>

		<section class="wrap" id="usage">
			<div class="rail sub-split">
				<div class="sub-copy">
					<p class="eyebrow">Pricing</p>
					<h2 class="display h2">Usage that grows <em>with the roster.</em></h2>
					<p class="lead">
						Every plan is the full studio. Pay for carousels and client Brands, nothing else. Add a
						Brand when you sign one and drop it when you part ways.
					</p>
					<ul class="sub-list">
						<li>{@render checkIcon()}30 carousels and 1 Brand included</li>
						<li>{@render checkIcon()}+$4 per extra 10 carousels</li>
						<li>{@render checkIcon()}+$10 per extra client Brand</li>
					</ul>
					<a class="text-link" href={pricingPath}>Build your plan {@render arrow()}</a>
				</div>
				<div class="sub-visual">
					<div class="bill" aria-hidden="true">
						<div class="bill-head">
							<span>Example studio</span>
							<span class="bill-chip">Monthly</span>
						</div>
						<div class="bill-row">
							<span class="bill-what">Base plan<small>30 carousels · 1 Brand</small></span>
							<strong>$19</strong>
						</div>
						<div class="bill-row">
							<span class="bill-what">+2 Brands<small>Buji, Northline, Casa Verde</small></span>
							<strong>$20</strong>
						</div>
						<div class="bill-row">
							<span class="bill-what">+30 carousels<small>60 carousels total</small></span>
							<strong>$12</strong>
						</div>
						<div class="bill-total">
							<span>Total</span>
							<strong>$51<small>/mo</small></strong>
						</div>
						<div class="bill-year">
							<span>Yearly</span>
							<span><strong>$510</strong> a year · two months free</span>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="band">
			<div class="rail wrap">
				<div class="section-head center">
					<p class="eyebrow">From the studio floor</p>
					<h2 class="display h2">Less admin. <em>More clients.</em></h2>
					<p class="lead">Two teams who stopped passing carousels around in folders.</p>
				</div>
				<QuoteGrid quotes={[quotes[1], quotes[2]]} />
			</div>
		</section>

		<section class="wrap" id="start">
			<div class="rail">
				<div class="sub-final">
					<p class="eyebrow on-dark">14 days free</p>
					<h2 class="display h2">Add the next client. <em>Not the next tool.</em></h2>
					<p>
						Bring your roster. We will set up the Brands with you and walk the review flow on a live
						carousel.
					</p>
					<div class="sub-actions">
						<a class="pill pill-accent pill-lg" href="https://easysociable.com/contact">
							Talk to us
							{@render arrow()}
						</a>
						<a class="pill pill-outline-dark pill-lg" href="https://easysociable.com/auth/signup">
							Start the trial
						</a>
					</div>
					<p class="sub-final-note">Usage scales with the roster. Cancel anytime.</p>
				</div>
			</div>
		</section>
	</main>

	<SubpageFooter />
</div>

<style>
	.roster {
		width: min(100%, 460px);
		margin-inline: auto;
		padding: clamp(18px, 2.2vw, 24px);
		border-radius: 30px;
		background: var(--g100);
	}

	.roster-head {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 12px;
	}

	.roster-label {
		color: var(--g500);
		font-size: 9.5px;
		font-weight: 700;
		letter-spacing: 0.16em;
		text-transform: uppercase;
	}

	.roster-title {
		margin-top: 4px;
		font-family: Fraunces, 'Iowan Old Style', Georgia, serif;
		font-size: clamp(20px, 2vw, 24px);
		font-weight: 550;
		letter-spacing: -0.03em;
		line-height: 1.1;
	}

	.roster-chip {
		flex: none;
		padding: 5px 9px;
		border-radius: 999px;
		background: var(--roast-accent-soft);
		color: var(--roast-accent-ink);
		font-size: 9px;
		font-weight: 700;
		white-space: nowrap;
	}

	.roster-list {
		display: grid;
		gap: 6px;
		margin: 20px 0 0;
		padding: 0;
		list-style: none;
	}

	.roster-row {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 9px 10px;
		border-radius: 14px;
		background: var(--g50);
	}

	.roster-row.active {
		background: var(--roast-accent-soft);
	}

	.roster-avatar {
		display: grid;
		flex: none;
		place-items: center;
		width: 30px;
		height: 30px;
		border-radius: 10px;
		background: var(--g150);
		color: var(--g700);
		font-size: 11px;
		font-weight: 700;
	}

	.roster-row.active .roster-avatar {
		background: var(--roast-accent);
		color: #3d2c00;
	}

	.roster-name {
		flex: 1;
		font-size: 12.5px;
		font-weight: 650;
		letter-spacing: -0.01em;
		line-height: 1.2;
	}

	.roster-name small {
		display: block;
		margin-top: 2px;
		color: var(--g500);
		font-size: 10px;
		font-weight: 500;
	}

	.roster-stat {
		color: var(--g500);
		font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
		font-size: 10px;
		font-weight: 600;
	}

	.roster-row.active .roster-stat {
		color: var(--roast-accent-ink);
	}

	.roster-foot {
		margin-top: 18px;
	}

	.roster-bar {
		height: 6px;
		overflow: hidden;
		border-radius: 999px;
		background: var(--g150);
	}

	.roster-bar span {
		display: block;
		width: 70%;
		height: 100%;
		border-radius: inherit;
		background: var(--roast-accent);
	}

	.roster-foot p {
		margin-top: 8px;
		color: var(--g500);
		font-size: 10.5px;
	}

	.bill {
		width: min(100%, 460px);
		margin-inline: auto;
		padding: clamp(20px, 2.6vw, 28px);
		border-radius: 30px;
		background: var(--g100);
	}

	.bill-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		padding-bottom: 16px;
		font-size: 13px;
		font-weight: 650;
		letter-spacing: -0.02em;
	}

	.bill-chip {
		padding: 4px 9px;
		border-radius: 999px;
		background: var(--g150);
		color: var(--g600);
		font-size: 9px;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.bill-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 14px;
		margin-bottom: 6px;
		padding: 10px 12px;
		border-radius: 12px;
		background: var(--g50);
	}

	.bill-what {
		font-size: 12px;
		font-weight: 600;
		line-height: 1.2;
	}

	.bill-what small {
		display: block;
		margin-top: 3px;
		color: var(--g500);
		font-size: 10px;
		font-weight: 500;
	}

	.bill-row strong {
		font-size: 13px;
		font-weight: 650;
	}

	.bill-total {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 14px;
		margin-top: 16px;
		padding-inline: 4px;
	}

	.bill-total > span {
		color: var(--g600);
		font-size: 12px;
		font-weight: 600;
	}

	.bill-total > strong {
		font-family: Fraunces, 'Iowan Old Style', Georgia, serif;
		font-size: 34px;
		font-weight: 550;
		letter-spacing: -0.04em;
		line-height: 1;
	}

	.bill-total small {
		color: var(--g500);
		font-family: Inter, sans-serif;
		font-size: 12px;
		font-weight: 500;
		letter-spacing: 0;
	}

	.bill-year {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		margin-top: 16px;
		padding: 12px 14px;
		border-radius: 14px;
		background: var(--roast-accent-soft);
		color: var(--roast-accent-ink);
		font-size: 11px;
	}

	.bill-year > span:first-child {
		font-weight: 700;
	}

	.bill-year strong {
		font-weight: 750;
	}
</style>
