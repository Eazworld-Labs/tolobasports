import styled from 'styled-components'
import {
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePhone,
} from 'react-icons/hi2'
import { FaWhatsapp } from 'react-icons/fa'
import { SITE } from '../../ui/siteInfo'
import { infoHeading, whoFor } from './contactCopy'

const Aside = styled.aside`
  align-self: start;
`

const Who = styled.ul`
  display: grid;
  gap: var(--space-3);

  & li {
    position: relative;
    padding-left: var(--space-6);
    color: var(--color-heading);
  }
  & li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.55em;
    width: 1rem;
    height: 1rem;
    border: 1.5px solid var(--color-heading);
    border-radius: 50%;
    background-color: var(--color-lime);
  }
`

const Title = styled.h2`
  margin-top: var(--space-9);
  padding-top: var(--space-6);
  border-top: 1px solid var(--color-line);
  font-size: 2rem;
  color: var(--color-heading);
`

const List = styled.address`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  margin-top: var(--space-5);
  font-style: normal;
`

const Row = styled.p`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  color: var(--color-text);

  & svg {
    flex: none;
    width: 2rem;
    height: 2rem;
    margin-top: 0.3rem;
    color: var(--color-heading);
  }
`

const TextLink = styled.a`
  font-weight: 600;
  color: var(--color-link);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.4rem;
  overflow-wrap: anywhere;

  &:hover {
    color: var(--color-link-hover);
  }
`

function ContactInfo() {
  return (
    <Aside aria-labelledby="contact-info">
      <Who aria-label="Who we work with">
        {whoFor.map((w) => (
          <li key={w}>{w}</li>
        ))}
      </Who>
      <Title id="contact-info">{infoHeading}</Title>
      <List>
        <Row>
          <HiOutlineMapPin aria-hidden="true" />
          <span>{SITE.address}</span>
        </Row>
        {SITE.emails.map((address) => (
          <Row key={address}>
            <HiOutlineEnvelope aria-hidden="true" />
            <TextLink href={`mailto:${address}`}>{address}</TextLink>
          </Row>
        ))}
        {SITE.phones.map((ph) => (
          <Row key={ph.tel}>
            <HiOutlinePhone aria-hidden="true" />
            <span>
              <TextLink href={`tel:${ph.tel}`}>{ph.display}</TextLink> (
              {ph.label})
            </span>
          </Row>
        ))}
        <Row>
          <FaWhatsapp aria-hidden="true" />
          <TextLink
            href={SITE.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp {SITE.whatsapp.display}
            <span className="sr-only"> (opens in a new tab)</span>
          </TextLink>
        </Row>
        <Row>
          <span aria-hidden="true" style={{ width: '2rem' }} />
          <TextLink
            href={SITE.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Show on a map
            <span className="sr-only"> (opens in a new tab)</span>
          </TextLink>
        </Row>
      </List>
    </Aside>
  )
}

export default ContactInfo
