import { TOPICS } from '../data/deck'
import type { AppData, Card, Grade, TopicCounts, TopicProgress } from '../types'
import { today } from './date'

export const DEFAULT_SCORE = 35

export function topicScore(progress: Record<string, TopicProgress>, topicId: string): number {
  const entry = progress[topicId]
  return entry && entry.n ? entry.score : DEFAULT_SCORE
}

export function topicPriority(progress: Record<string, TopicProgress>, topicId: string): number {
  const topic = TOPICS.find((item) => item.id === topicId)
  return (topic?.weight ?? 1) * (100 - topicScore(progress, topicId))
}

export type BumpKind = 'wrong' | 'err' | 'hard' | 'good' | 'easy'

export function bumpProgress(
  progress: Record<string, TopicProgress>,
  topicId: string,
  kind: BumpKind,
): Record<string, TopicProgress> {
  const current = progress[topicId] ?? { score: DEFAULT_SCORE, n: 0 }
  let score = current.score

  if (kind === 'wrong') score = Math.max(0, score - (score * 0.3 + 2))
  else if (kind === 'err') score = Math.max(0, score - (score * 0.25 + 3))
  else if (kind === 'hard') score += (100 - score) * 0.05
  else if (kind === 'good') score += (100 - score) * 0.15
  else score += (100 - score) * 0.22

  return {
    ...progress,
    [topicId]: { score: Math.round(score * 10) / 10, n: current.n + 1 },
  }
}

export function gradeToBump(grade: Grade): BumpKind {
  if (grade === 0) return 'wrong'
  if (grade === 3) return 'hard'
  if (grade === 4) return 'good'
  return 'easy'
}

export function allCards(myCards: Record<string, Card>, seedCards: Card[]): Card[] {
  const mine = Object.values(myCards).map((card) => ({ ...card, mine: true }))
  return [...seedCards, ...mine]
}

function stableJitter(id: string): number {
  let hash = 5381
  for (let index = 0; index < id.length; index += 1) {
    hash = ((hash << 5) + hash + id.charCodeAt(index)) | 0
  }
  return (hash >>> 0) % 7
}

export function buildQueue(cards: Card[], data: AppData): Card[] {
  const date = today()
  const due: Card[] = []
  const fresh: Card[] = []

  for (const card of cards) {
    const review = data.reviews[card.id]
    if (review) {
      if (review.due <= date) due.push(card)
    } else {
      fresh.push(card)
    }
  }

  due.sort((a, b) => {
    const scoreDelta = topicScore(data.progress, a.topicId) - topicScore(data.progress, b.topicId)
    if (scoreDelta !== 0) return scoreDelta
    const dueA = data.reviews[a.id]?.due ?? date
    const dueB = data.reviews[b.id]?.due ?? date
    return dueA < dueB ? -1 : 1
  })

  const introducedToday = Object.values(data.reviews).filter((review) => review.born === date).length
  const room = Math.max(0, data.newPerDay - introducedToday)

  fresh.sort((a, b) => {
    const priorityA = topicPriority(data.progress, a.topicId) + stableJitter(a.id)
    const priorityB = topicPriority(data.progress, b.topicId) + stableJitter(b.id)
    return priorityB - priorityA
  })

  return [...due, ...fresh.slice(0, room)]
}

export function countsByTopic(cards: Card[], data: AppData): Record<string, TopicCounts> {
  const counts: Record<string, TopicCounts> = {}
  for (const topic of TOPICS) counts[topic.id] = { cards: 0, fresh: 0, due: 0, errors: 0 }

  const date = today()
  for (const card of cards) {
    const entry = counts[card.topicId]
    if (!entry) continue
    entry.cards += 1
    const review = data.reviews[card.id]
    if (!review) entry.fresh += 1
    else if (review.due <= date) entry.due += 1
  }

  for (const error of Object.values(data.errors)) {
    const entry = counts[error.topicId]
    if (entry) entry.errors += 1
  }

  return counts
}
