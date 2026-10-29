import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { devicesMax } from '../styles/BreakPoint'
import Container from './Container'
import { BANNERS } from './bannerImages'

// Compact inner-page banner: dark ink, the page photo under a gradient, a lime
// accent bar, an optional h1 and a short breadcrumb. The photo is decorative.
// Pass `title` to render the page's single h1; pages that already have their own
// h1 leave it out and get a slim photo strip. `crumb` is a shorter breadcrumb label
// when the title is long. `flush` removes the bottom gap.
const Banner = styled.div`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  min-height: ${(props) =>
    props.$hasTitle ? 'clamp(15rem, 19vw, 21rem)' : 'clamp(9rem, 11vw, 13rem)'};
  margin-bottom: ${(props) => (props.$flush ? '0' : 'var(--space-10)')};
  background-color: var(--color-ink-900);
  color: var(--color-white);
`

const Photo = styled.img`
  position: absolute;
  inset: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Shade = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(
    90deg,
    rgba(20, 26, 38, 0.94) 0%,
    rgba(20, 26, 38, 0.8) 55%,
    rgba(20, 26, 38, 0.6) 100%
  );

  @media ${devicesMax.md} {
    background: rgba(20, 26, 38, 0.82);
  }
`

const Inner = styled(Container)`
  padding-block: var(--space-7) var(--space-7);

  @media ${devicesMax.md} {
    padding-block: var(--space-6);
  }
`

const Crumbs = styled.ol`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: var(--space-3);
  font-size: var(--text-sm);
  color: var(--color-grey-300);

  & li + li::before {
    content: '/';
    margin-right: var(--space-2);
    color: var(--color-grey-400);
  }
  & a {
    text-decoration: underline;
    text-underline-offset: 0.3rem;
  }
  & a:hover {
    color: var(--color-white);
  }
`

const Accent = styled.span`
  display: block;
  width: 6.4rem;
  height: 0.5rem;
  margin-bottom: var(--space-4);
  border-radius: var(--radius);
  background-color: var(--color-lime);
`

const Title = styled.h1`
  font-size: clamp(34px, 3.2vw + 14px, 58px);
  font-weight: 800;
  line-height: 1.05;
  color: var(--color-white);
`

function Header({ images, title, crumb, flush, children }) {
  const banner = BANNERS[images]

  return (
    <Banner $hasTitle={Boolean(title)} $flush={flush}>
      {banner && (
        <Photo
          src={`/optimized/banner-${images}-960.webp`}
          srcSet={`/optimized/banner-${images}-960.webp 960w, /optimized/banner-${images}-1600.webp ${banner.width}w`}
          sizes="100vw"
          alt=""
          style={{ objectPosition: banner.position }}
        />
      )}
      <Shade />
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
        <Accent aria-hidden="true" />
        {title && <Title>{title}</Title>}
        {children}
      </Inner>
    </Banner>
  )
}

export default Header
