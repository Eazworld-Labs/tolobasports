import styled from 'styled-components'
import { HiOutlineEnvelope, HiOutlineMapPin } from 'react-icons/hi2'
import { devicesMax } from '../../styles/BreakPoint'
import ButtonLink from '../../ui/ButtonLink'
import Reveal from '../../ui/Reveal'
import { SITE } from '../../ui/siteInfo'
import { infoHeading } from './contactCopy'

const Card = styled.aside`
  align-self: start;
  padding: var(--space-9);
  border-top: 0.6rem solid var(--color-lime);
  border-radius: var(--radius-md);
  background-color: var(--color-ink-900);
  background-image: linear-gradient(
    135deg,
    var(--color-ink-900) 0%,
    var(--color-ink-700) 100%
  );
  color: var(--color-grey-200);
  box-shadow: var(--shadow-md);

  @media ${devicesMax.md} {
    padding: var(--space-7) var(--space-6);
  }
`

const Title = styled.h2`
  font-size: var(--heading-3);
  font-weight: 700;
  color: var(--color-white);
`

const List = styled.address`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  margin-top: var(--space-6);
  font-style: normal;
`

const Row = styled.p`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  font-size: var(--text-lg);

  & svg {
    flex: none;
    width: 2.2rem;
    height: 2.2rem;
    margin-top: 0.3rem;
    color: var(--color-lime);
  }
`

const Mail = styled.a`
  color: var(--color-white);
  text-decoration: underline;
  text-underline-offset: 0.4rem;
  overflow-wrap: anywhere;

  &:hover {
    color: var(--color-lime);
  }
`

function ContactInfo() {
  return (
    <Reveal as={Card} variant="slide-left" aria-labelledby="contact-info">
      <Title id="contact-info">{infoHeading}</Title>
      <List>
        <Row>
          <HiOutlineMapPin aria-hidden="true" />
          <span>{SITE.address}</span>
        </Row>
        <Row>
          <HiOutlineEnvelope aria-hidden="true" />
          <Mail href={`mailto:${SITE.email}`}>{SITE.email}</Mail>
        </Row>
      </List>
      <div style={{ marginTop: 'var(--space-7)' }}>
        <ButtonLink
          as="a"
          href={SITE.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          $variant="secondary"
        >
          Show map
          <span className="sr-only"> (opens in a new tab)</span>
        </ButtonLink>
      </div>
    </Reveal>
  )
}

export default ContactInfo
