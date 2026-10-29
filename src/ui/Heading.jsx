import styled, { css } from 'styled-components'

const Heading = styled.h1`
  font-family: var(--font-heading);
  color: var(--color-signal);
  line-height: 1.1;
  letter-spacing: 0.01em;
  text-wrap: balance;

  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: var(--heading-1);
      font-weight: 700;
    `}
  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: var(--heading-2);
      font-weight: 700;
    `}
  ${(props) =>
    props.as === 'h3' &&
    css`
      font-size: var(--heading-3);
      font-weight: 600;
    `}
  ${(props) =>
    props.as === 'h4' &&
    css`
      font-size: var(--heading-4);
      font-weight: 600;
      text-align: center;
    `}
`
export default Heading
