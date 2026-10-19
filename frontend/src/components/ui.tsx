import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cx } from '../lib/cx'

export const inputClass =
  'w-full min-w-0 rounded-md border border-line bg-surface px-2.5 py-2 text-base text-ink placeholder:text-muted/70 transition-colors focus:border-pen focus:outline-none focus:ring-2 focus:ring-pen/20'

export const labelClass = 'font-mono text-[0.72rem] uppercase tracking-[0.06em] text-muted'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost'
  size?: 'md' | 'sm'
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cx(
        'inline-flex items-center justify-center gap-2 rounded-md font-body font-bold transition-[background-color,color,opacity,transform] active:translate-y-px disabled:cursor-not-allowed disabled:opacity-45',
        variant === 'primary'
          ? 'bg-pen text-pen-ink hover:brightness-110'
          : 'border border-line bg-transparent text-ink hover:bg-pen-soft/60',
        size === 'md' ? 'px-5 py-3 text-base' : 'px-3 py-1.5 text-sm',
        className,
      )}
      {...props}
    />
  )
}

export function Field({
  label,
  htmlFor,
  error,
  children,
  className,
}: {
  label: string
  htmlFor: string
  error?: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cx('grid min-w-0 gap-1', className)}>
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
      </label>
      {children}
      {error ? <p className="text-sm text-bad">{error}</p> : null}
    </div>
  )
}

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cx(
        'font-mono text-[0.7rem] uppercase tracking-[0.06em] text-muted',
        className,
      )}
    >
      {children}
    </span>
  )
}

export function Chip({
  children,
  tone = 'default',
}: {
  children: ReactNode
  tone?: 'default' | 'due' | 'ok' | 'bad'
}) {
  return (
    <span
      className={cx(
        'inline-flex items-center whitespace-nowrap rounded border px-1.5 py-0.5 font-mono text-[0.72rem]',
        tone === 'default' && 'border-line text-muted',
        tone === 'due' && 'border-pen text-pen',
        tone === 'ok' && 'border-ok/40 text-ok',
        tone === 'bad' && 'border-bad/40 text-bad',
      )}
    >
      {children}
    </span>
  )
}

export function Bubbles({ score = 0, measured }: { score?: number; measured: boolean }) {
  const filled = measured ? Math.round(score / 10) : 0
  const tone = !measured
    ? 'text-muted'
    : score < 40
      ? 'text-bad'
      : score < 70
        ? 'text-warn'
        : 'text-ok'

  return (
    <span
      role="img"
      aria-label={
        measured ? `Domínio estimado: ${Math.round(score)}%` : 'Domínio estimado: sem dados'
      }
      className={cx('inline-flex shrink-0 gap-[3px]', tone)}
    >
      {Array.from({ length: 10 }, (_, index) => (
        <i
          key={index}
          className={cx(
            'block h-[11px] w-[11px] rounded-full border-[1.5px] border-current',
            index < filled && 'bg-current',
          )}
        />
      ))}
    </span>
  )
}

export function ProgressBar({ value }: { value: number }) {
  const safe = Math.max(0, Math.min(100, value))
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(safe)}
      className="h-1.5 overflow-hidden rounded-full bg-line"
    >
      <i
        className="block h-full bg-pen transition-[width] duration-300"
        style={{ width: `${safe}%` }}
      />
    </div>
  )
}

export function EmptyState({ children }: { children: ReactNode }) {
  return <p className="py-5 text-muted">{children}</p>
}
