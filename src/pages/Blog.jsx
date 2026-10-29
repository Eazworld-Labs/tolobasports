import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { devicesMax } from '../styles/BreakPoint'

const BlogContent = styled.div`
  display: flex;
  padding: 4rem;

  @media ${devicesMax.md} {
    flex-direction: column;
  }
`
const StyledUl = styled.ul`
  flex: 2;
  display: grid;
  grid-template-columns: 25rem 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 5rem;

  @media ${devicesMax.md} {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`
const BoxSide = styled.div`
  flex: 1;
  padding: 2rem;

  @media ${devicesMax.md} {
    height: 30rem;
  }
`

const BlogBox = styled.div`
  padding: 1rem;
  background-image: url('/musah11.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 30rem;

  display: flex;
  justify-content: center;
  align-items: end;

  ${(props) =>
    props.type === 'side' &&
    css`
      height: 100%;
    `}
  @media ${devicesMax.md}{
    height: 30rem
  }
`

const H2 = styled.h2`
  font-family: var(--font-body);
  color: var(--color-white);
  font-size: 1.6rem;
  font-weight: 600;
`
const StyledLi = styled.li`
  border-radius: 10px;
  overflow: hidden;
`

function Blog() {
  return (
    <>
      <BlogContent>
        <StyledUl>
          <StyledLi>
            <Link to="/blog/APivotalMeetinginAbuDhabi">
              <BlogBox>
                <H2 as="h3">
                  A Pivotal Meeting in Abu Dhabi: The Tale of Musah Toloba and
                  Daniel Curcio
                </H2>
              </BlogBox>
            </Link>
          </StyledLi>
          <StyledLi>
            <Link to="/blog/APivotalMeetinginAbuDhabi">
              <BlogBox>
                <H2 as="h3">
                  A Pivotal Meeting in Abu Dhabi: The Tale of Musah Toloba and
                  Daniel Curcio
                </H2>
              </BlogBox>
            </Link>
          </StyledLi>
          <StyledLi>
            <Link to="/blog/APivotalMeetinginAbuDhabi">
              <BlogBox>
                <H2 as="h3">
                  A Pivotal Meeting in Abu Dhabi: The Tale of Musah Toloba and
                  Daniel Curcio
                </H2>
              </BlogBox>
            </Link>
          </StyledLi>
          <StyledLi>
            <Link to="/blog/APivotalMeetinginAbuDhabi">
              <BlogBox>
                <H2 as="h3">
                  A Pivotal Meeting in Abu Dhabi: The Tale of Musah Toloba and
                  Daniel Curcio
                </H2>
              </BlogBox>
            </Link>
          </StyledLi>
        </StyledUl>
        <BoxSide>
          <BlogBox type="side">
            <Link to="/blog/APivotalMeetinginAbuDhabi">
              <H2 as="h3">
                A Pivotal Meeting in Abu Dhabi: The Tale of Musah Toloba and
                Daniel Curcio
              </H2>
            </Link>
          </BlogBox>
        </BoxSide>
      </BlogContent>
    </>
  )
}

export default Blog
