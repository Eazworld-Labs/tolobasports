import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { HiOutlineEnvelope, HiOutlineMapPin } from 'react-icons/hi2'
import { devicesMax } from '../styles/BreakPoint'
import Logo from './Logo'
import SocialLinks from './SocialLinks'
import { SITE } from './siteInfo'
import { ALL_LINKS } from './navLinks'

const StyledFooter = styled.footer`
  background-color: var(--color-ink-900);
  color: var(--color-grey-300);
  font-size: var(--text-sm);
`

const Container = styled.div`
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding-inline: var(--container-pad);
`

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: 1.3fr 1.2fr 1.3fr;
  gap: var(--space-9);
  padding-block: var(--space-10) var(--space-9);

  @media ${devicesMax.lg} {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-8);
  }
  @media ${devicesMax.sm} {
    grid-template-columns: 1fr;
  }
`

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-4);

  @media ${devicesMax.lg} {
    grid-column: 1 / -1;
  }
`

const Tagline = styled.p`
  max-width: 34rem;
  font-size: var(--text-base);
  color: var(--color-grey-200);
`

const ColTitle = styled.h2`
  margin-bottom: var(--space-4);
  font-family: var(--font-body);
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-lime);
`

const LinkList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2) var(--space-5);
`

const FooterLink = styled(NavLink)`
  display: inline-block;
  padding-block: var(--space-1);
  color: var(--color-grey-300);

  &:hover,
  &.active {
    color: var(--color-white);
    text-decoration: underline;
    text-underline-offset: 0.4rem;
  }
`

const ContactList = styled.address`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  font-style: normal;
`

const ContactRow = styled.p`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);

  & svg {
    flex: none;
    width: 2rem;
    height: 2rem;
    margin-top: 0.2rem;
    color: var(--color-lime);
  }
`

const InlineLink = styled.a`
  color: var(--color-white);
  text-decoration: underline;
  text-underline-offset: 0.4rem;
  overflow-wrap: anywhere;

  &:hover {
    color: var(--color-lime);
  }
`

const Bottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  font-size: var(--text-xs);
`

const BottomInner = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2) var(--space-6);
  padding-block: var(--space-4);

  @media ${devicesMax.sm} {
    flex-direction: column;
    align-items: flex-start;
  }
`

function Footer() {
  return (
    <StyledFooter>
      <Grid>
        <Brand>
          <Logo size="lg" />
          <Tagline>{SITE.tagline}</Tagline>
          <SocialLinks size="lg" />
        </Brand>

        <nav aria-label="Footer">
          <ColTitle>Quick links</ColTitle>
          <LinkList>
            {ALL_LINKS.map((link) => (
              <li key={link.to}>
                <FooterLink to={link.to} end={link.end}>
                  {link.drawerLabel || link.label}
                </FooterLink>
              </li>
            ))}
          </LinkList>
        </nav>

        <div>
          <ColTitle>Contact</ColTitle>
          <ContactList>
            <ContactRow>
              <HiOutlineMapPin aria-hidden="true" />
              <span>
                {SITE.address}
                <br />
                <InlineLink
                  href={SITE.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Show Map
                  <span className="sr-only"> (opens in a new tab)</span>
                </InlineLink>
              </span>
            </ContactRow>
            <ContactRow>
              <HiOutlineEnvelope aria-hidden="true" />
              <InlineLink href={`mailto:${SITE.email}`}>{SITE.email}</InlineLink>
            </ContactRow>
          </ContactList>
        </div>
      </Grid>

      <Bottom>
        <BottomInner>
          <p>©Copyright 2019 Toloba sports consult. All rights reserved.</p>
          <p>
            Powered by eazword solutions.{'  '}
            <InlineLink
              href="https://eazworld.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              eazworld.com
            </InlineLink>
          </p>
        </BottomInner>
      </Bottom>
    </StyledFooter>
  )
}

export default Footer
