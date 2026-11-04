export type RoastMeta = {
	/** The roasted site's name. */
	title: string;
	/** The live site, as it was when captured. */
	url: string;
	/** When the roast was captured, as YYYY-MM-DD. */
	date: string;
};

export type Roast = RoastMeta & { slug: string };

/** Turns `/src/routes/roasts/<slug>/roast.ts` modules into roasts, newest first. */
export function toRoasts(modules: Record<string, RoastMeta>): Roast[] {
	return Object.entries(modules)
		.map(([path, meta]) => ({ ...meta, slug: path.split('/').at(-2)! }))
		.sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
}

export const roasts = toRoasts(
	import.meta.glob<RoastMeta>('/src/routes/roasts/*/roast.ts', { eager: true, import: 'default' })
);
