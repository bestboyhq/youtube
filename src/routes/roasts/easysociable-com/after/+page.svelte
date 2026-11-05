<script lang="ts">
	let menuOpen = $state(false);
	let billing = $state<'monthly' | 'yearly'>('monthly');

	const closeMenu = () => (menuOpen = false);
</script>

<svelte:head>
	<title>Make High-Retention Social Carousels with AI | EasySociable</title>
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
</svelte:head>

<header class="nav">
	<div class="shell nav-inner">
		<a class="brand" href="#top" aria-label="EasySociable home">
			<span class="brand-mark" aria-hidden="true">
				<svg viewBox="0 0 32 32" fill="currentColor">
					<g transform="rotate(-20 16 27)"
						><rect x="10" y="7" width="12" height="18.5" rx="2.3" opacity="0.45" /></g
					>
					<g transform="rotate(20 16 27)"
						><rect x="10" y="7" width="12" height="18.5" rx="2.3" opacity="0.45" /></g
					>
					<rect x="10" y="5.2" width="12" height="21" rx="2.3" />
				</svg>
			</span>
			EasySociable
			<span class="ver">v1.4</span>
		</a>
		<nav class="nav-links" aria-label="Main">
			<a href="#examples">Examples</a>
			<a href="#formulas">Formulas</a>
			<a href="#pricing">Pricing</a>
			<a href="#questions">Docs</a>
		</nav>
		<div class="nav-cta">
			<a class="signin" href="#start">Sign in</a>
			<a class="btn sm" href="#start">Start free</a>
		</div>
		<button
			class="nav-toggle"
			type="button"
			aria-label={menuOpen ? 'Close menu' : 'Open menu'}
			aria-expanded={menuOpen}
			aria-controls="mobile-menu"
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span></span><span></span><span></span>
		</button>
	</div>
	<div class="mobile-menu" id="mobile-menu" data-open={menuOpen}>
		<nav class="shell" aria-label="Mobile">
			<a href="#examples" onclick={closeMenu}>Examples</a>
			<a href="#formulas" onclick={closeMenu}>Formulas</a>
			<a href="#pricing" onclick={closeMenu}>Pricing</a>
			<a href="#questions" onclick={closeMenu}>Docs</a>
			<a href="#start" onclick={closeMenu}>Sign in</a>
			<a class="btn" href="#start" onclick={closeMenu}>Start free</a>
		</nav>
	</div>
</header>

