# Landing page roasts

Simon unslops people's websites on video.
Each roast keeps a landing page as it was beside the page it became, with a before/after slider made for recording.

## Run it

```sh
npm install
npm run dev
```

Open `/roasts` for every roast, or `/roasts/example` for the slider.

## Add a roast

Copy `src/routes/roasts/example/` to `src/routes/roasts/<site-slug>/`, fill in `roast.ts`, recreate the live site in `before/`, and rebuild it in `after/`.
[`AGENTS.md`](AGENTS.md) has the full rules.

## Prompts

[`src/routes/roasts/easysociable-com/PROMPTS.md`](src/routes/roasts/easysociable-com/PROMPTS.md) has the prompts that built the EasySociable roast, with a note on why each one worked.

## License

The code is [MIT](LICENSE).

## Third-party content

Everything recreated under `src/routes/roasts/*/before/` and saved under `static/roasts/*/` belongs to its owners.
So does the owner's copy, design, and assets that `src/routes/roasts/*/after/` keeps from `before/`.
It is shown for commentary and critique, and it is not covered by the MIT license.
[`NOTICE`](NOTICE) says the same beside the license.
