/* eslint react/prop-types: 0 */
import { styled } from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'
const StyledFormRow = styled.div`
  display: flex;
  justify-content: flex-start;
  /* display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem; */

  @media ${devicesMax.md} {
    flex-direction: column;
  }
  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`
const Label = styled.label`
  font-weight: 500;
  flex-basis: 24rem;
  @media ${devicesMax.md} {
    flex-basis: 0;
    margin-bottom: 2rem;
  }
`
const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-signal-600);
  flex-basis: 24rem;
  margin: 0 1rem;
  @media ${devicesMax.md} {
    flex-basis: 0;
  }
`

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  )
}

export default FormRow
