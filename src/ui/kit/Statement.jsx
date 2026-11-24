import styled from 'styled-components'

// One sentence set large: a vision, a result, a promise.
const Statement = styled.p`
  max-width: 30ch;
  font-family: var(--font-heading);
  font-stretch: var(--heading-stretch);
  font-size: clamp(2.6rem, 1.6rem + 2vw, 4rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: var(--color-heading);
  text-wrap: balance;
`

export default Statement
