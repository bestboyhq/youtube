<script lang="ts">
	import CarouselSlide from './CarouselSlide.svelte';
	import QuoteGrid from './QuoteGrid.svelte';
	import { quotes } from './quotes';
	import { slides } from './slides';
	import './base.css';

	const root = '/roasts/easysociable-com/after';
	const creatorPath = `${root}/for/creators`;
	const agencyPath = `${root}/for/agencies`;

	const faqs = [
		{
			q: 'Do I need an AI agent to use EasySociable?',
			a: 'No. You can build a carousel in the browser and edit every slide in Studio. An agent only makes the first draft faster.'
		},
		{
			q: 'Which agents work with it?',
			a: 'Claude Code, Codex and Cursor work out of the box through the skill, the CLI or the MCP server. Any MCP client can connect.'
		},
		{
			q: 'Which platforms can I publish to?',
			a: 'Instagram, LinkedIn, TikTok, Threads, X and 小红书. Every carousel is exported at the right size for each one.'
		},
		{
			q: 'Can my client review a carousel without an account?',
			a: 'Yes. A share link opens in any browser. You choose whether they can view, edit or publish.'
		},
		{
			q: 'Can I manage more than one Brand?',
			a: 'Yes. Add every client or side project as its own Brand and switch a carousel between them in one click.'
		},
		{
			q: 'What counts as one carousel?',
			a: 'One post, up to 20 slides, published to any number of platforms.'
		},
		{
			q: 'Is there a watermark?',
			a: 'No. Every plan exports clean files and clean share links.'
		}
	];

	let activeSlide = $state(0);
	let menuOpen = $state(false);
	let buildPhase = $state<'building' | 'ready' | 'leaving'>('building');
	let buildStatus = $state('reading the formula');
	let typedPrompt = $state('');
	let carousels = $state(30);
	let brandsCount = $state(1);
	let copied = $state<string | null>(null);
	let copyTimer: ReturnType<typeof setTimeout> | undefined;

	const basePrice = 19;
	const includedCarousels = 30;
	const includedBrands = 1;
	const carouselStep = 10;
	const carouselPrice = 4;
	const brandPrice = 10;

	const monthlyPrice = $derived(
		basePrice +
			Math.max(0, Math.ceil((carousels - includedCarousels) / carouselStep)) * carouselPrice +
			Math.max(0, brandsCount - includedBrands) * brandPrice
	);
	const yearlyPrice = $derived(monthlyPrice * 10);
	const yearlyMonthly = $derived(Math.round(yearlyPrice / 12));
	const yearlySaving = $derived(monthlyPrice * 12 - yearlyPrice);

	const agentPrompt =
		'Use the EasySociable skill to make a carousel with the "The 5-slide teardown" formula for [your idea]. Write the hook, plan the slides, lay them out in my Brand, and open them in Studio for edits.';
	const buildPrompt = 'make a carousel from “The 5-slide teardown”';

	async function copy(text: string, key: string) {
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
		copied = key;
		copyTimer = setTimeout(() => (copied = null), 2400);
	}

	function closeMenu() {
		menuOpen = false;
	}

	$effect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			typedPrompt = buildPrompt;
			buildPhase = 'ready';
			buildStatus = 'ready to edit';
			return;
		}

		let disposed = false;
		const timers: ReturnType<typeof setTimeout>[] = [];
		const later = (fn: () => void, ms: number) => {
			timers.push(
				setTimeout(() => {
					if (!disposed) fn();
				}, ms)
			);
		};

		let typed = 0;
		const type = () => {
			typedPrompt = buildPrompt.slice(0, typed);
			typed += 1;
			if (typed <= buildPrompt.length) later(type, 24);
		};

		const build = () => {
			buildPhase = 'building';
			buildStatus = `writing slide ${activeSlide + 1} of 6`;
			later(() => (buildStatus = 'applying the Brand'), 520);
			later(() => {
				buildStatus = 'ready to edit';
				buildPhase = 'ready';
			}, 1250);
			later(() => {
				buildStatus = 'next slide';
				buildPhase = 'leaving';
			}, 5100);
			later(() => {
				activeSlide = (activeSlide + 1) % slides.length;
				build();
			}, 5680);
		};

		later(type, 500);
		later(build, 900);

		return () => {
			disposed = true;
			timers.forEach((timer) => clearTimeout(timer));
		};
	});
</script>

<svelte:head>
	<title>EasySociable: carousels that stop the scroll</title>
	<meta
		name="description"
		content="One prompt turns a proven viral format into a finished, on-brand carousel. Edit it in Studio and publish to Instagram, LinkedIn, TikTok, Threads, X or 小红书 from your phone."
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

