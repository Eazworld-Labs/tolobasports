import styled, { css } from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'

const Heading = styled.h1`

font-family: 'Lato';
color: var(--color-signal);
text-shadow: 2px 1px 0px rgba(44, 51, 67, 0.36);

  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 5rem;
      font-weight: 600;
      font-family: 'Roboto';
      @media ${devicesMax.sm} {
        font-size: 3.5rem;
      }
    `}
  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 3.2rem;
      font-weight: 600;
    `}
    ${(props) =>
      props.as === 'h3' &&
      css`
        font-size: 2rem;
        font-weight: 500;
      `}
      ${(props) =>
        props.as === 'h4' &&
        css`
          font-size: 3rem;
          font-weight: 600;
          text-align: center;
        `}

`
export default Heading
