import type { AppData, Card, ErrorLog, Review, TopicProgress } from '../types'

const STORAGE_KEY = 'concursoai:frontend:v1'

export const EMPTY_DATA: AppData = {
  reviews: {},
  errors: {},
  myCards: {},
  progress: {},
  newPerDay: 10,
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function readRecord<T>(value: unknown): Record<string, T> {
  return isRecord(value) ? (value as Record<string, T>) : {}
}

export function loadData(): AppData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...EMPTY_DATA }

    const parsed: unknown = JSON.parse(raw)
    if (!isRecord(parsed)) return { ...EMPTY_DATA }

    const newPerDay = Number(parsed.newPerDay)

    return {
      reviews: readRecord<Review>(parsed.reviews),
      errors: readRecord<ErrorLog>(parsed.errors),
      myCards: readRecord<Card>(parsed.myCards),
      progress: readRecord<TopicProgress>(parsed.progress),
      newPerDay: [5, 10, 15, 20, 30].includes(newPerDay) ? newPerDay : EMPTY_DATA.newPerDay,
    }
  } catch {
    return { ...EMPTY_DATA }
  }
}

export function saveData(data: AppData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    return
  }
}
