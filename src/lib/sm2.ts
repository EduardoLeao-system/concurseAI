import type { Review } from '../types'
import { addDays, today } from './date'

export function schedule(base: Review | undefined, quality: number, examDistance: number): Review {
  const initial: Review = {
    ease: 2.5,
    interval: 0,
    reps: 0,
    lapses: 0,
    born: today(),
    due: today(),
    last: today(),
  }
  const previous = base ?? initial
  const next: Review = { ...previous, born: previous.born || today() }
  const cap = Math.max(1, examDistance - 2)

  if (quality < 3) {
    next.reps = 0
    next.interval = 1
    next.lapses += 1
    next.ease = Math.max(1.3, next.ease - 0.2)
  } else {
    next.ease = Math.max(1.3, next.ease + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)))
    next.reps += 1
    if (next.reps === 1) {
      next.interval = quality === 5 ? 2 : 1
    } else if (next.reps === 2) {
      next.interval = quality === 3 ? 2 : quality === 5 ? 4 : 3
    } else {
      const factor = quality === 3 ? 1.2 : quality === 5 ? next.ease * 1.3 : next.ease
      next.interval = Math.max(next.interval + 1, Math.round(next.interval * factor))
    }
  }

  next.interval = Math.min(next.interval, cap)
  next.due = addDays(today(), next.interval)
  next.last = today()
  return next
}
