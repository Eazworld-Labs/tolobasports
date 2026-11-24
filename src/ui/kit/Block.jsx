import styled from 'styled-components'

// A page section. $tone: 'white' (default) or 'paper'. Consecutive sections are
// separated by a 1px line, never by colour alone.
const Block = styled.section`
  padding-block: clamp(5.6rem, 8vw, 10.4rem);
  background-color: ${(props) =>
    props.$tone === 'paper' ? 'var(--color-paper)' : 'var(--color-surface)'};
  scroll-margin-top: 8rem;

  & + & {
    border-top: 1px solid var(--color-line);
  }
`

export default Block
