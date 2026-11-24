import styled from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'
import Container from './Container'
import ButtonLink from './ButtonLink'
import Reveal from './Reveal'

// Dark closing call-to-action. With a heading it is a panel; without one it is a
// slim band holding just the button.
const Band = styled.section`
  padding-block: ${(props) =>
    props.$slim ? 'var(--space-9)' : 'var(--space-11)'};
  background-color: var(--color-band);
  color: var(--color-white);
  text-align: ${(props) => (props.$slim ? 'center' : 'left')};

  @media ${devicesMax.md} {
    padding-block: var(--space-9);
  }
`

const Title = styled.h2`
  font-size: var(--heading-2);
  font-weight: 700;
  line-height: 1.1;
  color: var(--color-white);
`

const Text = styled.p`
  max-width: 62ch;
  margin-top: var(--space-5);
  font-size: var(--text-lg);
  line-height: 1.7;
  color: var(--color-grey-200);
  hyphens: manual;
`

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: ${(props) => (props.$slim ? 'center' : 'flex-start')};
  gap: var(--space-4) var(--space-7);
  margin-top: ${(props) => (props.$slim ? '0' : 'var(--space-8)')};
`

const Mail = styled.a`
  font-weight: 600;
  color: var(--color-white);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.4rem;
  overflow-wrap: anywhere;

  &:hover {
    color: var(--color-lime);
  }
`

function CtaBand({ id, heading, paragraphs = [], cta, label, email }) {
  const slim = !heading

  return (
    <Band
      $slim={slim}
      aria-labelledby={heading ? id : undefined}
      aria-label={heading ? undefined : label}
    >
      <Container>
        <Reveal>
          {heading && (
            <>
              <Title id={id}>{heading}</Title>
            </>
          )}
          {paragraphs.map((text) => (
            <Text key={text.slice(0, 30)}>{text}</Text>
          ))}
          <Actions $slim={slim}>
            <ButtonLink to={cta.to}>{cta.label}</ButtonLink>
            {email && <Mail href={`mailto:${email}`}>{email}</Mail>}
          </Actions>
        </Reveal>
      </Container>
    </Band>
  )
}

export default CtaBand
