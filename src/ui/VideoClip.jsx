import styled from 'styled-components'
import { VIDEOS } from './videos'

// A self-hosted video with its poster and a visible caption. Nothing downloads
// until the visitor presses play (preload="none"), and it never autoplays.
const Figure = styled.figure`
  margin: 0;
`

const Player = styled.video`
  display: block;
  width: 100%;
  height: auto;
  border-radius: var(--radius-md);
  background-color: var(--color-ink-900);
`

const Caption = styled.figcaption`
  margin-top: var(--space-3);
  font-size: 1.4rem;
  color: var(--color-ink-500);

  & span {
    font-family: var(--font-mono);
    font-size: 1.2rem;
  }
`

function formatDuration(seconds) {
  const m = Math.floor(seconds / 60)
  const s = String(seconds % 60).padStart(2, '0')
  return `${m}:${s}`
}

function VideoClip({ video, className }) {
  const entry = VIDEOS[video]
  if (!entry) {
    if (import.meta.env.DEV) console.warn(`Unknown video "${video}"`)
    return null
  }

  return (
    <Figure className={className}>
      <Player
        controls
        preload="none"
        playsInline
        poster={`/videos/posters/${video}.webp`}
        width={entry.width}
        height={entry.height}
        aria-label={entry.title}
      >
        <source src={`/videos/${video}.mp4`} type="video/mp4" />
        <a href={`/videos/${video}.mp4`}>Download the video</a>
      </Player>
      <Caption>
        {entry.title} <span>({formatDuration(entry.duration)})</span>
      </Caption>
    </Figure>
  )
}

export default VideoClip
