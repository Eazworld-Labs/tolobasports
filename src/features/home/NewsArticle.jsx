import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { HiArrowRight } from 'react-icons/hi2'
import Container from '../../ui/Container'
import Block from '../../ui/kit/Block'
import { posts } from '../blog/blogPosts'
import NewsList from '../news/NewsList'
import { pressItem, storyItem } from '../news/newsItems'
import { press } from '../news/press'
import { news } from './homeContent'

// "In the news" on the home page: the press coverage, newest first, then the
// latest blog story.
const Head = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-4);
  margin-bottom: var(--space-7);

  & h2 {
    font-size: var(--heading-2);
    color: var(--color-heading);
  }
`

const AllLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-weight: 600;
  color: var(--color-link);

  & svg {
    width: 1.8rem;
    height: 1.8rem;
    transition: transform 0.2s;
  }
  &:hover {
    color: var(--color-link-hover);
  }
  &:hover svg {
    transform: translateX(0.3rem);
  }
`

function NewsArticle() {
  const items = [...press.map(pressItem), ...posts.slice(0, 1).map(storyItem)]

  return (
    <Block $tone="paper" aria-labelledby="news-title">
      <Container>
        <Head>
          <h2 id="news-title">{news.heading}</h2>
          <AllLink to={news.all.to}>
            {news.all.label}
            <HiArrowRight aria-hidden="true" />
          </AllLink>
        </Head>
        <NewsList items={items} />
      </Container>
    </Block>
  )
}

export default NewsArticle
