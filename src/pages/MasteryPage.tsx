import { useStudy } from '../context/StudyContext'
import { ERROR_REASONS, TOPICS } from '../data/deck'
import { topicPriority, topicScore } from '../lib/study'
import { formatPercent } from '../lib/utils'
import { Bubbles } from '../components/ui'

export function MasteryPage() {
  const { data, counts } = useStudy()

  const sortedTopics = [...TOPICS].sort(
    (a, b) => topicPriority(data.progress, b.id) - topicPriority(data.progress, a.id),
  )

  const reasonCounts: Record<string, number> = {}
  let totalErrors = 0
  for (const error of Object.values(data.errors)) {
    reasonCounts[error.why] = (reasonCounts[error.why] ?? 0) + 1
    totalErrors += 1
  }
  const maxReason = Math.max(1, ...ERROR_REASONS.map((reason) => reasonCounts[reason.id] ?? 0))

  return (
    <section className="flex flex-col gap-[18px]">
      <div>
        <h2 className="text-xl font-bold">Onde estudar primeiro</h2>
        <p className="mb-2.5 mt-1 text-[0.85rem] text-muted">
          Ordem por prioridade: peso do tema × lacuna de domínio. Cada alvéolo vale 10% do domínio
          estimado.
        </p>
        <div>
          {sortedTopics.map((topic) => {
            const stats = counts[topic.id]
            const entry = data.progress[topic.id]
            const measured = Boolean(entry && entry.n)
            return (
              <div
                key={topic.id}
                className="grid gap-1.5 border-t border-line py-3 last:border-b"
              >
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                  <span className="min-w-0 flex-1 basis-[180px] font-semibold">{topic.name}</span>
                  <Bubbles score={topicScore(data.progress, topic.id)} measured={measured} />
                </div>
                <span className="text-[0.85rem] text-muted">
                  {measured ? formatPercent(entry.score) : 'sem dados'} · {stats.cards} cartões (
                  {stats.fresh} novos, {stats.due} a revisar) · {stats.errors} erros
                </span>
              </div>
            )
          })}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold">Por que você erra</h2>
        <div className="mt-2.5 grid gap-2">
          {totalErrors === 0 ? (
            <p className="text-muted">Sem erros registrados ainda.</p>
          ) : (
            ERROR_REASONS.map((reason) => {
              const amount = reasonCounts[reason.id] ?? 0
              return (
                <div
                  key={reason.id}
                  className="grid grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)_2ch] items-center gap-2.5 text-[0.9rem]"
                >
                  <span className="min-w-0">{reason.label}</span>
                  <span className="h-2 overflow-hidden rounded-full bg-line">
                    <i
                      className="block h-full rounded-full bg-pen"
                      style={{ width: `${Math.round((100 * amount) / maxReason)}%` }}
                    />
                  </span>
                  <b className="text-right font-mono text-[0.85rem] font-medium">{amount}</b>
                </div>
              )
            })
          )}
        </div>
      </div>

      <p className="text-[0.85rem] text-muted">
        O domínio é uma estimativa simples: sobe quando você acerta cartões e cai quando erra ou
        registra um erro no caderno. Os pesos dos temas são estimativas de incidência da FCC, não
        dados oficiais do edital.
      </p>
    </section>
  )
}
