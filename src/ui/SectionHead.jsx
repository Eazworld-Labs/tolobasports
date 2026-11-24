import styled from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'

// Section heading with an optional one-line intro beside it (stacked on phones).
const Wrap = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: var(--space-5) var(--space-9);
  align-items: end;
  margin-bottom: var(--space-9);

  @media ${devicesMax.md} {
    grid-template-columns: minmax(0, 1fr);
    margin-bottom: var(--space-7);
  }
`

const Title = styled.h2`
  font-size: var(--heading-2);
  color: var(--color-heading);
`

const Intro = styled.p`
  max-width: 44ch;
  color: var(--color-text);
`

function SectionHead({ id, title, intro }) {
  return (
    <Wrap>
      <Title id={id}>{title}</Title>
      {intro && <Intro>{intro}</Intro>}
    </Wrap>
  )
}

export default SectionHead
