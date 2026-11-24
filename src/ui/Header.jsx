import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { devicesMax } from '../styles/BreakPoint'
import Container from './Container'

// Inner-page header: a pale band with a breadcrumb, the page's single h1 and an
// optional one-line intro. No photo, so the page's own content leads.
// `crumb` is a shorter breadcrumb label when the title is long; `intro` is a
// short sentence under the title; `flush` removes the bottom gap.
const Band = styled.div`
  margin-bottom: ${(props) => (props.$flush ? '0' : 'var(--space-10)')};
  background-color: var(--color-paper);
  border-bottom: 1px solid var(--color-line);
`

const Inner = styled(Container)`
  padding-block: var(--space-9) var(--space-9);

  @media ${devicesMax.md} {
    padding-block: var(--space-7);
  }
`

const Crumbs = styled.ol`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: var(--space-5);
  font-family: var(--font-mono);
  font-size: 1.3rem;
  color: var(--color-text);

  & li + li::before {
    content: '/';
    margin-right: var(--space-2);
  }
  & a {
    text-decoration: underline;
    text-underline-offset: 0.3rem;
  }
  & a:hover {
    color: var(--color-heading);
  }
`

const Title = styled.h1`
  max-width: 22ch;
  font-size: var(--heading-1);
  font-weight: 800;
  line-height: 1.04;
  color: var(--color-heading);
`

const Intro = styled.p`
  max-width: 60ch;
  margin-top: var(--space-5);
  font-size: var(--text-lg);
  color: var(--color-text);
`

function Header({ title, crumb, intro, flush, children }) {
  return (
    <Band $flush={flush}>
      <Inner>
        {title && (
          <nav aria-label="Breadcrumb">
            <Crumbs>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li aria-current="page">{crumb || title}</li>
            </Crumbs>
          </nav>
        )}
        {title && <Title>{title}</Title>}
        {intro && <Intro>{intro}</Intro>}
        {children}
      </Inner>
    </Band>
  )
}

export default Header
