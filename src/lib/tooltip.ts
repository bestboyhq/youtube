// The Bestboy family's tooltip, ported from bestboyhq/platform (src/lib/ui/tooltip.ts), trimmed to text tips.
// One bubble for the whole page: it opens after resting 420ms, and for 320ms after one closes the next opens at
// once with no entrance. Moving between two anchors while open slides the bubble and crossfades its text.
import './tooltip.css';

const OPEN_DELAY = 420;
const CLOSE_DELAY = 80;
const COOL_DELAY = 320;
const EDGE_GAP = 12;
const ANCHOR_GAP = 8;
const MORPH_MS = 240;
const SLIDE_X = 10;
const SLIDE_Y = 4;

const TOOLTIP_ID = 'app-tooltip';

let root: HTMLDivElement | null = null;
let bubble: HTMLSpanElement | null = null;
let view: HTMLSpanElement | null = null;
let content: HTMLSpanElement | null = null;
let ghost: HTMLSpanElement | null = null;
let anchor: HTMLElement | null = null;
let contentText = '';
let open = false;
let warm = false;
let openTimer = 0;
let closeTimer = 0;
let coolTimer = 0;
let morphTimer = 0;
let morphW = 0;
let morphH = 0;
let listening = false;

function ensure(): void {
	if (root) return;

	root = document.createElement('div');
	root.className = 'tip snap';

	bubble = document.createElement('span');
	bubble.className = 'tip-bubble';
	bubble.id = TOOLTIP_ID;
	bubble.setAttribute('role', 'tooltip');

	view = document.createElement('span');
	view.className = 'tip-view';

	content = document.createElement('span');
	content.className = 'tip-text';

	view.appendChild(content);
	bubble.appendChild(view);
	root.appendChild(bubble);
	document.body.appendChild(root);

	document.addEventListener('keydown', (event) => {
		if (event.key !== 'Escape') return;
		window.clearTimeout(openTimer);
		window.clearTimeout(closeTimer);
		if (open) close();
	});
}

function outerW(el: HTMLElement): number {
	return Math.ceil(el.getBoundingClientRect().width);
}

function outerH(el: HTMLElement): number {
	return Math.ceil(el.getBoundingClientRect().height);
}

function endMorph(): void {
	window.clearTimeout(morphTimer);
	morphW = 0;
	morphH = 0;
	ghost?.remove();
	ghost = null;
	if (bubble) {
		bubble.classList.remove('morph');
		bubble.style.width = '';
		bubble.style.height = '';
	}
	if (content) {
		content.classList.remove('enter');
		content.style.width = '';
	}
}

function setContent(text: string): void {
	if (!content || contentText === text) return;
	endMorph();
	contentText = text;
	content.textContent = text;
}

function morphContent(text: string, dx: number, dy: number): void {
	if (!bubble || !view || !content) return;
	if (contentText === text) return;
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		setContent(text);
		return;
	}

	endMorph();

	const prevW = outerW(bubble);
	const prevH = outerH(bubble);

	ghost = content;
	ghost.style.width = `${outerW(ghost)}px`;
	ghost.style.height = `${outerH(ghost)}px`;
	ghost.className = 'tip-text tip-ghost';

	contentText = text;
	content = document.createElement('span');
	content.className = 'tip-text';
	content.textContent = text;
	view.appendChild(content);

	morphW = outerW(bubble);
	morphH = outerH(bubble);
	content.style.width = `${outerW(content)}px`;
	content.classList.add('enter');

	bubble.style.setProperty('--dx', `${dx}px`);
	bubble.style.setProperty('--dy', `${dy}px`);
	bubble.style.width = `${prevW}px`;
	bubble.style.height = `${prevH}px`;
	void bubble.offsetWidth;
	bubble.classList.add('morph');
	bubble.style.width = `${morphW}px`;
	bubble.style.height = `${morphH}px`;

	morphTimer = window.setTimeout(endMorph, MORPH_MS);
}

