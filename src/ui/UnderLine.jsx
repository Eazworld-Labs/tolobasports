import styled, { css } from 'styled-components'

const Underline = styled.div`
  width: 140px;
  height: 2px;
  background-color: var(--color-grey-500);
  margin-top: 0;
  margin-right: auto;
  margin-left: auto;
  border-radius: 42%;

  ${(props) =>
    props.cols === 'col' &&
    css`
      background-color: var(--color-white);
      margin-bottom: 2rem;
    `}
`
export default Underline
