import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Search, Trash2 } from 'lucide-react'
import { z } from 'zod'
import { useStudy } from '../context/StudyContext'
import { TOPICS } from '../data/deck'
import { diffDays, today } from '../lib/date'
import {
  Button,
  Chip,
  EmptyState,
  Field,
  Tag,
  inputClass,
  labelClass,
} from '../components/ui'
import type { Review } from '../types'

const cardSchema = z.object({
  topicId: z.string().min(1, 'Escolha um tema.'),
  front: z
    .string()
    .trim()
    .min(1, 'Escreva a pergunta.')
    .max(400, 'Máximo de 400 caracteres.'),
  back: z
    .string()
    .trim()
    .min(1, 'Escreva a resposta.')
    .max(800, 'Máximo de 800 caracteres.'),
})

type CardFormValues = z.infer<typeof cardSchema>

function topicName(topicId: string): string {
  return TOPICS.find((topic) => topic.id === topicId)?.name ?? topicId
}

function statusChip(review: Review | undefined, date: string) {
  if (!review) return <Chip>nova</Chip>
  if (review.due <= date) return <Chip tone="due">vence hoje</Chip>
  return <Chip>em {diffDays(date, review.due)} d</Chip>
}

export function CardsPage() {
  const { cards, data, addCard, deleteCard } = useStudy()
  const [topicFilter, setTopicFilter] = useState('')
  const [query, setQuery] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<CardFormValues>({
    resolver: zodResolver(cardSchema),
    mode: 'onChange',
    defaultValues: { topicId: TOPICS[0]?.id ?? '', front: '', back: '' },
  })

  const onSubmit = (values: CardFormValues) => {
    addCard({ topicId: values.topicId, front: values.front, back: values.back })
    reset({ topicId: values.topicId, front: '', back: '' })
  }

  const date = today()
  const normalizedQuery = query.trim().toLowerCase()
  const visible = cards.filter((card) => {
    if (topicFilter && card.topicId !== topicFilter) return false
    if (normalizedQuery && !`${card.front} ${card.back}`.toLowerCase().includes(normalizedQuery)) {
      return false
    }
    return true
  })

  return (
    <section className="flex flex-col gap-[18px]">
      <form className="grid gap-3" onSubmit={handleSubmit(onSubmit)} autoComplete="off" noValidate>
        <h2 className="text-xl font-bold">Novo cartão</h2>

        <Field label="Tema" htmlFor="new-topic" error={errors.topicId?.message}>
          <select id="new-topic" className={inputClass} {...register('topicId')}>
            {TOPICS.map((topic) => (
              <option key={topic.id} value={topic.id}>
                {topic.name}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Frente (pergunta)" htmlFor="new-front" error={errors.front?.message}>
          <textarea
            id="new-front"
            className={`${inputClass} min-h-[76px] resize-y`}
            maxLength={400}
            {...register('front')}
          />
        </Field>

        <Field label="Verso (resposta)" htmlFor="new-back" error={errors.back?.message}>
          <textarea
            id="new-back"
            className={`${inputClass} min-h-[76px] resize-y`}
            maxLength={800}
            {...register('back')}
          />
        </Field>

        <div>
          <Button type="submit" disabled={!isValid}>
            Salvar cartão
          </Button>
        </div>
      </form>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
        <Field label="Filtrar por tema" htmlFor="filter-topic">
          <select
            id="filter-topic"
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

        <div className="grid min-w-0 gap-1">
          <label htmlFor="filter-query" className={labelClass}>
            Buscar
          </label>
          <div className="relative">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              id="filter-query"
              type="search"
              className={`${inputClass} pl-8`}
              placeholder="sigla, termo..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
        </div>
      </div>

      <div>
        {visible.length === 0 ? (
          <EmptyState>Nenhum cartão com esse filtro.</EmptyState>
        ) : (
          visible.map((card) => (
            <details key={card.id} className="border-t border-line py-2.5 last:border-b">
              <summary className="flex cursor-pointer flex-wrap items-baseline gap-x-3 gap-y-1">
                <Tag>{topicName(card.topicId)}</Tag>
                <span className="min-w-0 flex-1 basis-[220px] break-words font-semibold">
                  {card.front}
                </span>
                {statusChip(data.reviews[card.id], date)}
              </summary>
              <div className="break-words pb-1 pt-2.5">
                <p className="whitespace-pre-line break-words">{card.back}</p>
                {card.mine ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-2.5"
                    onClick={() => deleteCard(card.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                    Excluir cartão
                  </Button>
                ) : null}
              </div>
            </details>
          ))
        )}
      </div>
    </section>
  )
}
