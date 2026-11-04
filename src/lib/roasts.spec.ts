import { describe, expect, it } from 'vitest';
import { roasts, toRoasts } from './roasts';

describe('toRoasts', () => {
	it('takes the slug from the folder and sorts newest first', () => {
		const meta = (date: string) => ({ title: date, url: 'https://example.com', date });
		const list = toRoasts({
			'/src/routes/roasts/old-site/roast.ts': meta('2026-01-01'),
			'/src/routes/roasts/new-site/roast.ts': meta('2026-02-01')
		});
		expect(list.map((r) => r.slug)).toEqual(['new-site', 'old-site']);
	});
});

describe('every roast folder', () => {
	const pages = Object.keys(import.meta.glob('/src/routes/roasts/*/**/+page.svelte'));

	it.each(roasts.map((r) => r.slug))('%s has a slider, before/ and after/', (slug) => {
		for (const page of ['', 'before/', 'after/']) {
			expect(pages).toContain(`/src/routes/roasts/${slug}/${page}+page.svelte`);
		}
	});

	it('has a roast.ts', () => {
		const folders = new Set(pages.map((p) => p.split('/')[4]));
		expect([...folders].sort()).toEqual(roasts.map((r) => r.slug).sort());
	});
});
