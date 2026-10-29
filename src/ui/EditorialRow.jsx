import styled from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'
import Container from './Container'
import Picture from './Picture'
import Reveal from './Reveal'
import YoutubeEmbed from './YoutubeEmbed'

// A text block with optional media beside it; media alternates sides with `flip`.
// Media is a video when `embedId` is not empty, otherwise the photo, otherwise
// nothing (the text then takes a single readable column).
const Row = styled.section`
  padding-block: var(--space-9);
  background-color: ${(props) =>
    props.$tone === 'grey' ? 'var(--color-grey-50)' : 'var(--color-white)'};

  @media ${devicesMax.md} {
    padding-block: var(--space-8);
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$hasMedia ? 'minmax(0, 1fr) minmax(0, 1fr)' : 'minmax(0, 1fr)'};
  gap: var(--space-10);
  align-items: center;

  @media ${devicesMax.lg} {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--space-7);
  }
`

const Text = styled.div`
  max-width: 62ch;
  order: ${(props) => (props.$flip ? 2 : 1)};

  @media ${devicesMax.lg} {
    order: 1;
  }
`

const Accent = styled.span`
  display: block;
  width: 7.2rem;
  height: 0.6rem;
  margin-bottom: var(--space-5);
  border-radius: var(--radius-pill);
  background-color: var(--color-signal);
`

const Title = styled.h2`
  font-size: var(--heading-2);
  font-weight: 700;
  line-height: 1.1;
  color: var(--color-ink-900);
`

const Paragraph = styled.p`
  margin-top: var(--space-5);
  font-size: var(--text-lg);
  line-height: 1.75;
  color: var(--color-grey-700);
  hyphens: manual;

  & strong {
    color: var(--color-signal-600);
  }
`

const Media = styled.div`
  order: ${(props) => (props.$flip ? 1 : 2)};

  @media ${devicesMax.lg} {
    order: 2;
  }
`

const Photo = styled(Picture)`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
`

const Video = styled.div`
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: var(--radius-md);
  background-color: var(--color-ink-900);
  box-shadow: var(--shadow-md);
`

// paragraphs: strings, or { label, text } for a bold lead-in label.
function EditorialRow({
  id,
  heading,
  label,
  paragraphs,
  embedId,
  videoTitle,
  image,
  flip,
  tone,
}) {
  const hasMedia = Boolean(embedId || image)

  return (
    <Row
      $tone={tone}
      aria-labelledby={heading ? id : undefined}
      aria-label={heading ? undefined : label}
    >
      <Container>
        <Grid $hasMedia={hasMedia}>
          <Reveal
            as={Text}
            $flip={flip}
            variant={flip ? 'slide-right' : 'slide-left'}
          >
            <Accent aria-hidden="true" />
            {heading && <Title id={id}>{heading}</Title>}
            {paragraphs.map((p) =>
              typeof p === 'string' ? (
                <Paragraph key={p.slice(0, 30)}>{p}</Paragraph>
              ) : (
                <Paragraph key={p.text.slice(0, 30)}>
                  <strong>{p.label}</strong> {p.text}
                </Paragraph>
              ),
            )}
          </Reveal>
          {embedId ? (
            <Reveal
              as={Media}
              $flip={flip}
              variant={flip ? 'slide-left' : 'slide-right'}
              delay={120}
            >
              <Video>
                <YoutubeEmbed embedId={embedId} title={videoTitle} />
              </Video>
            </Reveal>
          ) : image ? (
            <Reveal
              as={Media}
              $flip={flip}
              variant={flip ? 'slide-left' : 'slide-right'}
              delay={120}
            >
              <Photo {...image} sizes="(max-width: 1024px) 92vw, 46vw" />
            </Reveal>
          ) : null}
        </Grid>
      </Container>
    </Row>
  )
}

export default EditorialRow
