import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

// Link that looks like a button. $variant: 'primary' (red), 'secondary'
// (outlined, for dark backgrounds) or 'outline' (outlined, for light ones).
const ButtonLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  min-height: 4.8rem;
  padding: var(--space-2) var(--space-6);
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
  font-size: var(--text-base);
  font-weight: 600;
  text-align: center;
  transition:
    background-color 0.2s,
    color 0.2s,
    border-color 0.2s,
    transform 0.2s;

  &:active {
    transform: translateY(1px);
  }

  ${(props) =>
    (props.$variant || 'primary') === 'primary' &&
    css`
      background-color: var(--color-signal-600);
      color: var(--color-white);

      &:hover {
        background-color: var(--color-signal-700);
      }
    `}

  ${(props) =>
    props.$variant === 'secondary' &&
    css`
      border-color: rgba(255, 255, 255, 0.75);
      color: var(--color-white);

      &:hover {
        background-color: var(--color-surface);
        color: var(--color-heading);
      }
    `}

  ${(props) =>
    props.$variant === 'outline' &&
    css`
      border-color: var(--color-heading);
      color: var(--color-heading);

      &:hover {
        background-color: var(--color-heading);
        color: var(--color-surface);
      }
    `}
`

export default ButtonLink
