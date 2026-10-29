import styled from 'styled-components'
import Section from '../../ui/Section'
import Form from '../../ui/Form'
import Input from '../../ui/Input'
import Row from '../../ui/Row'
import Heading from '../../ui/Heading'
import Underline from '../../ui/UnderLine'
import Button from '../../ui/Button'
import Textarea from '../../ui/Textarea'
import emailjs from '@emailjs/browser'
import SpinnerMini from '../../ui/SpinnerMini'
import { useForm } from 'react-hook-form'
import FormRow from '../../ui/FormRow'
import { useState } from 'react'
import { toast } from 'react-toastify'

const Select = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === 'white'
        ? 'var(--color-grey-100)'
        : 'var(--color-grey-300)'};
  border-radius: var(--radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, formState, reset } = useForm()
  const { errors } = formState
  const notify = () => toast('Email sent')
  const sendEmail = (formData) => {
    setIsLoading(true)
    emailjs
      .send(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_YOUR_PUBLIC_KEY,
      )
      .then(
        () => {
          notify()
        },
        (error) => {
          console.log(error.text)
        },
      )
    setIsLoading(false)
    reset()
  }
  return (
    <Section type="touch">
      <Row>
        <Heading as="h1">Get In Touch</Heading>
        <Underline />
      </Row>
      <Form onSubmit={handleSubmit(sendEmail)}>
        <FormRow label="Name" error={errors?.user_name?.message}>
          <Input
            placeholder="Name"
            type="text"
            dist="col"
            name="user_name"
            {...register('user_name', { required: 'Your name is required' })}
          />
        </FormRow>
        <FormRow label="Lacation" error={errors?.user_location?.message}>
          <Input
            placeholder="Location"
            type="text"
            dist="col"
            name="user_location"
            {...register('user_location', {
              required: 'Your location is required',
            })}
          />
        </FormRow>
        <FormRow label="Email Address" error={errors?.user_email?.message}>
          <Input
            placeholder="Email"
            type="text"
            dist="col"
            name="user_email"
            {...register('user_email', {
              required: 'Your email address is required',
            })}
          />
        </FormRow>
        <FormRow label="Phone Number" error={errors?.user_phone?.message}>
          <Input
            placeholder="Phone"
            type="text"
            dist="col"
            name="user_phone"
            {...register('user_phone', { required: 'Your phone is required' })}
          />
        </FormRow>
        <FormRow label="Interest" error={errors?.interest?.message}>
          <Select
            name="interest"
            {...register('interest', { required: 'select an interest field' })}
          >
            <option>Choose Your Interest</option>
            <option>Residential FootBall School</option>
            <option>Football Acadamy</option>
            <option>European Programmes</option>
            <option>Coach Education</option>
            <option>Partner With Us</option>
            <option>Employment</option>
            <option>Mentoring</option>
            <option>Scouting</option>
            <option>Others</option>
          </Select>
        </FormRow>
        <FormRow label="Message" error={errors?.message?.message}>
          <Textarea
            placeholder="Your Message"
            type="textArea"
            name="message"
            {...register('message', { required: 'Add message' })}
          />
        </FormRow>
        <FormRow cols="sub">
          <Button type="submit" value="send message">
            {isLoading ? <SpinnerMini /> : 'Submit'}
          </Button>
        </FormRow>
      </Form>
    </Section>
  )
}

export default ContactForm
