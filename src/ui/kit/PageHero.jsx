import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { devicesMax } from '../../styles/BreakPoint'
import ButtonLink from '../ButtonLink'
import Container from '../Container'
import Picture from '../Picture'
import Kicker from './Kicker'

// The top of an inner page, built like the home hero: breadcrumb, kicker, the
// page's single h1 (with an optional highlighted ending), a lead, actions, and
// a photo or any other `media` on the right.
const Band = styled.section`
  padding-block: clamp(4rem, 6vw, 8rem);
  background-color: var(--color-paper);
  border-bottom: 1px solid var(--color-line);
`

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$media ? 'minmax(0, 1fr) minmax(0, 1fr)' : 'minmax(0, 1fr)'};
  gap: clamp(3.2rem, 5vw, 7.2rem);
  align-items: center;

  @media ${devicesMax.lg} {
    grid-template-columns: minmax(0, 1fr);
  }
`

const Crumbs = styled.ol`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-6);
  list-style: none;
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
  max-width: ${(props) => (props.$small ? '30ch' : '18ch')};
  font-size: ${(props) =>
    props.$small
      ? 'clamp(3rem, 1.8rem + 1.8vw, 4.4rem)'
      : 'clamp(3.6rem, 1.6rem + 3vw, 5.8rem)'};
  font-weight: 800;
  font-stretch: 125%;
  line-height: 1.03;
  letter-spacing: -0.025em;
  color: var(--color-heading);

  & em {
    font-style: normal;
    color: var(--color-link);
  }
`

const Lead = styled.p`
  max-width: 36em;
  margin-top: var(--space-6);
  font-size: var(--text-lg);
  color: var(--color-text);
`

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-7);
`

const Photo = styled(Picture)`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: var(--radius-md);
`

// actions: [{ label, to, variant? }]; photo: { photo, position? } or media: node.
// `small` sets a long title (an article headline) at a calmer size.
function PageHero({
  small,
  crumb,
  kicker,
  title,
  highlight,
  lead,
  actions = [],
  photo,
  media,
  children,
}) {
  const side =
    media ||
    (photo && (
      <Photo
        photo={photo.photo}
        position={photo.position}
        sizes="(max-width: 1024px) 92vw, 46vw"
        eager
      />
    ))

  return (
    <Band aria-labelledby="page-title">
      <Grid $media={Boolean(side)}>
        <div>
          <nav aria-label="Breadcrumb">
            <Crumbs>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li aria-current="page">{crumb}</li>
            </Crumbs>
          </nav>
          {kicker && <Kicker>{kicker}</Kicker>}
          <Title id="page-title" $small={small}>
            {title}
            {highlight && (
              <>
                {' '}
                <em>{highlight}</em>
              </>
            )}
          </Title>
          {lead && <Lead>{lead}</Lead>}
          {actions.length > 0 && (
            <Actions>
              {actions.map((a, i) => (
                <ButtonLink
                  key={a.label}
                  // In-page targets (#id) are plain anchors so the browser scrolls.
                  {...(a.to.startsWith('#')
                    ? { as: 'a', href: a.to }
                    : { to: a.to })}
                  $variant={a.variant || (i === 0 ? 'primary' : 'outline')}
                >
                  {a.label}
                </ButtonLink>
              ))}
            </Actions>
          )}
          {children}
        </div>
        {side}
      </Grid>
    </Band>
  )
}

export default PageHero
