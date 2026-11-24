import styled from 'styled-components'
import { devicesMax } from '../../styles/BreakPoint'
import TextLink from './TextLink'

// Joined, bordered cards (the home page's "How can we help you?" look).
// items: [{ eyebrow?, title, text?, list?, link? { label, to } }]
const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$cols}, minmax(0, 1fr));
  border-top: 1px solid var(--color-line);
  border-left: 1px solid var(--color-line);
  border-radius: var(--radius-md);
  overflow: hidden;

  @media ${devicesMax.lg} {
    grid-template-columns: repeat(
      ${(props) => Math.min(props.$cols, 2)},
      minmax(0, 1fr)
    );
  }
  @media ${devicesMax.md} {
    grid-template-columns: minmax(0, 1fr);
  }
`

const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-7) var(--space-6);
  border-right: 1px solid var(--color-line);
  border-bottom: 1px solid var(--color-line);
  background-color: var(--color-surface);
`

const Eyebrow = styled.p`
  font-family: var(--font-mono);
  font-size: 1.2rem;
  color: var(--color-text);
`

const Title = styled.h3`
  font-size: 2.2rem;
  line-height: 1.2;
  color: var(--color-heading);
`

const Text = styled.p`
  color: var(--color-text);
`

const List = styled.ul`
  display: grid;
  gap: var(--space-2);
  color: var(--color-text);

  & li {
    position: relative;
    padding-left: var(--space-5);
  }
  & li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.7em;
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    background-color: var(--color-lime);
    box-shadow: 0 0 0 1px var(--color-heading);
  }
`

const Spacer = styled.div`
  flex: 1;
`

function CardGrid({ items, cols = 3, headingLevel = 'h3' }) {
  return (
    <Grid $cols={cols}>
      {items.map((item) => (
        <Card key={item.title}>
          {item.eyebrow && <Eyebrow>{item.eyebrow}</Eyebrow>}
          <Title as={headingLevel}>{item.title}</Title>
          {item.text && <Text>{item.text}</Text>}
          {item.list && (
            <List>
              {item.list.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </List>
          )}
          {item.link && (
            <>
              <Spacer />
              <TextLink to={item.link.to}>{item.link.label}</TextLink>
            </>
          )}
        </Card>
      ))}
    </Grid>
  )
}

export default CardGrid
