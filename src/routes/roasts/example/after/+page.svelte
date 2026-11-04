<script lang="ts">
	import '@fontsource-variable/inter';

	const release = [
		{
			group: 'Features',
			items: [
				{ text: 'Export invoices as CSV', pr: 412, by: 'MK' },
				{ text: 'Dark mode for the dashboard', pr: 398, by: 'AL' }
			]
		},
		{
			group: 'Fixes',
			items: [
				{ text: 'Totals no longer round twice on multi-currency invoices', pr: 405, by: 'JS' }
			]
		},
		{
			group: 'Breaking',
			items: [{ text: '/v1/invoices is gone, use /v2/invoices', pr: 401, by: 'MK' }]
		}
	];

	const steps = [
		{
			title: 'Install the GitHub app',
			text: 'Pick the repositories. Shipnote reads pull requests and labels, never your code.'
		},
		{
			title: 'Merge as usual',
			text: 'Each merged pull request lands in Features, Fixes or Breaking by its labels and title.'
		},
		{
			title: 'Edit the draft, then publish',
			text: 'A draft release waits on GitHub. Nothing goes out until you press Publish.'
		}
	];
</script>

<svelte:head>
	<title>Shipnote - Release notes from merged pull requests</title>
</svelte:head>

<div class="page">
	<header>
		<span class="logo">Shipnote</span>
		<nav>
			<a href="#how">How it works</a>
			<a href="#pricing">Pricing</a>
			<a class="button small" href="#install">Install on GitHub</a>
		</nav>
	</header>

	<section class="hero">
		<h1>Release notes, written from your merged pull requests.</h1>
		<p class="lede">
			Shipnote sorts every pull request merged to main into features, fixes and breaking changes,
			and keeps a draft release ready for you to edit. Nothing publishes until you do.
		</p>
		<div class="actions" id="install">
			<a class="button" href="#install">Install on GitHub</a>
			<a class="link" href="#sample">See a sample release →</a>
		</div>
		<p class="fine" id="pricing">
			Free for public repositories · $8 a month per private repository
		</p>
	</section>

	<section class="window" id="sample" aria-label="A draft release in Shipnote">
		<div class="titlebar">
			<span class="dots"><i></i><i></i><i></i></span>
			<span>acme/invoices · v2.4.0</span>
			<span class="badge">Draft</span>
		</div>
		<div class="release">
			{#each release as { group, items } (group)}
				<h2>{group}</h2>
				<ul>
					{#each items as { text, pr, by } (pr)}
						<li>
							<span class="avatar">{by}</span>
							<span>{text}</span>
							<span class="pr">#{pr}</span>
						</li>
					{/each}
				</ul>
			{/each}
		</div>
	</section>

	<section class="how" id="how">
		<h2>How it works</h2>
		<ol>
			{#each steps as { title, text }, i (title)}
				<li>
					<span class="number">{i + 1}</span>
					<h3>{title}</h3>
					<p>{text}</p>
				</li>
			{/each}
		</ol>
	</section>

	<footer>
		<span class="logo">Shipnote</span>
		<span>© 2026 Shipnote</span>
	</footer>
</div>

<style>
	:global(body) {
		margin: 0;
		background: #fbfaf7;
	}

	.page {
		--ink: #16150f;
		--muted: #5f5d55;
		--line: #e6e3da;
		--accent: #2f6f3e;
		max-width: 1120px;
		margin: 0 auto;
		padding: 0 40px;
		color: var(--ink);
		font-family: 'Inter Variable', sans-serif;
		-webkit-font-smoothing: antialiased;
	}

	.page :global(*) {
		box-sizing: border-box;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 72px;
	}

	.logo {
		font-size: 17px;
		font-weight: 650;
		letter-spacing: -0.02em;
	}

	nav {
		display: flex;
		align-items: center;
		gap: 28px;
		color: var(--muted);
		font-size: 14px;
		font-weight: 500;
	}

	.button {
		display: inline-flex;
		align-items: center;
		height: 44px;
		padding: 0 20px;
		border-radius: 8px;
		background: var(--ink);
		color: #fff;
		font-size: 15px;
		font-weight: 600;
	}

	.small {
		height: 34px;
		padding: 0 14px;
		font-size: 14px;
	}

	.hero {
		padding: 104px 0 64px;
	}

	h1 {
		max-width: 820px;
		margin: 0;
		font-size: 60px;
		font-weight: 650;
		line-height: 1.05;
		letter-spacing: -0.035em;
		text-wrap: balance;
	}

	.lede {
		max-width: 600px;
		margin: 24px 0 0;
		color: var(--muted);
		font-size: 19px;
		line-height: 1.55;
		text-wrap: pretty;
	}

	.actions {
		display: flex;
		align-items: center;
		gap: 24px;
		margin-top: 32px;
	}

	.link {
		font-size: 15px;
		font-weight: 600;
	}

	.fine {
		margin: 16px 0 0;
		color: var(--muted);
		font-size: 13px;
	}

	.window {
		overflow: hidden;
		border: 1px solid var(--line);
		border-radius: 12px;
		background: #fff;
		box-shadow: 0 24px 48px -24px rgb(22 21 15 / 0.25);
	}

	.titlebar {
		display: flex;
		align-items: center;
		gap: 16px;
		height: 44px;
		padding: 0 16px;
		border-bottom: 1px solid var(--line);
		color: var(--muted);
		font:
			13px ui-monospace,
			'SF Mono',
			Menlo,
			monospace;
	}

	.dots {
		display: flex;
		gap: 6px;
	}

	.dots i {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: var(--line);
	}

	.badge {
		margin-left: auto;
		padding: 2px 8px;
		border-radius: 999px;
		background: #e8f1ea;
		color: var(--accent);
		font-size: 12px;
	}

	.release {
		padding: 8px 32px 24px;
	}

	.release h2 {
		margin: 24px 0 8px;
		color: var(--muted);
		font-size: 13px;
		font-weight: 600;
	}

	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.release li {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 10px 0;
		border-bottom: 1px solid var(--line);
		font-size: 15px;
	}

	.avatar {
		display: grid;
		place-items: center;
		width: 24px;
		height: 24px;
		border-radius: 50%;
		background: #efede6;
		color: var(--muted);
		font-size: 10px;
		font-weight: 600;
	}

	.pr {
		margin-left: auto;
		color: var(--muted);
		font:
			13px ui-monospace,
			'SF Mono',
			Menlo,
			monospace;
	}

	.how {
		padding: 120px 0;
	}

	.how h2 {
		margin: 0;
		font-size: 36px;
		font-weight: 650;
		letter-spacing: -0.03em;
	}

	ol {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 48px;
		margin: 48px 0 0;
		padding: 0;
		list-style: none;
	}

	.number {
		color: var(--accent);
		font:
			600 13px ui-monospace,
			'SF Mono',
			Menlo,
			monospace;
	}

	h3 {
		margin: 12px 0 0;
		font-size: 18px;
		font-weight: 600;
		letter-spacing: -0.01em;
	}

	ol p {
		margin: 8px 0 0;
		color: var(--muted);
		font-size: 15px;
		line-height: 1.6;
	}

	footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 32px 0;
		border-top: 1px solid var(--line);
		color: var(--muted);
		font-size: 13px;
	}
</style>
