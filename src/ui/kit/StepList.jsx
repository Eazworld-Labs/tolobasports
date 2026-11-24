import styled from 'styled-components'
import { devicesMax } from '../../styles/BreakPoint'

// A real sequence, so the steps are numbered. items: [{ title, text }]
const List = styled.ol`
  position: relative;
  display: grid;
  grid-template-columns: repeat(${(props) => props.$count}, minmax(0, 1fr));
  list-style: none;
  counter-reset: step;

  &::before {
    content: '';
    position: absolute;
    top: 1.8rem;
    left: 1.8rem;
    right: 1.8rem;
    border-top: 1px dashed var(--color-line-strong);
  }

  @media ${devicesMax.lg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: var(--space-8);

    &::before {
      display: none;
    }
  }
  @media ${devicesMax.sm} {
    grid-template-columns: minmax(0, 1fr);
  }
`

const Step = styled.li`
  padding-right: var(--space-6);
  counter-increment: step;

  &::before {
    content: counter(step);
    position: relative;
    display: grid;
    place-items: center;
    width: 3.6rem;
    height: 3.6rem;
    margin-bottom: var(--space-5);
    border: 1.5px solid var(--color-heading);
    border-radius: 50%;
    background-color: ${(props) =>
      props.$tone === 'paper' ? 'var(--color-paper)' : 'var(--color-surface)'};
    font-family: var(--font-mono);
    font-size: 1.4rem;
    color: var(--color-heading);
  }
  & h3 {
    margin-bottom: var(--space-2);
    font-family: var(--font-body);
    font-stretch: normal;
    font-size: 1.7rem;
    font-weight: 600;
    letter-spacing: 0;
    color: var(--color-heading);
  }
  & p {
    font-size: 1.5rem;
    color: var(--color-text);
  }
`

function StepList({ items, tone }) {
  return (
    <List $count={items.length}>
      {items.map((item) => (
        <Step key={item.title} $tone={tone}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </Step>
      ))}
    </List>
  )
}

export default StepList
