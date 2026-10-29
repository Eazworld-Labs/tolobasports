import styled from 'styled-components'
import { devicesMax } from '../../styles/BreakPoint'
import ButtonLink from '../../ui/ButtonLink'
import Container from '../../ui/Container'
import CtaBand from '../../ui/CtaBand'
import EditorialRow from '../../ui/EditorialRow'
import Heading from '../../ui/Heading'
import Underline from '../../ui/UnderLine'
import YoutubeEmbed from '../../ui/YoutubeEmbed'
import { announcement, closing, rising, rows } from './scoutingCopy'

const Page = styled.div`
  padding-block: var(--space-9) 0;
`

const Notice = styled.section`
  padding-block: var(--space-9);
  background-color: var(--color-lime);
  color: var(--color-ink-900);
`

const NoticeInner = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
`

const NoticeText = styled.p`
  max-width: 48ch;
  font-family: var(--font-heading);
  font-size: var(--heading-3);
  font-weight: 700;
  line-height: 1.15;
`

const Stars = styled.section`
  padding-block: var(--space-11);

  @media ${devicesMax.md} {
    padding-block: var(--space-9);
  }
`

const StarsHeader = styled.div`
  margin-bottom: var(--space-8);
  text-align: center;
`

const Videos = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$count}, minmax(0, 1fr));
  gap: var(--space-6);

  @media ${devicesMax.md} {
    grid-template-columns: minmax(0, 1fr);
  }
`

const Video = styled.div`
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: var(--radius-md);
  background-color: var(--color-ink-900);
  box-shadow: var(--shadow-md);
`

function Scout() {
  const embeds = rising.videos.filter((v) => v.embedId)

  return (
    <>
      <Page>
        {rows.map((row, index) => (
          <EditorialRow
            key={row.heading}
            id={`scout-${index}`}
            heading={row.heading}
            paragraphs={row.paragraphs}
            embedId={row.embedId}
            videoTitle={row.videoTitle}
            image={row.image}
            flip={index % 2 === 1}
            tone={index % 2 === 1 ? 'grey' : 'white'}
          />
        ))}
      </Page>

      <Notice aria-label="Announcements">
        <NoticeInner>
          <NoticeText>{announcement.text}</NoticeText>
          {announcement.action && (
            <ButtonLink to={announcement.action.href} $variant="outline">
              {announcement.action.label}
            </ButtonLink>
          )}
        </NoticeInner>
      </Notice>

      {embeds.length > 0 && (
        <Stars aria-labelledby="rising-stars">
          <Container>
            <StarsHeader>
              <Heading as="h2" id="rising-stars">
                {rising.heading}
              </Heading>
              <Underline />
            </StarsHeader>
            <Videos $count={embeds.length}>
              {embeds.map((video) => (
                <Video key={video.embedId}>
                  <YoutubeEmbed embedId={video.embedId} title={video.title} />
                </Video>
              ))}
            </Videos>
          </Container>
        </Stars>
      )}

      <CtaBand
        id="scout-closing"
        heading={closing.heading}
        paragraphs={closing.paragraphs}
        cta={closing.cta}
      />
    </>
  )
}

export default Scout
