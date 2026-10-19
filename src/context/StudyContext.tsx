import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { SEED_CARDS } from '../data/deck'
import { today } from '../lib/date'
import { allCards, buildQueue, bumpProgress, countsByTopic } from '../lib/study'
import { loadData, saveData } from '../lib/storage'
import { uid } from '../lib/utils'
import type { AppData, Card, ErrorLog, Review, TopicCounts } from '../types'
import type { BumpKind } from '../lib/study'

interface AddCardInput {
  topicId: string
  front: string
  back: string
}

interface AddErrorInput {
  topicId: string
  why: string
  question: string
  rule: string
  alsoCreateCard: boolean
}

interface StudyContextValue {
  data: AppData
  cards: Card[]
  queue: Card[]
  counts: Record<string, TopicCounts>
  setNewPerDay: (amount: number) => void
  saveReview: (cardId: string, review: Review) => void
  bumpTopic: (topicId: string, kind: BumpKind) => void
  addCard: (input: AddCardInput) => void
  deleteCard: (cardId: string) => void
  addError: (input: AddErrorInput) => void
  deleteError: (errorId: string) => void
}

const StudyContext = createContext<StudyContextValue | null>(null)

export function StudyProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<AppData>(() => loadData())

  useEffect(() => {
    saveData(data)
  }, [data])

  const cards = useMemo(() => allCards(data.myCards, SEED_CARDS), [data.myCards])
  const queue = useMemo(() => buildQueue(cards, data), [cards, data])
  const counts = useMemo(() => countsByTopic(cards, data), [cards, data])

  const setNewPerDay = useCallback((amount: number) => {
    setData((previous) => ({ ...previous, newPerDay: amount }))
  }, [])

  const saveReview = useCallback((cardId: string, review: Review) => {
    setData((previous) => ({
      ...previous,
      reviews: { ...previous.reviews, [cardId]: review },
    }))
  }, [])

  const bumpTopic = useCallback((topicId: string, kind: BumpKind) => {
    setData((previous) => ({
      ...previous,
      progress: bumpProgress(previous.progress, topicId, kind),
    }))
  }, [])

  const addCard = useCallback((input: AddCardInput) => {
    const id = uid('m')
    const card: Card = {
      id,
      topicId: input.topicId,
      front: input.front,
      back: input.back,
      mine: true,
      createdAt: today(),
    }
    setData((previous) => ({
      ...previous,
      myCards: { ...previous.myCards, [id]: card },
    }))
  }, [])

  const deleteCard = useCallback((cardId: string) => {
    setData((previous) => {
      const myCards = { ...previous.myCards }
      const reviews = { ...previous.reviews }
      delete myCards[cardId]
      delete reviews[cardId]
      return { ...previous, myCards, reviews }
    })
  }, [])

  const addError = useCallback((input: AddErrorInput) => {
    const errorId = uid('e')
    const cardId = uid('m')
    const log: ErrorLog = {
      id: errorId,
      topicId: input.topicId,
      why: input.why,
      question: input.question,
      rule: input.rule,
      at: today(),
      ts: Date.now(),
    }

    setData((previous) => {
      const next: AppData = {
        ...previous,
        errors: { ...previous.errors, [errorId]: log },
        progress: bumpProgress(previous.progress, input.topicId, 'err'),
      }
      if (input.alsoCreateCard) {
        next.myCards = {
          ...previous.myCards,
          [cardId]: {
            id: cardId,
            topicId: input.topicId,
            front: input.question,
            back: input.rule,
            mine: true,
            createdAt: today(),
          },
        }
      }
      return next
    })
  }, [])

  const deleteError = useCallback((errorId: string) => {
    setData((previous) => {
      const errors = { ...previous.errors }
      delete errors[errorId]
      return { ...previous, errors }
    })
  }, [])

  const value = useMemo<StudyContextValue>(
    () => ({
      data,
      cards,
      queue,
      counts,
      setNewPerDay,
      saveReview,
      bumpTopic,
      addCard,
      deleteCard,
      addError,
      deleteError,
    }),
    [
      data,
      cards,
      queue,
      counts,
      setNewPerDay,
      saveReview,
      bumpTopic,
      addCard,
      deleteCard,
      addError,
      deleteError,
    ],
  )

  return <StudyContext.Provider value={value}>{children}</StudyContext.Provider>
}

export function useStudy(): StudyContextValue {
  const context = useContext(StudyContext)
  if (!context) throw new Error('useStudy must be used inside StudyProvider')
  return context
}
