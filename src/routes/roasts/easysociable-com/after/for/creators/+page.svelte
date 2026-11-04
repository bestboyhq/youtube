<script lang="ts">
	import CarouselSlide from '../../CarouselSlide.svelte';
	import FormulaGrid from '../../FormulaGrid.svelte';
	import QuoteGrid from '../../QuoteGrid.svelte';
	import SubpageFooter from '../../SubpageFooter.svelte';
	import SubpageNav from '../../SubpageNav.svelte';
	import { quotes } from '../../quotes';
	import { slides } from '../../slides';
	import '../../base.css';
	import '../../subpage.css';

	const root = '/roasts/easysociable-com/after';
	const agencyPath = `${root}/for/agencies`;

	const starterPrompt =
		'Use the EasySociable skill to make a carousel from the "The 5-slide teardown" formula for [your idea]. Write the hook, plan the slides, lay them out in my Brand, and open them in Studio for edits.';

	const platforms = [
		{ short: 'IG', name: 'Instagram', size: '1080 × 1350' },
		{ short: 'in', name: 'LinkedIn', size: '1080 × 1080' },
		{ short: 'TT', name: 'TikTok', size: '1080 × 1920' },
		{ short: '@', name: 'Threads', size: '1080 × 1350' },
		{ short: 'X', name: 'X', size: '1080 × 1350' },
		{ short: '红', name: '小红书', size: '1242 × 1660' }
	];

	let copied = $state(false);
	let copyTimer: ReturnType<typeof setTimeout> | undefined;

	async function copy(text: string) {
		if (copyTimer) clearTimeout(copyTimer);
		try {
			if (navigator.clipboard) {
				await navigator.clipboard.writeText(text);
			} else {
				throw new Error('Clipboard unavailable');
			}
		} catch {
			const field = document.createElement('textarea');
			field.value = text;
			field.setAttribute('readonly', '');
			field.style.position = 'fixed';
			field.style.opacity = '0';
			document.body.appendChild(field);
			field.select();
			document.execCommand('copy');
			field.remove();
		}
		copied = true;
		copyTimer = setTimeout(() => (copied = false), 2400);
	}
</script>

