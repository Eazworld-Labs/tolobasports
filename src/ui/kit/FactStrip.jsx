import styled from 'styled-components'
import { devicesMax } from '../../styles/BreakPoint'

// Scannable facts: a short value over a mono caption, each under a 1px rule.
// facts: [{ value, caption }]
const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$count}, minmax(0, 1fr));
  gap: var(--space-6);

  @media ${devicesMax.lg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media ${devicesMax.sm} {
    grid-template-columns: minmax(0, 1fr);
  }
`

const Fact = styled.li`
  padding-top: var(--space-5);
  border-top: 1px solid var(--color-heading);

  & strong {
    display: block;
    font-family: var(--font-heading);
    font-stretch: var(--heading-stretch);
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -0.02em;
    color: var(--color-heading);
  }
  & span {
    display: block;
    margin-top: var(--space-2);
    font-family: var(--font-mono);
    font-size: 1.3rem;
    color: var(--color-text);
  }
`

function FactStrip({ facts, label = 'Key facts' }) {
  return (
    <List $count={facts.length} aria-label={label}>
      {facts.map((f) => (
        <Fact key={f.value}>
          <strong>{f.value}</strong>
          <span>{f.caption}</span>
        </Fact>
      ))}
    </List>
  )
}

export default FactStrip
