import styled, { css } from 'styled-components'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { SITE } from './siteInfo'

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: var(--space-1);
`

const IconLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: var(--radius-pill);
  color: var(--color-grey-300);
  transition:
    color 0.2s,
    background-color 0.2s;

  & svg {
    width: 1.6rem;
    height: 1.6rem;
  }

  &:hover {
    color: var(--color-lime);
  }

  ${(props) =>
    props.$size === 'lg' &&
    css`
      width: 4.4rem;
      height: 4.4rem;
      border: 1px solid var(--color-grey-600);

      & svg {
        width: 1.8rem;
        height: 1.8rem;
      }
      &:hover {
        background-color: var(--color-signal-600);
        border-color: var(--color-signal-600);
        color: var(--color-white);
      }
    `}
`

function SocialLinks({ size = 'sm' }) {
  return (
    <List>
      <li>
        <IconLink
          href={SITE.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Toloba Sports on Facebook (opens in a new tab)"
          $size={size}
        >
          <FaFacebookF aria-hidden="true" />
        </IconLink>
      </li>
      <li>
        <IconLink
          href={SITE.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Toloba Sports on Instagram (opens in a new tab)"
          $size={size}
        >
          <FaInstagram aria-hidden="true" />
        </IconLink>
      </li>
    </List>
  )
}

export default SocialLinks
