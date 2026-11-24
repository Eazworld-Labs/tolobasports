import styled from 'styled-components'
import { HiArrowUpRight } from 'react-icons/hi2'
import { devicesMax } from '../../styles/BreakPoint'
import Container from '../../ui/Container'
import SectionHead from '../../ui/SectionHead'
import YouTubeFacade from '../../ui/YouTubeFacade'
import Block from '../../ui/kit/Block'
import TextLink from '../../ui/kit/TextLink'
import { posts } from '../blog/blogPosts'
import { news } from './homeContent'

// A small newsroom: the press story as the featured card, the latest blog post
// beside it, and a link to everything.
const Stack = styled.div`
  display: grid;
  gap: var(--space-5);
`

// Horizontal cards: media or title on the left, text on the right; stacked on
// tablets and phones.
const Card = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  align-items: center;
  border: 1px solid var(--color-line);
  border-radius: var(--radius-md);
  background-color: var(--color-surface);
  overflow: hidden;

  @media ${devicesMax.lg} {
    grid-template-columns: minmax(0, 1fr);
  }
`

const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-7) var(--space-7);

  @media ${devicesMax.md} {
    padding: var(--space-6) var(--space-5);
  }
`

const Meta = styled.p`
  font-family: var(--font-mono);
  font-size: 1.2rem;
  color: var(--color-text);
`

const Headline = styled.h3`
  font-size: clamp(2.2rem, 1.6rem + 0.9vw, 2.8rem);
  line-height: 1.2;
  color: var(--color-heading);
`

const Summary = styled.p`
  color: var(--color-text);
`

// Clamp long excerpts so the two cards stay balanced.
const Excerpt = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  overflow: hidden;
  color: var(--color-text);
`

const Spacer = styled.div`
  flex: 1;
`

const External = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  align-self: flex-start;
  font-weight: 600;
  color: var(--color-link);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.4rem;

  & svg {
    width: 1.6rem;
    height: 1.6rem;
  }
  &:hover {
    color: var(--color-link-hover);
  }
`

const Video = styled(YouTubeFacade)`
  /* Fills its column beside the text on desktop; 16:9 when stacked. */
  align-self: stretch;
  width: 100%;
  height: 100%;
  min-height: 30rem;
  aspect-ratio: auto;
  border-radius: 0;

  /* YouTube's 4:3 thumbnail has the 16:9 picture letterboxed inside; in this
     taller frame a slight zoom keeps the black bars out of view. */
  @media (min-width: 1025px) {
    & img,
    & button:hover img {
      transform: scale(1.22);
    }
  }

  @media ${devicesMax.lg} {
    height: auto;
    min-height: 0;
    aspect-ratio: 16 / 9;
  }
`

// The whole blog card is the click target: the link's ::after covers it.
const StoryCard = styled(Card)`
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  align-items: start;
  transition: background-color 0.2s;

  @media ${devicesMax.lg} {
    grid-template-columns: minmax(0, 1fr);

    & > div + div {
      padding-top: 0;
    }
  }

  &:hover {
    background-color: var(--color-paper);
  }
  & a::after {
    content: '';
    position: absolute;
    inset: 0;
  }
`

const Foot = styled.div`
  margin-top: var(--space-7);
`

function NewsArticle() {
  const latest = posts[0]

  return (
    <Block $tone="paper" aria-labelledby="news-title">
      <Container>
        <SectionHead id="news-title" title={news.heading} intro={news.intro} />
        <Stack>
          <Card aria-labelledby="news-featured">
            <Video id={news.videoId} title={news.videoTitle} />
            <Body>
              <Meta>Press · {news.source}</Meta>
              <Headline id="news-featured">{news.headline}</Headline>
              <Summary>{news.summary}</Summary>
              <Spacer />
              <External
                href={news.link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {news.link.label}
                <HiArrowUpRight aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </External>
            </Body>
          </Card>

          {latest && (
            <StoryCard aria-labelledby="news-story">
              <Body>
                <Meta>Story · Media &amp; Blog</Meta>
                <Headline id="news-story">{latest.title}</Headline>
              </Body>
              <Body>
                <Excerpt>{latest.excerpt}</Excerpt>
                <Spacer />
                <TextLink to={`/blog/${latest.slug}`}>
                  Read the story
                  <span className="sr-only">: {latest.title}</span>
                </TextLink>
              </Body>
            </StoryCard>
          )}
        </Stack>
        <Foot>
          <TextLink to={news.all.to}>{news.all.label}</TextLink>
        </Foot>
      </Container>
    </Block>
  )
}

export default NewsArticle
