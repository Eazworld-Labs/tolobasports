import { useState } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { BiLoaderAlt } from 'react-icons/bi'
import { devicesMax } from '../../styles/BreakPoint'
import Button from '../../ui/Button'
import Reveal from '../../ui/Reveal'
import { SITE } from '../../ui/siteInfo'
import {
  fields,
  interestPlaceholder,
  interests,
  submitLabel,
} from './contactCopy'

// EmailJS settings are baked into the bundle at build time (see .env.example).
const SERVICE_ID = import.meta.env.VITE_YOUR_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_YOUR_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_YOUR_PUBLIC_KEY
const IS_CONFIGURED = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

const Card = styled.section`
  padding: var(--space-9);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--radius-md);
  background-color: var(--color-white);
  box-shadow: var(--shadow-md);

  @media ${devicesMax.md} {
    padding: var(--space-7) var(--space-5);
  }
`

const Note = styled.p`
  margin-bottom: var(--space-6);
  font-size: var(--text-sm);
  color: var(--color-grey-600);
`

const Fields = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-6) var(--space-5);

  @media ${devicesMax.md} {
    grid-template-columns: minmax(0, 1fr);
  }
`

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  grid-column: ${(props) => (props.$wide ? '1 / -1' : 'auto')};
`

const Label = styled.label`
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-ink-900);
`

const Star = styled.span`
  margin-left: 0.2em;
  color: var(--color-signal-600);
`

const control = `
  width: 100%;
  padding: 1.2rem 1.4rem;
  border: 1px solid var(--color-grey-500);
  border-radius: var(--radius-sm);
  background-color: var(--color-white);
  font-size: var(--text-base);
  color: var(--color-ink-900);

  &[aria-invalid='true'] {
    border-color: var(--color-signal-600);
    border-width: 2px;
  }
`

const Input = styled.input`
  ${control}
`
const Select = styled.select`
  ${control}
`
const Textarea = styled.textarea`
  ${control}
  min-height: 16rem;
  resize: vertical;
`

const FieldError = styled.p`
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-signal-600);
`

const Status = styled.div`
  margin-top: var(--space-6);
  padding: var(--space-4) var(--space-5);
  border-left: 0.5rem solid
    ${(props) =>
      props.$kind === 'success'
        ? 'var(--color-lime)'
        : 'var(--color-signal-600)'};
  border-radius: var(--radius-sm);
  background-color: var(--color-grey-50);
  color: var(--color-ink-900);

  & a {
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 0.3rem;
  }
`

const Actions = styled.div`
  margin-top: var(--space-7);
`

const SubmitButton = styled(Button)`
  min-width: 16rem;
  min-height: 4.8rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);

  &:disabled {
    opacity: 0.75;
  }
`

const Spinner = styled(BiLoaderAlt)`
  width: 2rem;
  height: 2rem;
  animation: spin 1.2s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(1turn);
    }
  }
`

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function MailLink() {
  return <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
}

