import { useState } from 'react'
import styled from 'styled-components'
import { HiPlay } from 'react-icons/hi2'

// A YouTube video that costs nothing until it is played: a thumbnail and play
// button first, then the privacy-enhanced (no-cookie) player on click.
const Frame = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: var(--radius-md);
  background-color: var(--color-band);

  & iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`

const Poster = styled.button`
  position: absolute;
  inset: 0;
  width: 100%;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;

  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }
  &:hover img {
    transform: scale(1.03);
  }
`

const Play = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  display: grid;
  place-items: center;
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
  background-color: var(--color-signal);
  color: var(--color-white);
  transform: translate(-50%, -50%);
  transition: transform 0.2s ease;

  & svg {
    width: 2.8rem;
    height: 2.8rem;
    margin-left: 0.3rem;
  }
  ${Poster}:hover & {
    transform: translate(-50%, -50%) scale(1.08);
  }
`

// `autoPlay` skips the thumbnail when the visitor has already asked to watch.
function YouTubeFacade({ id, title, className, autoPlay = false }) {
  const [playing, setPlaying] = useState(autoPlay)

  return (
    <Frame className={className}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <Poster
          type="button"
          aria-label={`Play video: ${title}`}
          onClick={() => setPlaying(true)}
        >
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            width="480"
            height="360"
            loading="lazy"
            decoding="async"
          />
          <Play aria-hidden="true">
            <HiPlay />
          </Play>
        </Poster>
      )}
    </Frame>
  )
}

export default YouTubeFacade
