import type { Slide } from './CarouselSlide.svelte';

export const slides: Slide[] = [
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
