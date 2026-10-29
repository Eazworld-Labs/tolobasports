import styled, { css } from 'styled-components'
import Header from '../../ui/Header'
import Heading from '../../ui/Heading'
import Row from '../../ui/Row'
import Section from '../../ui/Section'
import { HiOutlineCheck } from 'react-icons/hi2'

import { useState } from 'react'

const FaqDetail = styled.div`
  padding: 2rem;
`
const ContentBox = styled.div`
  padding: 4rem;
  border: 1px solid var(--color-ink-700);
  border-top: 5px solid var(--color-signal);
`
const StyleQues = styled.div`
  background-color: var(--color-ink-700);
  padding: 1rem;
  cursor: pointer;
  margin-bottom: 0.5rem;
  color: var(--color-white);
`
const AnsBox = styled.div`
  padding: 2rem;
  border: 1px solid var(--color-ink-700);
  display: none;

  ${(props) =>
    props.type === 'open' &&
    css`
      display: block;
    `}
`
const StyledP = styled.p`
  font-size: 1.5rem;
  text-align: justify;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: var(--color-signal);
`

function FaqContent() {
  const [isOpen, setIsOpen] = useState(0)
  return (
    <>
      <Header images="faq" />
      <Section>
        <Row>
          <Heading as="h1">FAQ&apos;s</Heading>
        </Row>
        <FaqDetail>
          <ContentBox>
            <StyleQues
              onClick={() => {
                if (isOpen === 1) {
                  setIsOpen(0)
                } else setIsOpen(1)
              }}
            >
              How can I apply to be a part of your program in Europe/India?
            </StyleQues>

            <AnsBox type={isOpen === 1 ? 'open' : ''}>
              <StyledP>
                <HiOutlineCheck />
                Complete the online application,
              </StyledP>
              <StyledP>
                <HiOutlineCheck />
                Let your child attend a camp (recommended), and contact our
                person responsible for specific questions on any aspect of the
                program.
              </StyledP>
              <StyledP>
                <HiOutlineCheck />
                Your application will be reviewed by the Admissions Department
              </StyledP>
              <StyledP>
                <HiOutlineCheck />
                If accepted, you will receive information on next steps for
                confirming attendance.
              </StyledP>
            </AnsBox>
            <StyleQues
              onClick={() => {
                if (isOpen === 2) {
                  setIsOpen(0)
                } else setIsOpen(2)
              }}
            >
              What does EBSM look for in a student athlete?
            </StyleQues>

            <AnsBox type={isOpen === 2 ? 'open' : ''}>
              <StyledP>
                <HiOutlineCheck />
                Complete the online application,
              </StyledP>
              <StyledP>
                <HiOutlineCheck />
                EBSM looks for student-athletes who have a strong commitment to
                academics, athletics and personal growth. Student-athletes must
                be diligent in school, sport and community duties, with a
                willingness to not sacrifice effort in any area.
              </StyledP>
            </AnsBox>
            <StyleQues
              onClick={() => {
                if (isOpen === 3) {
                  setIsOpen(0)
                } else setIsOpen(3)
              }}
            >
              Does EBSM offer scholarships or financial assistance?
            </StyleQues>

            <AnsBox type={isOpen === 3 ? 'open' : ''}>
              <StyledP>
                <HiOutlineCheck />
                Complete the online application,
              </StyledP>
              <StyledP>
                <HiOutlineCheck />
                EBSM looks for student-athletes who have a strong commitment to
                academics, athletics and personal growth. Student-athletes must
                be diligent in school, sport and community duties, with a
                willingness to not sacrifice effort in any area.
              </StyledP>
            </AnsBox>
            <StyleQues
              onClick={() => {
                if (isOpen === 4) {
                  setIsOpen(0)
                } else setIsOpen(4)
              }}
            >
              Where can I find important forms and resources for my child?
            </StyleQues>

            <AnsBox type={isOpen === 4 ? 'open' : ''}>
              <StyledP>
                <HiOutlineCheck />
                Contact us to find important forms, calendars and general
                information.
              </StyledP>
            </AnsBox>
            <StyleQues
              onClick={() => {
                if (isOpen === 5) {
                  setIsOpen(0)
                } else setIsOpen(5)
              }}
            >
              Where do student-athletes live while they´re on campus?
            </StyleQues>

            <AnsBox type={isOpen === 5 ? 'open' : ''}>
              <StyledP>
                <HiOutlineCheck />
                EBSM student-athletes are provided with state-of-the-art
                accommodations. Our living quarters were built with the idea of
                fostering community development and fellowship. Each of our
                academy feature a recreation room, common area, washer/dryer and
                Wi-Fi access throughout. While most of our student-athletes
                board on campus, they have the option to live at home in the
                area.
              </StyledP>
            </AnsBox>
            <StyleQues
              onClick={() => {
                if (isOpen === 6) {
                  setIsOpen(0)
                } else setIsOpen(6)
              }}
            >
              How does EBSM view the balance between student and athlete?
            </StyleQues>

            <AnsBox type={isOpen === 6 ? 'open' : ''}>
              <StyledP>
                <HiOutlineCheck />
                Our experienced faculty appreciates the demands of being both a
                student and an athlete, and they strive to provide a
                constructive balance between school and football. Our faculty
                challenges student-athletes through advanced coursework, but
                also supports through distance learning (when needed for sport
                travel), tutoring sessions available nightly.
              </StyledP>
            </AnsBox>
            <StyleQues
              onClick={() => {
                if (isOpen === 7) {
                  setIsOpen(0)
                } else setIsOpen(7)
              }}
            >
              What is included in the price?
            </StyleQues>

            <AnsBox type={isOpen === 7 ? 'open' : ''}>
              <StyledP>
                <HiOutlineCheck />
                The price shall include food, football training uniform, laundry
                and accommodation. Along with a full personal training
                evaluation, movement training, strength training and
                position-specific training. As well as it includes schooling or
                language course.
              </StyledP>
            </AnsBox>
            <StyleQues
              onClick={() => {
                if (isOpen === 8) {
                  setIsOpen(0)
                } else setIsOpen(8)
              }}
            >
              What airport does my child fly to?
            </StyleQues>
            <AnsBox type={isOpen === 8 ? 'open' : ''}>
              <StyledP>
                <HiOutlineCheck />
                Charles de Gaulle International Airport – 3,5 hours from center
              </StyledP>
              <StyledP>
                <HiOutlineCheck />
                Frankfurt International Airport – 2,5 hours from center
              </StyledP>
              <StyledP>
                <HiOutlineCheck />
                Luxembourg (LUX) – 1 hour from center
              </StyledP>
              <StyledP>
                <HiOutlineCheck />
                Munich Airport (MUC) – 1 hour from center
              </StyledP>
              <StyledP>
                <HiOutlineCheck />
                Salzburg Airport – 1 hour from center
              </StyledP>
            </AnsBox>
            <StyleQues
              onClick={() => {
                if (isOpen === 9) {
                  setIsOpen(0)
                } else setIsOpen(9)
              }}
            >
              Is the academy open only for boys/girls?
            </StyleQues>

            <AnsBox type={isOpen === 9 ? 'open' : ''}>
              <StyledP>
                <HiOutlineCheck />
                The academy will be open to boys and girls.
              </StyledP>
            </AnsBox>
            <StyleQues
              onClick={() => {
                if (isOpen === 10) {
                  setIsOpen(0)
                } else setIsOpen(10)
              }}
            >
              When and where will the venues be published?
            </StyleQues>

            <AnsBox type={isOpen === 10 ? 'open' : ''}>
              <StyledP>
                <HiOutlineCheck />
                Venues for the selections will be published on our website and
                Facebook page. These will be subject to change.
              </StyledP>
            </AnsBox>
            <StyleQues
              onClick={() => {
                if (isOpen === 11) {
                  setIsOpen(0)
                } else setIsOpen(11)
              }}
            >
              Will my child have a medical examination prior to being selected
              to the academy?
            </StyleQues>

            <AnsBox type={isOpen === 11 ? 'open' : ''}>
              <StyledP>
                <HiOutlineCheck />
                All players will be required to complete a full medical
                examination prior to being selected. Players will also be
                required to present their birth certificates.
              </StyledP>
            </AnsBox>
            <StyleQues
              onClick={() => {
                if (isOpen === 12) {
                  setIsOpen(0)
                } else setIsOpen(12)
              }}
            >
              When will I be informed of the starting and moving dates into the
              academy?
            </StyleQues>

            <AnsBox type={isOpen === 12 ? 'open' : ''}>
              <StyledP>
                <HiOutlineCheck />
                After the short-term program the parents of the selected players
                will be only invited to visit and discuss the way forward.
              </StyledP>
            </AnsBox>
            <StyleQues
              onClick={() => {
                if (isOpen === 13) {
                  setIsOpen(0)
                } else setIsOpen(13)
              }}
            >
              Will visas be provided for my child going to Europe?
            </StyleQues>

            <AnsBox type={isOpen === 13 ? 'open' : ''}>
              <StyledP>
                <HiOutlineCheck />
                Yes, we will assist you with the visa process.
              </StyledP>
            </AnsBox>
            <StyleQues
              onClick={() => {
                if (isOpen === 14) {
                  setIsOpen(0)
                } else setIsOpen(14)
              }}
            >
              How many hours per day is training?
            </StyleQues>
            <AnsBox type={isOpen === 14 ? 'open' : ''}>
              <StyledP>
                <HiOutlineCheck />
                The athlete will be trained minimum two hours per day. Depending
                upon your child’s capability of taking load while training.
                There is a progression towards development which will increase
                your training hours which will lead to more awareness and
                maturity in the game.
              </StyledP>
            </AnsBox>
            <StyleQues
              onClick={() => {
                if (isOpen === 15) {
                  setIsOpen(0)
                } else setIsOpen(15)
              }}
            >
              What does a schedule look like during the short-term program?
            </StyleQues>
            <AnsBox type={isOpen === 15 ? 'open' : ''}>
              <StyledP>
                <HiOutlineCheck />
                7:00AM - 8:15AM Breakfast
              </StyledP>
              <StyledP>
                <HiOutlineCheck />
                9:00AM - 9:30AM Language Course
              </StyledP>
              <StyledP>
                <HiOutlineCheck />
                9:30AM - 11:00AM Warm-up and instruction
              </StyledP>
              <StyledP>
                <HiOutlineCheck />
                12:30PM - 2:00PM Lunch/Rest
              </StyledP>
              <StyledP>
                <HiOutlineCheck />
                4:30PM - 6:00PM Group training
              </StyledP>
              <StyledP>
                <HiOutlineCheck />
                6:30PM - 7:30PM Dinner
              </StyledP>
              <StyledP>
                <HiOutlineCheck />
                6:30PM - 7:30PM Dinner 7:30PM - 8:00PM My time
              </StyledP>
              <StyledP>
                <HiOutlineCheck />
                10:00PM Sleep
              </StyledP>
            </AnsBox>
            <StyleQues
              onClick={() => {
                if (isOpen === 16) {
                  setIsOpen(0)
                } else setIsOpen(16)
              }}
            >
              What should my child bring for the trial program in Europe?
            </StyleQues>
            <AnsBox type={isOpen === 16 ? 'open' : ''}>
              <StyledP>
                <HiOutlineCheck />
                We utilize a progressive curriculum that is designed to cover
                various aspects of the game. Players can expect to be trained in
                technical, tactical, physical and mental realms with a mixture
                of drill work and small- and full-sided games. All our coaches
                are UEFA certified and licensed.
              </StyledP>
            </AnsBox>
          </ContentBox>
        </FaqDetail>
      </Section>
    </>
  )
}

export default FaqContent
