<script lang="ts">
	import Logo from './Logo.svelte';

	const root = '/roasts/easysociable-com/after';
</script>

<footer class="subfooter">
	<div class="rail subfooter-inner">
		<div class="top">
			<div class="intro">
				<a class="brand" href={root}>
					<span class="brand-mark"><Logo /></span>
					<span class="brand-name">EasySociable</span>
				</a>
				<p>Agent-native carousels for creators and the teams behind them.</p>
			</div>
			<nav class="links" aria-label="Footer">
				<a href="{root}/for/creators">For creators</a>
				<a href="{root}/for/agencies">For agencies</a>
				<a href="{root}#pricing">Pricing</a>
				<a href="https://easysociable.com/docs">Docs</a>
				<a href="https://easysociable.com/contact">Contact</a>
				<a href="https://easysociable.com/privacy">Privacy</a>
			</nav>
		</div>
		<div class="bottom">
			<p>© 2026 EasySociable. All rights reserved.</p>
			<p>Made for agents. Finished by you.</p>
		</div>
	</div>
</footer>

<style>
	.subfooter {
		width: min(100% - 32px, 1280px);
		margin: 0 auto 16px;
		border-radius: clamp(24px, 3vw, 40px);
		background: var(--g100);
	}

	.subfooter-inner {
		padding-block: clamp(48px, 6vw, 76px) clamp(24px, 3vw, 32px);
	}

	.top {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: space-between;
		gap: 32px 48px;
	}

	.intro p {
		max-width: 32ch;
		margin-top: 14px;
		color: var(--g600);
		font-size: 13.5px;
		line-height: 1.6;
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		gap: 6px 26px;
		padding-top: 6px;
	}

	.links a {
		color: var(--g600);
		font-size: 13px;
		transition: color 160ms ease;
	}

	.links a:hover {
		color: var(--g900);
	}

	.bottom {
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

	@media (max-width: 700px) {
		.bottom {
			flex-direction: column;
		}
	}
</style>
