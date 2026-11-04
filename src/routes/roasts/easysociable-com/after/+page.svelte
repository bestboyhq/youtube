<script lang="ts">
	import CarouselSlide, { type Slide } from './CarouselSlide.svelte';

	const slides: Slide[] = [
		{
			name: 'Grok Bot',
			badge: 'AI',
			index: '01 / 06',
			title: ['ChatGPT is', 'not the', 'whole story.'],
			accent: ['Grok is.'],
			body: 'The model everyone benchmarks against is rarely the one that wins the workflow.',
			chips: ['Speed', 'Context', 'Cost']
		},
		{
			name: 'Grok Bot',
			badge: 'AI',
			index: '02 / 06',
			title: ['Three models.', 'One honest', 'comparison.'],
			accent: [],
			body: 'Same prompt, same data, three answers. Here is where each one actually breaks.',
			chips: ['GPT', 'Claude', 'Gemini']
		},
		{
			name: 'Grok Bot',
			badge: 'AI',
			index: '03 / 06',
			title: ['Nobody tells you', 'what the', 'benchmarks miss.'],
			accent: ['Until now.'],
			body: 'Real tasks, not trivia. The gap shows up in the second hour, not the first answer.',
			chips: ['Research', 'Code', 'Writing']
		},
		{
			name: 'Grok Bot',
			badge: 'TEARDOWN',
			index: '04 / 06',
			title: ['The 5-slide', 'teardown that', 'got 2.1M views.'],
			accent: [],
			body: 'Hook, tension, proof, turn, close. Copy the structure, not the topic.',
			chips: ['Hook', 'Proof', 'Close']
		},
		{
			name: 'Grok Bot',
			badge: 'PROMPTS',
			index: '05 / 06',
			title: ['Your prompt is', 'not the', 'problem.'],
			accent: ['The format is.'],
			body: 'A great idea in a flat layout still gets scrolled. Start with a shape that holds attention.',
			chips: ['Format', 'Pacing', 'Layout']
		},
		{
			name: 'Grok Bot',
			badge: 'SAVE',
			index: '06 / 06',
			title: ['Save this', 'before you', 'post again.'],
			accent: ['You will need it.'],
			body: 'The next carousel you make should start here, not from a blank page.',
			chips: ['Save', 'Share', 'Reuse']
		}
	];

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

	const formulas = [
		{
			name: 'The 5-slide teardown',
			meta: 'Instagram · 5 slides',
			line: 'Break one big claim into five proof points.'
		},
		{
			name: 'The 7-slide listicle',
			meta: 'LinkedIn · 7 slides',
			line: 'Numbered lessons that earn the save.'
		},
		{
			name: 'The 10-slide story',
			meta: 'TikTok · 10 slides',
			line: 'A first-person arc with a turn on slide 8.'
		}
	];

	const quotes = [
		{
			text: 'I used to lose a Sunday to one carousel. Now I paste a prompt before coffee and spend the time answering comments.',
			name: 'Maya R.',
			role: 'Creator, 84k followers',
			initials: 'MR'
		},
		{
			text: 'We run six client accounts from one seat. The Brand switch alone paid for the year.',
			name: 'Daniel K.',
			role: 'Creative director, studio of 9',
			initials: 'DK'
		},
		{
			text: 'Our clients approve carousels in the link. No PDFs, no screenshots, no "slide 4" emails.',
			name: 'Priya S.',
			role: 'Social lead, B2B agency',
			initials: 'PS'
		}
	];

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
	let brand = $state(0);
	let demoStep = $state(0);
	let menuOpen = $state(false);
	let heroAuto = $state(true);
	let demoAuto = $state(true);
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

	function formulaPrompt(name: string) {
		return `Use the EasySociable skill to make a carousel with the "${name}" formula for [your idea]. Write the hook, plan the slides, lay them out in my Brand, and open them in Studio for edits.`;
	}

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
		if (!heroAuto) return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const id = window.setInterval(() => {
			activeSlide = (activeSlide + 1) % slides.length;
		}, 4800);
		return () => window.clearInterval(id);
	});

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
				<a href="#formulas">Formulas</a>
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
				<a href="#formulas" onclick={closeMenu}>Formulas</a>
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
						One prompt turns a proven viral format into a finished, on-brand carousel for creators
						and the teams behind them. Edit every word in Studio, then publish to Instagram,
						LinkedIn, TikTok, Threads, X or 小红书 from your phone.
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
						<a class="pill pill-soft pill-lg" href="#formulas">See viral formulas</a>
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

				<div class="stage">
					<div class="studio">
						<div class="window-bar">
							<span class="dots" aria-hidden="true"><i></i><i></i><i></i></span>
							<span class="window-title">Studio · Grok Bot</span>
							<span class="window-edit">Live preview</span>
						</div>
						<div class="agent" aria-hidden="true">
							<p class="agent-prompt">
								<span class="chev">›</span>
								<span>make a carousel from “The 5-slide teardown”</span>
							</p>
							<div class="agent-done">
								<span>{@render checkIcon()} Skill installed</span>
								<span>{@render checkIcon()} 6 slides written</span>
								<span>{@render checkIcon()} Brand applied</span>
							</div>
						</div>
						<div class="preview">
							<div class="preview-frame">
								{#key activeSlide}
									<CarouselSlide slide={slides[activeSlide]} />
								{/key}
							</div>
						</div>
						<div class="filmstrip" role="group" aria-label="Carousel slides">
							{#each slides as slide, index}
								<button
									class="thumb"
									class:active={activeSlide === index}
									type="button"
									aria-label="Show slide {index + 1}"
									aria-pressed={activeSlide === index}
									onclick={() => {
										heroAuto = false;
										activeSlide = index;
									}}
								>
									<CarouselSlide {slide} />
								</button>
							{/each}
						</div>
					</div>
					<span class="stage-chip">Every word editable</span>
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
							Send every page to Instagram, LinkedIn, TikTok, Threads, X or 小红书 from your phone.
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

		<section class="band" id="for">
			<div class="rail wrap">
				<div class="section-head">
					<p class="eyebrow">For creators and agencies</p>
					<h2 class="display h2">One studio. <em>Two ways to work.</em></h2>
					<p class="lead">
						Most carousel tools pick a lane. EasySociable works for the person posting daily and the
						team running ten clients.
					</p>
				</div>
				<div class="personas">
					<article class="persona creator">
						<span class="persona-tag">For creators</span>
						<h3>Ship daily. Skip the design sprint.</h3>
						<p class="persona-lead">
							For the person who posts every day and cannot spend it in a design tool.
						</p>
						<ul>
							<li>{@render checkIcon()}Proven formats instead of a blank canvas</li>
							<li>{@render checkIcon()}One Brand, every platform size</li>
							<li>{@render checkIcon()}Publish from your phone in two taps</li>
							<li>{@render checkIcon()}Edits that never break the layout</li>
						</ul>
						<a class="pill pill-dark" href="https://easysociable.com/auth/signup">
							Start 14-day trial
						</a>
					</article>
					<article class="persona agency">
						<span class="persona-tag">For agencies</span>
						<h3>Run every client from one seat.</h3>
						<p class="persona-lead">
							For the team running a carousel calendar for every client on the roster.
						</p>
						<ul>
							<li>{@render checkIcon()}Every client Brand in one studio</li>
							<li>{@render checkIcon()}Switch a carousel's Brand in one click</li>
							<li>{@render checkIcon()}Review links with view, edit or publish permissions</li>
							<li>{@render checkIcon()}Usage that scales with your roster</li>
						</ul>
						<a class="pill pill-dark" href="https://easysociable.com/contact">Talk to us</a>
					</article>
				</div>
				<p class="persona-note">
					Not sure where you fit? Start the trial. Add Brands when the roster grows.
				</p>
			</div>
		</section>

		<section class="wrap" id="brands">
			<div class="rail brand-layout">
				<div class="brand-copy">
					<p class="eyebrow">Brands</p>
					<h2 class="display h2">One carousel. <em>Every Brand.</em></h2>
					<p class="lead">
						Create a Brand once: name, handle, avatar and colors. Switch any carousel to another
						Brand and every slide updates without moving a single element.
					</p>
					<p class="brand-small">Built for creators with two accounts and agencies with twenty.</p>
					<a class="text-link" href="https://easysociable.com/docs">
						How Brands work {@render arrow()}
					</a>
				</div>
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
			</div>
		</section>

		<section class="band" id="share">
			<div class="rail wrap">
				<div class="share-layout">
					<div class="share-copy">
						<p class="eyebrow">Client review</p>
						<h2 class="display h2">Send a link. <em>Get a yes.</em></h2>
						<p class="lead">
							No attachments, no account, no "which slide?" threads. Your client opens the carousel
							on any device, sees every page and comments on the exact one.
						</p>
						<ul class="mini-list">
							<li>{@render checkIcon()}They open it without signing up</li>
							<li>{@render checkIcon()}Comments land on the slide</li>
							<li>{@render checkIcon()}You choose who can view, edit or publish</li>
						</ul>
						<a class="text-link" href="https://easysociable.com/docs">
							How share links work {@render arrow()}
						</a>
					</div>

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
									<button
										class="sheet-pill"
										class:active={demoStep === 1}
										type="button"
										tabindex="-1"
									>
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
				</div>
			</div>
		</section>

		<section class="wrap" id="formulas">
			<div class="rail">
				<div class="section-head">
					<p class="eyebrow">Viral formulas</p>
					<h2 class="display h2">Steal the format. <em>Keep your voice.</em></h2>
					<p class="lead">
						Every formula is a real carousel that earned its views, broken down slide by slide. Copy
						the prompt, paste it into your agent and get the same structure with your idea.
					</p>
				</div>
				<div class="formula-grid">
					{#each formulas as formula}
						<article class="formula">
							<div class="formula-stage" aria-hidden="true">
								<div class="formula-stack">
									<div class="formula-mini f1">
										<span></span><span class="accent"></span><span></span>
									</div>
									<div class="formula-mini f2">
										<span></span><span class="accent"></span><span></span>
									</div>
									<div class="formula-mini f3">
										<span></span><span class="accent"></span><span></span>
									</div>
								</div>
							</div>
							<div class="formula-body">
								<p class="formula-meta">{formula.meta}</p>
								<h3>{formula.name}</h3>
								<p>{formula.line}</p>
								<button
									class="formula-copy"
									type="button"
									aria-label="Copy the {formula.name} prompt"
									onclick={() => copy(formulaPrompt(formula.name), formula.name)}
								>
									{copied === formula.name ? 'Copied' : 'Copy prompt'}
									{@render copyIcon()}
								</button>
							</div>
						</article>
					{/each}
				</div>
				<div class="formula-more">
					<a class="text-link" href="https://easysociable.com/formulas">
						Browse all 20 formulas {@render arrow()}
					</a>
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
				<div class="quotes">
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
						<a href="https://easysociable.com/formulas">Viral formulas</a>
						<a href="#pricing">Pricing</a>
						<a href="#share">Client review</a>
						<a href="https://easysociable.com/compare">Compare</a>
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
	:global(html) {
		--g50: #fbfaf9;
		--g100: #ede9e8;
		--g150: #ded9d8;
		--g200: #d0c9c7;
		--g300: #b3a9a7;
		--g400: #988b88;
		--g500: #7d6d6b;
		--g600: #625653;
		--g700: #493f3d;
		--g800: #312928;
		--g900: #1b1514;
		--g950: #110c0b;
		--roast-accent: #f5d76e;
		--roast-accent-hover: #f0ca4b;
		--roast-accent-soft: #fbf3d8;
		--roast-accent-ink: #7a5a12;
		background: var(--g50);
		color-scheme: light;
		scroll-behavior: smooth;
		scroll-padding-top: 96px;
	}

	:global(html body) {
		margin: 0;
		background: var(--g50);
		color: var(--g900);
		color-scheme: light;
		font-family:
			Inter,
			ui-sans-serif,
			system-ui,
			-apple-system,
			'Segoe UI',
			sans-serif;
		font-size: 16px;
		line-height: 1.5;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.page {
		position: relative;
		overflow-x: clip;
		min-height: 100vh;
		background: var(--g50);
	}

	:global(a) {
		color: inherit;
		text-decoration: none;
	}

	:global(button) {
		margin: 0;
		border: 0;
		background: none;
		color: inherit;
		font: inherit;
		cursor: pointer;
	}

	:global(img) {
		display: block;
		max-width: 100%;
	}

	:global(a:focus-visible),
	:global(button:focus-visible),
	:global(input:focus-visible),
	:global(summary:focus-visible) {
		outline: 2px solid var(--roast-accent-ink);
		outline-offset: 3px;
		border-radius: 6px;
	}

	.rail {
		width: 100%;
		max-width: 1200px;
		margin-inline: auto;
		padding-inline: clamp(20px, 4vw, 44px);
	}

	.wrap {
		padding-block: clamp(72px, 8vw, 112px);
	}

	.band {
		width: min(100% - 32px, 1280px);
		margin-inline: auto;
		border-radius: clamp(24px, 3vw, 40px);
		background: var(--g100);
	}

	.band .wrap {
		padding-block: clamp(56px, 6.4vw, 92px);
	}

	.display {
		font-family: Fraunces, 'Iowan Old Style', Georgia, serif;
		font-weight: 550;
		font-optical-sizing: auto;
	}

	.eyebrow {
		display: inline-flex;
		align-items: center;
		gap: 9px;
		color: var(--g500);
		font-size: 10.5px;
		font-weight: 700;
		letter-spacing: 0.18em;
		text-transform: uppercase;
	}

	.eyebrow::before {
		content: '';
		width: 18px;
		height: 2px;
		border-radius: 2px;
		background: var(--roast-accent);
	}

	.eyebrow.on-dark {
		color: var(--g400);
	}

	.h1,
	.h2 {
		text-wrap: balance;
	}

	.h1 {
		margin-top: 20px;
		font-size: clamp(44px, 4.9vw, 68px);
		line-height: 1.01;
		letter-spacing: -0.045em;
	}

	.h2 {
		margin-top: 14px;
		font-size: clamp(34px, 3.6vw, 50px);
		line-height: 1.06;
		letter-spacing: -0.04em;
	}

	.h2 em {
		font-style: normal;
		color: var(--roast-accent-ink);
	}

	.lead {
		max-width: 62ch;
		margin-top: 18px;
		color: var(--g600);
		font-size: clamp(15.5px, 1.25vw, 18px);
		line-height: 1.62;
		text-wrap: pretty;
	}

	.section-head {
		max-width: 720px;
	}

	.section-head.center {
		max-width: 760px;
		margin-inline: auto;
		text-align: center;
	}

	.section-head.center .eyebrow {
		justify-content: center;
	}

	.pill {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		height: 44px;
		padding: 0 18px;
		border-radius: 999px;
		font-size: 13.5px;
		font-weight: 650;
		letter-spacing: -0.01em;
		white-space: nowrap;
		transition:
			background 180ms ease,
			color 180ms ease,
			transform 180ms ease,
			box-shadow 180ms ease;
	}

	.pill:active {
		transform: translateY(1px);
	}

	.pill-sm {
		height: 34px;
		padding: 0 14px;
		font-size: 12.5px;
	}

	.pill-lg {
		height: 50px;
		padding: 0 22px;
		font-size: 14.5px;
	}

	.pill-accent {
		background: var(--roast-accent);
		color: #3d2c00;
		box-shadow:
			inset 0 1px 0 rgb(255 255 255 / 0.5),
			0 10px 24px -12px rgb(166 118 0 / 0.55);
	}

	.pill-accent:hover {
		background: var(--roast-accent-hover);
	}

	.pill-dark {
		background: var(--g900);
		color: var(--g50);
	}

	.pill-dark:hover {
		background: var(--g800);
	}

	.pill-soft {
		background: var(--g100);
		color: var(--g900);
	}

	.pill-soft:hover {
		background: var(--g150);
	}

	.pill-ghost {
		background: var(--g50);
		color: var(--g900);
	}

	.pill-ghost:hover {
		background: var(--g150);
	}

	.pill-outline-dark {
		background: rgb(255 255 255 / 0.07);
		color: var(--g50);
	}

	.pill-outline-dark:hover {
		background: rgb(255 255 255 / 0.13);
	}

	.text-link {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		color: var(--g800);
		font-size: 13.5px;
		font-weight: 650;
		text-decoration: underline;
		text-decoration-color: var(--g300);
		text-underline-offset: 4px;
		transition:
			color 180ms ease,
			text-decoration-color 180ms ease;
	}

	.text-link:hover {
		color: var(--g900);
		text-decoration-color: var(--roast-accent-ink);
	}

	.text-link.on-dark {
		color: var(--g150);
		text-decoration-color: var(--g600);
	}

	.text-link.on-dark:hover {
		color: var(--g50);
		text-decoration-color: var(--roast-accent);
	}

	.icon {
		flex: none;
		fill: none;
		stroke: currentColor;
		stroke-width: 1.6;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

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
		background: rgb(251 250 249 / 0.78);
		box-shadow:
			0 12px 34px -22px rgb(27 21 20 / 0.45),
			inset 0 1px 0 rgb(255 255 255 / 0.7);
		-webkit-backdrop-filter: blur(18px) saturate(1.35);
		backdrop-filter: blur(18px) saturate(1.35);
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: 9px;
		font-size: 14px;
		font-weight: 700;
		letter-spacing: -0.025em;
		white-space: nowrap;
	}

	.brand-mark {
		display: grid;
		place-items: center;
		width: 27px;
		height: 27px;
		border-radius: 9px;
		background: var(--roast-accent);
		color: #3d2c00;
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
		background: rgb(251 250 249 / 0.97);
		box-shadow: 0 24px 60px -30px rgb(27 21 20 / 0.45);
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
		grid-template-columns: 1.04fr 0.96fr;
		gap: clamp(32px, 4vw, 64px);
		align-items: center;
	}

	.hero-lead {
		max-width: 54ch;
		margin-top: 24px;
	}

	.mark {
		position: relative;
		display: inline-block;
		z-index: 0;
		white-space: nowrap;
	}

	.mark::after {
		content: '';
		position: absolute;
		z-index: -1;
		left: -0.05em;
		right: -0.05em;
		bottom: 0.08em;
		height: 0.32em;
		border-radius: 0.06em;
		background: var(--roast-accent);
		transform: rotate(-1.3deg);
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
		gap: 7px;
		margin-top: 28px;
	}

	.platforms-label {
		margin-right: 2px;
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

	.stage {
		position: relative;
		border-radius: 32px;
		padding: clamp(18px, 2.2vw, 26px);
		background: radial-gradient(120% 100% at 18% 0%, #fbf2d8 0%, #f4e7c4 52%, #efe0cb 100%);
		box-shadow: 0 42px 80px -56px rgb(61 44 0 / 0.5);
	}

	.studio {
		overflow: hidden;
		border-radius: 22px;
		background: var(--g50);
		box-shadow: 0 20px 40px -30px rgb(61 44 0 / 0.4);
	}

	.window-bar {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 11px 14px;
		background: var(--g100);
	}

	.dots {
		display: flex;
		gap: 5px;
	}

	.dots i {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: var(--g300);
	}

	.window-title {
		color: var(--g600);
		font-size: 11.5px;
		font-weight: 600;
		letter-spacing: -0.01em;
	}

	.window-edit {
		margin-left: auto;
		padding: 3px 9px;
		border-radius: 999px;
		background: var(--g50);
		color: var(--g600);
		font-size: 9.5px;
		font-weight: 650;
	}

	.agent {
		margin: 10px 12px 0;
		padding: 12px 14px;
		border-radius: 16px;
		background: var(--g900);
		color: var(--g150);
	}

	.agent-prompt {
		display: flex;
		gap: 7px;
		font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
		font-size: 11px;
		line-height: 1.45;
	}

	.chev {
		color: var(--roast-accent);
	}

	.agent-done {
		display: flex;
		flex-wrap: wrap;
		gap: 5px;
		margin-top: 9px;
	}

	.agent-done span {
		display: inline-flex;
		align-items: center;
		gap: 4px;
		padding: 3px 8px;
		border-radius: 999px;
		background: rgb(255 255 255 / 0.08);
		color: var(--g300);
		font-size: 9px;
		font-weight: 600;
	}

	.agent-done .icon {
		width: 11px;
		height: 11px;
		color: var(--roast-accent);
	}

	.preview {
		padding: 12px 12px 0;
	}

	.preview-frame {
		width: min(100%, 330px);
		margin-inline: auto;
	}

	.filmstrip {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 7px;
		padding: 12px 14px 14px;
	}

	.thumb {
		overflow: hidden;
		padding: 0;
		border-radius: 6px;
		opacity: 0.5;
		transition:
			opacity 200ms ease,
			transform 200ms ease;
	}

	.thumb:hover {
		opacity: 0.85;
	}

	.thumb.active {
		opacity: 1;
		transform: translateY(-1px);
	}

	.stage-chip {
		position: absolute;
		left: -9px;
		bottom: 24px;
		padding: 7px 11px;
		border-radius: 10px;
		background: var(--g50);
		box-shadow: 0 12px 24px -16px rgb(61 44 0 / 0.5);
		color: var(--g800);
		font-size: 11px;
		font-weight: 650;
		transform: rotate(-3deg);
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
		background: var(--g150);
	}

	.compare-card.new {
		background: var(--g50);
		box-shadow: 0 24px 50px -44px rgb(27 21 20 / 0.45);
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
		background: var(--g900);
		color: var(--g50);
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
		color: var(--g300);
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
		color: var(--g300);
		font-size: 10.5px;
		font-weight: 600;
	}

	.agent-copy .text-link {
		margin-top: 22px;
	}

	.agent-terminal {
		padding: 16px;
		border-radius: 18px;
		background: var(--g950);
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
		color: var(--g300);
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
	}

	.persona.creator {
		background: var(--g50);
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
		background: var(--g100);
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

	.persona .pill {
		align-self: flex-start;
		margin-top: 26px;
	}

	.persona-note {
		margin-top: 18px;
		color: var(--g500);
		font-size: 12.5px;
	}

	/* Brands */
	.brand-layout {
		display: grid;
		grid-template-columns: 0.9fr 1.1fr;
		gap: clamp(28px, 4vw, 64px);
		align-items: center;
	}

	.brand-small {
		margin-top: 14px;
		color: var(--g500);
		font-size: 13px;
	}

	.brand-copy .text-link {
		margin-top: 24px;
	}

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

	.brand-caption .icon {
		color: var(--roast-accent-ink);
		stroke-width: 2;
	}

	/* Share */
	.share-layout {
		display: grid;
		grid-template-columns: 0.9fr 1.1fr;
		gap: clamp(32px, 4vw, 64px);
		align-items: center;
	}

	.mini-list {
		display: grid;
		gap: 10px;
		margin-top: 22px;
	}

	.mini-list li {
		display: flex;
		gap: 9px;
		align-items: flex-start;
		color: var(--g700);
		font-size: 13.5px;
		line-height: 1.45;
	}

	.mini-list .icon {
		margin-top: 2px;
		color: var(--roast-accent-ink);
		stroke-width: 2;
	}

	.share-copy .text-link {
		margin-top: 24px;
	}

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
		background: var(--g900);
		box-shadow: 0 32px 60px -44px rgb(27 21 20 / 0.65);
	}

	.phone-screen {
		display: flex;
		flex: 1;
		flex-direction: column;
		overflow: hidden;
		padding: 9px;
		border-radius: 30px;
		background: var(--g50);
	}

	.phone-client .approve {
		margin-top: auto;
	}

	.phone-status {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 3px 7px 7px;
		color: var(--g900);
		font-size: 8.5px;
		font-weight: 700;
	}

	.status-dots {
		width: 26px;
		height: 5px;
		border-radius: 3px;
		background: var(--g300);
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
		background: var(--g100);
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
		color: var(--g600);
		font-size: 8.5px;
	}

	.switch {
		position: relative;
		width: 22px;
		height: 13px;
		border-radius: 999px;
		background: var(--g300);
	}

	.switch::after {
		content: '';
		position: absolute;
		top: 2px;
		left: 2px;
		width: 9px;
		height: 9px;
		border-radius: 50%;
		background: var(--g50);
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
		background: var(--g50);
		color: var(--g600);
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
		background: var(--g900);
		color: var(--g50);
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
		color: var(--g800);
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
		background: var(--g200);
		color: var(--g700);
		font-size: 7px;
		font-weight: 700;
	}

	.comment p {
		padding: 6px 8px;
		border-radius: 10px 10px 10px 3px;
		background: var(--g100);
		color: var(--g700);
		font-size: 8px;
		line-height: 1.35;
	}

	.approve {
		width: 100%;
		height: 26px;
		margin-top: 8px;
		border-radius: 8px;
		background: var(--g900);
		color: var(--g50);
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

	/* Formulas */
	.formula-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 16px;
		margin-top: 44px;
	}

	.formula {
		display: flex;
		flex-direction: column;
		overflow: hidden;
		border-radius: 22px;
		background: var(--g100);
		transition:
			transform 240ms ease,
			box-shadow 240ms ease;
	}

	.formula:hover {
		transform: translateY(-3px);
		box-shadow: 0 28px 50px -44px rgb(27 21 20 / 0.55);
	}

	.formula-stage {
		display: grid;
		place-items: center;
		height: 170px;
		overflow: hidden;
		background: var(--g150);
	}

	.formula-stack {
		position: relative;
		width: 102px;
		height: 128px;
	}

	.formula-mini {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		gap: 6px;
		padding: 9px;
		border-radius: 9px;
		background: var(--g50);
		box-shadow: 0 8px 20px -14px rgb(27 21 20 / 0.45);
		transition: transform 280ms cubic-bezier(0.2, 0.7, 0.2, 1);
	}

	.formula-mini span {
		display: block;
		height: 4px;
		border-radius: 3px;
		background: var(--g200);
	}

	.formula-mini span:first-child {
		width: 58%;
		height: 8px;
		background: var(--g800);
	}

	.formula-mini span.accent {
		width: 42%;
		height: 6px;
		background: var(--roast-accent);
	}

	.f1 {
		transform: rotate(-8deg) translateX(-18px);
	}

	.f2 {
		z-index: 2;
		transform: translateY(-4px);
	}

	.f3 {
		transform: rotate(8deg) translateX(18px);
	}

	.formula:hover .f1 {
		transform: rotate(-12deg) translateX(-26px) translateY(-2px);
	}

	.formula:hover .f3 {
		transform: rotate(12deg) translateX(26px) translateY(-2px);
	}

	.formula-body {
		display: flex;
		flex: 1;
		flex-direction: column;
		padding: 20px 22px 22px;
	}

	.formula-meta {
		color: var(--g500);
		font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
		font-size: 9.5px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.formula h3 {
		margin-top: 8px;
		font-size: 17px;
		font-weight: 650;
		letter-spacing: -0.025em;
	}

	.formula-body > p {
		margin-top: 6px;
		color: var(--g600);
		font-size: 13px;
		line-height: 1.5;
	}

	.formula-copy {
		display: inline-flex;
		align-items: center;
		gap: 7px;
		align-self: flex-start;
		height: 34px;
		margin-top: 18px;
		padding: 0 12px;
		border-radius: 999px;
		background: var(--g50);
		color: var(--g900);
		font-size: 12px;
		font-weight: 650;
		transition:
			background 180ms ease,
			color 180ms ease;
	}

	.formula-copy:hover {
		background: var(--roast-accent);
		color: #3d2c00;
	}

	.formula-more {
		margin-top: 28px;
		text-align: center;
	}

	/* Quotes */
	.quotes {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 16px;
		margin-top: 44px;
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
		background: var(--g900);
		color: var(--roast-accent);
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
		background: var(--g50);
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
		background: var(--g900);
		color: var(--g50);
	}

	.final::before {
		content: '';
		position: absolute;
		top: -140px;
		right: -90px;
		width: 440px;
		height: 440px;
		border-radius: 50%;
		background: radial-gradient(circle, rgb(245 215 110 / 0.2), transparent 66%);
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
		color: var(--g300);
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

		.formula-grid {
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

		.stage {
			width: min(100%, 560px);
			margin-inline: auto;
		}

		.compare,
		.personas,
		.brand-layout,
		.share-layout,
		.faq-layout,
		.price-grid {
			grid-template-columns: 1fr;
		}

		.brand-layout {
			gap: 36px;
		}

		.brand-stage {
			width: min(100%, 540px);
			margin-inline: auto;
		}

		.share-demo {
			width: min(100%, 560px);
			margin-inline: auto;
		}

		.faq-head {
			position: static;
		}

		.quotes {
			grid-template-columns: 1fr;
		}

		.quote blockquote {
			font-size: 15px;
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
		.how-steps,
		.formula-grid {
			grid-template-columns: 1fr;
		}

		.price-list {
			grid-template-columns: 1fr;
		}

		.hero-actions .pill {
			flex: 1 1 auto;
		}

		.stage-chip {
			display: none;
		}

		.phone {
			max-width: 250px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		:global(*) {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
			scroll-behavior: auto !important;
		}
	}
</style>
