import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ButtonLink from './ButtonLink'
import { useNoIndex } from './useNoIndex'

const Wrap = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 60vh;
  padding: var(--space-11) var(--container-pad);
  background-color: var(--color-ink-900);
  background-image: linear-gradient(
    135deg,
    var(--color-ink-900) 0%,
    var(--color-ink-700) 100%
  );
  color: var(--color-white);
`

const Inner = styled.div`
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
`

const Badge = styled.p`
  display: inline-block;
  margin-bottom: var(--space-5);
  padding: var(--space-1) var(--space-4);
  border-radius: var(--radius-pill);
  background-color: var(--color-lime);
  color: var(--color-ink-900);
  font-size: var(--text-sm);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

const Title = styled.h1`
  font-size: var(--heading-1);
  font-weight: 800;
  line-height: 1;
  color: var(--color-white);
`

const Text = styled.p`
  max-width: 52ch;
  margin-top: var(--space-5);
  font-size: var(--text-xl);
  color: var(--color-grey-200);
`

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-6);
  margin-top: var(--space-8);
`

const BackLink = styled(Link)`
  font-weight: 600;
  color: var(--color-white);
  text-decoration: underline;
  text-underline-offset: 0.4rem;

  &:hover {
    color: var(--color-lime);
  }
`

// Full-width message page: a badge, the page's single h1, one sentence and two links.
// `noindex` keeps pages without real content out of search results.
function StatusPage({ badge, title, text, primary, secondary, noindex }) {
  useNoIndex(Boolean(noindex))
  return (
    <Wrap aria-labelledby="status-page-title">
      <Inner>
        <Badge>{badge}</Badge>
        <Title id="status-page-title">{title}</Title>
        <Text>{text}</Text>
        <Actions>
          <ButtonLink to={primary.to}>{primary.label}</ButtonLink>
          <BackLink to={secondary.to}>{secondary.label}</BackLink>
        </Actions>
      </Inner>
    </Wrap>
  )
}

export default StatusPage
