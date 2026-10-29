import styled, { css } from 'styled-components'

const Button = styled.button`
  font-size: var(--text-base);
  font-weight: 600;
  letter-spacing: 0.02em;
  background-color: var(--color-signal);
  color: var(--color-white);
  border: none;
  padding: var(--space-2) var(--space-5);
  box-shadow: var(--shadow-sm);
  border-radius: var(--radius-sm);
  transition:
    background-color 0.2s,
    transform 0.2s;

  &:hover {
    background-color: var(--color-signal-600);
  }
  &:active {
    transform: translateY(1px);
  }

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
        background-color: var(--color-ink-700);
      }
    `}
`
export default Button
