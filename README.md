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

## License

[MIT](LICENSE)
