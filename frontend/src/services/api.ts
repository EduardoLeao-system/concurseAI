import axios from 'axios'
import type { Card } from '../types'

export const api = axios.create({
  baseURL: '/api',
  timeout: 15_000,
  headers: { 'Content-Type': 'application/json' },
})

export interface GeneratedFlashcard {
  pergunta: string
  resposta: string
}

export interface FlashcardGenerationRequest {
  text: string
}

export async function generateFlashcards(text: string): Promise<GeneratedFlashcard[]> {
  const { data } = await api.post<GeneratedFlashcard[]>('/flashcards/generate', {
    text,
  } satisfies FlashcardGenerationRequest)
  return data
}

export async function fetchCards(): Promise<Card[]> {
  const { data } = await api.get<Card[]>('/flashcards')
  return data
}
