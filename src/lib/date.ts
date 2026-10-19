import { EXAM_DATE } from '../data/deck'

const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`)

export function ymd(date: Date = new Date()): string {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

export function today(): string {
  return ymd(new Date())
}

export function parseYmd(value: string): Date {
  const [year, month, day] = value.split('-').map(Number)
  return new Date(year, month - 1, day)
}

export function addDays(value: string, amount: number): string {
  const date = parseYmd(value)
  date.setDate(date.getDate() + amount)
  return ymd(date)
}

export function diffDays(from: string, to: string): number {
  return Math.round((parseYmd(to).getTime() - parseYmd(from).getTime()) / 86_400_000)
}

export function daysToExam(): number {
  return diffDays(today(), ymd(EXAM_DATE))
}

export function shortDate(value: string): string {
  const [, month, day] = value.split('-')
  return `${day}/${month}`
}

export function formatInterval(days: number): string {
  return days < 30 ? `${days} d` : `${Math.round(days / 30)} m`
}
