# @omysoul/svelte-song-display

```bash
npm install @omysoul/svelte-song-display
```
This component attempts to render lyrics as large as possible one verse at a time.
However it keeps the size of text consistent from verse to verse. To do this it tries
many permutations of line breaks to find the one with the best coverage.

The component features a responsive canvas which will adjust its resolution when
it resizes. It also adapts to pixel density. You can pass in a `style` prop to make
the canvas resize by giving hight and width relative units (%, vh, vw, vmin) or using flex. 

The SongDisplay component accepts songs in the following format:

```javascript
const song = `title: Amazing grace 
author: John newton

Amazing grace, How sweet the sound
That saved a wretch like me.
I once was lost, but now I am found,
Was blind, but now I see.

'Twas grace that taught my heart to fear,
And grace my fears relieved.
How precious did that grace appear
The hour I first believed.`
```

The title and the author lines are can be omitted and are currently not rendered.

## Props

| Prop | |
| --- | --- |
| style | normal HTML style attribute |
| verseId | which verse to show zero indexed number |
| blank | show a blank screen boolean |
| showSong | show the whole song at once |
| fillStyle | color of text hex values only |
| text | text of song in above format | 
| fontWeight | string e.g. "italic bold" or "400" |
| fontFamily | CSS fontFamily |
| lineHeight | default: 1.4 |
| verseGap | default: 0.75 |


## [Storybook](https://ipfs.infura.io/ipfs/QmciYNTJzeKcEMWTYvNhcRErKvGVXMSbevvfgVhCLT7T2j/)

## Example

```html
<script>
  import SongDisplay from '@omysoul/svelte-song-display'
</script>
<SongDisplay
  style= "width: 60%; height: 360px;"
  verseId={1}
  blank={false}
  wholeSong={false}
  fillStyle="#3cf"
  text={song} />
```