function ContactForm() {
  // idle | sending | success | error | unconfigured
  const [status, setStatus] = useState('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      user_name: '',
      user_location: '',
      user_email: '',
      user_phone: '',
      interest: '',
      message: '',
    },
  })

  const sending = status === 'sending'

  async function onSubmit(formData) {
    if (!IS_CONFIGURED) {
      setStatus('unconfigured')
      return
    }
    setStatus('sending')
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      reset()
      setStatus('success')
      toast.success('Your message has been sent')
    } catch (error) {
      // The user's input is kept so they can try again; nothing from the form
      // or the response is logged.
      console.error('Contact form: sending failed', error?.status)
      setStatus('error')
    }
  }

  function describe(name) {
    return errors[name] ? `${name}-error` : undefined
  }

  function renderError(name) {
    return (
      errors[name] && (
        <FieldError id={`${name}-error`} role="alert">
          {errors[name].message}
        </FieldError>
      )
    )
  }

  return (
    <Reveal
      as={Card}
      variant="slide-right"
      delay={100}
      aria-label="Contact form"
    >
      <Note>
        Fields marked with <span aria-hidden="true">*</span>
        <span className="sr-only">an asterisk</span> are required.
      </Note>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Fields>
          <Field>
            <Label htmlFor="user_name">
              {fields.name}
              <Star aria-hidden="true">*</Star>
            </Label>
            <Input
              id="user_name"
              type="text"
              autoComplete="name"
              aria-required="true"
              aria-invalid={errors.user_name ? 'true' : 'false'}
              aria-describedby={describe('user_name')}
              {...register('user_name', { required: 'Your name is required' })}
            />
            {renderError('user_name')}
          </Field>

          <Field>
            <Label htmlFor="user_location">
              {fields.location}
              <Star aria-hidden="true">*</Star>
            </Label>
            <Input
              id="user_location"
              type="text"
              autoComplete="off"
              aria-required="true"
              aria-invalid={errors.user_location ? 'true' : 'false'}
              aria-describedby={describe('user_location')}
              {...register('user_location', {
                required: 'Your location is required',
              })}
            />
            {renderError('user_location')}
          </Field>

          <Field>
            <Label htmlFor="user_email">
              {fields.email}
              <Star aria-hidden="true">*</Star>
            </Label>
            <Input
              id="user_email"
              type="email"
              autoComplete="email"
              inputMode="email"
              aria-required="true"
              aria-invalid={errors.user_email ? 'true' : 'false'}
              aria-describedby={describe('user_email')}
              {...register('user_email', {
                required: 'Your email address is required',
                pattern: {
                  value: EMAIL_PATTERN,
                  message:
                    'Enter a valid email address, for example name@example.com',
                },
              })}
            />
            {renderError('user_email')}
          </Field>

          <Field>
            <Label htmlFor="user_phone">
              {fields.phone}
              <Star aria-hidden="true">*</Star>
            </Label>
            <Input
              id="user_phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              aria-required="true"
              aria-invalid={errors.user_phone ? 'true' : 'false'}
              aria-describedby={describe('user_phone')}
              {...register('user_phone', {
                required: 'Your phone number is required',
              })}
            />
            {renderError('user_phone')}
          </Field>

          <Field $wide>
            <Label htmlFor="interest">
              {fields.interest}
              <Star aria-hidden="true">*</Star>
            </Label>
            <Select
              id="interest"
              aria-required="true"
              aria-invalid={errors.interest ? 'true' : 'false'}
              aria-describedby={describe('interest')}
              {...register('interest', {
                required: 'Please choose an interest',
              })}
            >
              <option value="" disabled>
                {interestPlaceholder}
              </option>
              {interests.map((interest) => (
                <option key={interest} value={interest}>
                  {interest}
                </option>
              ))}
            </Select>
            {renderError('interest')}
          </Field>

          <Field $wide>
            <Label htmlFor="message">
              {fields.message}
              <Star aria-hidden="true">*</Star>
            </Label>
            <Textarea
              id="message"
              aria-required="true"
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={describe('message')}
              {...register('message', { required: 'Please add a message' })}
            />
            {renderError('message')}
          </Field>
        </Fields>

        <Actions>
          <SubmitButton type="submit" disabled={sending} aria-busy={sending}>
            {sending ? (
              <>
                <Spinner aria-hidden="true" />
                Sending…
              </>
            ) : (
              submitLabel
            )}
          </SubmitButton>
        </Actions>

        <div aria-live="polite">
          {status === 'success' && (
            <Status $kind="success" role="status">
              Thank you, your message has been sent.
            </Status>
          )}
        </div>
        <div aria-live="assertive">
          {status === 'error' && (
            <Status $kind="error" role="alert">
              Sorry, your message could not be sent. Your details are still
              here, so you can try again, or email us directly at <MailLink />.
            </Status>
          )}
          {status === 'unconfigured' && (
            <Status $kind="error" role="alert">
              Sorry, your message could not be sent from this page right now.
              Please email us directly at <MailLink />.
            </Status>
          )}
        </div>
      </form>
    </Reveal>
  )
}

export default ContactForm
