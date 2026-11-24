# source-assets

Original files that the site does not serve. `source-assets/` is in `.dockerignore`,
so nothing here ships in the build or the Docker image.

- `photos/`: full-size originals of every photo in `public/photos/`, named by the
  same key as in `src/ui/photos.js`. Use them to make new sizes (see the main README).
- `logo2.jpeg`, `android-chrome-*.png`, `favicon-*.png`: sources for the Toloba logo
  and favicons.
- `facebook.png`, `instagram.png`, `tiktok.png`, `twitter.png`, `youtube.png`,
  `social.png`: social network icons.

The previous photo set was removed in the clean consultancy redesign; it is still in
the git history if a photo is ever needed again.
