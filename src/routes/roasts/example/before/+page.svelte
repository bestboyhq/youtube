<!-- Captured 2026-11-04 from https://shipnote.example. Do not edit: this is the site as it was. -->
<script lang="ts">
	import '@fontsource-variable/inter';
</script>

<svelte:head>
	<title>Shipnote AI - Supercharge Your Workflow</title>
</svelte:head>

<div class="page">
	<div class="blob one"></div>
	<div class="blob two"></div>
	<div class="blob three"></div>

	<header>
		<span class="logo">✦ Shipnote AI</span>
		<nav>
			<a href="#features">Features</a>
			<a href="#features">Pricing</a>
			<a href="#features">About</a>
			<a href="#features">Blog</a>
		</nav>
		<a class="btn gradient small" href="#cta">Get Started 🚀</a>
	</header>

	<section class="hero">
		<span class="pill">✨ Introducing Shipnote AI 2.0</span>
		<h1>Supercharge Your Workflow with <em>AI-Powered Innovation</em></h1>
		<p>
			Unlock the full potential of your team with our cutting-edge platform. Seamlessly streamline
			your processes and elevate your productivity to the next level.
		</p>
		<div class="actions">
			<a class="btn gradient" href="#cta">Get Started Free →</a>
			<a class="btn glass" href="#features">Learn More</a>
		</div>
		<ul class="bullets">
			<li>🚀 Lightning fast</li>
			<li>⚡ Seamless integration</li>
			<li>🔒 Enterprise-grade security</li>
		</ul>
	</section>

	<section class="trusted">
		<p>Trusted by 10,000+ innovative teams worldwide</p>
		<div class="logos">
			<span>Acme</span><span>Globex</span><span>Initech</span><span>Umbrella</span><span>Hooli</span
			>
		</div>
	</section>

	<section class="features" id="features">
		<h2>Why Choose Shipnote AI?</h2>
		<p class="sub">Everything you need to succeed, all in one place.</p>
		<div class="cards">
			<div class="card">
				<span class="icon">🤖</span>
				<h3>AI-Powered</h3>
				<p>
					Leverage the power of cutting-edge AI to transform the way you work and unlock new
					possibilities for your team.
				</p>
			</div>
			<div class="card">
				<span class="icon">⚡</span>
				<h3>Seamless Integration</h3>
				<p>
					Leverage the power of seamless integrations to transform the way you work and unlock new
					possibilities for your team.
				</p>
			</div>
			<div class="card">
				<span class="icon">📈</span>
				<h3>Scalable Solutions</h3>
				<p>
					Leverage the power of scalable solutions to transform the way you work and unlock new
					possibilities for your team.
				</p>
			</div>
		</div>
	</section>

	<section class="cta" id="cta">
		<h2>Ready to Transform Your Workflow?</h2>
		<p>Join thousands of teams already revolutionizing their productivity with Shipnote AI.</p>
		<a class="btn white" href="#cta">Start Your Free Trial Today 🚀</a>
	</section>

	<footer>© 2026 Shipnote AI. All rights reserved. Made with ❤️ and AI.</footer>
</div>

