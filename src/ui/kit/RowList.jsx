import styled from 'styled-components'
import { devicesMax } from '../../styles/BreakPoint'
import TextLink from './TextLink'

// Title on the left, text on the right, divided by 1px lines (the home page's
// "What we do" look). items: [{ title, text, link? { label, to } }]
const Row = styled.li`
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.6fr);
  gap: var(--space-2) var(--space-8);
  padding-block: var(--space-7);
  border-top: 1px solid var(--color-line);

  &:last-child {
    border-bottom: 1px solid var(--color-line);
  }
  & h3 {
    font-size: 2.2rem;
    line-height: 1.2;
    color: var(--color-heading);
  }
  & p {
    color: var(--color-text);
  }
  & a {
    grid-column: 2;
    margin-top: var(--space-2);
  }

  @media ${devicesMax.md} {
    grid-template-columns: minmax(0, 1fr);

    & a {
      grid-column: 1;
    }
  }
`

function RowList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <Row key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          {item.link && (
            <TextLink to={item.link.to}>{item.link.label}</TextLink>
          )}
        </Row>
      ))}
    </ul>
  )
}

export default RowList