/** Centers the bubble over its anchor, inside the window's edges, and below it when there is no room above. */
function reposition(snap: boolean): void {
	if (!root || !bubble || !anchor) return;

	const rect = anchor.getBoundingClientRect();
	const half = (morphW || bubble.offsetWidth) / 2;
	const min = half + EDGE_GAP;
	const max = window.innerWidth - half - EDGE_GAP;
	const x = Math.min(Math.max(rect.left + rect.width / 2, min), Math.max(min, max));

	const h = morphH || bubble.offsetHeight;
	const below = rect.top - ANCHOR_GAP - h < EDGE_GAP;
	const y = below ? rect.bottom + ANCHOR_GAP : rect.top - ANCHOR_GAP;

	root.classList.toggle('below', below);
	if (snap) root.classList.add('snap');
	root.style.transform = `translate(${x}px, ${y}px)`;
	if (snap) requestAnimationFrame(() => root?.classList.remove('snap'));
}

function onViewportChange(): void {
	reposition(true);
}

function listen(on: boolean): void {
	if (on === listening) return;
	listening = on;
	if (on) {
		window.addEventListener('scroll', onViewportChange, true);
		window.addEventListener('resize', onViewportChange);
	} else {
		window.removeEventListener('scroll', onViewportChange, true);
		window.removeEventListener('resize', onViewportChange);
	}
}

function commit(snap: boolean): void {
	open = true;
	warm = true;
	root?.classList.add('open');
	anchor?.setAttribute('aria-describedby', TOOLTIP_ID);
	reposition(snap);
	listen(true);
}

function showTooltip(next: HTMLElement, text: string, immediate = false): void {
	ensure();
	window.clearTimeout(openTimer);
	window.clearTimeout(closeTimer);
	window.clearTimeout(coolTimer);

	const prev = anchor;
	if (prev && prev !== next) prev.removeAttribute('aria-describedby');
	anchor = next;

	if (open) {
		let dx = 0;
		let dy = 0;
		if (prev && prev !== next) {
			const from = prev.getBoundingClientRect();
			const to = next.getBoundingClientRect();
			const shift = to.left + to.width / 2 - (from.left + from.width / 2);
			if (Math.abs(shift) > 1) dx = Math.sign(shift) * SLIDE_X;
			const vshift = to.top + to.height / 2 - (from.top + from.height / 2);
			if (!dx && Math.abs(vshift) > 1) dy = Math.sign(vshift) * SLIDE_X;
		}
		morphContent(text, dx, dx || dy ? dy : SLIDE_Y);
		commit(false);
		return;
	}

	setContent(text);

	if (warm || immediate) {
		// Right after another tooltip, this one shows at once: no delay, and no entrance either. Reading the layout
		// applies the open look while `instant` holds every transition at zero.
		root?.classList.toggle('instant', warm);
		commit(true);
		bubble?.getBoundingClientRect();
		root?.classList.remove('instant');
		return;
	}

	reposition(true);
	openTimer = window.setTimeout(() => commit(true), OPEN_DELAY);
}

function close(): void {
	open = false;
	root?.classList.remove('open');
	anchor?.removeAttribute('aria-describedby');
	listen(false);

	window.clearTimeout(coolTimer);
	coolTimer = window.setTimeout(() => {
		warm = false;
	}, COOL_DELAY);
}

function hideTooltip(from: HTMLElement): void {
	if (anchor !== from) return;
	window.clearTimeout(openTimer);
	window.clearTimeout(closeTimer);
	if (open) closeTimer = window.setTimeout(close, CLOSE_DELAY);
	else close();
}

/** `use:tip={'Text'}`: a tooltip on hover and on keyboard focus; a finger gets none. */
export function tip(node: HTMLElement, text: string | undefined) {
	let label = text;

	const onenter = (event: PointerEvent) => {
		if (event.pointerType !== 'touch' && label) showTooltip(node, label);
	};
	const onleave = () => hideTooltip(node);
	const onfocus = () => {
		if (label && node.matches(':focus-visible')) showTooltip(node, label, true);
	};

	node.addEventListener('pointerenter', onenter);
	node.addEventListener('pointerleave', onleave);
	node.addEventListener('focus', onfocus);
	node.addEventListener('blur', onleave);

	return {
		update(next: string | undefined) {
			label = next;
			if (label && anchor === node && open) showTooltip(node, label, true);
			else if (!label) hideTooltip(node);
		},
		destroy() {
			node.removeEventListener('pointerenter', onenter);
			node.removeEventListener('pointerleave', onleave);
			node.removeEventListener('focus', onfocus);
			node.removeEventListener('blur', onleave);
			hideTooltip(node);
		}
	};
}
