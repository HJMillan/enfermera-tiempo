import { useMemo, useState } from 'react'
import { Button, TextField } from '@/components/ui'
import { cn } from '@/lib/cn'
import { ACTIVIDADES, coincideActividad } from './actividades'

type ActividadListProps = {
  cantidades: Record<string, number>
  onCambiar: (id: string, delta: number) => void
}

export function ActividadList({ cantidades, onCambiar }: ActividadListProps) {
  const [busqueda, setBusqueda] = useState('')
  const visibles = useMemo(
    () => ACTIVIDADES.filter((actividad) => coincideActividad(actividad.nombre, busqueda)),
    [busqueda],
  )

  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold">Actividades</h2>
      <p className="mt-1 text-base text-muted">Cada vez que se hizo, sumá una.</p>
      <div className="mt-4">
        <TextField
          name="buscar"
          label="Buscar actividad"
          value={busqueda}
          autoComplete="off"
          onChange={(event) => setBusqueda(event.target.value)}
        />
      </div>

      {visibles.length === 0 ? (
        <p className="mt-4 text-base text-ink">No hay actividades con ese texto.</p>
      ) : (
        <ul className="mt-2">
          {visibles.map((actividad) => {
            const cantidad = cantidades[actividad.id] ?? 0
            return (
              <li
                key={actividad.id}
                className={cn(
                  'flex items-center gap-3 border-b border-line py-3',
                  cantidad > 0 && '-mx-2 bg-frost px-2',
                )}
              >
                <div className="min-w-0 flex-1">
                  <p className="text-base font-bold">{actividad.nombre}</p>
                  <p className="text-sm text-muted">{actividad.minutos} min</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="secondary"
                    className="min-w-11 px-0"
                    disabled={cantidad === 0}
                    aria-label={`Restar ${actividad.nombre}`}
                    onClick={() => onCambiar(actividad.id, -1)}
                  >
                    −
                  </Button>
                  <span className="w-8 text-center text-base font-bold tabular-nums">
                    {cantidad}
                  </span>
                  <Button
                    type="button"
                    className="min-w-11 px-0"
                    aria-label={`Sumar ${actividad.nombre}`}
                    onClick={() => onCambiar(actividad.id, 1)}
                  >
                    +
                  </Button>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </section>
  )
}
