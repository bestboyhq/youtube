export type Quote = {
	text: string;
	name: string;
	role: string;
	initials: string;
};

/* Placeholder social proof. Replace with real customer quotes and permission before publishing. */
export const quotes: Quote[] = [
	{
		text: 'I used to lose a Sunday to one carousel. Now I paste a prompt before coffee and spend the time answering comments.',
		name: 'Maya R.',
		role: 'Creator, 84k followers',
		initials: 'MR'
	},
	{
		text: 'We run six client accounts from one seat. The Brand switch alone paid for the year.',
		name: 'Daniel K.',
		role: 'Creative director, studio of 9',
		initials: 'DK'
	},
	{
		text: 'Our clients approve carousels in the link. No PDFs, no screenshots, no "slide 4" emails.',
		name: 'Priya S.',
		role: 'Social lead, B2B agency',
		initials: 'PS'
	}
];
