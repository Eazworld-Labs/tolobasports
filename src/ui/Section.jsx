/* eslint react/prop-types: 0*/
import styled, { css } from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'

// Only used by the unrouted FaqContent.jsx and TestContent.jsx; the live pages use
// their own layout components.
const StyledSection = styled.section`
  margin-bottom: var(--space-11);

  @media ${devicesMax.md} {
    margin-bottom: var(--space-8);
  }

  ${(props) =>
    props.type === 'padd' &&
    css`
      padding: var(--space-11);
      @media ${devicesMax.md} {
        padding: var(--space-5);
      }
    `}
`
function Section({ children, type }) {
  return <StyledSection type={type}>{children}</StyledSection>
}

export default Section
