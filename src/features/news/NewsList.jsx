import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { HiArrowRight, HiArrowUpRight, HiPlay, HiXMark } from 'react-icons/hi2'
import { devicesMax } from '../../styles/BreakPoint'
import Picture from '../../ui/Picture'
import YouTubeFacade from '../../ui/YouTubeFacade'

// A list of news rows: thumbnail, tag and headline, and a round arrow. Each row
// is clickable as a whole; a press video opens inline on demand.
//
// items: [{ key, tag, title, href, external, photo?, videoId?, videoTitle? }]
// Build them with pressItem() and storyItem() from ./newsItems.

// On a white section, rows tint to paper on hover; on paper, to white.
const List = styled.ul`
  --row-hover: ${(props) =>
    props.$onWhite ? 'var(--color-paper)' : 'var(--color-surface)'};
  border-top: 1px solid var(--color-line);
`

// Grid: thumbnail | tag and headline (and the inline video) | actions.
const Row = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 22rem minmax(0, 1fr) auto;
  gap: var(--space-4) var(--space-7);
  align-items: center;
  padding: var(--space-6) var(--space-4);
  border-bottom: 1px solid var(--color-line);
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--row-hover);
  }

  @media ${devicesMax.md} {
    grid-template-columns: 11rem minmax(0, 1fr);
    gap: var(--space-3) var(--space-4);
    align-items: start;
    padding-inline: 0;
  }
`

const Thumb = styled.div`
  position: relative;
  aspect-ratio: 16 / 9; /* also hides YouTube's letterbox bars */
  overflow: hidden;
  border-radius: var(--radius-md);
  background-color: var(--color-band);

  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }
  ${Row}:hover & img {
    transform: scale(1.05);
  }

  @media ${devicesMax.md} {
    grid-row: span 2;
  }
`

// For stories without their own photo: the logo on navy, never a stand-in photo.
const BrandTile = styled(Thumb)`
  display: grid;
  place-items: center;

  & img {
    width: 46%;
    height: auto;
    object-fit: contain;
  }
`

const PlayBadge = styled.span`
  position: absolute;
  left: var(--space-2);
  bottom: var(--space-2);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.8rem;
  border-radius: var(--radius-sm);
  background-color: rgba(10, 18, 32, 0.8);
  font-family: var(--font-mono);
  font-size: 1.1rem;
  color: var(--color-white);

  & svg {
    width: 1.2rem;
    height: 1.2rem;
  }

  /* Too big for the small phone thumbnail; "Watch video" says the same. */
  @media ${devicesMax.md} {
    display: none;
  }
`

const Text = styled.div`
  display: grid;
  gap: var(--space-2);
`

const Tag = styled.p`
  font-family: var(--font-mono);
  font-size: 1.3rem;
  color: var(--color-text);
`

const Title = styled.h3`
  font-size: clamp(1.9rem, 1.5rem + 0.8vw, 2.6rem);
  line-height: 1.25;
  color: var(--color-heading);

  /* The title link covers the whole row, so the row is the click target. */
  & a::after {
    content: '';
    position: absolute;
    inset: 0;
  }
`

const Actions = styled.div`
  position: relative;
  z-index: 1; /* above the row-wide link */
  display: flex;
  align-items: center;
  gap: var(--space-4);
`

const VideoButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: 4.4rem;
  padding: 0 var(--space-4);
  border: 1px solid var(--color-line-strong);
  border-radius: var(--radius-pill);
  background-color: var(--color-surface);
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-heading);
  white-space: nowrap;

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-link);
  }
  &:hover {
    border-color: var(--color-heading);
  }
`

const Arrow = styled.span`
  display: grid;
  place-items: center;
  width: 4.4rem;
  height: 4.4rem;
  border: 1px solid var(--color-line);
  border-radius: 50%;
  color: var(--color-heading);
  transition:
    background-color 0.2s,
    color 0.2s,
    transform 0.2s;

  & svg {
    width: 2rem;
    height: 2rem;
  }
  ${Row}:hover & {
    background-color: var(--color-signal);
    border-color: var(--color-signal);
    color: var(--color-white);
  }
`

const Player = styled.div`
  position: relative;
  z-index: 1; /* playable, not swallowed by the row link */
  grid-column: 2 / -1;
  max-width: 72rem;
  margin-top: var(--space-3);

  @media ${devicesMax.md} {
    grid-column: 1 / -1;
  }
`

function NewsRow({ item }) {
  const [videoOpen, setVideoOpen] = useState(false)
  const playerId = `news-video-${item.key}`

  let thumb
  if (item.photo) {
    thumb = (
      <Thumb>
        <Picture
          photo={item.photo.photo}
          position={item.photo.position}
          alt=""
          sizes="(max-width: 768px) 11rem, 22rem"
        />
      </Thumb>
    )
  } else if (item.videoId) {
    thumb = (
      <Thumb>
        <img
          src={`https://i.ytimg.com/vi/${item.videoId}/hqdefault.jpg`}
          alt=""
          width="480"
          height="360"
          loading="lazy"
          decoding="async"
        />
        <PlayBadge aria-hidden="true">
          <HiPlay />
          Video
        </PlayBadge>
      </Thumb>
    )
  } else {
    thumb = (
      <BrandTile>
        <img src="/mloogo.png" alt="" loading="lazy" decoding="async" />
      </BrandTile>
    )
  }

  return (
    <Row>
      {thumb}
      <Text>
        <Tag>{item.tag}</Tag>
        <Title>
          {item.external ? (
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              {item.title}
              <span className="sr-only"> ({item.srLabel})</span>
            </a>
          ) : (
            <Link to={item.href}>{item.title}</Link>
          )}
        </Title>
      </Text>
      <Actions>
        {item.videoId && (
          <VideoButton
            type="button"
            aria-expanded={videoOpen}
            aria-controls={playerId}
            onClick={() => setVideoOpen((o) => !o)}
          >
            {videoOpen ? (
              <HiXMark aria-hidden="true" />
            ) : (
              <HiPlay aria-hidden="true" />
            )}
            {videoOpen ? 'Close video' : 'Watch video'}
          </VideoButton>
        )}
        <Arrow aria-hidden="true">
          {item.external ? <HiArrowUpRight /> : <HiArrowRight />}
        </Arrow>
      </Actions>
      {item.videoId && (
        <Player id={playerId} hidden={!videoOpen}>
          {videoOpen && (
            <YouTubeFacade id={item.videoId} title={item.videoTitle} autoPlay />
          )}
        </Player>
      )}
    </Row>
  )
}

function NewsList({ items, onWhite = false }) {
  return (
    <List $onWhite={onWhite}>
      {items.map((item) => (
        <NewsRow key={item.key} item={item} />
      ))}
    </List>
  )
}

export default NewsList
