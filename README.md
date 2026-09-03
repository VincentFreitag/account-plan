# The Account Plan

A job application, run as a demonstration of the job itself.

I applied for an enterprise sales role and treated the vacancy like an account:
the site walks the reader through the sales motion I would be hired to run,
**Discovery → Qualification → Proof → Objections → Close**, with the application
itself as the deal.

This repository is part of the application. The site's colophon links here on
purpose: the commit history, like the page, is an exhibit of how I work.

## How it's built

- Hand-written HTML, CSS and ~30 lines of vanilla JavaScript. No framework,
  no build step, no analytics, no tracking.
- Written and built with [Claude Code](https://claude.com/claude-code): the same
  tooling the site talks about using.
- Type: [Newsreader](https://fonts.google.com/specimen/Newsreader) and
  [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono), self-hosted
  (both SIL OFL).
- Hosted on Cloudflare Pages. `noindex` everywhere; the page exists for the
  people it was sent to, not for search engines.

## Run it

It's a static page. Open `index.html`, or serve the folder:

```
python -m http.server
```

Vincent Freitag, Hamburg
