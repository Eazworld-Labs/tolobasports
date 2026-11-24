import { useCallback, useRef, useState } from 'react'
import styled from 'styled-components'
import { HiPlay } from 'react-icons/hi2'
import { devicesMax } from '../../styles/BreakPoint'
import ButtonLink from '../../ui/ButtonLink'
import Container from '../../ui/Container'
import Picture from '../../ui/Picture'
import SectionHead from '../../ui/SectionHead'
import Block from '../../ui/kit/Block'
import GalleryModel from '../Gallery/GalleryModel'
import {
  clips,
  formatDuration,
  images,
  photoItem,
  videoItem,
} from '../Gallery/gallery'
import { field } from './homeContent'

// "In the field": the reel as a large tile with four photos around it (a bento
// grid). Every tile is a button that opens the same viewer as the gallery.
const GROUP = 'In the field'
const items = [
  videoItem(field.video.key, GROUP),
  ...field.photos.map((p) => photoItem(p.key, GROUP)),
]
const labels = [field.video.label, ...field.photos.map((p) => p.label)]

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-auto-rows: clamp(15rem, 17vw, 24rem);
  gap: var(--space-3);

  & > li:first-child {
    grid-column: span 2;
    grid-row: span 2;
  }

  @media ${devicesMax.lg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-auto-rows: clamp(14rem, 28vw, 22rem);
  }
  @media ${devicesMax.sm} {
    grid-auto-rows: 14rem;
    gap: var(--space-2);
  }
`

const Tile = styled.button`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  overflow: hidden;
  border: 0;
  border-radius: var(--radius-md);
  background-color: var(--color-band);
  text-align: left;
  cursor: pointer;

  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }
  &:hover img {
    transform: scale(1.04);
  }

  /* A bottom scrim keeps the white labels readable on any photo. */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(10, 18, 32, 0.78) 0%,
      rgba(10, 18, 32, 0) 55%
    );
    pointer-events: none;
  }
`

const Meta = styled.span`
  position: absolute;
  left: var(--space-4);
  right: var(--space-4);
  bottom: var(--space-4);
  z-index: 1;
  display: grid;
  gap: var(--space-2);
  justify-items: start;
  color: var(--color-white);
`

const Tag = styled.span`
  padding: 0.3rem 0.8rem;
  border-radius: var(--radius-sm);
  background-color: rgba(10, 18, 32, 0.7);
  font-family: var(--font-mono);
  font-size: 1.2rem;
  line-height: 1.4;
`

const FeatureTitle = styled.span`
  font-family: var(--font-heading);
  font-stretch: var(--heading-stretch);
  font-size: clamp(2rem, 1.4rem + 1vw, 2.8rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
`

const Play = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
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
  ${Tile}:hover & {
    transform: translate(-50%, -50%) scale(1.08);
  }
`

const Foot = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  margin-top: var(--space-7);
  padding-top: var(--space-5);
  border-top: 1px solid var(--color-line);

  & p {
    font-family: var(--font-mono);
    font-size: 1.3rem;
    color: var(--color-text);
  }
`

function FieldBento() {
  const [openIndex, setOpenIndex] = useState(null)
  const triggerIndex = useRef(null)

  const open = useCallback((index) => {
    triggerIndex.current = index
    setOpenIndex(index)
  }, [])

  // Closing returns focus to the tile that opened the viewer.
  const close = useCallback(() => {
    setOpenIndex(null)
    requestAnimationFrame(() => {
      document
        .querySelector(`[data-field-index="${triggerIndex.current}"]`)
        ?.focus()
    })
  }, [])

  const reel = items[0]

  return (
    <Block aria-labelledby="field-title">
      <Container>
        <SectionHead
          id="field-title"
          title={field.heading}
          intro={field.intro}
        />
        <Grid>
          <li>
            <Tile
              type="button"
              data-field-index={0}
              aria-haspopup="dialog"
              aria-label={`Play video: ${reel.alt} (${formatDuration(
                reel.duration,
              )})`}
              onClick={() => open(0)}
            >
              <img src={reel.full} alt="" loading="lazy" decoding="async" />
              <Play aria-hidden="true">
                <HiPlay />
              </Play>
              <Meta aria-hidden="true">
                <Tag>
                  {labels[0]} · {formatDuration(reel.duration)}
                </Tag>
                <FeatureTitle>{field.video.title}</FeatureTitle>
              </Meta>
            </Tile>
          </li>
          {field.photos.map((p, i) => (
            <li key={p.key}>
              <Tile
                type="button"
                data-field-index={i + 1}
                aria-haspopup="dialog"
                aria-label={`View larger: ${items[i + 1].alt}`}
                onClick={() => open(i + 1)}
              >
                <Picture
                  photo={p.key}
                  alt=""
                  sizes="(max-width: 1024px) 46vw, 23vw"
                />
                <Meta aria-hidden="true">
                  <Tag>{labels[i + 1]}</Tag>
                </Meta>
              </Tile>
            </li>
          ))}
        </Grid>
        <Foot>
          <p>
            {images.length} photos · {clips.length} videos in the gallery
          </p>
          <ButtonLink to={field.cta.to} $variant="outline">
            {field.cta.label}
          </ButtonLink>
        </Foot>
      </Container>
      {openIndex !== null && (
        <GalleryModel
          images={items}
          index={openIndex}
          onClose={close}
          onNavigate={setOpenIndex}
          label="In the field viewer"
          noun={null}
        />
      )}
    </Block>
  )
}

export default FieldBento
