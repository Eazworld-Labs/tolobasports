import styled from 'styled-components'
import { devicesMax } from '../../styles/BreakPoint'
import Container from '../../ui/Container'
import YoutubeEmbed from '../../ui/YoutubeEmbed'
import { news } from './homeContent'

const Band = styled.section`
  padding-block: clamp(5.6rem, 8vw, 10.4rem);
  background-color: var(--color-paper);
  border-top: 1px solid var(--color-line);
`

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(3.2rem, 5vw, 6.4rem);
  align-items: center;

  @media ${devicesMax.lg} {
    grid-template-columns: minmax(0, 1fr);
  }
`

const Kicker = styled.p`
  margin-bottom: var(--space-4);
  font-family: var(--font-mono);
  font-size: 1.3rem;
  color: var(--color-text);
`

const Headline = styled.h2`
  font-size: var(--heading-3);
  line-height: 1.2;
  color: var(--color-heading);
`

const Text = styled.div`
  margin-top: var(--space-5);
  color: var(--color-text);

  & p + p {
    margin-top: var(--space-4);
  }
`

const Source = styled.a`
  display: inline-block;
  margin-top: var(--space-6);
  font-weight: 600;
  color: var(--color-link);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.4rem;

  &:hover {
    color: var(--color-link-hover);
  }
`

const Video = styled.div`
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: var(--radius-md);
  background-color: var(--color-ink-900);
`

function NewsArticle() {
  return (
    <Band aria-labelledby="news-title">
      <Grid as="article">
        <div>
          <Kicker>{news.kicker}</Kicker>
          <Headline id="news-title">{news.headline}</Headline>
          <Text>
            {news.summary.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </Text>
          <Source
            href={news.source.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {news.source.label}
            <span className="sr-only"> (opens in a new tab)</span>
          </Source>
        </div>
        <Video>
          <YoutubeEmbed embedId={news.videoId} title={news.videoTitle} />
        </Video>
      </Grid>
    </Band>
  )
}

export default NewsArticle
