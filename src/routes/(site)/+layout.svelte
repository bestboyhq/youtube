<script lang="ts">
	import '#lib/bestboy.css';
	import ThemeSwitcher from '#lib/ThemeSwitcher.svelte';
	import { tip } from '#lib/tooltip.ts';

	let { children } = $props();

	const repo = 'https://github.com/bestboyhq/youtube';
</script>

<svelte:head>
	<link rel="icon" href="/bestboy.svg" />
</svelte:head>

<div class="site">
	<header class="bar">
		<nav class="column">
			<span class="brand">
				<img class="app-icon" src="/icons/bestboy.webp" alt="" />
				<a href="https://bestboy.dev" data-sveltekit-reload>Bestboy</a>
				<span class="slash">/</span>
				<a href="/">YouTube</a>
			</span>
			<span class="links">
				<a href="/roasts">Roasts</a>
				<a href={repo}>GitHub</a>
			</span>
		</nav>
	</header>

	<main>
		{@render children()}
	</main>

	<footer class="column">
		<span>© {new Date().getFullYear()} Bestboy</span>
		<span class="end">
			<ThemeSwitcher />
			<a href={repo} aria-label="GitHub" use:tip={'GitHub'}>
				<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
					<path
						d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
					/>
				</svg>
			</a>
		</span>
	</footer>
</div>

<style>
	.site {
		position: relative;
		isolation: isolate;
		overflow-x: clip;
		display: flex;
		flex-direction: column;
		min-height: 100dvh;
	}

	.site::before {
		content: '';
		position: absolute;
		z-index: 1;
		inset: 0 auto;
		left: 50%;
		width: var(--col);
		margin-left: calc(var(--col) / -2);
		border-inline: 1px solid var(--frame);
		pointer-events: none;
	}

	@media (max-width: 1023px) {
		.site::before {
			display: none;
		}
	}

	.column {
		width: var(--col);
		margin-inline: auto;
		padding-inline: max(var(--pad), env(safe-area-inset-left));
	}

	.bar {
		position: sticky;
		top: 0;
		z-index: 2;
		height: var(--bar-h);
		padding-top: env(safe-area-inset-top);
		background: color-mix(in srgb, var(--surface-root) 82%, transparent);
		backdrop-filter: blur(12px) saturate(1.4);
	}

	.bar::after,
	footer::before {
		content: '';
		position: absolute;
		left: 50%;
		width: 100vw;
		height: 9px;
		margin-left: -50vw;
		background: var(--crosses);
		background-repeat: no-repeat;
		pointer-events: none;
	}

	.bar::after {
		bottom: -4px;
	}

	nav {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100%;
	}

	/* The rails run through the bar, over its blur, so the blur never smears the page's rails into it. */
	nav::before {
		content: '';
		position: absolute;
		inset: 0;
		border-inline: 1px solid var(--frame);
		pointer-events: none;
	}

	@media (max-width: 1023px) {
		nav::before {
			display: none;
		}
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 15px;
		font-weight: 600;
		letter-spacing: -0.01em;
	}

	.app-icon {
		--s: 22px;
		width: calc(var(--s) * 1024 / 824);
		max-width: none;
		height: auto;
		margin: calc(var(--s) * -100 / 824);
		margin-right: calc(var(--s) * -100 / 824 + 2px);
	}

	.slash {
		color: var(--fg-faint);
		font-weight: 400;
	}

	.links {
		display: flex;
		margin-right: -12px;
	}

	.links a {
		display: flex;
		align-items: center;
		height: 32px;
		padding: 0 12px;
		border-radius: 999px;
		color: var(--fg-secondary);
		font-size: 14px;
		font-weight: 500;
		line-height: 20px;
	}

	main {
		flex: 1;
	}

	footer {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-block: 32px max(32px, env(safe-area-inset-bottom));
		color: var(--fg-faint);
		font-size: 12px;
		line-height: 1.5;
	}

	footer::before {
		top: -4px;
	}

	.end {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	footer a {
		position: relative;
		display: flex;
		color: var(--fg-faint);
	}

	footer a:active {
		color: var(--fg-default);
	}

	footer svg {
		fill: currentColor;
	}

	@media (hover: hover) and (pointer: fine) {
		.links a:hover,
		footer a:hover {
			color: var(--fg-default);
		}
	}

	@media (pointer: coarse) {
		footer a::after {
			content: '';
			position: absolute;
			inset: -14px -19px -14px -9px;
		}
	}
</style>