{#snippet logoMark()}
	<svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
		<rect
			x="2.4"
			y="3.6"
			width="8.2"
			height="10"
			rx="2"
			fill="currentColor"
			opacity=".38"
			transform="rotate(-12 6.5 8.6)"
		/>
		<rect x="5.6" y="2.4" width="8.2" height="10.2" rx="2" fill="currentColor" />
	</svg>
{/snippet}

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

{#snippet copyIcon()}
	<svg class="icon" width="13" height="13" viewBox="0 0 14 14" aria-hidden="true">
		<rect x="4.8" y="4.8" width="6.6" height="7" rx="1.6" />
		<path
			d="M9.2 4.8V3.4a1.6 1.6 0 0 0-1.6-1.6H3.4a1.6 1.6 0 0 0-1.6 1.6v5.2a1.6 1.6 0 0 0 1.6 1.6h1.4"
		/>
	</svg>
{/snippet}

{#snippet crossIcon()}
	<svg class="icon" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
		<path d="M3.2 3.2 8.8 8.8M8.8 3.2 3.2 8.8" />
	</svg>
{/snippet}

<div class="page">
	<div class="nav-wrap">
		<nav class="nav" aria-label="Main">
			<a class="brand" href="https://easysociable.com/">
				<span class="brand-mark">{@render logoMark()}</span>
				<span class="brand-name">EasySociable</span>
			</a>
			<div class="nav-links">
				<a href="#how">How it works</a>
				<a href="#for">Who it's for</a>
				<a href="#pricing">Pricing</a>
				<a href="https://easysociable.com/docs">Docs</a>
			</div>
			<div class="nav-actions">
				<a class="signin" href="https://easysociable.com/auth/login">Sign in</a>
				<a class="pill pill-dark pill-sm" href="https://easysociable.com/auth/signup">Start free</a>
			</div>
			<button
				class="nav-toggle"
				type="button"
				aria-label="Menu"
				aria-expanded={menuOpen}
				aria-controls="mobile-nav"
				onclick={() => (menuOpen = !menuOpen)}
			>
				<span></span>
				<span></span>
			</button>
		</nav>
		{#if menuOpen}
			<div class="mobile-menu" id="mobile-nav">
				<a href="#how" onclick={closeMenu}>How it works</a>
				<a href="#for" onclick={closeMenu}>Who it's for</a>
				<a href="#pricing" onclick={closeMenu}>Pricing</a>
				<a href="https://easysociable.com/docs" onclick={closeMenu}>Docs</a>
				<a class="pill pill-dark" href="https://easysociable.com/auth/signup" onclick={closeMenu}>
					Start free
				</a>
			</div>
		{/if}
	</div>

	<main>
		<section class="hero-section">
			<div class="rail hero-grid">
				<div class="hero-copy">
					<p class="eyebrow">Agent-native carousel studio</p>
					<h1 class="display h1">
						Make carousels<br />that stop<br /><span class="mark">the scroll.</span>
					</h1>
					<p class="lead hero-lead">
						One prompt turns a proven viral format into a finished,
						<span class="nowrap">on-brand</span> carousel for creators and the teams behind them.
						Edit every word in Studio, then publish to Instagram, LinkedIn, TikTok, Threads, X or
						<span class="nowrap">小红书</span> from your phone.
					</p>
					<div class="hero-actions">
						<button
							class="pill pill-accent pill-lg"
							type="button"
							onclick={() => copy(agentPrompt, 'hero')}
						>
							{copied === 'hero' ? 'Prompt copied' : 'Make my first carousel'}
							{@render arrow()}
						</button>
						<a class="pill pill-soft pill-lg" href="{creatorPath}#formats">See viral formulas</a>
					</div>
					<p class="hero-note">
						Copies a prompt for Claude Code, Codex or Cursor. Your agent installs the skill, signs
						you in and builds a carousel you can edit. 14 days free, no card.
					</p>
					<div class="platforms">
						<span class="platforms-label">Publishes to</span>
						<span>Instagram</span>
						<span>LinkedIn</span>
						<span>TikTok</span>
						<span>Threads</span>
						<span>X</span>
						<span>小红书</span>
					</div>
				</div>

				<div
					class="build"
					class:building={buildPhase === 'building'}
					class:ready={buildPhase === 'ready'}
					class:leaving={buildPhase === 'leaving'}
				>
					<div class="build-glow" aria-hidden="true"></div>
					<div class="build-prompt" aria-hidden="true">
						<span class="chev">›</span>
						<span>{typedPrompt}</span>
						<span class="build-caret"></span>
					</div>
					<div class="build-card">
						<span class="crop tl" aria-hidden="true"></span>
						<span class="crop tr" aria-hidden="true"></span>
						<span class="crop bl" aria-hidden="true"></span>
						<span class="crop br" aria-hidden="true"></span>
						{#key activeSlide}
							<div class="build-sheet">
								<CarouselSlide slide={slides[activeSlide]} />
							</div>
						{/key}
						<span class="build-size" aria-hidden="true">4:5 · 1080 × 1350</span>
					</div>
					<div class="build-status" aria-hidden="true">
						<span class="build-dot"></span>
						<span>{buildStatus}</span>
					</div>
				</div>
			</div>
		</section>

		<section class="band" id="problem">
			<div class="rail wrap">
				<div class="section-head">
					<p class="eyebrow">The real problem</p>
					<h2 class="display h2">
						The idea is easy. <em>The carousel is not.</em>
					</h2>
					<p class="lead">
						A carousel that gets read needs a hook, a pace, a layout and a brand. That is a writer,
						a designer and an afternoon per post. Most ideas never ship. The ones that do look like
						everyone else's.
					</p>
				</div>
				<div class="compare">
					<div class="compare-card old">
						<p class="compare-label">Without a system</p>
						<h3>A blank page for every idea.</h3>
						<ul class="compare-list">
							<li>
								<span class="mark-icon">{@render crossIcon()}</span>A blank page for every hook
							</li>
							<li>
								<span class="mark-icon">{@render crossIcon()}</span>Every slide laid out by hand
							</li>
							<li>
								<span class="mark-icon">{@render crossIcon()}</span>A separate file for every
								platform
							</li>
							<li>
								<span class="mark-icon">{@render crossIcon()}</span>One typo costs an afternoon
							</li>
						</ul>
					</div>
					<div class="compare-card new">
						<p class="compare-label">With EasySociable</p>
						<h3>A format that holds attention.</h3>
						<ul class="compare-list">
							<li>
								<span class="mark-icon">{@render checkIcon()}</span>Start from a format that already
								holds attention
							</li>
							<li>
								<span class="mark-icon">{@render checkIcon()}</span>Your agent writes and lays out
								every slide
							</li>
							<li>
								<span class="mark-icon">{@render checkIcon()}</span>Fix any word in Studio without
								breaking the layout
							</li>
							<li>
								<span class="mark-icon">{@render checkIcon()}</span>Publish to every platform from
								your phone
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<section class="wrap" id="how">
			<div class="rail">
				<div class="section-head">
					<p class="eyebrow">How it works</p>
					<h2 class="display h2">One prompt.<br /><em>A carousel ready to post.</em></h2>
					<p class="lead">
						Pick a format that already earns attention. Your agent does the writing and layout. You
						make the final call in Studio.
					</p>
				</div>
				<div class="how-steps">
					<article class="how-step">
						<span class="how-step-num">01</span>
						<h3>Pick a format</h3>
						<p>
							A real carousel that went viral, broken down page by page: hook, pacing, structure.
						</p>
					</article>
					<article class="how-step">
						<span class="how-step-num">02</span>
						<h3>Ask your agent</h3>
						<p>
							Paste the prompt into Claude Code, Codex or Cursor. The skill writes and lays out
							every slide in your Brand.
						</p>
					</article>
					<article class="how-step">
						<span class="how-step-num">03</span>
						<h3>Make it yours</h3>
						<p>Double-click any word in Studio. The layout stays locked, so edits never cascade.</p>
					</article>
					<article class="how-step">
						<span class="how-step-num">04</span>
						<h3>Publish anywhere</h3>
						<p>
							Send every page to Instagram, LinkedIn, TikTok, Threads, X or
							<span class="nowrap">小红书</span> from your phone.
						</p>
					</article>
				</div>

				<div class="agent-card">
					<div class="agent-copy">
						<p class="eyebrow on-dark">Agent-native</p>
						<h3>It lives where your agent works.</h3>
						<p>
							EasySociable ships a skill, a CLI and an MCP server. Your agent can create, edit and
							publish carousels inside the workflow you already have, instead of opening another
							tab.
						</p>
						<div class="agent-tags">
							<span>Claude Code</span>
							<span>Codex</span>
							<span>Cursor</span>
							<span>MCP</span>
						</div>
						<a class="text-link on-dark" href="https://easysociable.com/docs">
							Read the docs {@render arrow()}
						</a>
					</div>
					<div class="agent-terminal" aria-hidden="true">
						<div class="terminal-bar">
							<span class="tdot"></span><span class="tdot"></span><span class="tdot"></span>
							<span>agent</span>
						</div>
						<div class="terminal-body">
							<p>
								<span class="t-prompt">›</span> make a carousel for
								<span class="t-accent">@buji</span> from
								<span class="t-accent">viral-formula-04</span>
							</p>
							<p class="t-dim">mcp easysociable: create_carousel</p>
							<p><span class="t-check">✓</span> 7 slides · 1080×1350 · Instagram</p>
							<p class="t-dim">edit_slide 3 "The fix"</p>
							<p><span class="t-check">✓</span> brand buji applied</p>
							<p><span class="t-check">✓</span> share link created</p>
							<p class="t-cursor">▍</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Placeholder social proof. Replace with real customer quotes and permission before publishing. -->
		<section class="band" id="proof">
			<div class="rail wrap">
				<div class="section-head center">
					<p class="eyebrow">Early access</p>
					<h2 class="display h2">Creators ship faster. <em>Agencies ship more.</em></h2>
					<p class="lead">
						The first teams using EasySociable stopped treating carousels like a design project.
					</p>
				</div>
				<QuoteGrid {quotes} />
			</div>
		</section>

		<section class="wrap" id="for">
			<div class="rail">
				<div class="section-head">
					<p class="eyebrow">Start here</p>
					<h2 class="display h2">Who is doing <em>the posting?</em></h2>
					<p class="lead">
						The studio is the same. The day around it is not. Pick the one that sounds like your
						week.
					</p>
				</div>
				<div class="personas">
					<a class="persona creator" href={creatorPath}>
						<span class="persona-tag">For creators</span>
						<h3>I post every day.</h3>
						<p class="persona-lead">
							Proven formats, one Brand, and a carousel out the door before the coffee gets cold.
						</p>
						<ul>
							<li>{@render checkIcon()}20 formats that already travel</li>
							<li>{@render checkIcon()}One Brand, every platform size</li>
							<li>{@render checkIcon()}Publish from your phone in two taps</li>
						</ul>
						<span class="door-arrow">See the creator path {@render arrow()}</span>
					</a>
					<a class="persona agency" href={agencyPath}>
						<span class="persona-tag">For agencies</span>
						<h3>I run client accounts.</h3>
						<p class="persona-lead">
							Every client Brand in one seat, review links clients can open, and usage that grows
							with the roster.
						</p>
						<ul>
							<li>{@render checkIcon()}Every client Brand in one studio</li>
							<li>{@render checkIcon()}Review links, not PDFs</li>
							<li>{@render checkIcon()}Usage that scales with the roster</li>
						</ul>
						<span class="door-arrow">See the agency path {@render arrow()}</span>
					</a>
				</div>
				<p class="persona-note">
					Not sure where you fit? Start the trial. Add Brands when the roster grows.
				</p>
			</div>
		</section>

		<section class="wrap" id="pricing">
			<div class="rail">
				<div class="section-head center">
					<p class="eyebrow">Pricing</p>
					<h2 class="display h2">One plan. <em>Priced by output.</em></h2>
					<p class="lead">
						Set how much you post. Pay for that. Every plan includes the full studio.
					</p>
				</div>

				<div class="usage">
					<div class="usage-row">
						<div class="usage-label">
							<label for="carousels">Carousels per month</label>
							<output for="carousels">{carousels}</output>
						</div>
						<input
							id="carousels"
							type="range"
							min="30"
							max="200"
							step="10"
							bind:value={carousels}
							style:--fill="{((carousels - 30) / 170) * 100}%"
						/>
						<div class="usage-scale" aria-hidden="true"><span>30</span><span>200</span></div>
					</div>
					<div class="usage-row">
						<div class="usage-label">
							<label for="brands">Brands</label>
							<output for="brands">{brandsCount}</output>
						</div>
						<input
							id="brands"
							type="range"
							min="1"
							max="10"
							step="1"
							bind:value={brandsCount}
							style:--fill="{((brandsCount - 1) / 9) * 100}%"
						/>
						<div class="usage-scale" aria-hidden="true"><span>1</span><span>10</span></div>
					</div>
					<p class="usage-note">
						Both sliders share one price. Move either one and both cards update.
					</p>
				</div>

				<div class="price-grid">
					<article class="price-card">
						<div class="price-tag-row"><span class="price-tag">Monthly</span></div>
						<p class="price">
							<span class="currency">$</span>{monthlyPrice}<span class="per">/mo</span>
						</p>
						<p class="price-sub">Billed monthly. Cancel anytime.</p>
						<ul class="price-list">
							<li>{@render checkIcon()}{carousels} carousels / month</li>
							<li>{@render checkIcon()}{brandsCount} Brand{brandsCount > 1 ? 's' : ''}</li>
							<li>{@render checkIcon()}Up to 20 slides each</li>
							<li>{@render checkIcon()}Every platform size</li>
							<li>{@render checkIcon()}Share and review links</li>
							<li>{@render checkIcon()}No watermark</li>
						</ul>
						<a class="pill pill-ghost" href="https://easysociable.com/auth/signup">
							Start 14-day trial {@render arrow()}
						</a>
						<p class="price-foot">No card. Cancel anytime.</p>
					</article>

					<article class="price-card yearly">
						<div class="price-tag-row">
							<span class="price-tag">Yearly</span>
							<span class="save-badge">2 months free</span>
						</div>
						<p class="price">
							<span class="currency">$</span>{yearlyMonthly}<span class="per">/mo</span>
						</p>
						<p class="price-sub">Billed ${yearlyPrice} once a year. You save ${yearlySaving}.</p>
						<ul class="price-list">
							<li>{@render checkIcon()}{carousels} carousels / month</li>
							<li>{@render checkIcon()}{brandsCount} Brand{brandsCount > 1 ? 's' : ''}</li>
							<li>{@render checkIcon()}Up to 20 slides each</li>
							<li>{@render checkIcon()}Every platform size</li>
							<li>{@render checkIcon()}Share and review links</li>
							<li>{@render checkIcon()}No watermark</li>
						</ul>
						<a class="pill pill-dark" href="https://easysociable.com/auth/signup">
							Start yearly {@render arrow()}
						</a>
						<p class="price-foot">Two months on us.</p>
					</article>
				</div>
				<p class="pricing-note">
					14 days free. Every carousel you make is yours. Need more than 200 a month?
					<a href="https://easysociable.com/contact">Talk to us.</a>
				</p>
			</div>
		</section>

		<section class="band" id="faq">
			<div class="rail wrap">
				<div class="faq-layout">
					<div class="faq-head">
						<p class="eyebrow">FAQ</p>
						<h2 class="display h2">Questions, answered.</h2>
						<p class="lead">Still deciding? The trial answers most of them. Or ask us directly.</p>
						<a class="text-link" href="https://easysociable.com/contact">
							Talk to us {@render arrow()}
						</a>
					</div>
					<div class="faq-list">
						{#each faqs as item}
							<details class="faq-item">
								<summary>
									<span>{item.q}</span>
									<span class="faq-icon" aria-hidden="true"></span>
								</summary>
								<p class="faq-answer">{item.a}</p>
							</details>
						{/each}
					</div>
				</div>
			</div>
		</section>

		<section class="wrap" id="start">
			<div class="rail">
				<div class="final">
					<div class="final-copy">
						<p class="eyebrow on-dark">14 days free</p>
						<h2 class="display h2">Your next carousel is <em>one prompt away.</em></h2>
						<p>
							Paste the prompt into your agent, or make your first one in the browser. No card.
							Every carousel you make is yours.
						</p>
						<div class="final-actions">
							<button
								class="pill pill-accent pill-lg"
								type="button"
								onclick={() => copy(agentPrompt, 'cta')}
							>
								{copied === 'cta' ? 'Prompt copied' : 'Copy the prompt'}
								{@render arrow()}
							</button>
							<a class="pill pill-outline-dark pill-lg" href="https://easysociable.com/auth/signup">
								Sign up in the browser
							</a>
						</div>
						<p class="final-note">Works with Claude Code, Codex, Cursor and any MCP client.</p>
					</div>
					<div class="final-art" aria-hidden="true">
						<div class="final-slide fs1"><CarouselSlide slide={slides[3]} /></div>
						<div class="final-slide fs2"><CarouselSlide slide={slides[0]} /></div>
						<div class="final-slide fs3"><CarouselSlide slide={slides[4]} /></div>
					</div>
				</div>
			</div>
		</section>
	</main>

	<footer class="footer-band">
		<div class="rail footer-inner">
			<div class="footer-top">
				<div class="footer-brand">
					<a class="brand" href="https://easysociable.com/">
						<span class="brand-mark">{@render logoMark()}</span>
						<span class="brand-name">EasySociable</span>
					</a>
					<p>Agent-native carousels for creators and the teams behind them.</p>
					<a class="text-link" href="https://easysociable.com/llms.txt">
						llms.txt for agents {@render arrow()}
					</a>
				</div>
				<nav class="footer-cols" aria-label="Footer">
					<div>
						<p class="footer-heading">Product</p>
						<a href="#how">How it works</a>
						<a href="#for">Who it's for</a>
						<a href={creatorPath}>For creators</a>
						<a href={agencyPath}>For agencies</a>
						<a href="#pricing">Pricing</a>
					</div>
					<div>
						<p class="footer-heading">Platforms</p>
						<a href="https://easysociable.com/templates/instagram">Instagram</a>
						<a href="https://easysociable.com/templates/linkedin">LinkedIn</a>
						<a href="https://easysociable.com/templates/tiktok">TikTok</a>
						<a href="https://easysociable.com/templates/threads">Threads</a>
						<a href="https://easysociable.com/templates/xiaohongshu">小红书</a>
					</div>
					<div>
						<p class="footer-heading">Resources</p>
						<a href="https://easysociable.com/docs">Docs</a>
						<a href="https://easysociable.com/guides/install-easysociable-skill">Agent skill</a>
						<a href="https://easysociable.com/guides">Guides</a>
						<a href="https://easysociable.com/tools">Free tools</a>
						<a href="https://easysociable.com/llms.txt">llms.txt</a>
					</div>
					<div>
						<p class="footer-heading">Company</p>
						<a href="https://easysociable.com/contact">Contact</a>
						<a href="https://easysociable.com/support">Support</a>
						<a href="https://easysociable.com/privacy">Privacy</a>
						<a href="https://easysociable.com/terms">Terms</a>
						<a href="https://easysociable.com/refunds">Refunds</a>
					</div>
				</nav>
			</div>
			<div class="footer-bottom">
				<p>© 2026 EasySociable. All rights reserved.</p>
				<p>Made for agents. Finished by you.</p>
			</div>
		</div>
	</footer>
</div>

<style>
	/* Navigation */
	.nav-wrap {
		position: fixed;
		inset: 14px 0 auto;
		z-index: 50;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		padding-inline: 12px;
		pointer-events: none;
	}

	.nav {
		pointer-events: auto;
		display: flex;
		align-items: center;
		gap: 10px;
		width: min(100%, 1160px);
		padding: 9px 10px 9px 16px;
		border-radius: 999px;
		background: rgb(38 34 30 / 0.72);
		box-shadow:
			0 12px 34px -22px rgb(0 0 0 / 0.8),
			inset 0 1px 0 rgb(255 255 255 / 0.06);
		-webkit-backdrop-filter: blur(18px) saturate(1.35);
		backdrop-filter: blur(18px) saturate(1.35);
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 2px;
		margin-inline: auto;
	}

	.nav-links a {
		padding: 8px 12px;
		border-radius: 999px;
		color: var(--g600);
		font-size: 12.5px;
		font-weight: 550;
		transition:
			background 160ms ease,
			color 160ms ease;
	}

	.nav-links a:hover {
		background: var(--g100);
		color: var(--g900);
	}

	.nav-actions {
		display: flex;
		align-items: center;
		gap: 4px;
		padding-left: 4px;
	}

	.signin {
		padding: 8px 11px;
		border-radius: 999px;
		color: var(--g600);
		font-size: 12.5px;
		font-weight: 600;
	}

	.signin:hover {
		background: var(--g100);
		color: var(--g900);
	}

	.nav-toggle {
		display: none;
		width: 36px;
		height: 36px;
		place-items: center;
		gap: 5px;
		border-radius: 50%;
		background: var(--g100);
	}

	.nav-toggle span {
		display: block;
		width: 15px;
		height: 1.5px;
		border-radius: 2px;
		background: var(--g800);
	}

	.mobile-menu {
		pointer-events: auto;
		display: grid;
		gap: 2px;
		width: min(100%, 1160px);
		padding: 10px;
		border-radius: 24px;
		background: rgb(38 34 30 / 0.97);
		box-shadow: 0 24px 60px -30px rgb(0 0 0 / 0.8);
		-webkit-backdrop-filter: blur(18px);
		backdrop-filter: blur(18px);
	}

	.mobile-menu a:not(.pill) {
		padding: 11px 12px;
		border-radius: 12px;
		color: var(--g700);
		font-size: 14px;
		font-weight: 550;
	}

	.mobile-menu a:not(.pill):hover {
		background: var(--g100);
	}

	.mobile-menu .pill {
		margin-top: 4px;
	}

	/* Hero */
	.hero-section {
		padding-top: clamp(118px, 11vw, 160px);
		padding-bottom: clamp(56px, 7vw, 96px);
	}

	.hero-grid {
		display: grid;
		grid-template-columns: minmax(0, 0.94fr) minmax(0, 1.06fr);
		gap: clamp(32px, 4vw, 64px);
		align-items: center;
	}

	.hero-lead {
		max-width: 54ch;
		margin-top: 24px;
	}

	.mark {
		display: inline-block;
		color: var(--roast-accent);
		white-space: nowrap;
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		margin-top: 30px;
	}

	.hero-note {
		max-width: 48ch;
		margin-top: 15px;
		color: var(--g500);
		font-size: 12px;
		line-height: 1.55;
	}

	.platforms {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 7px 6px;
		margin-top: 28px;
	}

	.platforms-label {
		color: var(--g500);
		font-size: 10px;
		font-weight: 700;
		letter-spacing: 0.16em;
		text-transform: uppercase;
	}

	.platforms span:not(.platforms-label) {
		padding: 5px 11px;
		border-radius: 999px;
		background: var(--g100);
		color: var(--g700);
		font-size: 11.5px;
		font-weight: 600;
	}

	.build {
		position: relative;
		isolation: isolate;
		height: clamp(520px, 47vw, 580px);
	}

	.build::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image: radial-gradient(circle, rgb(241 233 217 / 0.13) 1px, transparent 1.4px);
		background-size: 22px 22px;
		-webkit-mask-image: radial-gradient(ellipse at 52% 50%, #000 26%, transparent 74%);
		mask-image: radial-gradient(ellipse at 52% 50%, #000 26%, transparent 74%);
		pointer-events: none;
	}

	.build-glow {
		position: absolute;
		inset: 4% 8% 2% 8%;
		border-radius: 50%;
		background: radial-gradient(
			closest-side,
			rgb(255 231 163 / 0.17),
			rgb(255 231 163 / 0.05) 58%,
			transparent 78%
		);
		pointer-events: none;
		transition: scale 900ms ease;
	}

	.build.building .build-glow {
		scale: 1.06;
	}

	.build-prompt {
		position: absolute;
		top: 4px;
		left: 3%;
		z-index: 20;
		display: flex;
		align-items: center;
		gap: 9px;
		color: var(--g500);
		font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
		font-size: 12.5px;
		letter-spacing: -0.01em;
		white-space: nowrap;
	}

	.build-prompt .chev {
		color: var(--roast-accent);
		font-weight: 700;
	}

	.build-caret {
		width: 7px;
		height: 15px;
		margin-left: 1px;
		background: var(--roast-accent);
		animation: blink 1.1s steps(1) infinite;
	}

	.build-card {
		position: absolute;
		top: 50%;
		left: 50%;
		width: min(66%, 370px);
		aspect-ratio: 4 / 5;
		translate: -50% -50%;
		perspective: 1200px;
	}

	.build.leaving .build-card {
		animation: card-out 520ms cubic-bezier(0.5, 0, 0.7, 0.2) both;
	}

	@keyframes card-out {
		to {
			opacity: 0;
			transform: translateY(-28px) rotate(-2deg) scale(0.975);
			filter: blur(2px);
		}
	}

	.crop {
		position: absolute;
		width: 13px;
		height: 13px;
		border: 0 solid rgb(241 233 217 / 0.34);
		opacity: 0;
		transition: opacity 500ms ease 120ms;
		pointer-events: none;
	}

	.build.ready .crop {
		opacity: 1;
	}

	.crop.tl {
		top: -15px;
		left: -15px;
		border-top-width: 1px;
		border-left-width: 1px;
	}

	.crop.tr {
		top: -15px;
		right: -15px;
		border-top-width: 1px;
		border-right-width: 1px;
	}

	.crop.bl {
		bottom: -15px;
		left: -15px;
		border-bottom-width: 1px;
		border-left-width: 1px;
	}

	.crop.br {
		bottom: -15px;
		right: -15px;
		border-bottom-width: 1px;
		border-right-width: 1px;
	}

	.build-size {
		position: absolute;
		right: -14px;
		bottom: -40px;
		color: var(--g400);
		font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
		font-size: 9px;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		white-space: nowrap;
		opacity: 0;
		transition: opacity 500ms ease 300ms;
	}

	.build.ready .build-size {
		opacity: 1;
	}

	.build-status {
		position: absolute;
		inset: auto 4% 0 3%;
		display: flex;
		align-items: center;
		gap: 8px;
		color: var(--g500);
		font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
		font-size: 10px;
		letter-spacing: 0.02em;
	}

	.build-dot {
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: var(--roast-accent);
		animation: build-pulse 1.8s ease-in-out infinite;
	}

	@keyframes build-pulse {
		0%,
		100% {
			box-shadow: 0 0 0 3px rgb(255 231 163 / 0.07);
		}
		50% {
			box-shadow: 0 0 0 6px rgb(255 231 163 / 0.13);
		}
	}

	.build-sheet {
		transform-origin: 50% 62%;
		animation: sheet-in 850ms cubic-bezier(0.16, 0.84, 0.2, 1) both;
	}

	@keyframes sheet-in {
		from {
			opacity: 0;
			transform: perspective(1200px) translateY(26px) rotateX(9deg) rotateY(-7deg) scale(0.955);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}

	.build-sheet :global(.top),
	.build-sheet :global(.index),
	.build-sheet :global(.body),
	.build-sheet :global(.foot) {
		animation: fade-up 600ms cubic-bezier(0.16, 0.84, 0.2, 1) both;
	}

	.build-sheet :global(.top) {
		animation-delay: 140ms;
	}

	.build-sheet :global(.index) {
		animation-delay: 230ms;
	}

	.build-sheet :global(.body) {
		animation-delay: 760ms;
	}

	.build-sheet :global(.foot) {
		animation-delay: 1040ms;
	}

	@keyframes fade-up {
		from {
			opacity: 0;
			transform: translateY(8px);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}

	.build-sheet :global(.title .line > span) {
		animation: line-in 880ms cubic-bezier(0.16, 0.84, 0.2, 1) both;
		animation-delay: calc(320ms + var(--line-index) * 95ms);
	}

	@keyframes line-in {
		from {
			transform: translateY(112%);
		}
		to {
			transform: none;
		}
	}

	.build-sheet :global(.chips span) {
		animation: chip-in 460ms cubic-bezier(0.2, 1.3, 0.4, 1) both;
		animation-delay: calc(760ms + var(--chip-index) * 90ms);
	}

	@keyframes chip-in {
		from {
			opacity: 0;
			transform: translateY(6px) scale(0.9);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}

	.build-sheet :global(.slide)::after {
		content: '';
		position: absolute;
		inset: -10% -30%;
		background: linear-gradient(
			105deg,
			transparent 34%,
			rgb(255 255 255 / 0.55) 47%,
			transparent 60%
		);
		opacity: 0;
		animation: sweep 1150ms ease-out 1020ms both;
		pointer-events: none;
	}

	@keyframes sweep {
		0% {
			opacity: 0;
			transform: translateX(-62%);
		}
		28% {
			opacity: 0.65;
		}
		100% {
			opacity: 0;
			transform: translateX(62%);
		}
	}

	/* Problem */
	.compare {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 16px;
		margin-top: 44px;
	}

	.compare-card {
		padding: clamp(24px, 2.6vw, 32px);
		border-radius: 24px;
	}

	.compare-card.old {
		background: var(--g50);
	}

	.compare-card.new {
		background: var(--g150);
		box-shadow: 0 24px 50px -44px rgb(0 0 0 / 0.8);
	}

	.compare-label {
		color: var(--g500);
		font-size: 10px;
		font-weight: 700;
		letter-spacing: 0.16em;
		text-transform: uppercase;
	}

	.compare-card.new .compare-label {
		color: var(--roast-accent-ink);
	}

	.compare-card h3 {
		margin-top: 10px;
		font-size: 20px;
		font-weight: 650;
		letter-spacing: -0.025em;
	}

	.compare-list {
		display: grid;
		gap: 12px;
		margin-top: 20px;
	}

	.compare-list li {
		display: flex;
		gap: 10px;
		align-items: flex-start;
		color: var(--g600);
		font-size: 13.5px;
		line-height: 1.5;
	}

	.compare-card.new .compare-list li {
		color: var(--g700);
	}

	.mark-icon {
		display: grid;
		flex: none;
		place-items: center;
		width: 18px;
		height: 18px;
		margin-top: 1px;
		border-radius: 50%;
	}

	.old .mark-icon {
		background: var(--g200);
		color: var(--g500);
	}

	.new .mark-icon {
		background: var(--roast-accent);
		color: #3d2c00;
	}

	.mark-icon .icon {
		width: 10px;
		height: 10px;
		stroke-width: 2;
	}

	/* How it works */
	.how-steps {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 14px;
		margin-top: 44px;
	}

	.how-step {
		padding: clamp(22px, 2.4vw, 28px);
		border-radius: 22px;
		background: var(--g100);
	}

	.how-step-num {
		display: inline-grid;
		place-items: center;
		width: 32px;
		height: 32px;
		border-radius: 10px;
		background: var(--roast-accent);
		color: #3d2c00;
		font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
		font-size: 12px;
		font-weight: 700;
	}

	.how-step h3 {
		margin-top: 18px;
		font-size: 17.5px;
		font-weight: 650;
		letter-spacing: -0.025em;
	}

	.how-step p {
		max-width: 38ch;
		margin-top: 7px;
		color: var(--g600);
		font-size: 13.5px;
		line-height: 1.55;
	}

	.agent-card {
		display: grid;
		grid-template-columns: 1.08fr 0.92fr;
		gap: clamp(24px, 4vw, 56px);
		align-items: center;
		margin-top: 14px;
		padding: clamp(28px, 3.4vw, 44px);
		border-radius: 28px;
		background: var(--g150);
		color: var(--g900);
	}

	.agent-copy h3 {
		margin-top: 12px;
		font-family: Fraunces, 'Iowan Old Style', Georgia, serif;
		font-size: clamp(24px, 2.2vw, 30px);
		font-weight: 550;
		letter-spacing: -0.035em;
		line-height: 1.1;
	}

	.agent-copy > p {
		max-width: 52ch;
		margin-top: 12px;
		color: var(--g500);
		font-size: 14px;
		line-height: 1.6;
	}

	.agent-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		margin-top: 20px;
	}

	.agent-tags span {
		padding: 5px 10px;
		border-radius: 999px;
		background: rgb(255 255 255 / 0.07);
		color: var(--g500);
		font-size: 10.5px;
		font-weight: 600;
	}

	.agent-copy .text-link {
		margin-top: 22px;
	}

	.agent-terminal {
		padding: 16px;
		border-radius: 18px;
		background: #1e1a16;
		font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
		font-size: 11px;
		line-height: 1.85;
	}

	.terminal-bar {
		display: flex;
		align-items: center;
		gap: 5px;
		margin-bottom: 13px;
		color: var(--g500);
		font-size: 9.5px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.terminal-bar span:last-child {
		margin-left: 6px;
	}

	.tdot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--g700);
	}

	.terminal-body p {
		color: var(--g500);
	}

	.t-prompt,
	.t-accent,
	.t-check {
		color: var(--roast-accent);
	}

	.t-dim {
		color: var(--g500);
	}

	.t-cursor {
		color: var(--g400);
	}

	@media (prefers-reduced-motion: no-preference) {
		.t-cursor {
			animation: blink 1.2s steps(1) infinite;
		}
	}

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}

	/* Personas */
	.personas {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 16px;
		margin-top: 44px;
	}

	.persona {
		display: flex;
		flex-direction: column;
		padding: clamp(26px, 2.8vw, 34px);
		border-radius: 26px;
		color: inherit;
		transition:
			transform 180ms ease,
			box-shadow 180ms ease;
	}

	.persona:hover {
		transform: translateY(-3px);
		box-shadow: 0 24px 50px -36px rgb(27 21 20 / 0.45);
	}

	.persona.creator {
		background: var(--g100);
	}

	.persona.agency {
		background: var(--g150);
	}

	.persona-tag {
		align-self: flex-start;
		padding: 5px 10px;
		border-radius: 999px;
		font-size: 9.5px;
		font-weight: 700;
		letter-spacing: 0.14em;
		text-transform: uppercase;
	}

	.creator .persona-tag {
		background: var(--g50);
		color: var(--g600);
	}

	.agency .persona-tag {
		background: var(--g900);
		color: var(--g50);
	}

	.persona h3 {
		margin-top: 18px;
		font-family: Fraunces, 'Iowan Old Style', Georgia, serif;
		font-size: clamp(22px, 2vw, 27px);
		font-weight: 550;
		letter-spacing: -0.035em;
		line-height: 1.12;
	}

	.persona-lead {
		max-width: 40ch;
		margin-top: 9px;
		color: var(--g600);
		font-size: 13.5px;
		line-height: 1.55;
	}

	.persona ul {
		display: grid;
		gap: 10px;
		margin-top: 22px;
	}

	.persona li {
		display: flex;
		gap: 9px;
		align-items: flex-start;
		color: var(--g700);
		font-size: 13px;
		line-height: 1.45;
	}

	.persona li .icon {
		margin-top: 2px;
		color: var(--roast-accent-ink);
		stroke-width: 2;
	}

	.door-arrow {
		display: inline-flex;
		align-items: center;
		gap: 7px;
		margin-top: 24px;
		color: var(--roast-accent-ink);
		font-size: 13px;
		font-weight: 650;
	}

	.door-arrow .icon {
		transition: transform 180ms ease;
	}

	.persona:hover .door-arrow .icon {
		transform: translateX(3px);
	}

	.persona-note {
		margin-top: 18px;
		color: var(--g500);
		font-size: 12.5px;
	}

	/* Pricing */
	.usage {
		display: grid;
		gap: 20px;
		max-width: 860px;
		margin: 40px auto 0;
		padding: clamp(22px, 2.6vw, 30px);
		border-radius: 24px;
		background: var(--g100);
	}

	.usage-row {
		display: grid;
		gap: 6px;
	}

	.usage-label {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		color: var(--g700);
		font-size: 13.5px;
		font-weight: 600;
	}

	.usage-label output {
		min-width: 52px;
		padding: 4px 10px;
		border-radius: 8px;
		background: var(--g50);
		color: var(--g900);
		font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
		font-size: 12.5px;
		font-weight: 700;
		text-align: center;
	}

	.usage input[type='range'] {
		width: 100%;
		height: 22px;
		margin: 0;
		background: transparent;
		appearance: none;
		-webkit-appearance: none;
		cursor: pointer;
	}

	.usage input[type='range']::-webkit-slider-runnable-track {
		height: 6px;
		border-radius: 999px;
		background: linear-gradient(
			to right,
			var(--roast-accent) 0%,
			var(--roast-accent) var(--fill),
			var(--g200) var(--fill),
			var(--g200) 100%
		);
	}

	.usage input[type='range']::-webkit-slider-thumb {
		width: 20px;
		height: 20px;
		margin-top: -7px;
		border-radius: 50%;
		background: var(--g900);
		box-shadow: 0 0 0 4px var(--g100);
		appearance: none;
		-webkit-appearance: none;
	}

	.usage input[type='range']::-moz-range-track {
		height: 6px;
		border-radius: 999px;
		background: var(--g200);
	}

	.usage input[type='range']::-moz-range-progress {
		height: 6px;
		border-radius: 999px;
		background: var(--roast-accent);
	}

	.usage input[type='range']::-moz-range-thumb {
		width: 20px;
		height: 20px;
		border: 0;
		border-radius: 50%;
		background: var(--g900);
		box-shadow: 0 0 0 4px var(--g100);
	}

	.usage-scale {
		display: flex;
		justify-content: space-between;
		color: var(--g400);
		font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
		font-size: 9.5px;
	}

	.usage-note {
		color: var(--g500);
		font-size: 12px;
	}

	.price-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 16px;
		margin-top: 16px;
	}

	.price-card {
		display: flex;
		flex-direction: column;
		padding: clamp(26px, 2.8vw, 34px);
		border-radius: 26px;
		background: var(--g100);
	}

	.price-card.yearly {
		background: var(--roast-accent-soft);
	}

	.price-tag-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 10px;
	}

	.price-tag {
		color: var(--g500);
		font-size: 10.5px;
		font-weight: 700;
		letter-spacing: 0.16em;
		text-transform: uppercase;
	}

	.save-badge {
		padding: 4px 9px;
		border-radius: 999px;
		background: var(--roast-accent);
		color: #3d2c00;
		font-size: 9.5px;
		font-weight: 700;
	}

	.price {
		display: flex;
		align-items: baseline;
		gap: 4px;
		margin-top: 14px;
		font-family: Fraunces, 'Iowan Old Style', Georgia, serif;
		font-size: clamp(48px, 4.4vw, 60px);
		font-weight: 550;
		letter-spacing: -0.05em;
		line-height: 1;
	}

	.currency {
		font-size: 0.52em;
	}

	.per {
		color: var(--g500);
		font-family: Inter, sans-serif;
		font-size: 13px;
		font-weight: 550;
		letter-spacing: 0;
	}

	.price-sub {
		margin-top: 8px;
		color: var(--g500);
		font-size: 12.5px;
	}

	.price-list {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 10px 16px;
		margin-top: 24px;
	}

	.price-list li {
		display: flex;
		gap: 7px;
		align-items: flex-start;
		color: var(--g700);
		font-size: 12.5px;
		line-height: 1.4;
	}

	.price-list .icon {
		margin-top: 1px;
		color: var(--roast-accent-ink);
		stroke-width: 2;
	}

	.price-card .pill {
		width: 100%;
		margin-top: 26px;
	}

	.price-foot {
		margin-top: 10px;
		color: var(--g500);
		font-size: 11px;
		text-align: center;
	}

	.pricing-note {
		margin-top: 20px;
		color: var(--g500);
		font-size: 12.5px;
		text-align: center;
	}

	.pricing-note a {
		color: var(--g800);
		font-weight: 600;
		text-decoration: underline;
		text-decoration-color: var(--g300);
		text-underline-offset: 3px;
	}

	/* FAQ */
	.faq-layout {
		display: grid;
		grid-template-columns: 0.8fr 1.2fr;
		gap: clamp(28px, 4vw, 64px);
		align-items: start;
	}

	.faq-head {
		position: sticky;
		top: 104px;
	}

	.faq-head .text-link {
		margin-top: 22px;
	}

	.faq-list {
		display: grid;
		gap: 8px;
	}

	.faq-item {
		border-radius: 16px;
		background: var(--g150);
	}

	.faq-item summary {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		padding: 17px 20px;
		color: var(--g800);
		font-size: 14px;
		font-weight: 600;
		letter-spacing: -0.01em;
		list-style: none;
		cursor: pointer;
	}

	.faq-item summary::-webkit-details-marker {
		display: none;
	}

	.faq-icon {
		position: relative;
		flex: none;
		width: 20px;
		height: 20px;
	}

	.faq-icon::before,
	.faq-icon::after {
		content: '';
		position: absolute;
		border-radius: 2px;
		background: var(--g500);
		transition:
			transform 200ms ease,
			background 200ms ease;
	}

	.faq-icon::before {
		top: 9px;
		left: 3px;
		width: 14px;
		height: 2px;
	}

	.faq-icon::after {
		top: 3px;
		left: 9px;
		width: 2px;
		height: 14px;
	}

	.faq-item[open] .faq-icon::after {
		transform: scaleY(0);
	}

	.faq-item[open] .faq-icon::before {
		background: var(--roast-accent-ink);
	}

	.faq-answer {
		max-width: 60ch;
		padding: 0 20px 18px;
		color: var(--g600);
		font-size: 13.5px;
		line-height: 1.6;
	}

	/* Final CTA */
	.final {
		position: relative;
		display: grid;
		grid-template-columns: 1.05fr 0.95fr;
		gap: 32px;
		align-items: center;
		overflow: hidden;
		padding: clamp(36px, 4.2vw, 60px);
		border-radius: 32px;
		background: var(--g150);
		color: var(--g900);
	}

	.final::before {
		content: '';
		position: absolute;
		top: -140px;
		right: -90px;
		width: 440px;
		height: 440px;
		border-radius: 50%;
		background: radial-gradient(circle, rgb(255 231 163 / 0.16), transparent 66%);
		pointer-events: none;
	}

	.final-copy {
		position: relative;
		z-index: 1;
	}

	.final h2 {
		font-size: clamp(32px, 3.4vw, 46px);
	}

	.final h2 em {
		color: var(--roast-accent);
	}

	.final-copy > p {
		max-width: 46ch;
		margin-top: 14px;
		color: var(--g500);
		font-size: 14.5px;
		line-height: 1.6;
	}

	.final-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		margin-top: 26px;
	}

	.final-note {
		margin-top: 14px;
		color: var(--g500);
		font-size: 11.5px;
	}

	.final-art {
		position: relative;
		z-index: 1;
		min-height: 360px;
	}

	.final-slide {
		position: absolute;
		width: 32%;
	}

	.fs1 {
		top: 50%;
		left: 0;
		transform: translateY(-50%) rotate(-7deg);
	}

	.fs2 {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 2;
	}

	.fs3 {
		top: 50%;
		right: 0;
		transform: translateY(-50%) rotate(7deg);
	}

	/* Footer */
	.footer-band {
		width: min(100% - 32px, 1280px);
		margin: 0 auto 16px;
		border-radius: clamp(24px, 3vw, 40px);
		background: var(--g100);
	}

	.footer-inner {
		padding-block: clamp(56px, 7vw, 88px) clamp(24px, 3vw, 32px);
	}

	.footer-top {
		display: grid;
		grid-template-columns: 1.1fr 2fr;
		gap: clamp(40px, 6vw, 96px);
	}

	.footer-brand p {
		max-width: 30ch;
		margin-top: 14px;
		color: var(--g600);
		font-size: 13.5px;
		line-height: 1.6;
	}

	.footer-brand .text-link {
		margin-top: 18px;
	}

	.footer-cols {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: clamp(20px, 2.4vw, 32px);
	}

	.footer-heading {
		margin-bottom: 16px;
		color: var(--g500);
		font-size: 10px;
		font-weight: 700;
		letter-spacing: 0.15em;
		text-transform: uppercase;
	}

	.footer-cols a {
		display: block;
		padding: 5px 0;
		color: var(--g600);
		font-size: 13px;
		transition: color 160ms ease;
	}

	.footer-cols a:hover {
		color: var(--g900);
	}

	.footer-bottom {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 12px;
		margin-top: clamp(40px, 5vw, 64px);
		padding-top: 24px;
		border-top: 1px solid var(--g200);
		color: var(--g500);
		font-size: 11px;
	}

	/* Responsive */
	@media (max-width: 1000px) {
		.how-steps {
			grid-template-columns: repeat(2, 1fr);
		}

		.footer-top {
			grid-template-columns: 1fr;
			gap: 44px;
		}
	}

	@media (max-width: 900px) {
		.nav-links {
			display: none;
		}

		.signin {
			display: none;
		}

		.nav-toggle {
			display: grid;
		}

		.nav {
			padding-right: 8px;
		}

		.hero-grid {
			grid-template-columns: 1fr;
		}

		.build {
			width: min(100%, 560px);
			height: 560px;
			margin-inline: auto;
		}

		.compare,
		.personas,
		.faq-layout,
		.price-grid {
			grid-template-columns: 1fr;
		}

		.faq-head {
			position: static;
		}

		.final {
			grid-template-columns: 1fr;
		}

		.final-art {
			display: none;
		}
	}

	@media (max-width: 700px) {
		.footer-cols {
			grid-template-columns: repeat(2, 1fr);
			gap: 28px 20px;
		}

		.footer-bottom {
			flex-direction: column;
		}
	}

	@media (max-width: 620px) {
		.how-steps {
			grid-template-columns: 1fr;
		}

		.price-list {
			grid-template-columns: 1fr;
		}

		.hero-actions .pill {
			flex: 1 1 auto;
		}

		.build {
			height: 480px;
		}

		.build-card {
			width: min(72%, 300px);
		}

		.build-prompt {
			font-size: 10.5px;
			white-space: normal;
			max-width: 88%;
		}

		.build-size {
			right: -6px;
		}
	}
</style>
