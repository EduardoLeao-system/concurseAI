import { NavLink, Outlet } from 'react-router-dom'
import { daysToExam } from '../lib/date'
import { cx } from '../lib/cx'

const tabs = [
  { to: '/hoje', label: 'Hoje' },
  { to: '/cartoes', label: 'Cartões' },
  { to: '/erros', label: 'Erros' },
  { to: '/dominio', label: 'Domínio' },
]

export function Layout() {
  const days = Math.max(0, daysToExam())

  return (
    <div className="mx-auto w-full max-w-[760px]">
      <a
        href="#conteudo"
        className="sr-only rounded bg-pen px-3 py-2 font-bold text-pen-ink focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50"
      >
        Ir para o conteúdo
      </a>

      <header className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3 pb-4">
        <div>
          <p className="mb-1.5 font-mono text-xs uppercase tracking-[0.08em] text-muted">
            Manaus Previdência · FCC · Analista TI (cód. 08)
          </p>
          <h1 className="text-[1.75rem] font-extrabold tracking-[-0.01em]">
            Estudo ManausPrev TI
          </h1>
        </div>
        <div className="ml-auto text-right">
          <b className="block font-display text-[2.4rem] font-extrabold leading-none text-pen">
            {days}
          </b>
          <span className="text-[0.8rem] text-muted">dias para a prova de 06/12</span>
        </div>
      </header>

      <nav aria-label="Seções" className="mb-5 flex gap-1 border-b border-line">
        {tabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            className={({ isActive }) =>
              cx(
                '-mb-px flex-1 border-b-[3px] px-1 py-2.5 text-center text-[0.95rem] font-semibold transition-colors',
                isActive
                  ? 'border-pen text-ink'
                  : 'border-transparent text-muted hover:text-ink',
              )
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </nav>

      <main id="conteudo" className="animate-rise">
        <Outlet />
      </main>

      <footer className="mt-7 flex flex-wrap justify-between gap-x-4 gap-y-2 text-[0.8rem] text-muted">
        <span className="inline-flex items-center gap-1.5">
          <i className="block h-2 w-2 rounded-full bg-ok" />
          Salvo só neste navegador
        </span>
        <span>Dados privados: só você lê o que salva aqui.</span>
      </footer>
    </div>
  )
}
