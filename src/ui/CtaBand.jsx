/* eslint react/prop-types: 0 */
import styled from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'
import Container from './Container'
import ButtonLink from './ButtonLink'

// Dark closing call-to-action. With a heading it is a panel; without one it is a
// slim band holding just the button.
const Band = styled.section`
  padding-block: ${(props) =>
    props.$slim ? 'var(--space-9)' : 'var(--space-11)'};
  background-color: var(--color-ink-900);
  background-image: linear-gradient(
    135deg,
    var(--color-ink-900) 0%,
    var(--color-ink-700) 100%
  );
  color: var(--color-white);
  text-align: ${(props) => (props.$slim ? 'center' : 'left')};

  @media ${devicesMax.md} {
    padding-block: var(--space-9);
  }
`

const Accent = styled.span`
  display: block;
  width: 7.2rem;
  height: 0.6rem;
  margin-bottom: var(--space-5);
  border-radius: var(--radius-pill);
  background-color: var(--color-lime);
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

function CtaBand({ id, heading, paragraphs = [], cta, label }) {
  const slim = !heading

  return (
    <Band
      $slim={slim}
      aria-labelledby={heading ? id : undefined}
      aria-label={heading ? undefined : label}
    >
      <Container>
        {heading && (
          <>
            <Accent aria-hidden="true" />
            <Title id={id}>{heading}</Title>
          </>
        )}
        {paragraphs.map((text) => (
          <Text key={text.slice(0, 30)}>{text}</Text>
        ))}
        <div style={{ marginTop: slim ? 0 : 'var(--space-8)' }}>
          <ButtonLink to={cta.to}>{cta.label}</ButtonLink>
        </div>
      </Container>
    </Band>
  )
}

export default CtaBand
