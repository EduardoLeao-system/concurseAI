import { useCallback, useState } from 'react'
import { useStudy } from '../../context/StudyContext'
import { daysToExam } from '../../lib/date'
import { gradeToBump } from '../../lib/study'
import { schedule } from '../../lib/sm2'
import type { Card, Grade, SessionStats } from '../../types'

export interface StudySession {
  queue: Card[]
  index: number
  shown: boolean
  repeated: Record<string, boolean>
  stats: SessionStats
}

export function useStudySession() {
  const { data, saveReview, bumpTopic } = useStudy()
  const [session, setSession] = useState<StudySession | null>(null)

  const start = useCallback((queue: Card[]) => {
    setSession({
      queue,
      index: 0,
      shown: false,
      repeated: {},
      stats: { wrong: 0, hard: 0, good: 0, easy: 0 },
    })
  }, [])

  const show = useCallback(() => {
    setSession((current) => (current && !current.shown ? { ...current, shown: true } : current))
  }, [])

  const grade = useCallback(
    (quality: Grade) => {
      if (!session || !session.shown) return
      const card = session.queue[session.index]
      if (!card) return

      const alreadySeen = Boolean(session.repeated[card.id])

      if (!alreadySeen) {
        saveReview(card.id, schedule(data.reviews[card.id], quality, daysToExam()))
        bumpTopic(card.topicId, gradeToBump(quality))
      }

      const stats = { ...session.stats }
      if (!alreadySeen) {
        if (quality === 0) stats.wrong += 1
        else if (quality === 3) stats.hard += 1
        else if (quality === 4) stats.good += 1
        else stats.easy += 1
      }

      const repeated = { ...session.repeated }
      let queue = session.queue

      if (quality === 0) {
        repeated[card.id] = true
        queue = [...queue]
        queue.splice(Math.min(session.index + 5, queue.length), 0, card)
      }

      setSession({
        ...session,
        queue,
        repeated,
        stats,
        index: session.index + 1,
        shown: false,
      })
    },
    [session, data.reviews, saveReview, bumpTopic],
  )

  const quit = useCallback(() => setSession(null), [])

  return { session, start, show, grade, quit }
}
