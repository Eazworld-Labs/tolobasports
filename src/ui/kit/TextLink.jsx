import styled from 'styled-components'
import { Link } from 'react-router-dom'

// The underlined red action link used under cards and rows.
const TextLink = styled(Link)`
  align-self: flex-start;
  font-weight: 600;
  color: var(--color-link);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.4rem;

  &:hover {
    color: var(--color-link-hover);
  }
`

export default TextLink