<style>
	:global(body) {
		margin: 0;
		background: #0b0a1f;
	}

	.page {
		position: relative;
		overflow: hidden;
		min-height: 100vh;
		color: #fff;
		font-family: 'Inter Variable', sans-serif;
		text-align: center;
	}

	.page :global(*) {
		box-sizing: border-box;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	.blob {
		position: absolute;
		z-index: 0;
		border-radius: 50%;
		filter: blur(120px);
		opacity: 0.55;
		pointer-events: none;
	}

	.one {
		top: -200px;
		left: -150px;
		width: 600px;
		height: 600px;
		background: #8b5cf6;
	}

	.two {
		top: 100px;
		right: -200px;
		width: 550px;
		height: 550px;
		background: #ec4899;
	}

	.three {
		top: 1100px;
		left: 30%;
		width: 500px;
		height: 500px;
		background: #06b6d4;
	}

	header,
	section,
	footer {
		position: relative;
		z-index: 1;
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 1200px;
		margin: 0 auto;
		padding: 24px 32px;
	}

	.logo {
		background: linear-gradient(90deg, #a78bfa, #f472b6);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		font-size: 24px;
		font-weight: 800;
	}

	nav {
		display: flex;
		gap: 36px;
		color: rgb(255 255 255 / 0.75);
		font-size: 15px;
		font-weight: 500;
	}

	.btn {
		display: inline-block;
		padding: 16px 32px;
		border-radius: 999px;
		font-size: 17px;
		font-weight: 700;
	}

	.small {
		padding: 10px 22px;
		font-size: 15px;
	}

	.gradient {
		background: linear-gradient(90deg, #8b5cf6, #ec4899);
		box-shadow: 0 10px 40px -8px rgb(236 72 153 / 0.6);
	}

	.glass {
		border: 1px solid rgb(255 255 255 / 0.2);
		background: rgb(255 255 255 / 0.08);
		backdrop-filter: blur(10px);
	}

	.white {
		background: #fff;
		color: #7c3aed;
	}

	.hero {
		max-width: 960px;
		margin: 0 auto;
		padding: 96px 32px 72px;
	}

	.pill {
		display: inline-block;
		padding: 8px 18px;
		border: 1px solid rgb(167 139 250 / 0.4);
		border-radius: 999px;
		background: rgb(139 92 246 / 0.15);
		color: #c4b5fd;
		font-size: 14px;
		font-weight: 600;
	}

	h1 {
		margin: 28px 0 0;
		font-size: 72px;
		font-weight: 800;
		line-height: 1.1;
		letter-spacing: -0.02em;
	}

	h1 em {
		background: linear-gradient(90deg, #a78bfa, #f472b6, #22d3ee);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		font-style: normal;
	}

	.hero > p {
		max-width: 680px;
		margin: 28px auto 0;
		color: rgb(255 255 255 / 0.7);
		font-size: 20px;
		line-height: 1.6;
	}

	.actions {
		display: flex;
		justify-content: center;
		gap: 16px;
		margin-top: 40px;
	}

	.bullets {
		display: flex;
		justify-content: center;
		gap: 32px;
		margin: 40px 0 0;
		padding: 0;
		list-style: none;
		color: rgb(255 255 255 / 0.8);
		font-size: 15px;
	}

	.trusted {
		padding: 48px 32px;
	}

	.trusted p {
		margin: 0;
		color: rgb(255 255 255 / 0.5);
		font-size: 14px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.12em;
	}

	.logos {
		display: flex;
		justify-content: center;
		gap: 64px;
		margin-top: 28px;
		color: rgb(255 255 255 / 0.35);
		font-size: 26px;
		font-weight: 800;
	}

	.features {
		max-width: 1200px;
		margin: 0 auto;
		padding: 96px 32px;
	}

	h2 {
		margin: 0;
		font-size: 48px;
		font-weight: 800;
		letter-spacing: -0.02em;
	}

	.sub {
		margin: 16px 0 0;
		color: rgb(255 255 255 / 0.65);
		font-size: 19px;
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 28px;
		margin-top: 64px;
	}

	.card {
		padding: 40px 32px;
		border: 1px solid rgb(255 255 255 / 0.12);
		border-radius: 24px;
		background: rgb(255 255 255 / 0.05);
		backdrop-filter: blur(16px);
		box-shadow: 0 20px 60px -20px rgb(139 92 246 / 0.5);
	}

	.icon {
		display: inline-grid;
		place-items: center;
		width: 64px;
		height: 64px;
		border-radius: 18px;
		background: linear-gradient(135deg, #8b5cf6, #ec4899);
		font-size: 30px;
	}

	h3 {
		margin: 24px 0 0;
		font-size: 22px;
		font-weight: 700;
	}

	.card p {
		margin: 12px 0 0;
		color: rgb(255 255 255 / 0.65);
		font-size: 16px;
		line-height: 1.6;
	}

	.cta {
		max-width: 1136px;
		margin: 32px auto 96px;
		padding: 80px 32px;
		border-radius: 32px;
		background: linear-gradient(135deg, #7c3aed, #db2777);
	}

	.cta p {
		margin: 16px 0 36px;
		color: rgb(255 255 255 / 0.85);
		font-size: 19px;
	}

	footer {
		padding: 32px;
		border-top: 1px solid rgb(255 255 255 / 0.1);
		color: rgb(255 255 255 / 0.45);
		font-size: 14px;
	}
</style>
