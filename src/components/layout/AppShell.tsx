import type { ReactNode } from 'react'

type AppShellProps = {
  children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-dvh flex-col bg-canvas text-ink lg:flex-row">
      <header className="sticky top-0 z-10 bg-twilight px-4 text-on-twilight pt-[env(safe-area-inset-top)] lg:hidden">
        <p className="flex h-14 items-center text-lg font-bold">Horario</p>
      </header>

      <aside className="hidden w-60 shrink-0 flex-col bg-twilight px-5 py-6 text-on-twilight lg:flex">
        <p className="text-lg font-bold">Horario</p>
      </aside>

      <main className="flex-1 px-4 pt-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] lg:overflow-auto lg:px-8 lg:py-6">
        {children}
      </main>
    </div>
  )
}
