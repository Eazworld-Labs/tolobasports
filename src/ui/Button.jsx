import styled, { css } from 'styled-components'

const Button = styled.button`
  font-size: 1.6rem;
  background-color: var(--color-signal);
  color: var(--color-ink-700);
  border: none;
  padding: 0.8rem 1rem;
  box-shadow: var(--shadow-sm);
  border-radius: var(--radius-sm);
  transition: all 0.3s;

  ${(props) =>
    props.pros === 'interest' &&
    css`
      position: absolute;
      bottom: -60px;
      left: 5px;
    `}
  ${(props) =>
    props.pros === 'contact' &&
    css`
      &:hover {
        background-color: var(--color-signal);
        color: var(--color-ink-700);
      }
    `}
`
export default Button
