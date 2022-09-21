---
slug: /category/command-line-tools/gifski
tags:
- gif
- bash
- video
- images
---
# gifski

Commandline tool to convert videos into a gif image. An 

Sources:
- https://github.com/ImageOptim/gifski
- https://gif.ski/

## Install
```bash
brew install gifski
```

## Usage
```bash
 gifski original.mp4 -r 10 -Q 50 -W 600 -o output.gif
 ```

|Argument|Description|
|---|---|
|`-r`|The output frame rate desired.|
|`-Q`|The quality of the gif|
|`-W`|The width of the gif to output|
|`-H`|The height of the gif to output|
|`-o`|The output file of the gif|