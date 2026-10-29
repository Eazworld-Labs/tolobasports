import styled, { css } from 'styled-components'

const Underline = styled.div`
  width: 8rem;
  height: 0.4rem;
  background-color: var(--color-signal);
  margin-top: 0;
  margin-right: auto;
  margin-left: auto;
  border-radius: var(--radius-pill);

  ${(props) =>
    props.cols === 'col' &&
    css`
      background-color: var(--color-lime);
      margin-bottom: var(--space-5);
    `}
`
export default Underline
