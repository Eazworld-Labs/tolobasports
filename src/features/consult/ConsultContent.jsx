/* eslint react/prop-types: 0 */
import styled from 'styled-components'
import { devicesMax } from '../../styles/BreakPoint'
import Container from '../../ui/Container'
import Header from '../../ui/Header'
import ButtonLink from '../../ui/ButtonLink'
import Picture from '../../ui/Picture'
import YoutubeEmbed from '../../ui/YoutubeEmbed'
import { cta, pageTitle, sections } from './consultCopy'

const Page = styled.div`
  padding-block: var(--space-9) 0;
`

const Row = styled.section`
  padding-block: var(--space-9);

  &:nth-of-type(even) {
    background-color: var(--color-grey-50);
  }

  @media ${devicesMax.md} {
    padding-block: var(--space-8);
  }
`

// Text and media alternate sides; a row without media is a single readable column.
const RowGrid = styled.div`
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

const RowTitle = styled.h2`
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

const Closing = styled.section`
  padding-block: var(--space-11);
  background-color: var(--color-ink-900);
  background-image: linear-gradient(
    135deg,
    var(--color-ink-900) 0%,
    var(--color-ink-700) 100%
  );
  color: var(--color-white);

  @media ${devicesMax.md} {
    padding-block: var(--space-9);
  }
`

const ClosingTitle = styled.h2`
  font-size: var(--heading-2);
  font-weight: 700;
  line-height: 1.1;
  color: var(--color-white);
`

const ClosingText = styled.p`
  max-width: 62ch;
  margin-top: var(--space-5);
  font-size: var(--text-lg);
  line-height: 1.7;
  color: var(--color-grey-200);
  hyphens: manual;
`

const LimeAccent = styled(Accent)`
  background-color: var(--color-lime);
`

function ConsultMedia({ section, flip }) {
  if (section.embedId) {
    return (
      <Media $flip={flip}>
        <Video>
          <YoutubeEmbed embedId={section.embedId} title={section.videoTitle} />
        </Video>
      </Media>
    )
  }
  if (section.image) {
    return (
      <Media $flip={flip}>
        <Photo {...section.image} sizes="(max-width: 1024px) 92vw, 46vw" />
      </Media>
    )
  }
  return null
}

function ConsultContent() {
  const rows = sections.slice(0, -1)
  const closing = sections[sections.length - 1]

  return (
    <>
      <Header images="mentor" title={pageTitle} flush />
      <Page>
        {rows.map((section, index) => {
          const flip = index % 2 === 1
          const hasMedia = Boolean(section.embedId || section.image)
          return (
            <Row key={section.heading} aria-labelledby={`consult-${index}`}>
              <Container>
                <RowGrid $hasMedia={hasMedia}>
                  <Text $flip={flip}>
                    <Accent aria-hidden="true" />
                    <RowTitle id={`consult-${index}`}>
                      {section.heading}
                    </RowTitle>
                    {section.paragraphs.map((text) => (
                      <Paragraph key={text.slice(0, 30)}>{text}</Paragraph>
                    ))}
                  </Text>
                  <ConsultMedia section={section} flip={flip} />
                </RowGrid>
              </Container>
            </Row>
          )
        })}
      </Page>
      <Closing aria-labelledby="consult-closing">
        <Container>
          <LimeAccent aria-hidden="true" />
          <ClosingTitle id="consult-closing">{closing.heading}</ClosingTitle>
          {closing.paragraphs.map((text) => (
            <ClosingText key={text.slice(0, 30)}>{text}</ClosingText>
          ))}
          <div style={{ marginTop: 'var(--space-8)' }}>
            <ButtonLink to={cta.to}>{cta.label}</ButtonLink>
          </div>
        </Container>
      </Closing>
    </>
  )
}

export default ConsultContent
