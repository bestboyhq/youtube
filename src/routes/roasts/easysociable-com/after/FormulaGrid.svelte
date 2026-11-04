<script lang="ts">
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

	let copied = $state<string | null>(null);
	let copyTimer: ReturnType<typeof setTimeout> | undefined;

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
</script>

{#snippet copyIcon()}
	<svg class="icon" width="13" height="13" viewBox="0 0 14 14" aria-hidden="true">
		<rect x="4.8" y="4.8" width="6.6" height="7" rx="1.6" />
		<path
			d="M9.2 4.8V3.4a1.6 1.6 0 0 0-1.6-1.6H3.4a1.6 1.6 0 0 0-1.6 1.6v5.2a1.6 1.6 0 0 0 1.6 1.6h1.4"
		/>
	</svg>
{/snippet}

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
<p class="formula-more">
	<a class="text-link" href="https://easysociable.com/formulas">
		Browse all 20 formulas
		<svg class="icon" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
			<path d="M2.8 7h8.4M7.6 3.2 11.4 7l-3.8 3.8" />
		</svg>
	</a>
</p>

<style>
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

	@media (max-width: 1000px) {
		.formula-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 620px) {
		.formula-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
