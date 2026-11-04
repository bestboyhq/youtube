<script lang="ts">
	import Logo from './Logo.svelte';

	let {
		context,
		links,
		cta
	}: {
		context: string;
		links: { href: string; label: string }[];
		cta: { href: string; label: string };
	} = $props();

	const root = '/roasts/easysociable-com/after';

	let menuOpen = $state(false);

	function closeMenu() {
		menuOpen = false;
	}
</script>

<div class="subnav-wrap">
	<nav class="subnav" aria-label="Main">
		<a class="brand" href={root}>
			<span class="brand-mark"><Logo /></span>
			<span class="brand-name">EasySociable</span>
		</a>
		<span class="context">{context}</span>
		<div class="links">
			{#each links as link}
				<a href={link.href}>{link.label}</a>
			{/each}
		</div>
		<a class="pill pill-dark pill-sm" href={cta.href}>{cta.label}</a>
		<button
			class="menu-toggle"
			type="button"
			aria-label="Menu"
			aria-expanded={menuOpen}
			aria-controls="subpage-nav-menu"
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span></span>
			<span></span>
		</button>
	</nav>
	{#if menuOpen}
		<div class="submenu" id="subpage-nav-menu">
			{#each links as link}
				<a href={link.href} onclick={closeMenu}>{link.label}</a>
			{/each}
			<a class="pill pill-dark" href={cta.href} onclick={closeMenu}>{cta.label}</a>
		</div>
	{/if}
</div>

<style>
	.subnav-wrap {
		position: sticky;
		top: 0;
		z-index: 50;
		padding: 12px 12px 0;
	}

	.subnav {
		display: flex;
		align-items: center;
		gap: 10px;
		width: min(100%, 1160px);
		margin-inline: auto;
		padding: 9px 10px 9px 16px;
		border-radius: 999px;
		background: rgb(251 250 249 / 0.82);
		box-shadow:
			0 12px 34px -22px rgb(27 21 20 / 0.45),
			inset 0 1px 0 rgb(255 255 255 / 0.7);
		-webkit-backdrop-filter: blur(18px) saturate(1.35);
		backdrop-filter: blur(18px) saturate(1.35);
	}

	.context {
		padding: 5px 9px;
		border-radius: 999px;
		background: var(--g100);
		color: var(--g600);
		font-size: 9.5px;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		white-space: nowrap;
	}

	.links {
		display: flex;
		align-items: center;
		gap: 2px;
		margin-left: auto;
	}

	.links a {
		padding: 8px 12px;
		border-radius: 999px;
		color: var(--g600);
		font-size: 12.5px;
		font-weight: 550;
		transition:
			background 160ms ease,
			color 160ms ease;
	}

	.links a:hover {
		background: var(--g100);
		color: var(--g900);
	}

	.subnav > .pill {
		flex: none;
	}

	.menu-toggle {
		display: none;
		flex: none;
		width: 36px;
		height: 36px;
		place-items: center;
		gap: 5px;
		border-radius: 50%;
		background: var(--g100);
	}

	.menu-toggle span {
		display: block;
		width: 15px;
		height: 1.5px;
		border-radius: 2px;
		background: var(--g800);
	}

	.submenu {
		position: absolute;
		top: calc(100% + 8px);
		right: 12px;
		left: 12px;
		display: grid;
		gap: 2px;
		max-width: 1160px;
		margin-inline: auto;
		padding: 10px;
		border-radius: 24px;
		background: rgb(251 250 249 / 0.97);
		box-shadow: 0 24px 60px -30px rgb(27 21 20 / 0.45);
		-webkit-backdrop-filter: blur(18px);
		backdrop-filter: blur(18px);
	}

	.submenu a:not(.pill) {
		padding: 11px 12px;
		border-radius: 12px;
		color: var(--g700);
		font-size: 14px;
		font-weight: 550;
	}

	.submenu a:not(.pill):hover {
		background: var(--g100);
	}

	.submenu .pill {
		margin-top: 4px;
	}

	@media (max-width: 900px) {
		.links {
			display: none;
		}

		.subnav > .pill {
			margin-left: auto;
		}

		.menu-toggle {
			display: grid;
		}
	}

	@media (max-width: 560px) {
		.context {
			display: none;
		}
	}
</style>
