---
title: Figuring out Transparent HTML5 Videos
date: 2022-08-15
authors: [ryanv]
tags: [video, how-to, ffmpeg, html5]
---

Now a days, browsers have matured well enough to have amazing support for videos on the web. Prior to HTML5 video, there was a huge reliance on technologies like Flash to have video playback on the web. But with that, there were limitations like device support and quality limitations. Today, the HTML5 standard makes video embedding super simple with the `<video>` tag, and its browser API, developers have a lot of control to build out custom features and experiences for anyone visiting a site. However, one thing I was curious about was what can be done about transparent videos and what does that support look like? I managed to get one working on my site and here I share some of the details on what it took to get there.
<!--truncate-->
## The Basics - code
This is the easy part of this whole thing. As mentioned, the `<video>` tag has made it super simple to add videos to any site and this is no different.

```html
<video poster="/videos/poster.png" playsinline controls="false" autoplay muted>
    <source src="/emoji_fw6mvf.mov" type="video/quicktime"></source>
    <source src="/emoji_u7kcuu.webm" type="video/webm"></source>
</video>
```

Here, we take a few parameters within the `<video>` tag:
* `playsinline` - when on mobile devices, this parameter tells the browser to play the video within the current viewport, in-line, rather than popping it full screen
* `controls` - allows us to show or hide the controls, which in this case, I wanted to hide it
* `autoplay` - plays the video automatically when page loads
* `muted` - this auto mutes the video
* `poster` - this defines what image to show when the video may be paused or fails to load one of the sources

:::note A quick note on auto play
While we do have the `autoplay` attribute, some browsers may choose to to not autoplay a video if it has audio. So for better reliability, definig the video as `muted` along with `autoplay` results in more consistent results in the video automatically playing
:::

From here, we define two video sources - one of a type `video/quicktime` and another for `video/webm`. The two types were necessary because during my testing, Safari handled an HVEC video format with alpha transparencies better while other browsers handled the webm format instead. And for browsers that may not support either (such as Internet Explorer), the idea is to fall back to the poster image. Now for the fun part - creating the video.

## Creating the video
Code is just code until you have content. In this case, that content is video, specifically with an alpha layer. There are several ways to do this. Video professionals may do something in Adobe After Effects, but for my use case, I opted for something easier - an iPhone and [Apple's Memoji](https://support.apple.com/en-us/HT208986) feature. Using Messages, I recorded a quick video snippet of my Memoji and sent it to myself so I can open the sent file on my computer. To my surprise, this generated the HVEC video format with a transparency layer to it, and using it in the video tag in safari just worked.

The video itself isn't quite optimized for videos on the web but it also isnt too bad. The video featured a 640x480px resolution, which is a little small for most applications today. And in addition, it offered a 2.15Mb/s data rate which isnt terribly high but also not quite optimized. For my use case, I was happy with it, for higher traffic use, I'd recommend one exploring this further for a better format

Now the problem with this specific format is that it isnt compatible with other browsers, so I needed to find a way to generate a webm version of it, and that's where `ffmpeg` comes to the rescue. This utility allows you to convert video formats very easily with simple command lines. In my case, I did the following:

```bash
ffmpeg -i origin.mov -f webm -c:v libvpx-vp9 -pix_fmt yuva420p -auto-alt-ref 0 export.webm
```

This takes an input (`-i`) and converts it to the webm format to export a webm video for me to use in other browsers. I've put a quick ffmpeg cheatsheet together [here](/docs/CLI%20Tools/ffmpeg). Now here's the crazy party (but also not too crazy) - FFMPEG didn't like the HVEC video from Messages and Memoji so to get around this, I took the video, imported it to [Apple Motion](https://www.apple.com/final-cut-pro/motion/), and then used that tool to export a generic video with an alpha transparency layer. From there, ffmepg was able to preserve the transparency correctly for me to preserve the alpha transparency as desired.

## Putting it All Together
With the video assets and the code on hand, all I had to do was put everything together. I decided to upload the videos to [cloudinary](https://cloudinary.com) which is what I use to host my media assets. From there, I referenced those files in my `<video>` sources, and from there, it just worked like magic

<video poster="/videos/poster.png" playsinline control="false" autoplay="true" loop muted >
    <source src="https://res.cloudinary.com/drvvky8r9/video/upload/v1660188675/emoji_fw6mvf.mov" type="video/quicktime"></source>
    <source src="https://res.cloudinary.com/drvvky8r9/video/upload/v1660188669/emoji_u7kcuu.webm" type="video/webm"></source>
</video>

So why did I go through all this trouble to get transparency videos working? Really, its because of dark mode. Now, when a user switches between dark and light modes, I dont have to worry about swapping the video to have a seamless background. Instead, I can rely on a single video asset that works on both my light and dark themes.

That is all for now. I hope you found something useful here. Thanks for reading!