<svelte:head>
	<title>EasySociable for creators: post daily without the design sprint</title>
	<meta
		name="description"
		content="One prompt turns an idea into a finished, on-brand carousel for Instagram, LinkedIn, TikTok, Threads, X or 小红书. Edit it in Studio and publish from your phone. 14 days free."
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
		context="For creators"
		links={[
			{ href: '#formats', label: 'Formats' },
			{ href: '#brand', label: 'Your Brand' },
			{ href: '#publish', label: 'Publishing' },
			{ href: agencyPath, label: 'For agencies' }
		]}
		cta={{ href: 'https://easysociable.com/auth/signup', label: 'Start free' }}
	/>

	<main>
		<section class="sub-hero">
			<div class="rail sub-hero-grid">
				<div class="sub-hero-copy">
					<p class="eyebrow">For creators</p>
					<h1 class="display h1">
						Post daily.<br />Skip the <span class="mark">design sprint.</span>
					</h1>
					<p class="lead">
						One prompt turns an idea into a finished, on-brand carousel. Edit it in Studio, then
						publish to Instagram, LinkedIn, TikTok, Threads, X or
						<span class="nowrap">小红书</span> from your phone.
					</p>
					<div class="sub-actions">
						<button
							class="pill pill-accent pill-lg"
							type="button"
							onclick={() => copy(starterPrompt)}
						>
							{copied ? 'Prompt copied' : 'Copy the starter prompt'}
							{@render arrow()}
						</button>
						<a class="pill pill-soft pill-lg" href="#formats">See the formats</a>
					</div>
					<p class="sub-note">
						14 days free. No card. Works with Claude Code, Codex, Cursor and any MCP client.
					</p>
				</div>

				<div class="sub-art">
					<div class="fan" aria-hidden="true">
						<div class="fan-slide fan-left"><CarouselSlide slide={slides[1]} /></div>
						<div class="fan-slide fan-right"><CarouselSlide slide={slides[2]} /></div>
						<div class="fan-slide fan-center"><CarouselSlide slide={slides[0]} /></div>
						<span class="fan-chip">One prompt · six slides</span>
					</div>
				</div>
			</div>
		</section>

		<section class="band" id="formats">
			<div class="rail wrap">
				<div class="section-head center">
					<p class="eyebrow">20 formulas</p>
					<h2 class="display h2">Steal the shape. <em>Not the words.</em></h2>
					<p class="lead">
						Each formula is a carousel that already earned its saves, broken into hook, pacing and
						structure. Your agent fills it with your idea.
					</p>
				</div>
				<FormulaGrid />
			</div>
		</section>

		<section class="wrap" id="brand">
			<div class="rail sub-split">
				<div class="sub-copy">
					<p class="eyebrow">Your Brand</p>
					<h2 class="display h2">One Brand. <em>Every size.</em></h2>
					<p class="lead">
						Set colors, fonts and logo once. Every carousel arrives already on-brand and already
						sized for the feed it is going to.
					</p>
					<ul class="sub-list">
						<li>{@render checkIcon()}One Brand across every format</li>
						<li>{@render checkIcon()}Type and color never drift</li>
						<li>{@render checkIcon()}Resize without rebuilding a slide</li>
					</ul>
				</div>
				<div class="sub-visual">
					<div class="kit" aria-hidden="true">
						<div class="kit-head">
							<div>
								<p class="kit-label">Brand kit</p>
								<p class="kit-name">Buji</p>
							</div>
							<div class="kit-swatches"><i></i><i></i><i></i><i class="accent"></i></div>
						</div>
						<div class="rack">
							<figure class="rack-item">
								<div class="rack-frame r45">
									<span class="rack-aa">Aa</span>
									<i></i><i></i><i class="acc"></i>
									<span class="rack-img"></span>
									<span class="rack-foot">swipe →</span>
								</div>
								<figcaption>Instagram <span>4:5</span></figcaption>
							</figure>
							<figure class="rack-item">
								<div class="rack-frame r11">
									<span class="rack-aa">Aa</span>
									<i></i><i></i><i class="acc"></i>
									<span class="rack-img"></span>
									<span class="rack-foot">swipe →</span>
								</div>
								<figcaption>LinkedIn <span>1:1</span></figcaption>
							</figure>
							<figure class="rack-item">
								<div class="rack-frame r916">
									<span class="rack-aa">Aa</span>
									<i></i><i></i><i class="acc"></i>
									<span class="rack-img"></span>
									<span class="rack-foot">swipe →</span>
								</div>
								<figcaption>TikTok <span>9:16</span></figcaption>
							</figure>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="wrap" id="publish">
			<div class="rail sub-split reverse">
				<div class="sub-copy">
					<p class="eyebrow">Publishing</p>
					<h2 class="display h2">Finish once. <em>Post everywhere.</em></h2>
					<p class="lead">
						Tap publish in Studio and pick the feeds. EasySociable exports each size and posts from
						your phone, so the carousel never gets rebuilt for a second platform.
					</p>
					<ul class="sub-list">
						<li>
							{@render checkIcon()}Instagram, LinkedIn, TikTok, Threads, X and
							<span class="nowrap">小红书</span>
						</li>
						<li>{@render checkIcon()}The right size for every feed, automatically</li>
						<li>{@render checkIcon()}Publish now or schedule for later</li>
					</ul>
				</div>
				<div class="sub-visual">
					<div class="publish-sheet" aria-hidden="true">
						<div class="publish-top">
							<span class="publish-title">Publish carousel</span>
							<span class="publish-count">6 platforms</span>
						</div>
						<ul class="publish-list">
							{#each platforms as platform}
								<li>
									<span class="p-avatar">{platform.short}</span>
									<span class="p-name">{platform.name}<small>{platform.size}</small></span>
									<span class="p-check">✓</span>
								</li>
							{/each}
						</ul>
						<div class="publish-btn">Publish to 6 platforms</div>
						<p class="publish-note">Scheduled for 9:00 AM</p>
					</div>
				</div>
			</div>
		</section>

		<section class="band">
			<div class="rail wrap">
				<div class="section-head center">
					<p class="eyebrow">Early access</p>
					<h2 class="display h2">A Sunday <em>back.</em></h2>
					<p class="lead">
						Maya makes carousels for 84k followers. This is what changed when she stopped starting
						from a blank page.
					</p>
				</div>
				<QuoteGrid quotes={[quotes[0]]} />
			</div>
		</section>

		<section class="wrap" id="start">
			<div class="rail">
				<div class="sub-final">
					<p class="eyebrow on-dark">14 days free</p>
					<h2 class="display h2">Your next carousel is <em>one prompt away.</em></h2>
					<p>
						Copy the starter prompt into Claude Code, Codex or Cursor. Your agent installs the
						skill, applies your Brand and opens the carousel in Studio.
					</p>
					<div class="sub-actions">
						<button
							class="pill pill-accent pill-lg"
							type="button"
							onclick={() => copy(starterPrompt)}
						>
							{copied ? 'Prompt copied' : 'Copy the prompt'}
							{@render arrow()}
						</button>
						<a class="pill pill-outline-dark pill-lg" href="https://easysociable.com/auth/signup">
							Start in the browser
						</a>
					</div>
					<p class="sub-final-note">No card. Every carousel you make is yours.</p>
				</div>
			</div>
		</section>
	</main>

	<SubpageFooter />
</div>

<style>
	.fan {
		position: relative;
		display: grid;
		place-items: center;
		min-height: clamp(480px, 42vw, 560px);
	}

	.fan::before {
		content: '';
		position: absolute;
		width: min(88%, 430px);
		aspect-ratio: 1;
		border-radius: 50%;
		background: radial-gradient(
			circle at 50% 45%,
			var(--roast-accent-soft),
			rgb(251 243 216 / 0) 70%
		);
	}

	.fan-slide {
		position: absolute;
		top: 50%;
		left: 50%;
		width: min(64%, 300px);
		translate: -50% -50%;
		border-radius: 18px;
		box-shadow: 0 30px 60px -42px rgb(61 44 0 / 0.55);
	}

	.fan-left {
		transform: translateX(-27%) rotate(-7deg) scale(0.92);
	}

	.fan-right {
		transform: translateX(27%) rotate(7deg) scale(0.92);
	}

	.fan-center {
		z-index: 2;
	}

	.fan-chip {
		position: absolute;
		z-index: 3;
		bottom: 7%;
		left: 50%;
		display: inline-flex;
		align-items: center;
		gap: 7px;
		padding: 8px 13px;
		border-radius: 999px;
		background: var(--g50);
		color: var(--g700);
		font-size: 11.5px;
		font-weight: 600;
		white-space: nowrap;
		translate: -50% 0;
		box-shadow: 0 14px 30px -22px rgb(27 21 20 / 0.45);
	}

	.fan-chip::before {
		content: '';
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: var(--roast-accent);
	}

	.kit {
		padding: clamp(20px, 2.4vw, 28px);
		border-radius: 30px;
		background: var(--g100);
	}

	.kit-head {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 20px;
	}

	.kit-label {
		color: var(--g500);
		font-size: 9.5px;
		font-weight: 700;
		letter-spacing: 0.16em;
		text-transform: uppercase;
	}

	.kit-name {
		margin-top: 4px;
		font-family: Fraunces, 'Iowan Old Style', Georgia, serif;
		font-size: 24px;
		font-weight: 550;
		letter-spacing: -0.03em;
		line-height: 1.1;
	}

	.kit-swatches {
		display: flex;
		gap: 6px;
		padding-top: 4px;
	}

	.kit-swatches i {
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: var(--g800);
	}

	.kit-swatches i:nth-child(2) {
		background: var(--g400);
	}

	.kit-swatches i:nth-child(3) {
		background: var(--g200);
	}

	.kit-swatches i.accent {
		background: var(--roast-accent);
	}

	.rack {
		display: flex;
		align-items: flex-end;
		justify-content: center;
		gap: clamp(10px, 1.6vw, 16px);
		margin-top: clamp(24px, 3vw, 34px);
	}

	.rack-item {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin: 0;
	}

	.rack-item:first-child {
		width: 36%;
	}

	.rack-item:nth-child(2) {
		width: 32%;
	}

	.rack-item:nth-child(3) {
		width: 23%;
	}

	.rack-frame {
		display: flex;
		flex-direction: column;
		gap: 5px;
		padding: 10px 9px;
		border-radius: 10px;
		background: var(--g50);
		box-shadow: 0 14px 30px -24px rgb(27 21 20 / 0.5);
	}

	.r45 {
		aspect-ratio: 4 / 5;
	}

	.r11 {
		aspect-ratio: 1 / 1;
	}

	.r916 {
		aspect-ratio: 9 / 16;
	}

	.rack-aa {
		font-family: Fraunces, 'Iowan Old Style', Georgia, serif;
		font-size: clamp(14px, 1.5vw, 19px);
		font-weight: 550;
		letter-spacing: -0.04em;
		line-height: 1;
	}

	.rack-frame i {
		display: block;
		width: 100%;
		height: 3px;
		border-radius: 2px;
		background: var(--g200);
	}

	.rack-frame i.acc {
		width: 55%;
		background: var(--roast-accent);
	}

	.rack-img {
		flex: 1;
		margin-top: 5px;
		border-radius: 6px;
		background: var(--g100);
	}

	.rack-foot {
		margin-top: auto;
		color: var(--g400);
		font-size: 5.5px;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.rack-item figcaption {
		display: flex;
		justify-content: space-between;
		gap: 6px;
		color: var(--g600);
		font-size: 9.5px;
		font-weight: 600;
	}

	.rack-item figcaption span {
		color: var(--g400);
		font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
	}

	.publish-sheet {
		width: min(100%, 440px);
		margin-inline: auto;
		padding: clamp(18px, 2.4vw, 24px);
		border-radius: 28px;
		background: var(--g900);
		color: var(--g50);
		box-shadow: 0 34px 64px -48px rgb(27 21 20 / 0.7);
	}

	.publish-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		padding-bottom: 14px;
	}

	.publish-title {
		font-size: 14px;
		font-weight: 650;
		letter-spacing: -0.02em;
	}

	.publish-count {
		padding: 4px 9px;
		border-radius: 999px;
		background: rgb(255 255 255 / 0.1);
		color: var(--g300);
		font-size: 9px;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.publish-list {
		display: grid;
		gap: 5px;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.publish-list li {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 8px 10px;
		border-radius: 12px;
		background: rgb(255 255 255 / 0.06);
	}

	.p-avatar {
		display: grid;
		flex: none;
		place-items: center;
		width: 24px;
		height: 24px;
		border-radius: 8px;
		background: rgb(255 255 255 / 0.1);
		color: var(--g100);
		font-size: 8px;
		font-weight: 700;
	}

	.p-name {
		flex: 1;
		font-size: 11.5px;
		font-weight: 600;
		line-height: 1.2;
	}

	.p-name small {
		display: block;
		margin-top: 2px;
		color: var(--g500);
		font-size: 9px;
		font-weight: 500;
	}

	.p-check {
		display: grid;
		flex: none;
		place-items: center;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: var(--roast-accent);
		color: #3d2c00;
		font-size: 9px;
		font-weight: 800;
	}

	.publish-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 38px;
		margin-top: 12px;
		border-radius: 11px;
		background: var(--roast-accent);
		color: #3d2c00;
		font-size: 11.5px;
		font-weight: 700;
	}

	.publish-note {
		margin-top: 9px;
		color: var(--g500);
		font-size: 9.5px;
		text-align: center;
	}

	@media (max-width: 900px) {
		.fan {
			width: min(100%, 440px);
			min-height: 500px;
			margin-inline: auto;
		}
	}

	@media (max-width: 620px) {
		.fan {
			min-height: 380px;
		}

		.fan-chip {
			bottom: 2%;
		}
	}
</style>
