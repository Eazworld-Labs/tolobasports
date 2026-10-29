import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { devicesMax } from '../styles/BreakPoint'
import Container from '../ui/Container'
import Header from '../ui/Header'
import Picture from '../ui/Picture'
import Reveal from '../ui/Reveal'
import { blogTitle, posts } from '../features/blog/blogPosts'

const Wrap = styled.section`
  padding-block: var(--space-10) var(--space-11);

  @media ${devicesMax.md} {
    padding-block: var(--space-8) var(--space-9);
  }
`

const List = styled.ul`
  display: grid;
  gap: var(--space-7);
`

const Card = styled.li`
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  overflow: hidden;
  border: 1px solid var(--color-grey-200);
  border-radius: var(--radius-md);
  background-color: var(--color-white);
  box-shadow: var(--shadow-md);

  @media ${devicesMax.md} {
    grid-template-columns: minmax(0, 1fr);
  }
`

const Photo = styled(Picture)`
  display: block;
  width: 100%;
  height: 100%;
  min-height: 28rem;
  max-height: 48rem;
  object-fit: cover;

  @media ${devicesMax.md} {
    height: auto;
    aspect-ratio: 4 / 3;
    max-height: none;
  }
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: var(--space-9);
  border-top: 0.5rem solid transparent;
  border-left: 0.5rem solid var(--color-signal);

  @media ${devicesMax.md} {
    padding: var(--space-7) var(--space-6);
    border-left: none;
    border-top: 0.5rem solid var(--color-signal);
  }
`

const Title = styled.h2`
  font-size: var(--heading-2);
  font-weight: 700;
  line-height: 1.1;
  color: var(--color-ink-900);
`

const Excerpt = styled.p`
  max-width: 60ch;
  margin-top: var(--space-5);
  font-size: var(--text-lg);
  color: var(--color-grey-700);
  hyphens: manual;
`

const More = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-top: var(--space-7);
  min-height: 4.4rem;
  padding: var(--space-3) var(--space-7);
  border-radius: var(--radius-sm);
  background-color: var(--color-signal-600);
  color: var(--color-white);
  font-weight: 600;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-signal-700);
  }
`

function Blog() {
  return (
    <>
      <Header images="test" title={blogTitle} flush />
      <Wrap aria-label="Articles">
        <Container>
          <List>
            {posts.map((post) => (
              <Reveal as={Card} key={post.slug}>
                <Photo {...post.image} sizes="(max-width: 768px) 92vw, 38vw" />
                <Body>
                  <Title>{post.title}</Title>
                  <Excerpt>{post.excerpt}</Excerpt>
                  <More to={`/blog/${post.slug}`}>
                    Read more
                    <span className="sr-only">: {post.title}</span>
                  </More>
                </Body>
              </Reveal>
            ))}
          </List>
        </Container>
      </Wrap>
    </>
  )
}

export default Blog
