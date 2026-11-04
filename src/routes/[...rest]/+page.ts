import { redirect } from '@sveltejs/kit';

// The roasts list is the only page for now: every path no other route matches, `/` included, lands there.
export function load() {
	redirect(307, '/roasts');
}
