import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { HiArrowLeft } from 'react-icons/hi2'
import { devicesMax } from '../../styles/BreakPoint'
import Container from '../../ui/Container'
import CtaBand from '../../ui/CtaBand'
import Header from '../../ui/Header'
import Picture from '../../ui/Picture'
import { blogTitle, posts } from './blogPosts'

// The only article so far; the route is /blog/<slug>.
const post = posts[0]

const Wrap = styled.article`
  padding-block: var(--space-10) var(--space-11);

  @media ${devicesMax.md} {
    padding-block: var(--space-8) var(--space-9);
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 38rem);
  gap: var(--space-10);
  align-items: start;

  @media ${devicesMax.lg} {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--space-8);
  }
`

const Text = styled.div`
  max-width: 65ch;

  & p {
    font-size: var(--text-lg);
    line-height: 1.8;
    color: var(--color-grey-700);
    hyphens: manual;
  }
  & p + p {
    margin-top: var(--space-5);
  }
`

const Figure = styled.figure`
  @media (min-width: 1025px) {
    position: sticky;
    top: 12rem;
  }
`

const Photo = styled(Picture)`
  display: block;
  width: 100%;
  height: auto;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);

  @media ${devicesMax.lg} {
    max-width: 46rem;
  }
`

const Back = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  margin-top: var(--space-8);
  min-height: 4.4rem;
  font-weight: 600;
  color: var(--color-signal-600);
  text-decoration: underline;
  text-underline-offset: 0.4rem;

  & svg {
    width: 1.8rem;
    height: 1.8rem;
  }
  &:hover {
    color: var(--color-signal-700);
  }
`

function BlogContent() {
  return (
    <>
      <Header
        images="test"
        title={post.title}
        crumb={blogTitle}
        flush
      />
      <Wrap>
        <Container>
          <Grid>
            <div>
              <Text>
                {post.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                ))}
              </Text>
              <Back to="/blog">
                <HiArrowLeft aria-hidden="true" />
                Back to {blogTitle}
              </Back>
            </div>
            <Figure>
              <Photo {...post.image} sizes="(max-width: 1024px) 92vw, 38rem" eager />
            </Figure>
          </Grid>
        </Container>
      </Wrap>
      <CtaBand label="Contact us" cta={{ label: 'Contact us', to: '/contact' }} />
    </>
  )
}

export default BlogContent
