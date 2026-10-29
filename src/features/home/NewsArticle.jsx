import styled from 'styled-components'
import { devicesMax } from '../../styles/BreakPoint'
import YoutubeEmbed from '../../ui/YoutubeEmbed'
import { news } from './homeContent'

const Wrap = styled.section`
  background-color: var(--color-grey-50);
  border-top: 1px solid var(--color-grey-200);
`

const Inner = styled.article`
  width: 100%;
  max-width: 90rem;
  margin: 0 auto;
  padding: var(--space-11) var(--container-pad);

  @media ${devicesMax.md} {
    padding-block: var(--space-9);
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

const Headline = styled.h2`
  font-size: var(--heading-2);
  font-weight: 700;
  line-height: 1.1;
  color: var(--color-ink-900);
`

const Text = styled.div`
  max-width: 65ch;
  margin-top: var(--space-7);
  font-size: var(--text-lg);
  line-height: 1.75;
  color: var(--color-grey-700);

  & p {
    hyphens: manual;
  }
  & p + p {
    margin-top: var(--space-5);
  }
`

const Video = styled.div`
  margin-top: var(--space-9);
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: var(--radius-md);
  background-color: var(--color-ink-900);
  box-shadow: var(--shadow-md);
`

const Source = styled.p`
  margin-top: var(--space-6);
  font-size: var(--text-base);
  color: var(--color-grey-600);

  & a {
    font-weight: 600;
    color: var(--color-signal-600);
    text-decoration: underline;
    text-underline-offset: 0.4rem;
  }
  & a:hover {
    color: var(--color-signal-700);
  }
`

function NewsArticle() {
  return (
    <Wrap aria-labelledby="news-title">
      <Inner>
        <Accent aria-hidden="true" />
        <Headline id="news-title">{news.headline}</Headline>
        <Text>
          {news.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </Text>
        <Video>
          <YoutubeEmbed embedId={news.videoId} title={news.videoTitle} />
        </Video>
        <Source>
          <span>{news.sourceLabel}</span>{' '}
          <a href={news.sourceUrl} target="_blank" rel="noopener noreferrer">
            {news.sourceText}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </Source>
      </Inner>
    </Wrap>
  )
}

export default NewsArticle
