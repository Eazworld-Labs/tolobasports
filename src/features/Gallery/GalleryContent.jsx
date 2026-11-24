import { useCallback, useRef, useState } from 'react'
import styled from 'styled-components'
import { devicesMax } from '../../styles/BreakPoint'
import Container from '../../ui/Container'
import Block from '../../ui/kit/Block'
import { groups, images } from './gallery'
import GalleryModel from './GalleryModel'

// Photos in labelled groups of small square tiles. Clicking a tile opens the
// full-size viewer, which pages through every photo.
const Group = styled.section`
  & + & {
    margin-top: var(--space-10);
  }
`

const GroupHead = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-4);
  margin-bottom: var(--space-5);
  padding-bottom: var(--space-3);
  border-bottom: 1px solid var(--color-line);

  & h2 {
    font-size: 2.2rem;
    color: var(--color-heading);
  }
  & p {
    font-family: var(--font-mono);
    font-size: 1.3rem;
    color: var(--color-text);
  }
`

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: var(--space-3);

  @media ${devicesMax.lg} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media ${devicesMax.sm} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--space-2);
  }
`

const Tile = styled.button`
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  padding: 0;
  overflow: hidden;
  border: 1px solid var(--color-line);
  border-radius: var(--radius-md);
  background-color: var(--color-paper);
  cursor: zoom-in;

  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  &:hover img {
    transform: scale(1.04);
  }
`

function GalleryContent() {
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
        .querySelector(`[data-gallery-index="${triggerIndex.current}"]`)
        ?.focus()
    })
  }, [])

  return (
    <Block aria-label="Photo gallery">
      <Container>
        {groups.map((group, g) => (
          <Group key={group.title} aria-labelledby={`gallery-group-${g}`}>
            <GroupHead>
              <h2 id={`gallery-group-${g}`}>{group.title}</h2>
              <p>
                {group.indexes.length}{' '}
                {group.indexes.length === 1 ? 'photo' : 'photos'}
              </p>
            </GroupHead>
            <Grid>
              {group.indexes.map((index) => {
                const image = images[index]
                return (
                  <li key={image.key}>
                    <Tile
                      type="button"
                      data-gallery-index={index}
                      aria-haspopup="dialog"
                      aria-label={`View larger: ${image.alt}`}
                      onClick={() => open(index)}
                    >
                      <img
                        src={image.thumb}
                        width={image.thumbWidth}
                        height={image.thumbHeight}
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                    </Tile>
                  </li>
                )
              })}
            </Grid>
          </Group>
        ))}
      </Container>
      {openIndex !== null && (
        <GalleryModel
          images={images}
          index={openIndex}
          onClose={close}
          onNavigate={setOpenIndex}
        />
      )}
    </Block>
  )
}

export default GalleryContent
