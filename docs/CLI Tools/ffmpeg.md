---
slug: /category/command-line-tools/ffmpeg
tags:
- ffmpeg
- bash
- video
- compression
---
# ffmpeg

Video conversion library. Super helpful in a scripting video compression. See the main documentation on their site for full documentation. This is page is more of a quick reference for useful commands I had to use in the past.

Source: https://github.com/sindresorhus/pageres-cli

## Install
```bash
brew install ffmpeg
```

## Usage Examples

This is a collection of various commands that were helpful in the past.

### Convert hvec video + alpha to webm
```bash
ffmpeg -i origin.mov -f webm -c:v libvpx-vp9 -pix_fmt yuva420p -auto-alt-ref 0 export.webm
```
:::note Video Requirements
This was used to convert an HVEC video from iOS and its animated Memoji videos. However to successfully convert the alpha layer, I had to re-convert the video with Apple Motion by exporting it as a hvec video with an alpha layer in that app. Once that was done, the export to webm with ffmpeg was successful. Without this step, the video straight from the iOS device would not preserve the alpha layer in webm.
:::

## Resources
- [ffmpeg site](https://ffmpeg.org)
- [ffmpeg documentation](https://ffmpeg.org/documentation.html)
- [homebrew site](https://brew.sh)