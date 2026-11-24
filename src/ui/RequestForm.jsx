import { useState } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import { BiLoaderAlt } from 'react-icons/bi'
import { devicesMax } from '../styles/BreakPoint'
import Button from './Button'
import { SITE } from './siteInfo'

// EmailJS settings are baked into the bundle at build time (see .env.example).
const SERVICE_ID = import.meta.env.VITE_YOUR_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_YOUR_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_YOUR_PUBLIC_KEY
const IS_CONFIGURED = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

const Card = styled.section`
  padding: clamp(2.4rem, 4vw, 4rem);
  border: 1px solid var(--color-line);
  border-radius: var(--radius-md);
  background-color: var(--color-surface);
`

const Note = styled.p`
  margin-bottom: var(--space-6);
  font-size: 1.4rem;
  color: var(--color-text);
`

const Fields = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-6) var(--space-5);

  @media ${devicesMax.md} {
    grid-template-columns: minmax(0, 1fr);
  }
`

const Group = styled.fieldset`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-6) var(--space-5);
  padding: var(--space-5);
  border: 1px solid var(--color-line);
  border-radius: var(--radius-md);
  background-color: var(--color-paper);

  & legend {
    padding-inline: var(--space-2);
    font-weight: 600;
    color: var(--color-heading);
  }

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
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-heading);
`

const Star = styled.span`
  margin-left: 0.2em;
  color: var(--color-link);
`

const Help = styled.p`
  font-size: 1.4rem;
  color: var(--color-text);
`

const control = `
  width: 100%;
  min-height: 4.8rem;
  padding: 1.1rem 1.4rem;
  border: 1px solid var(--color-line-strong);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface);
  font-size: 1.6rem;
  color: var(--color-heading);

  &[aria-invalid='true'] {
    border-color: var(--color-signal);
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
  min-height: 14rem;
  resize: vertical;
`

const FieldError = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-link);
`

const Status = styled.div`
  margin-top: var(--space-6);
  padding: var(--space-4) var(--space-5);
  border: 1px solid var(--color-line);
  border-left: 0.4rem solid
    ${(props) =>
      props.$kind === 'success' ? 'var(--color-lime)' : 'var(--color-signal)'};
  border-radius: var(--radius-sm);
  background-color: var(--color-paper);
  color: var(--color-heading);

  & a {
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 0.3rem;
  }
`

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-4);
  margin-top: var(--space-7);
`

const SendNote = styled.p`
  font-size: 1.4rem;
  color: var(--color-text);
`

const SubmitButton = styled(Button)`
  min-width: 18rem;
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

function MailLink() {
  return <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
}

// A form described by `fields`, sent through the site's EmailJS template.
// fields: [{ name, label, type?, required?, options?, placeholder?, autoComplete?,
//   wide?, help?, rules?, showIf?(values), group? }]. Fields sharing a `group`
//   label are wrapped in a fieldset with that legend.
// toParams(values) maps the answers onto the template's variables.
function RequestForm({
  id,
  label,
  fields,
  toParams,
  submitLabel,
  successText,
  defaultValues,
}) {
  // idle | sending | success | error | unconfigured
  const [status, setStatus] = useState('idle')
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({ defaultValues, shouldUnregister: true })

  const values = watch()
  const sending = status === 'sending'
  const visible = fields.filter((f) => !f.showIf || f.showIf(values))

  async function onSubmit(data) {
    if (!IS_CONFIGURED) {
      setStatus('unconfigured')
      return
    }
    setStatus('sending')
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, toParams(data), PUBLIC_KEY)
      reset()
      setStatus('success')
    } catch {
      // Keep the visitor's answers so they can try again.
      setStatus('error')
    }
  }

  function renderField(f) {
    const fid = `${id}-${f.name}`
    const errorId = errors[f.name] ? `${fid}-error` : undefined
    const helpId = f.help ? `${fid}-help` : undefined
    const describedBy = [helpId, errorId].filter(Boolean).join(' ') || undefined
    const common = {
      id: fid,
      'aria-required': f.required ? 'true' : undefined,
      'aria-invalid': errors[f.name] ? 'true' : 'false',
      'aria-describedby': describedBy,
      ...register(f.name, {
        ...(f.required && { required: `${f.label} is required` }),
        ...f.rules,
      }),
    }

    let control
    if (f.type === 'select') {
      control = (
        <Select {...common}>
          <option value="">{f.placeholder || 'Choose one'}</option>
          {f.options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </Select>
      )
    } else if (f.type === 'textarea') {
      control = <Textarea {...common} />
    } else {
      control = (
        <Input
          {...common}
          type={f.type || 'text'}
          autoComplete={f.autoComplete}
          placeholder={f.placeholder}
        />
      )
    }

    return (
      <Field key={f.name} $wide={f.wide}>
        <Label htmlFor={fid}>
          {f.label}
          {f.required && <Star aria-hidden="true">*</Star>}
        </Label>
        {f.help && <Help id={helpId}>{f.help}</Help>}
        {control}
        {errors[f.name] && (
          <FieldError id={errorId} role="alert">
            {errors[f.name].message}
          </FieldError>
        )}
      </Field>
    )
  }

  // Keep field order, wrapping runs of the same `group` in a fieldset.
  const blocks = []
  for (const f of visible) {
    const last = blocks[blocks.length - 1]
    if (f.group && last?.group === f.group) last.items.push(f)
    else blocks.push({ group: f.group, items: [f] })
  }

  return (
    <Card aria-label={label}>
      <Note>
        Fields marked with <span aria-hidden="true">*</span>
        <span className="sr-only">an asterisk</span> are required.
      </Note>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Fields>
          {blocks.map((b) =>
            b.group ? (
              <Group key={b.group}>
                <legend>{b.group}</legend>
                {b.items.map(renderField)}
              </Group>
            ) : (
              b.items.map(renderField)
            ),
          )}
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
          <SendNote>Sent to {SITE.email}</SendNote>
        </Actions>

        <div aria-live="polite">
          {status === 'success' && (
            <Status $kind="success" role="status">
              {successText}
            </Status>
          )}
        </div>
        <div aria-live="assertive">
          {status === 'error' && (
            <Status $kind="error" role="alert">
              Your request could not be sent. Your answers are still here, so
              you can try again, or email us at <MailLink />.
            </Status>
          )}
          {status === 'unconfigured' && (
            <Status $kind="error" role="alert">
              This form cannot send right now. Please email us at <MailLink />.
            </Status>
          )}
        </div>
      </form>
    </Card>
  )
}

export default RequestForm
