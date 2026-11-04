# Landing page roasts

Simon unslops people's websites on video.
Each roast is one self-contained folder: the site as it was, the site as it could be, and a slider that compares them on camera.

## A roast

```
src/routes/roasts/<site-slug>/
  roast.ts          title, url, and capture date; the index lists every folder that has one
  +page.svelte      the slider: <CompareSlider title={roast.title} />, nothing else
  before/+page.svelte  the site as it is
  after/+page.svelte   the unslopped version
static/roasts/<site-slug>/  images and fonts the two pages load, or keep them beside the page
```

`src/routes/roasts/example/` is the template to copy.
The slider is `src/lib/CompareSlider.svelte`, shared by every roast.
The index at `/roasts` finds roasts on its own, so a new folder needs no registration.
The index is the only page besides the roasts: every other path, `/` included, redirects to it (`src/routes/[...rest]/`).

Each page is its own site: its styles live in the page, global ones under `:global(body)`, and it sets its own `<title>`.
Keep the Bestboy chrome (`src/lib/bestboy.css`, the `(site)` layout) out of `before/` and `after/`.

## Adding a roast

1. Copy `src/routes/roasts/example/` to `src/routes/roasts/<site-slug>/`, with the slug from the site's domain (`acme-dev` for acme.dev).
2. Fill in `roast.ts` with the site's name, its URL, and today's date.
3. Capture the live site: screenshot it at 1920x1080 and 1280x720, save its HTML, CSS, images, and fonts.
4. Recreate it in `before/+page.svelte` faithfully: the same copy word for word, the same layout, colors, type, spacing, and images, slop included.
   It is done when its screenshots at both sizes match the live site's.
5. Freeze `before/`: once captured it never changes, because the roast is about the site as it was.
6. Write `after/+page.svelte`, starting from a copy of `before/`.

## Third-party content

The code is MIT, but a roasted site's copy, design, images, fonts, and stylesheets belong to its owners.
They are shown for commentary and critique, and they are not covered by the MIT license, as `NOTICE` and `README.md` say.
So every roast saves the owner's files (images, fonts, stylesheets) only under `static/roasts/<site-slug>/` or in `before/`, the places that notice covers, and `after/` loads them from there instead of keeping copies of its own.
Load a font the owner licensed from someone else, such as a commercial typeface, from the owner's own server instead of saving a copy.
When a roast needs a new kind of place for the owner's material, extend `NOTICE`, `README.md`, and this section first.

## Working on after/

`after/` is where every iteration happens.
It sells the same product with the same facts as `before/`; only the slop goes.
Judge it at `/roasts/<site-slug>`, where the slider puts it beside `before/` with synced scrolling.

## The slider is for recording

`/roasts/<site-slug>` is what the camera sees, so it must look pixel perfect at 1920x1080 and 1280x720, in light and dark.
After any change to the slider, a roast's pages, or the tokens, screenshot the slider at both sizes with the divider mid-way and fix whatever looks off.
The divider drags with a mouse or a finger, and takes the arrow keys (Shift for 10%), Page Up, Page Down, Home, and End.

## Commands

- `npm run dev`: the dev server.
- `npm run check`: types and Svelte diagnostics.
- `npm test`: unit tests, including the check that every roast has `roast.ts`, `before/`, and `after/`.
- `npm run build`: the production build.
- `npm run format`: Prettier; `npm run lint` checks it.

All of `check`, `test`, `build`, and `lint` pass before work is done.

## Look

The site chrome (the index, the slider's handle and labels) follows the Bestboy family design, whose source is `docs/design.md` in the private `bestboyhq/platform` repository.
Its tokens are copied by hand into `src/lib/bestboy.css`; a change lands there first, then here.
