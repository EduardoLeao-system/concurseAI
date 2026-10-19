import { useEffect } from 'react'
import { useStudy } from '../../context/StudyContext'
import { TOPICS } from '../../data/deck'
import { daysToExam, formatInterval } from '../../lib/date'
import { schedule } from '../../lib/sm2'
import { Button, ProgressBar, Tag } from '../../components/ui'
import { cx } from '../../lib/cx'
import type { StudySession } from './useStudySession'
import type { Grade } from '../../types'

const GRADES: Array<{ value: Grade; label: string }> = [
  { value: 0, label: 'Errei' },
  { value: 3, label: 'Difícil' },
  { value: 4, label: 'Bom' },
  { value: 5, label: 'Fácil' },
]

export function SessionView({
  session,
  onShow,
  onGrade,
  onQuit,
}: {
  session: StudySession
  onShow: () => void
  onGrade: (grade: Grade) => void
  onQuit: () => void
}) {
  const { data } = useStudy()
  const isSummary = session.index >= session.queue.length

  useEffect(() => {
    if (isSummary) return

    const handleKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null
      if (target && ['INPUT', 'SELECT', 'TEXTAREA'].includes(target.tagName)) return

      if (!session.shown && (event.key === ' ' || event.key === 'Enter')) {
        event.preventDefault()
        onShow()
        return
      }

      if (!session.shown) return
      const map: Record<string, Grade> = { '1': 0, '2': 3, '3': 4, '4': 5 }
      const grade = map[event.key]
      if (grade !== undefined) {
        event.preventDefault()
        onGrade(grade)
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isSummary, session.shown, onShow, onGrade])

  if (isSummary) {
    const { wrong, hard, good, easy } = session.stats
    const answered = wrong + hard + good + easy
    return (
      <section className="animate-rise flex flex-col gap-[18px]">
        <h2 className="text-xl font-bold">Sessão concluída</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-3">
          <div className="border-t-2 border-ink pt-2">
            <b className="block font-display text-[1.9rem] font-bold leading-[1.1]">{answered}</b>
            <span className="text-[0.82rem] text-muted">cartões respondidos</span>
          </div>
          <div className="border-t-2 border-ink pt-2">
            <b className="block font-display text-[1.9rem] font-bold leading-[1.1]">{wrong}</b>
            <span className="text-[0.82rem] text-muted">errei</span>
          </div>
          <div className="border-t-2 border-ink pt-2">
            <b className="block font-display text-[1.9rem] font-bold leading-[1.1]">
              {good + easy}
            </b>
            <span className="text-[0.82rem] text-muted">bom ou fácil</span>
          </div>
        </div>
        <p className="text-muted">
          Os cartões que você errou voltam amanhã. Veja a aba Domínio para conferir o efeito por
          tema.
        </p>
        <div>
          <Button onClick={onQuit}>Voltar</Button>
        </div>
      </section>
    )
  }

  const card = session.queue[session.index]
  const topic = TOPICS.find((item) => item.id === card.topicId)
  const remaining = session.queue.length - session.index
  const progress = Math.round((100 * session.index) / session.queue.length)

  const intervalFor = (grade: Grade) => {
    if (grade === 0) return 'amanhã'
    return formatInterval(schedule(data.reviews[card.id], grade, daysToExam()).interval)
  }

  return (
    <section className="flex flex-col gap-[18px]">
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-sm text-muted">Restam {remaining}</span>
        <Button variant="ghost" size="sm" onClick={onQuit}>
          Encerrar
        </Button>
      </div>

      <ProgressBar value={progress} />

      <div className="flex flex-col gap-4 rounded-lg border border-line bg-surface p-5">
        <Tag>{topic?.name ?? card.topicId}</Tag>
        <div className="whitespace-pre-line break-words text-[1.3rem] leading-[1.4]">
          {card.front}
        </div>
        {session.shown ? (
          <div className="border-t border-dashed border-line pt-3.5">
            <Tag className="mb-1.5 block">Resposta</Tag>
            <p className="whitespace-pre-line break-words">{card.back}</p>
          </div>
        ) : null}
      </div>

      {session.shown ? (
        <>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {GRADES.map((grade) => (
              <button
                key={grade.value}
                type="button"
                onClick={() => onGrade(grade.value)}
                className={cx(
                  'flex flex-col items-center gap-0.5 rounded-md border bg-surface px-1.5 py-2.5 font-body text-[0.98rem] font-bold text-ink transition-colors',
                  grade.value === 0 && 'border-bad text-bad hover:bg-bad/5',
                  grade.value === 3 && 'border-line hover:bg-pen-soft/40',
                  grade.value === 4 && 'border-pen hover:bg-pen-soft/60',
                  grade.value === 5 && 'border-line hover:bg-pen-soft/40',
                )}
              >
                <span>{grade.label}</span>
                <small className="font-mono text-[0.72rem] font-normal text-muted">
                  {intervalFor(grade.value)}
                </small>
              </button>
            ))}
          </div>
          <p className="text-[0.85rem] text-muted">Atalhos: 1 Errei, 2 Difícil, 3 Bom, 4 Fácil.</p>
        </>
      ) : (
        <div>
          <Button className="w-full" onClick={onShow}>
            Mostrar resposta
          </Button>
          <p className="mt-2 text-[0.85rem] text-muted">Atalho: espaço ou Enter.</p>
        </div>
      )}
    </section>
  )
}
