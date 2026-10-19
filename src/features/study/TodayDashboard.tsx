import { useStudy } from '../../context/StudyContext'
import { TOPICS } from '../../data/deck'
import { formatPercent } from '../../lib/utils'
import { topicPriority, topicScore } from '../../lib/study'
import { Bubbles, Button, inputClass, labelClass } from '../../components/ui'
import type { Card } from '../../types'

const NEW_PER_DAY_OPTIONS = [5, 10, 15, 20, 30]

export function TodayDashboard({ onStart }: { onStart: (queue: Card[]) => void }) {
  const { data, cards, queue, counts, setNewPerDay } = useStudy()

  const due = queue.filter((card) => data.reviews[card.id]).length
  const fresh = queue.length - due
  const focus = [...TOPICS]
    .sort((a, b) => topicPriority(data.progress, b.id) - topicPriority(data.progress, a.id))
    .slice(0, 3)

  const masteryLabel = (topicId: string) => {
    const entry = data.progress[topicId]
    return entry && entry.n ? formatPercent(entry.score) : 'sem dados'
  }

  return (
    <section className="flex flex-col gap-[18px]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-3">
        <div className="border-t-2 border-ink pt-2">
          <b className="block font-display text-[1.9rem] font-bold leading-[1.1]">{due}</b>
          <span className="text-[0.82rem] text-muted">cartões para revisar</span>
        </div>
        <div className="border-t-2 border-ink pt-2">
          <b className="block font-display text-[1.9rem] font-bold leading-[1.1]">{fresh}</b>
          <span className="text-[0.82rem] text-muted">novos hoje</span>
        </div>
        <div className="border-t-2 border-ink pt-2">
          <b className="block font-display text-[1.9rem] font-bold leading-[1.1]">{cards.length}</b>
          <span className="text-[0.82rem] text-muted">cartões no total</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2.5">
        <Button onClick={() => onStart(queue)} disabled={queue.length === 0}>
          {queue.length ? `Começar sessão (${queue.length})` : 'Nada para hoje'}
        </Button>
        <span className="inline-grid auto-cols-max grid-flow-col items-center gap-2">
          <label htmlFor="new-limit" className={labelClass}>
            Novos por dia
          </label>
          <select
            id="new-limit"
            className={`${inputClass} w-auto py-1.5`}
            value={data.newPerDay}
            onChange={(event) => setNewPerDay(Number(event.target.value))}
          >
            {NEW_PER_DAY_OPTIONS.map((amount) => (
              <option key={amount} value={amount}>
                {amount}
              </option>
            ))}
          </select>
        </span>
      </div>

      {queue.length === 0 ? (
        <p className="text-muted">
          Você já fez a meta de novos cartões de hoje e não há revisões vencidas. Registre erros no
          caderno ou aumente a meta.
        </p>
      ) : null}

      <div>
        <h2 className="text-xl font-bold">Foco de hoje</h2>
        <p className="mb-2 mt-1 text-[0.85rem] text-muted">
          Temas com menor domínio estimado, ponderados pelo peso do tema no edital.
        </p>
        <ul>
          {focus.map((topic) => {
            const stats = counts[topic.id]
            const score = topicScore(data.progress, topic.id)
            const entry = data.progress[topic.id]
            const measured = Boolean(entry && entry.n)
            return (
              <li
                key={topic.id}
                className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-line py-3 last:border-b"
              >
                <span className="min-w-0 flex-1 basis-[180px] font-semibold">{topic.name}</span>
                <Bubbles score={score} measured={measured} />
                <span className="basis-full text-[0.82rem] text-muted">
                  Domínio: {masteryLabel(topic.id)} · {stats.fresh} novos · {stats.due} a revisar ·{' '}
                  {stats.errors} erros registrados
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
