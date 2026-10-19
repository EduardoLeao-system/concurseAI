export interface Topic {
  id: string
  name: string
  weight: number
}

export interface Card {
  id: string
  topicId: string
  front: string
  back: string
  mine?: boolean
  createdAt?: string
}

export interface Review {
  ease: number
  interval: number
  reps: number
  lapses: number
  born: string
  due: string
  last: string
}

export interface TopicProgress {
  score: number
  n: number
}

export interface ErrorReason {
  id: string
  label: string
}

export interface ErrorLog {
  id: string
  topicId: string
  why: string
  question: string
  rule: string
  at: string
  ts: number
}

export interface AppData {
  reviews: Record<string, Review>
  errors: Record<string, ErrorLog>
  myCards: Record<string, Card>
  progress: Record<string, TopicProgress>
  newPerDay: number
}

export interface TopicCounts {
  cards: number
  fresh: number
  due: number
  errors: number
}

export type Grade = 0 | 3 | 4 | 5

export interface SessionStats {
  wrong: number
  hard: number
  good: number
  easy: number
}