<main id="top">
	<section class="hero">
		<div class="shell">
			<div class="hero-head">
				<p class="eyebrow rise">Carousels for people who don't design</p>
				<h1 class="rise" style="--d: 30ms">
					Make carousels that actually get read.<span>Then edit every word.</span>
				</h1>
			</div>
			<div class="hero-grid">
				<div>
					<p class="hero-lede rise" style="--d: 60ms">
						Your AI agent drafts from swipe files that already went viral. You double-click to fix a
						typo in Studio, switch brands in one click, and publish from your phone. No design work.
					</p>
					<div class="hero-actions rise" style="--d: 90ms">
						<a class="btn" href="#start">
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.6"
								stroke-linecap="round"
								stroke-linejoin="round"
								aria-hidden="true"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg
							>
							Make my first carousel
						</a>
						<a class="text-link" href="#examples"
							>See it make one <span aria-hidden="true">→</span></a
						>
					</div>
					<p class="hero-note rise" style="--d: 120ms">
						Copies a prompt for <b>Claude Code, Codex or Cursor</b>. Paste it: your agent installs
						EasySociable, signs you in, and makes a first carousel you can edit. Free, no card.
					</p>
				</div>
				<dl class="spec rise" style="--d: 100ms">
					<div>
						<dt>Installs</dt>
						<dd><b>Claude Code, Codex, Cursor</b></dd>
					</div>
					<div>
						<dt>First one</dt>
						<dd>From one paste</dd>
					</div>
					<div>
						<dt>Editing</dt>
						<dd>Double-click any word</dd>
					</div>
					<div>
						<dt>Publish</dt>
						<dd>From your phone</dd>
					</div>
					<div>
						<dt>Card</dt>
						<dd>Not required</dd>
					</div>
				</dl>
			</div>

			<div class="board rise" style="--d: 140ms">
				<div class="board-bar">
					<span class="live">Live preview</span>
					<span>Studio / Grok Bot, explained</span>
					<span>6 pages</span>
				</div>
				<div class="board-grid">
					<div class="board-cell">
						<p class="cell-label">01 / Agent</p>
						<div class="terminal" aria-hidden="true">
							<p class="cmd"><span>Make a carousel about xAI's Grok Bot</span></p>
							<p class="ok"><span>Installed the EasySociable skill</span></p>
							<p class="ok"><span>Wrote 6 pages from a viral formula</span></p>
							<p class="ok"><span>Laid out in your Brand</span></p>
							<p class="ok"><span>Studio ready</span></p>
						</div>
						<p class="board-note">
							Your agent writes. You edit the words. The layout stays locked.
						</p>
					</div>
					<div class="board-cell">
						<p class="cell-label">02 / Studio</p>
						<div class="post-wrap">
							<article class="post">
								<div class="post-top">
									<div>Grok <span>Bot</span></div>
									<div class="post-pill">EXPLAINER</div>
								</div>
								<p class="post-idx">/ 01</p>
								<h3>Grok Bot doesn't answer you. <span>It works while you're away.</span></h3>
								<p class="post-caption">(4 things to know about xAI's new agent.)</p>
								<div class="post-foot"><span>SWIPE →</span><span>SAVE FOR LATER</span></div>
							</article>
						</div>
					</div>
					<div class="board-cell">
						<p class="cell-label">03 / Export</p>
						<div class="export" aria-hidden="true">
							<div><span>01-cover.jpg</span><span>1080</span></div>
							<div><span>02-problem.jpg</span><span>1080</span></div>
							<div><span>03-agent.jpg</span><span>1080</span></div>
							<div><span>04-studio.jpg</span><span>1080</span></div>
							<div><span>05-share.jpg</span><span>1080</span></div>
							<div><span>06-cta.jpg</span><span>1080</span></div>
						</div>
						<div class="mini-phone">
							<img
								src="/roasts/easysociable-com/landing/studio/publish-mobile.jpg"
								alt="Studio's publish sheet on a phone"
								loading="lazy"
							/>
						</div>
						<p class="tag">Publish in two taps</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="section" id="examples">
		<div class="shell">
			<header class="sec-head">
				<p class="sec-id"><b>01</b> Problem</p>
				<div>
					<h2>Edit what your agent made. <em>Directly.</em></h2>
					<p class="lede">
						Asking an agent to fix a typo is another prompt, another layout, another round. In
						Studio you double-click the words and type. Nothing else moves.
					</p>
				</div>
			</header>
			<div class="split">
				<div>
					<div class="cell-head"><span>Fix it with a prompt</span><b>Round 2 / 5</b></div>
					<div class="bubbles">
						<p class="bubble">Change "like you do." to "just like you."</p>
						<p class="bubble bad">No, keep the layout. Just change the words.</p>
					</div>
					<p class="cell-note">Every fix risks a new layout.</p>
				</div>
				<div>
					<div class="cell-head"><span>Fix it in Studio</span><b>One click</b></div>
					<p class="bubble" style="margin-left: 0; margin-top: 18px">
						Double-click the words. Type.
					</p>
					<div class="phone-shot">
						<img
							src="/roasts/easysociable-com/landing/studio/edit-text-mobile.jpg"
							alt="Studio on a phone with a word in the headline selected"
							loading="lazy"
						/>
					</div>
					<p class="cell-note">Only those words change. Everything else stays.</p>
				</div>
			</div>
		</div>
	</section>

	<section class="section">
		<div class="shell">
			<header class="sec-head">
				<p class="sec-id"><b>02</b> Brands</p>
				<div>
					<h2>Run every Brand. <em>Switch in one click.</em></h2>
					<p class="lede">
						Same carousel, two Brands: avatar, name, handle and colors follow on every page. One
						Brand on Free, 3 on Creator, 25 on Studio.
					</p>
				</div>
			</header>
			<div class="brands">
				<figure>
					<img
						src="/roasts/easysociable-com/landing/studio/brand-easysociable.jpg"
						alt="The same cover page under the EasySociable Brand"
						loading="lazy"
					/>
					<figcaption><b>EasySociable</b><span>@murphywuwu</span></figcaption>
				</figure>
				<figure>
					<img
						src="/roasts/easysociable-com/landing/studio/brand-buji.jpg"
						alt="The same cover page under the Buji Brand"
						loading="lazy"
					/>
					<figcaption><b>不急同学</b><span>@buji_ai</span></figcaption>
				</figure>
			</div>
			<div class="steps">
				<p><span>01</span>Create a Brand once: name, handle, avatar, color.</p>
				<p><span>02</span>Switch any carousel in one click.</p>
			</div>
		</div>
	</section>

	<section class="section">
		<div class="shell">
			<header class="sec-head">
				<p class="sec-id"><b>03</b> Publish</p>
				<div>
					<h2>Made by any agent. <em>Posted from your phone.</em></h2>
					<p class="lede">
						Claude Code, Codex, Cursor or any other agent makes it. Open its link on your phone, tap
						Publish, pick the app. Pages land in order, caption copied.
					</p>
				</div>
			</header>
			<div class="publish">
				<div>
					<div class="cell-head"><span>Every post, the old way</span><b>6 steps</b></div>
					<ol class="old-list">
						<li>Download the ZIP</li>
						<li>Unzip it on your laptop</li>
						<li>AirDrop the pages to your phone</li>
						<li>Pick them in the right order</li>
						<li>Type the caption again</li>
					</ol>
					<p class="cell-note">Then do it again for the next platform.</p>
				</div>
				<div>
					<div class="cell-head"><span>From your phone</span><b>2 taps</b></div>
					<div class="phones">
						<figure>
							<div class="phone-shot">
								<img
									src="/roasts/easysociable-com/landing/studio/studio-mobile.jpg"
									alt="The carousel open in Studio on a phone"
									loading="lazy"
								/>
							</div>
							<figcaption>01 / Open its link</figcaption>
						</figure>
						<figure>
							<div class="phone-shot">
								<img
									src="/roasts/easysociable-com/landing/studio/publish-mobile.jpg"
									alt="Studio's publish sheet with a share button"
									loading="lazy"
								/>
							</div>
							<figcaption>02 / Publish, pick the app</figcaption>
						</figure>
					</div>
					<div class="platforms" aria-label="Shares to">
						<span>Instagram</span><span>TikTok</span><span>RedNote</span><span>Threads</span><span
							>LinkedIn</span
						>
					</div>
					<p class="publish-foot">Pages in order · caption copied · iPhone and Android</p>
				</div>
			</div>
		</div>
	</section>

	<section class="section">
		<div class="shell">
			<header class="sec-head">
				<p class="sec-id"><b>04</b> Share</p>
				<div>
					<h2>Send your client a link. <em>They see it right away.</em></h2>
					<p class="lede">
						No account, no downloads, no files in a chat. They open the link and see every page; you
						pick whether they can also edit or publish.
					</p>
				</div>
			</header>
			<div class="share">
				<div>
					<div class="cell-head"><span>Share sheet</span><b>Creator &amp; Studio</b></div>
					<div class="phones">
						<figure>
							<div class="phone-shot">
								<img
									src="/roasts/easysociable-com/landing/studio/share-mobile.jpg"
									alt="Studio's share sheet with view, edit and publish options"
									loading="lazy"
								/>
							</div>
							<figcaption>01 / Tick what they can do</figcaption>
						</figure>
						<figure>
							<div class="phone-shot">
								<img
									src="/roasts/easysociable-com/landing/studio/shared-link-mobile.jpg"
									alt="A carousel opened from a share link"
									loading="lazy"
								/>
							</div>
							<figcaption>02 / They open it</figcaption>
						</figure>
					</div>
				</div>
				<div>
					<div class="cell-head"><span>What a link can do</span><b>No account needed</b></div>
					<div class="caps">
						<div class="row">
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								aria-hidden="true"
								><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" /><circle
									cx="12"
									cy="12"
									r="3"
								/></svg
							>
							<div><b>View</b><small>Your client approves it.</small></div>
							<em>On</em>
						</div>
						<div class="row">
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
								aria-hidden="true"><path d="M12 20h9" /><path d="m16.5 3.5 4 4L7 21H3v-4Z" /></svg
							>
							<div><b>Edit</b><small>Your assistant fixes the words.</small></div>
							<em>Optional</em>
						</div>
						<div class="row">
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
								aria-hidden="true"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg
							>
							<div><b>Publish</b><small>Your social manager posts it.</small></div>
							<em>Optional</em>
						</div>
					</div>
					<p class="share-note">
						Your Brand, images and other links stay yours. A link you turn off stops working at
						once.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="section" id="formulas">
		<div class="shell">
			<header class="sec-head">
				<p class="sec-id"><b>05</b> Formulas</p>
				<div>
					<h2>Want views? <em>Copy a carousel that already got them.</em></h2>
					<p class="lede">
						Real carousels that went viral, broken down page by page. One click and your agent makes
						yours the same way.
					</p>
				</div>
			</header>
			<div class="formula">
				<div class="formula-cover">
					<img
						src="/roasts/easysociable-com/landing/formulas/7678213754613419296/0.jpg"
						alt="Minimal Tools That Replace Bloated Apps, slide 1"
						loading="lazy"
					/>
					<span>01 / 07</span>
				</div>
				<div>
					<div class="metrics">
						<div><b>2.6M</b><small>views</small></div>
						<div><b>102.4K</b><small>likes</small></div>
						<div><b>50.5K</b><small>saves</small></div>
					</div>
					<h3>Minimal Tools That Replace Bloated Apps</h3>
					<p class="meta">
						<span>7 slides</span><span>Hook → 5 tools → bookmark CTA</span><span>@askalmcom</span>
					</p>
					<p class="prompt">
						"Create a 7-slide TikTok carousel about: 5 minimalist tools that replace 10 bloated
						apps. Narrative structure: opening hook, 5 clean tool recommendations, save and bookmark
						CTA."
					</p>
					<div class="formula-actions">
						<a class="btn" href="#start">Steal this viral carousel</a>
						<a class="text-link" href="#formulas"
							>Browse the Formula library <span aria-hidden="true">→</span></a
						>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="section" id="pricing">
		<div class="shell">
			<header class="sec-head">
				<p class="sec-id"><b>06</b> Pricing</p>
				<div>
					<h2>Start free. <em>Upgrade when you post daily or hand it off.</em></h2>
					<p class="lede">
						Every plan includes Studio editing, up to 20 slides and the five one-tap publish
						targets. No watermark on any plan.
					</p>
				</div>
			</header>
			<div class="billing">
				<div class="billing-group" role="group" aria-label="Billing">
					<button
						type="button"
						aria-pressed={billing === 'monthly'}
						onclick={() => (billing = 'monthly')}>Monthly</button
					>
					<button
						type="button"
						aria-pressed={billing === 'yearly'}
						onclick={() => (billing = 'yearly')}>Yearly</button
					>
				</div>
				<p class="billing-note">Yearly: 2 months free</p>
			</div>
			<div class="price-table" role="table" aria-label="Plans">
				<div class="pt-row pt-head" role="row">
					<div role="columnheader">Plan</div>
					<div role="columnheader">
						<span class="plan-name">Free</span><span class="price">$0</span><span class="per"
							>forever</span
						>
					</div>
					<div role="columnheader">
						<span class="plan-name">Creator <em>Popular</em></span><span class="price"
							>{billing === 'monthly' ? '$19' : '$190'}</span
						><span class="per">{billing === 'monthly' ? 'per month' : 'per year'}</span>
					</div>
					<div role="columnheader">
						<span class="plan-name">Studio</span><span class="price"
							>{billing === 'monthly' ? '$49' : '$490'}</span
						><span class="per">{billing === 'monthly' ? 'per month' : 'per year'}</span>
					</div>
				</div>
				<div class="pt-row" role="row">
					<div role="cell" class="feat">Carousels per month</div>
					<div role="cell" class="val">30</div>
					<div role="cell" class="val">Unlimited</div>
					<div role="cell" class="val">Unlimited</div>
				</div>
				<div class="pt-row" role="row">
					<div role="cell" class="feat">Brands</div>
					<div role="cell" class="val">1</div>
					<div role="cell" class="val">3</div>
					<div role="cell" class="val">25</div>
				</div>
				<div class="pt-row" role="row">
					<div role="cell" class="feat">Image library</div>
					<div role="cell" class="val">500 MB</div>
					<div role="cell" class="val">10 GB</div>
					<div role="cell" class="val">100 GB</div>
				</div>
				<div class="pt-row" role="row">
					<div role="cell" class="feat">One-tap publish</div>
					<div role="cell" class="val">5 apps</div>
					<div role="cell" class="val">5 apps</div>
					<div role="cell" class="val">5 apps</div>
				</div>
				<div class="pt-row" role="row">
					<div role="cell" class="feat">Client share links</div>
					<div role="cell" class="val muted">None</div>
					<div role="cell" class="val">View, edit</div>
					<div role="cell" class="val">All three</div>
				</div>
				<div class="pt-row pt-cta" role="row">
					<div role="cell">Start</div>
					<div role="cell"><a class="btn ghost sm" href="#start">Start free</a></div>
					<div role="cell"><a class="btn sm" href="#start">Get Creator</a></div>
					<div role="cell"><a class="btn ghost sm" href="#start">Get Studio</a></div>
				</div>
			</div>
			<div class="pt-mobile">
				<a class="btn ghost" href="#start">Start free</a>
				<a class="btn" href="#start"
					>Get Creator · {billing === 'monthly' ? '$19 / month' : '$190 / year'}</a
				>
				<a class="btn ghost" href="#start"
					>Get Studio · {billing === 'monthly' ? '$49 / month' : '$490 / year'}</a
				>
			</div>
			<div class="plan-foot">
				<ul>
					<li>Full Studio editing</li>
					<li>Up to 20 slides</li>
					<li>No watermark</li>
					<li>Cancel anytime</li>
				</ul>
				<a class="text-link" href="#pricing"
					>Full pricing details <span aria-hidden="true">→</span></a
				>
			</div>
		</div>
	</section>

	<section class="section" id="questions">
		<div class="shell">
			<header class="sec-head">
				<p class="sec-id"><b>07</b> Questions</p>
				<div>
					<h2>Short answers.</h2>
				</div>
			</header>
			<div class="faq">
				<details>
					<summary
						><span class="n">01</span>How is EasySociable different from generating carousels with
						Codex or ChatGPT?<span class="x">+</span></summary
					>
					<p class="a">
						When an agent generates carousel code, fixing one typo becomes another prompt, and the
						layout can break. EasySociable separates drafting from editing: your agent drafts, and
						in Studio you double-click any text while the layout stays locked.
					</p>
				</details>
				<details>
					<summary
						><span class="n">02</span>Can I switch the Brand on an already-created carousel?<span
							class="x">+</span
						></summary
					>
					<p class="a">
						Yes, in one click. Content and brand styling are separate. Create a Brand profile and
						switch any existing carousel to it. Colors, fonts, handles and avatars update on every
						slide.
					</p>
				</details>
				<details>
					<summary
						><span class="n">03</span>Can I post from my phone without downloading?<span class="x"
							>+</span
						></summary
					>
					<p class="a">
						Yes. Open the carousel on your phone, tap Publish, then pick Instagram, TikTok, RedNote,
						Threads or LinkedIn. The pages go to the app in order and the caption is copied for you.
					</p>
				</details>
				<details>
					<summary
						><span class="n">04</span>Who can open a share link?<span class="x">+</span></summary
					>
					<p class="a">
						Anyone with the link, no account needed. A view link shows the pages. An edit link can
						also change the text. A publish link can also post from a phone. They never see your
						Brand settings or other carousels, and a link you turn off stops working at once.
					</p>
				</details>
			</div>
		</div>
	</section>

	<section class="cta" id="start">
		<div class="shell cta-inner">
			<div>
				<p class="label">Start here</p>
				<h2>Your first carousel is one paste away.</h2>
			</div>
			<div class="cta-side">
				<p>
					Copies a prompt for Claude Code, Codex or Cursor. Your agent installs EasySociable, signs
					you in, and makes a first carousel you can edit. Free, no card.
				</p>
				<a class="btn" href="#start">
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.6"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg
					>
					Make my first carousel
				</a>
				<p class="cta-alt">No agent handy? <a href="#start">Sign up in the browser</a></p>
			</div>
		</div>
	</section>
</main>

<footer class="footer">
	<div class="shell">
		<div class="footer-grid">
			<div class="footer-brand">
				<a class="brand" href="#top">
					<span class="brand-mark" aria-hidden="true">
						<svg viewBox="0 0 32 32" fill="currentColor">
							<g transform="rotate(-20 16 27)"
								><rect x="10" y="7" width="12" height="18.5" rx="2.3" opacity="0.45" /></g
							>
							<g transform="rotate(20 16 27)"
								><rect x="10" y="7" width="12" height="18.5" rx="2.3" opacity="0.45" /></g
							>
							<rect x="10" y="5.2" width="12" height="21" rx="2.3" />
						</svg>
					</span>
					EasySociable
				</a>
				<p>
					Your agent makes the carousel. You edit every word in Studio and publish from your phone.
				</p>
			</div>
			<div>
				<h4>Product</h4>
				<ul>
					<li><a href="#pricing">Pricing</a></li>
					<li><a href="#formulas">Viral Formulas</a></li>
					<li><a href="#questions">Documentation</a></li>
					<li><a href="#start">Start Free</a></li>
				</ul>
			</div>
			<div>
				<h4>Platforms</h4>
				<ul>
					<li><a href="#examples">Instagram</a></li>
					<li><a href="#examples">TikTok</a></li>
					<li><a href="#examples">LinkedIn</a></li>
					<li><a href="#examples">Threads</a></li>
				</ul>
			</div>
			<div>
				<h4>Company</h4>
				<ul>
					<li><a href="#start">About</a></li>
					<li><a href="#start">Contact</a></li>
					<li><a href="#start">Terms</a></li>
					<li><a href="#start">Privacy</a></li>
				</ul>
			</div>
		</div>
		<div class="footer-bottom">
			<span>© 2026 EasySociable. All rights reserved.</span>
			<span class="mono">v1.4</span>
		</div>
	</div>
</footer>

<style>
	@font-face {
		font-family: Inter;
		font-style: normal;
		font-weight: 100 900;
		font-display: swap;
		src: url('/roasts/easysociable-com/inter-latin-j6BbcsN8.woff2') format('woff2');
	}
	@font-face {
		font-family: Fraunces;
		font-style: normal;
		font-weight: 500 700;
		font-display: swap;
		src: url('/roasts/easysociable-com/fraunces-latin-BOz5zopO.woff2') format('woff2');
	}

	/* Warm grey ramp. No accent: hierarchy comes from rules, spacing and type. */
	:global(:root) {
		color-scheme: dark;
		--g50: #fbfaf9;
		--g100: #ede9e8;
		--g150: #ded9d8;
		--g200: #d0c9c7;
		--g250: #c1b9b7;
		--g300: #b3a9a7;
		--g350: #a59a98;
		--g400: #988b88;
		--g450: #8a7c79;
		--g500: #7d6d6b;
		--g550: #6f615f;
		--g600: #625653;
		--g650: #564a48;
		--g700: #493f3d;
		--g750: #3d3432;
		--g800: #312928;
		--g850: #261f1e;
		--g900: #1b1514;
		--g950: #110c0b;

		--bg: var(--g950);
		--bg-soft: var(--g900);
		--surface: var(--g900);
		--surface-2: var(--g850);
		--line: color-mix(in srgb, var(--g700) 62%, transparent);
		--line-strong: var(--g700);
		--fg: var(--g50);
		--fg-2: var(--g350);
		--fg-3: var(--g450);
		--inv-bg: var(--g100);
		--inv-fg: var(--g950);

		--font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
		--font-serif: 'Fraunces', ui-serif, Georgia, serif;
		--font-mono: ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace;
		--ease: cubic-bezier(0.22, 1, 0.36, 1);
		--shell: 1200px;
		--pad: 32px;
	}

	@media (prefers-color-scheme: light) {
		:global(:root) {
			color-scheme: light;
			--bg: var(--g50);
			--bg-soft: var(--g100);
			--surface: #ffffff;
			--surface-2: var(--g100);
			--line: color-mix(in srgb, var(--g300) 58%, transparent);
			--line-strong: var(--g300);
			--fg: var(--g900);
			--fg-2: var(--g600);
			--fg-3: var(--g500);
			--inv-bg: var(--g900);
			--inv-fg: var(--g50);
		}
	}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
	:global(html) {
		scroll-behavior: smooth;
		-webkit-text-size-adjust: 100%;
	}
	[id] {
		scroll-margin-top: 74px;
	}
	:global(body) {
		margin: 0;
		background: var(--bg);
		color: var(--fg);
		font: 400 16px/1.6 var(--font-sans);
		-webkit-font-smoothing: antialiased;
		text-rendering: optimizeLegibility;
	}
	img {
		display: block;
		max-width: 100%;
		height: auto;
	}
	a {
		color: inherit;
		text-decoration: none;
	}
	button {
		font: inherit;
		color: inherit;
	}
	h1,
	h2,
	h3,
	p,
	figure,
	dl,
	dd {
		margin: 0;
	}
	h1,
	h2,
	h3 {
		text-wrap: balance;
	}
	p {
		text-wrap: pretty;
	}
	:focus-visible {
		outline: 2px solid var(--fg);
		outline-offset: 2px;
	}

	.shell {
		width: 100%;
		max-width: calc(var(--shell) + var(--pad) * 2);
		margin-inline: auto;
		padding-inline: var(--pad);
	}
	.mono {
		font-family: var(--font-mono);
		font-size: 10px;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	/* Nav */
	.nav {
		position: sticky;
		top: 0;
		z-index: 40;
		background: color-mix(in srgb, var(--bg) 74%, transparent);
		backdrop-filter: blur(20px) saturate(0.6);
		-webkit-backdrop-filter: blur(20px) saturate(0.6);
		border-bottom: 1px solid var(--line);
		padding-top: env(safe-area-inset-top);
	}
	.nav-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 60px;
		gap: 24px;
	}
	.brand {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		font-size: 14px;
		font-weight: 600;
		letter-spacing: -0.01em;
		white-space: nowrap;
	}
	.brand-mark {
		display: grid;
		place-items: center;
		width: 24px;
		height: 24px;
		border: 1px solid var(--line-strong);
		border-radius: 3px;
		color: var(--fg);
	}
	.brand-mark svg {
		width: 12px;
		height: 12px;
	}
	.brand .ver {
		padding-left: 10px;
		border-left: 1px solid var(--line);
		font-family: var(--font-mono);
		font-size: 9px;
		font-weight: 400;
		letter-spacing: 0.08em;
		color: var(--fg-3);
	}
	.nav-links {
		display: flex;
		align-items: center;
		gap: 22px;
		margin-left: auto;
		font-size: 12.5px;
		color: var(--fg-2);
	}
	.nav-links a {
		position: relative;
		padding-block: 6px;
		transition: color 130ms var(--ease);
	}
	.nav-links a::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 1px;
		background: var(--fg);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 150ms var(--ease);
	}
	.nav-links a:hover {
		color: var(--fg);
	}
	.nav-links a:hover::after {
		transform: scaleX(1);
	}
	.nav-cta {
		display: flex;
		align-items: center;
		gap: 14px;
		font-size: 12.5px;
	}
	.nav-cta .signin {
		color: var(--fg-2);
		transition: color 130ms var(--ease);
	}
	.nav-cta .signin:hover {
		color: var(--fg);
	}
	.nav-toggle {
		display: none;
		width: 36px;
		height: 36px;
		margin-right: -6px;
		place-items: center;
		border: 1px solid var(--line);
		border-radius: 3px;
		background: transparent;
		cursor: pointer;
	}
	.nav-toggle span {
		display: block;
		width: 15px;
		height: 1px;
		background: var(--fg);
		transition: transform 130ms var(--ease);
	}
	.nav-toggle span + span {
		margin-top: 4px;
	}
	.nav-toggle[aria-expanded='true'] span:first-child {
		transform: translateY(5px) rotate(45deg);
	}
	.nav-toggle[aria-expanded='true'] span:nth-child(2) {
		opacity: 0;
	}
	.nav-toggle[aria-expanded='true'] span:last-child {
		transform: translateY(-5px) rotate(-45deg);
	}
	.mobile-menu {
		display: none;
		border-top: 1px solid var(--line);
		background: color-mix(in srgb, var(--bg) 96%, transparent);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
	}
	.mobile-menu[data-open='true'] {
		display: block;
	}
	.mobile-menu nav {
		display: grid;
		padding-block: 6px 18px;
	}
	.mobile-menu a {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 13px 0;
		font-size: 15px;
		color: var(--fg-2);
		border-bottom: 1px solid var(--line);
	}
	.mobile-menu a::after {
		content: '↗';
		font-family: var(--font-mono);
		font-size: 11px;
		color: var(--fg-3);
	}
	.mobile-menu a.btn {
		justify-content: center;
		padding: 0 20px;
		border-bottom: 0;
		font-size: 13.5px;
		color: var(--inv-fg);
	}
	.mobile-menu a.btn::after {
		content: none;
	}
	.mobile-menu a:last-child {
		border-bottom: 0;
	}
	.mobile-menu .btn {
		margin-top: 12px;
	}

	/* Buttons */
	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		min-height: 46px;
		padding: 0 20px;
		border: 1px solid transparent;
		border-radius: 3px;
		background: var(--inv-bg);
		color: var(--inv-fg);
		font-size: 13.5px;
		font-weight: 600;
		white-space: nowrap;
		cursor: pointer;
		transition:
			background 130ms var(--ease),
			color 130ms var(--ease),
			border-color 130ms var(--ease);
	}
	.btn:hover {
		background: color-mix(in srgb, var(--inv-bg) 86%, var(--inv-fg));
	}
	.btn svg {
		width: 15px;
		height: 15px;
		transition: transform 130ms var(--ease);
	}
	.btn:hover svg {
		transform: translateX(3px);
	}
	.btn.sm {
		min-height: 34px;
		padding: 0 13px;
		font-size: 12px;
	}
	.btn.ghost {
		background: transparent;
		color: var(--fg);
		border-color: var(--line-strong);
	}
	.btn.ghost:hover {
		background: var(--surface-2);
		border-color: var(--fg-3);
	}
	.text-link {
		display: inline-flex;
		align-items: center;
		gap: 5px;
		font-size: 13px;
		color: var(--fg-2);
		transition: color 130ms var(--ease);
	}
	.text-link:hover {
		color: var(--fg);
	}

	/* Hero */
	.hero {
		border-bottom: 1px solid var(--line);
		padding-block: clamp(48px, 6vw, 76px) clamp(32px, 4vw, 48px);
	}
	.hero-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.42fr) minmax(280px, 0.58fr);
		gap: clamp(32px, 5vw, 72px);
		align-items: start;
		margin-top: clamp(24px, 3vw, 36px);
	}
	.eyebrow {
		display: flex;
		align-items: center;
		gap: 10px;
		font-family: var(--font-mono);
		font-size: 10px;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--fg-3);
	}
	.eyebrow::before {
		content: '';
		width: 24px;
		height: 1px;
		background: var(--fg-3);
	}
	.hero h1 {
		margin-top: 22px;
		font-family: var(--font-sans);
		font-weight: 500;
		font-size: clamp(40px, 5.4vw, 68px);
		line-height: 0.99;
		letter-spacing: -0.045em;
	}
	.hero h1 span {
		display: block;
		color: var(--fg-3);
	}
	.hero-lede {
		max-width: 54ch;
		margin-top: 0;
		font-size: 16px;
		line-height: 1.65;
		color: var(--fg-2);
	}
	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 14px 22px;
		margin-top: 26px;
	}
	.hero-note {
		max-width: 56ch;
		margin-top: 14px;
		font-size: 12px;
		line-height: 1.6;
		color: var(--fg-3);
	}
	.hero-note b {
		font-weight: 500;
		color: var(--fg-2);
	}
	.spec {
		border: 1px solid var(--line);
		border-radius: 3px;
		background: var(--surface);
	}
	.spec > div {
		display: grid;
		grid-template-columns: 88px 1fr;
		gap: 12px;
		padding: 12px 14px;
		border-bottom: 1px solid var(--line);
		font-size: 12px;
	}
	.spec > div:last-child {
		border-bottom: 0;
	}
	.spec dt {
		font-family: var(--font-mono);
		font-size: 9px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--fg-3);
		padding-top: 2px;
	}
	.spec dd {
		color: var(--fg-2);
		line-height: 1.5;
	}
	.spec dd b {
		font-weight: 500;
		color: var(--fg);
	}

	.board {
		margin-top: clamp(36px, 4.5vw, 56px);
		border: 1px solid var(--line);
		border-radius: 3px;
		background: var(--surface);
		overflow: hidden;
	}
	.board-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		padding: 9px 14px;
		border-bottom: 1px solid var(--line);
		font-family: var(--font-mono);
		font-size: 9.5px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--fg-3);
	}
	.board-bar .live {
		display: flex;
		align-items: center;
		gap: 6px;
		color: var(--fg-2);
	}
	.board-bar .live::before {
		content: '';
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background: var(--fg-2);
	}
	.board-grid {
		display: grid;
		grid-template-columns: 0.95fr 1.15fr 0.9fr;
		gap: 1px;
		background: var(--line);
	}
	.board-cell {
		background: var(--bg);
		padding: clamp(18px, 2.4vw, 26px);
		min-width: 0;
		display: flex;
		flex-direction: column;
	}
	.cell-label {
		font-family: var(--font-mono);
		font-size: 9.5px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--fg-3);
		padding-bottom: 14px;
		border-bottom: 1px solid var(--line);
	}
	.terminal {
		margin-top: 16px;
		font-family: var(--font-mono);
		font-size: 11px;
		line-height: 1.95;
		color: var(--fg-2);
	}
	.terminal p {
		display: flex;
		gap: 8px;
		min-width: 0;
	}
	.terminal p::before {
		flex-shrink: 0;
		width: 8px;
		color: var(--fg-3);
	}
	.terminal .cmd {
		color: var(--fg);
	}
	.terminal .cmd::before {
		content: '>';
	}
	.terminal .ok::before {
		content: '✓';
	}
	.terminal span {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.board-note {
		margin-top: auto;
		padding-top: 16px;
		font-size: 11.5px;
		line-height: 1.55;
		color: var(--fg-3);
	}
	.post-wrap {
		display: grid;
		place-items: center;
		flex: 1;
		padding-block: 8px;
		background-image:
			linear-gradient(var(--line) 1px, transparent 1px),
			linear-gradient(90deg, var(--line) 1px, transparent 1px);
		background-size: 40px 40px;
		background-position: center;
	}
	.post {
		width: min(286px, 100%);
		aspect-ratio: 4 / 5;
		padding: 22px 20px 18px;
		background: #ffffff;
		color: #17140f;
		box-shadow: 0 18px 40px -24px rgb(0 0 0 / 0.85);
		display: flex;
		flex-direction: column;
		transition: transform 180ms var(--ease);
	}
	.board:hover .post {
		transform: translateY(-3px);
	}
	.post-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		font-size: 10.5px;
		font-weight: 700;
	}
	.post-top span {
		color: #7d6d6b;
	}
	.post-pill {
		padding: 3px 8px;
		border: 1px solid #d0c9c7;
		font-size: 7px;
		letter-spacing: 0.14em;
		color: #493f3d;
	}
	.post-idx {
		margin-top: 30px;
		font-family: var(--font-mono);
		font-size: 10px;
		color: #7d6d6b;
	}
	.post h3 {
		margin-top: 10px;
		font-family: var(--font-serif);
		font-weight: 600;
		font-size: 30px;
		line-height: 1.06;
		letter-spacing: -0.025em;
		color: #17140f;
	}
	.post h3 span {
		color: #7d6d6b;
	}
	.post-caption {
		margin-top: auto;
		font-size: 10px;
		line-height: 1.5;
		color: #625653;
	}
	.post-foot {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 12px;
		padding-top: 10px;
		border-top: 1px solid #ded9d8;
		font-size: 7.5px;
		font-weight: 700;
		letter-spacing: 0.14em;
		color: #625653;
	}
	.export {
		margin-top: 16px;
		display: grid;
		gap: 0;
	}
	.export div {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 10px;
		padding: 7px 0;
		border-bottom: 1px solid var(--line);
		font-family: var(--font-mono);
		font-size: 10px;
		color: var(--fg-3);
	}
	.export div span:last-child {
		color: var(--fg-2);
	}
	.export div:last-child {
		border-bottom: 0;
	}
	.mini-phone {
		margin-top: 16px;
		width: min(170px, 100%);
		padding: 4px;
		border: 1px solid var(--line-strong);
		border-radius: 20px;
		background: var(--surface-2);
	}
	.mini-phone img {
		border-radius: 16px;
	}
	.board-cell .tag {
		margin-top: 12px;
		font-family: var(--font-mono);
		font-size: 9px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--fg-3);
	}

	/* Sections */
	.section {
		border-bottom: 1px solid var(--line);
		padding-block: clamp(48px, 6vw, 76px);
	}
	.sec-head {
		display: grid;
		grid-template-columns: 148px 1fr;
		gap: clamp(16px, 3vw, 40px);
		align-items: start;
		margin-bottom: clamp(28px, 4vw, 44px);
	}
	.sec-id {
		display: flex;
		align-items: baseline;
		gap: 8px;
		font-family: var(--font-mono);
		font-size: 10px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--fg-3);
		padding-top: 6px;
	}
	.sec-id b {
		font-weight: 400;
		color: var(--fg-2);
	}
	.sec-head h2 {
		font-family: var(--font-sans);
		font-weight: 500;
		font-size: clamp(30px, 3.4vw, 42px);
		line-height: 1.04;
		letter-spacing: -0.035em;
	}
	.sec-head h2 em {
		font-style: normal;
		color: var(--fg-3);
	}
	.sec-head .lede {
		max-width: 62ch;
		margin-top: 12px;
		font-size: 15px;
		line-height: 1.65;
		color: var(--fg-2);
	}

	.split {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1px;
		background: var(--line);
		border: 1px solid var(--line);
		border-radius: 3px;
		overflow: hidden;
	}
	.split > div {
		display: flex;
		flex-direction: column;
		background: var(--bg);
		padding: clamp(18px, 2.6vw, 28px);
		min-width: 0;
	}
	.cell-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		padding-bottom: 14px;
		border-bottom: 1px solid var(--line);
		font-family: var(--font-mono);
		font-size: 9.5px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--fg-3);
	}
	.cell-head b {
		font-weight: 400;
		color: var(--fg-2);
	}
	.bubbles {
		display: grid;
		gap: 7px;
		margin-top: 18px;
		min-height: 96px;
	}
	.bubble {
		width: fit-content;
		max-width: 94%;
		margin-left: auto;
		padding: 9px 11px;
		border: 1px solid var(--line);
		border-radius: 3px;
		background: var(--surface);
		font-size: 12px;
		line-height: 1.5;
		color: var(--fg-2);
	}
	.bubble.bad {
		border-style: dashed;
		background: transparent;
	}
	.cell-note {
		margin-top: auto;
		padding-top: 18px;
		font-size: 11.5px;
		color: var(--fg-3);
	}
	.phone-shot {
		width: min(210px, 100%);
		margin-top: 18px;
		padding: 5px;
		border: 1px solid var(--line-strong);
		border-radius: 24px;
		background: var(--surface);
		overflow: hidden;
	}
	.phone-shot img {
		border-radius: 19px;
	}

	.brands {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1px;
		background: var(--line);
		border: 1px solid var(--line);
		border-radius: 3px;
		overflow: hidden;
	}
	.brands figure {
		background: var(--bg);
		padding: clamp(16px, 2.4vw, 24px);
	}
	.brands img {
		width: 100%;
		border: 1px solid var(--line);
		border-radius: 2px;
	}
	.brands figcaption {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 12px;
		padding-top: 12px;
		font-size: 11.5px;
		color: var(--fg-3);
	}
	.brands figcaption b {
		font-weight: 500;
		color: var(--fg);
	}
	.steps {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1px;
		margin-top: 1px;
		background: var(--line);
		border: 1px solid var(--line);
		border-radius: 3px;
		overflow: hidden;
	}
	.steps p {
		display: flex;
		align-items: center;
		gap: 12px;
		background: var(--bg);
		padding: 14px 18px;
		font-size: 12.5px;
		color: var(--fg-2);
	}
	.steps span {
		font-family: var(--font-mono);
		font-size: 9px;
		color: var(--fg-3);
	}

	.publish {
		display: grid;
		grid-template-columns: 0.9fr 1.1fr;
		gap: 1px;
		background: var(--line);
		border: 1px solid var(--line);
		border-radius: 3px;
		overflow: hidden;
	}
	.publish > div {
		background: var(--bg);
		padding: clamp(18px, 2.6vw, 28px);
		min-width: 0;
	}
	.old-list {
		margin: 16px 0 0;
		padding: 0;
		list-style: none;
		counter-reset: s;
	}
	.old-list li {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 11px 0;
		border-bottom: 1px solid var(--line);
		font-size: 13px;
		color: var(--fg-2);
		counter-increment: s;
	}
	.old-list li:last-child {
		border-bottom: 0;
	}
	.old-list li::before {
		content: counter(s, decimal-leading-zero);
		font-family: var(--font-mono);
		font-size: 9px;
		color: var(--fg-3);
	}
	.phones {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: clamp(10px, 2vw, 18px);
	}
	.phones figure {
		min-width: 0;
	}
	.phones .phone-shot {
		width: 100%;
		margin-top: 0;
	}
	.phones figcaption {
		margin-top: 10px;
		font-family: var(--font-mono);
		font-size: 9px;
		line-height: 1.5;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--fg-3);
	}
	.platforms {
		display: flex;
		flex-wrap: wrap;
		gap: 5px;
		margin-top: 16px;
	}
	.platforms span {
		padding: 4px 8px;
		border: 1px solid var(--line);
		border-radius: 2px;
		font-family: var(--font-mono);
		font-size: 9px;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: var(--fg-2);
	}
	.publish-foot {
		margin-top: 14px;
		font-size: 11.5px;
		color: var(--fg-3);
	}

	.share {
		display: grid;
		grid-template-columns: 0.9fr 1.1fr;
		gap: 1px;
		background: var(--line);
		border: 1px solid var(--line);
		border-radius: 3px;
		overflow: hidden;
	}
	.share > div {
		background: var(--bg);
		padding: clamp(18px, 2.6vw, 28px);
		min-width: 0;
	}
	.caps {
		margin-top: 4px;
	}
	.caps .row {
		display: grid;
		grid-template-columns: 18px 1fr auto;
		align-items: center;
		gap: 14px;
		padding: 15px 0;
		border-bottom: 1px solid var(--line);
	}
	.caps .row:last-of-type {
		border-bottom: 0;
	}
	.caps svg {
		width: 15px;
		height: 15px;
		color: var(--fg-2);
	}
	.caps b {
		display: block;
		font-size: 13px;
		font-weight: 500;
	}
	.caps small {
		display: block;
		margin-top: 1px;
		font-size: 11.5px;
		line-height: 1.45;
		color: var(--fg-3);
	}
	.caps em {
		font-style: normal;
		font-family: var(--font-mono);
		font-size: 8.5px;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--fg-3);
		white-space: nowrap;
	}
	.share-note {
		margin-top: 16px;
		padding-top: 14px;
		border-top: 1px solid var(--line);
		font-size: 11.5px;
		line-height: 1.55;
		color: var(--fg-3);
	}

	.formula {
		display: grid;
		grid-template-columns: 210px 1fr;
		gap: clamp(20px, 3vw, 36px);
		padding: clamp(16px, 2.4vw, 24px);
		border: 1px solid var(--line);
		border-radius: 3px;
		background: var(--bg);
	}
	.formula-cover {
		position: relative;
		overflow: hidden;
		border: 1px solid var(--line);
		border-radius: 2px;
		background: var(--surface);
		aspect-ratio: 9 / 14;
	}
	.formula-cover img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.formula-cover span {
		position: absolute;
		top: 8px;
		right: 8px;
		padding: 3px 7px;
		border-radius: 2px;
		background: rgb(0 0 0 / 0.75);
		font-family: var(--font-mono);
		font-size: 8.5px;
		letter-spacing: 0.06em;
		color: #fbfaf9;
	}
	.metrics {
		display: flex;
		gap: 20px;
		padding-bottom: 14px;
		border-bottom: 1px solid var(--line);
	}
	.metrics div {
		display: flex;
		align-items: baseline;
		gap: 5px;
	}
	.metrics b {
		font-size: 19px;
		font-weight: 500;
		letter-spacing: -0.02em;
	}
	.metrics small {
		font-family: var(--font-mono);
		font-size: 8.5px;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--fg-3);
	}
	.formula h3 {
		margin-top: 14px;
		font-family: var(--font-serif);
		font-size: 25px;
		font-weight: 600;
		letter-spacing: -0.02em;
		line-height: 1.15;
	}
	.formula .meta {
		display: flex;
		flex-wrap: wrap;
		gap: 4px 14px;
		margin-top: 8px;
		font-family: var(--font-mono);
		font-size: 9px;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--fg-3);
	}
	.prompt {
		margin-top: 14px;
		padding: 11px 12px;
		border: 1px solid var(--line);
		border-radius: 2px;
		background: var(--surface);
		font-family: var(--font-mono);
		font-size: 10px;
		line-height: 1.7;
		color: var(--fg-3);
		display: -webkit-box;
		line-clamp: 3;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.formula-actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 14px 20px;
		margin-top: 16px;
	}

	/* Pricing table */
	.billing {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		margin-bottom: 16px;
	}
	.billing-group {
		display: inline-flex;
		border: 1px solid var(--line);
		border-radius: 3px;
		overflow: hidden;
		font-size: 11.5px;
	}
	.billing-group button {
		border: 0;
		border-right: 1px solid var(--line);
		background: transparent;
		padding: 7px 13px;
		color: var(--fg-3);
		cursor: pointer;
		transition:
			background 120ms var(--ease),
			color 120ms var(--ease);
	}
	.billing-group button:last-child {
		border-right: 0;
	}
	.billing-group button[aria-pressed='true'] {
		background: var(--fg);
		color: var(--bg);
	}
	.billing-note {
		font-family: var(--font-mono);
		font-size: 9px;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--fg-3);
	}
	.price-table {
		border: 1px solid var(--line);
		border-radius: 3px;
		overflow: hidden;
		background: var(--line);
		display: grid;
		gap: 1px;
	}
	.pt-row {
		display: grid;
		grid-template-columns: 1.5fr 1fr 1fr 1fr;
		gap: 1px;
		background: var(--line);
	}
	.pt-row > div {
		background: var(--bg);
		padding: 13px 16px;
		min-width: 0;
		font-size: 12.5px;
		color: var(--fg-2);
		display: flex;
		align-items: center;
	}
	.pt-row > div:nth-child(3) {
		background: var(--surface-2);
	}
	.pt-row.pt-head > div {
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-end;
		gap: 3px;
		padding-block: 18px;
		background: var(--surface);
	}
	.pt-head .plan-name {
		display: flex;
		align-items: center;
		gap: 7px;
		font-size: 13px;
		font-weight: 600;
		color: var(--fg);
	}
	.pt-head .plan-name em {
		font-style: normal;
		padding: 2px 5px;
		border: 1px solid var(--line-strong);
		border-radius: 2px;
		font-family: var(--font-mono);
		font-size: 7.5px;
		font-weight: 400;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--fg-3);
	}
	.pt-head .price {
		font-family: var(--font-serif);
		font-size: 27px;
		font-weight: 600;
		letter-spacing: -0.03em;
		color: var(--fg);
		line-height: 1;
	}
	.pt-head .per {
		font-size: 10.5px;
		color: var(--fg-3);
	}
	.pt-head > div:first-child {
		justify-content: flex-end;
		font-family: var(--font-mono);
		font-size: 9px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--fg-3);
	}
	.pt-row .feat {
		color: var(--fg);
		font-weight: 500;
	}
	.pt-row .val {
		font-family: var(--font-mono);
		font-size: 11px;
		letter-spacing: 0.02em;
	}
	.pt-row .val.muted {
		color: var(--fg-3);
	}
	.pt-cta > div {
		padding: 12px 16px;
	}
	.pt-cta .btn {
		width: 100%;
	}
	.pt-cta > div:first-child {
		display: flex;
		align-items: center;
		font-family: var(--font-mono);
		font-size: 9px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--fg-3);
	}
	.pt-mobile {
		display: none;
	}
	.plan-foot {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 10px 24px;
		margin-top: 14px;
		font-size: 11.5px;
		color: var(--fg-3);
	}
	.plan-foot ul {
		display: flex;
		flex-wrap: wrap;
		gap: 6px 18px;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.plan-foot li {
		display: flex;
		align-items: center;
		gap: 6px;
	}
	.plan-foot li::before {
		content: '';
		width: 3px;
		height: 3px;
		background: var(--fg-3);
	}

	/* FAQ */
	.faq {
		border-top: 1px solid var(--line);
	}
	.faq details {
		border-bottom: 1px solid var(--line);
	}
	.faq summary {
		display: grid;
		grid-template-columns: 40px 1fr 24px;
		align-items: center;
		gap: 16px;
		padding: 16px 0;
		font-size: 14.5px;
		font-weight: 500;
		cursor: pointer;
		list-style: none;
	}
	.faq summary::-webkit-details-marker {
		display: none;
	}
	.faq summary .n {
		font-family: var(--font-mono);
		font-size: 9px;
		font-weight: 400;
		color: var(--fg-3);
	}
	.faq summary .x {
		justify-self: end;
		font-family: var(--font-mono);
		font-size: 16px;
		font-weight: 400;
		color: var(--fg-3);
		transition: transform 130ms var(--ease);
	}
	.faq details[open] summary .x {
		transform: rotate(45deg);
	}
	.faq .a {
		max-width: 76ch;
		padding: 0 0 18px 56px;
		font-size: 13.5px;
		line-height: 1.7;
		color: var(--fg-2);
	}

	/* CTA */
	.cta {
		background: var(--fg);
		color: var(--bg);
		border-bottom: 1px solid var(--line);
	}
	.cta-inner {
		display: grid;
		grid-template-columns: 1.35fr 0.65fr;
		gap: clamp(24px, 4vw, 56px);
		align-items: end;
		padding-block: clamp(48px, 6vw, 76px);
	}
	.cta .label {
		font-family: var(--font-mono);
		font-size: 9.5px;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		opacity: 0.6;
	}
	.cta h2 {
		margin-top: 16px;
		font-family: var(--font-sans);
		font-weight: 500;
		font-size: clamp(32px, 4.4vw, 54px);
		line-height: 1.01;
		letter-spacing: -0.04em;
		max-width: 18ch;
	}
	.cta-side p {
		font-size: 13px;
		line-height: 1.65;
		opacity: 0.7;
		max-width: 38ch;
	}
	.cta-side .btn {
		margin-top: 20px;
		background: var(--bg);
		color: var(--fg);
	}
	.cta-side .btn:hover {
		background: color-mix(in srgb, var(--bg) 88%, var(--fg));
	}
	.cta-alt {
		margin-top: 12px;
		font-size: 11.5px;
		opacity: 0.6;
	}
	.cta-alt a {
		text-decoration: underline;
		text-underline-offset: 3px;
	}

	/* Footer */
	.footer {
		padding-block: 40px 32px;
	}
	.footer-grid {
		display: grid;
		grid-template-columns: 1.8fr repeat(3, 1fr);
		gap: 32px;
	}
	.footer-brand p {
		margin-top: 10px;
		max-width: 36ch;
		font-size: 11.5px;
		line-height: 1.6;
		color: var(--fg-3);
	}
	.footer h4 {
		margin: 0 0 10px;
		font-family: var(--font-mono);
		font-size: 9px;
		font-weight: 400;
		letter-spacing: 0.11em;
		text-transform: uppercase;
		color: var(--fg-3);
	}
	.footer ul {
		display: grid;
		gap: 7px;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.footer li a {
		font-size: 12px;
		color: var(--fg-2);
		transition: color 130ms var(--ease);
	}
	.footer li a:hover {
		color: var(--fg);
	}
	.footer-bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		margin-top: 32px;
		padding-top: 16px;
		border-top: 1px solid var(--line);
		font-size: 10.5px;
		color: var(--fg-3);
	}

	/* Motion */
	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(8px);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}
	.rise {
		animation: rise 360ms var(--ease) both;
		animation-delay: var(--d, 0ms);
	}
	@media (prefers-reduced-motion: reduce) {
		:global(html) {
			scroll-behavior: auto;
		}
		*,
		*::before,
		*::after {
			animation: none !important;
			transition: none !important;
		}
	}

	/* Responsive */
	@media (max-width: 1000px) {
		.nav-links {
			display: none;
		}
		.nav-cta {
			margin-left: auto;
		}
		.nav-toggle {
			display: grid;
		}
		.hero-grid {
			grid-template-columns: 1fr;
		}
		.spec {
			max-width: 520px;
		}
		.board-grid {
			grid-template-columns: 1fr 1fr;
		}
		.board-cell:last-child {
			grid-column: 1 / -1;
		}
		.board-cell:last-child {
			display: grid;
			grid-template-columns: 1fr 200px;
			gap: 20px;
			align-items: center;
		}
		.board-cell:last-child .mini-phone {
			margin: 0;
		}
	}
	@media (max-width: 800px) {
		:global(:root) {
			--pad: 22px;
		}
		.nav-cta {
			display: none;
		}
		.sec-head {
			grid-template-columns: 1fr;
			gap: 10px;
		}
		.sec-id {
			padding-top: 0;
		}
		.split,
		.publish,
		.share {
			grid-template-columns: 1fr;
		}
		.brands figure {
			padding: 10px;
		}
		.brands figcaption {
			flex-direction: column;
			gap: 2px;
			font-size: 10.5px;
		}
		.formula {
			grid-template-columns: 1fr;
		}
		.formula-cover {
			width: 200px;
			margin-inline: auto;
		}
		.cta-inner {
			grid-template-columns: 1fr;
		}
		.footer-grid {
			grid-template-columns: 1fr 1fr;
		}
		.pt-row {
			grid-template-columns: 1.05fr 0.9fr 0.9fr 0.9fr;
		}
		.pt-row > div {
			padding: 10px 8px;
			font-size: 11px;
		}
		.pt-head .price {
			font-size: 20px;
		}
		.pt-head .plan-name {
			font-size: 11px;
			gap: 4px;
			flex-wrap: wrap;
		}
		.pt-head .plan-name em {
			font-size: 6.5px;
			padding: 1px 4px;
		}
		.pt-head .per {
			font-size: 9px;
		}
		.pt-row .val {
			font-size: 9.5px;
		}
		.pt-cta .btn {
			padding: 0 8px;
			font-size: 11px;
		}
	}
	@media (max-width: 620px) {
		:global(:root) {
			--pad: 18px;
		}
		.hero {
			padding-top: 36px;
		}
		.hero h1 {
			font-size: clamp(36px, 10.5vw, 48px);
		}
		.steps {
			grid-template-columns: 1fr;
		}
		.board-grid {
			grid-template-columns: 1fr;
		}
		.board-cell:last-child {
			grid-template-columns: 1fr;
		}
		.board-cell:last-child .mini-phone {
			width: 140px;
		}
		.phones {
			gap: 8px;
		}
		.phones .phone-shot {
			padding: 3px;
			border-radius: 18px;
		}
		.phones .phone-shot img {
			border-radius: 14px;
		}
		.footer-grid {
			grid-template-columns: 1fr;
			gap: 22px;
		}
		.footer-bottom {
			flex-direction: column;
			align-items: flex-start;
		}
		.hero-actions .btn {
			width: 100%;
		}
		.billing {
			flex-direction: column;
			align-items: flex-start;
			gap: 8px;
		}
		.pt-row {
			grid-template-columns: 1.05fr 0.85fr 0.85fr 0.85fr;
		}
		.pt-row > div {
			padding: 9px 6px;
			font-size: 10.5px;
		}
		.pt-head > div:first-child {
			font-size: 7.5px;
		}
		.pt-head .price {
			font-size: 18px;
		}
		.pt-head .per {
			font-size: 8px;
		}
		.pt-row .feat {
			font-size: 10.5px;
		}
		.pt-row .val {
			font-size: 8.5px;
		}
		.pt-head .plan-name em {
			display: none;
		}
		.pt-cta {
			display: none;
		}
		.pt-mobile {
			display: grid;
			gap: 8px;
			margin-top: 10px;
		}
		.plan-foot {
			flex-direction: column;
			align-items: flex-start;
		}
		.faq summary {
			grid-template-columns: 28px 1fr 20px;
			gap: 10px;
			font-size: 13.5px;
		}
		.faq .a {
			padding-left: 38px;
		}
	}
</style>
