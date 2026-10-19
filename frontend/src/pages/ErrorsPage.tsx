import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Trash2 } from 'lucide-react'
import { z } from 'zod'
import { useStudy } from '../context/StudyContext'
import { ERROR_REASONS, TOPICS } from '../data/deck'
import { shortDate } from '../lib/date'
import { Button, Chip, EmptyState, Field, Tag, inputClass } from '../components/ui'

const errorSchema = z.object({
  topicId: z.string().min(1, 'Escolha um tema.'),
  why: z.string().min(1, 'Escolha um motivo.'),
  question: z
    .string()
    .trim()
    .min(1, 'Resuma a questão.')
    .max(500, 'Máximo de 500 caracteres.'),
  rule: z
    .string()
    .trim()
    .min(1, 'Escreva a regra correta.')
    .max(800, 'Máximo de 800 caracteres.'),
  alsoCreateCard: z.boolean(),
})

type ErrorFormValues = z.infer<typeof errorSchema>

function topicName(topicId: string): string {
  return TOPICS.find((topic) => topic.id === topicId)?.name ?? topicId
}

function reasonLabel(reasonId: string): string {
  return ERROR_REASONS.find((reason) => reason.id === reasonId)?.label ?? reasonId
}

export function ErrorsPage() {
  const { data, addError, deleteError } = useStudy()
  const [topicFilter, setTopicFilter] = useState('')
  const [reasonFilter, setReasonFilter] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors: formErrors, isValid },
  } = useForm<ErrorFormValues>({
    resolver: zodResolver(errorSchema),
    mode: 'onChange',
    defaultValues: {
      topicId: TOPICS[0]?.id ?? '',
      why: ERROR_REASONS[0]?.id ?? '',
      question: '',
      rule: '',
      alsoCreateCard: true,
    },
  })

  const onSubmit = (values: ErrorFormValues) => {
    addError({
      topicId: values.topicId,
      why: values.why,
      question: values.question,
      rule: values.rule,
      alsoCreateCard: values.alsoCreateCard,
    })
    reset({
      topicId: values.topicId,
      why: values.why,
      question: '',
      rule: '',
      alsoCreateCard: true,
    })
  }

  const visible = Object.values(data.errors)
    .filter(
      (error) =>
        (!topicFilter || error.topicId === topicFilter) &&
        (!reasonFilter || error.why === reasonFilter),
    )
    .sort((a, b) => b.ts - a.ts)

  return (
    <section className="flex flex-col gap-[18px]">
      <form className="grid gap-3" onSubmit={handleSubmit(onSubmit)} autoComplete="off" noValidate>
        <h2 className="text-xl font-bold">Registrar um erro</h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
          <Field label="Tema" htmlFor="error-topic" error={formErrors.topicId?.message}>
            <select id="error-topic" className={inputClass} {...register('topicId')}>
              {TOPICS.map((topic) => (
                <option key={topic.id} value={topic.id}>
                  {topic.name}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Por que errei" htmlFor="error-why" error={formErrors.why?.message}>
            <select id="error-why" className={inputClass} {...register('why')}>
              {ERROR_REASONS.map((reason) => (
                <option key={reason.id} value={reason.id}>
                  {reason.label}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <Field
          label="Questão (resumo ou enunciado)"
          htmlFor="error-question"
          error={formErrors.question?.message}
        >
          <textarea
            id="error-question"
            className={`${inputClass} min-h-[76px] resize-y`}
            maxLength={500}
            {...register('question')}
          />
        </Field>

        <Field
          label="Regra correta, nas suas palavras"
          htmlFor="error-rule"
          error={formErrors.rule?.message}
        >
          <textarea
            id="error-rule"
            className={`${inputClass} min-h-[76px] resize-y`}
            maxLength={800}
            {...register('rule')}
          />
        </Field>

        <label htmlFor="error-create-card" className="flex items-center gap-2 text-[0.92rem]">
          <input
            id="error-create-card"
            type="checkbox"
            className="h-4 w-4 accent-pen"
            {...register('alsoCreateCard')}
          />
          Criar um cartão com esta regra
        </label>

        <div>
          <Button type="submit" disabled={!isValid}>
            Salvar no caderno
          </Button>
        </div>
      </form>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
        <Field label="Filtrar por tema" htmlFor="filter-error-topic">
          <select
            id="filter-error-topic"
            className={inputClass}
            value={topicFilter}
            onChange={(event) => setTopicFilter(event.target.value)}
          >
            <option value="">Todos os temas</option>
            {TOPICS.map((topic) => (
              <option key={topic.id} value={topic.id}>
                {topic.name}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Filtrar por motivo" htmlFor="filter-error-why">
          <select
            id="filter-error-why"
            className={inputClass}
            value={reasonFilter}
            onChange={(event) => setReasonFilter(event.target.value)}
          >
            <option value="">Todos os motivos</option>
            {ERROR_REASONS.map((reason) => (
              <option key={reason.id} value={reason.id}>
                {reason.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div>
        {visible.length === 0 ? (
          <EmptyState>
            {Object.keys(data.errors).length
              ? 'Nenhum erro com esse filtro.'
              : 'O caderno está vazio. Cada questão que você errar entra aqui com a regra correta, e o tema perde domínio estimado até você acertar os cartões dele.'}
          </EmptyState>
        ) : (
          visible.map((error) => (
            <div
              key={error.id}
              className="grid gap-1.5 break-words border-t border-line py-3 last:border-b"
            >
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
                <Tag>{topicName(error.topicId)}</Tag>
                <Chip>{reasonLabel(error.why)}</Chip>
                <Chip>{shortDate(error.at)}</Chip>
              </div>
              <p className="whitespace-pre-line break-words">{error.question}</p>
              <div className="whitespace-pre-line break-words border-l-2 border-line pl-2.5">
                {error.rule}
              </div>
              <div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteError(error.id)}
                >
                  <Trash2 className="h-4 w-4" />
                  Excluir
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  )
}
