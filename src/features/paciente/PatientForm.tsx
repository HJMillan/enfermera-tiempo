import { useRef, useState, type FormEvent } from 'react'
import { Button, TextField } from '@/components/ui'
import { ActividadList } from './ActividadList'
import { textoTotal, totalesDe } from './actividades'
import { EnvioError, submitRegistro } from './submitRegistro'
import type { Paciente } from './types'

const EMPTY_ERRORS: Partial<Record<keyof Paciente, string>> = {}

function todayISO() {
  const now = new Date()
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60_000)
  return local.toISOString().slice(0, 10)
}

function emptyPaciente(fecha = todayISO()): Paciente {
  return { nombre: '', hc: '', fecha, sector: '', cama: '' }
}

function validate(paciente: Paciente) {
  const errors: Partial<Record<keyof Paciente, string>> = {}
  if (!paciente.nombre) errors.nombre = 'Falta el nombre del paciente.'
  if (!paciente.hc) errors.hc = 'Falta la HC.'
  if (!paciente.fecha) errors.fecha = 'Falta la fecha.'
  if (!paciente.sector) errors.sector = 'Falta el sector.'
  if (!paciente.cama) errors.cama = 'Falta la cama.'
  return errors
}

export function PatientForm() {
  const nombreRef = useRef<HTMLInputElement>(null)
  const [paciente, setPaciente] = useState<Paciente>(emptyPaciente)
  const [cantidades, setCantidades] = useState<Record<string, number>>({})
  const [errors, setErrors] = useState(EMPTY_ERRORS)
  const [enviando, setEnviando] = useState(false)
  const [aviso, setAviso] = useState<string | null>(null)
  const [avisoError, setAvisoError] = useState(false)
  const totales = totalesDe(cantidades)
  const resumen = textoTotal(totales.minutos, totales.upe)

  function update(field: keyof Paciente, value: string) {
    setPaciente((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setAviso(null)
  }

  function cambiarCantidad(id: string, delta: number) {
    setCantidades((current) => {
      const next = Math.max(0, (current[id] ?? 0) + delta)
      if (next === 0) {
        const rest = { ...current }
        delete rest[id]
        return rest
      }
      return { ...current, [id]: next }
    })
    setAviso(null)
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const next: Paciente = {
      nombre: paciente.nombre.trim(),
      hc: paciente.hc.trim(),
      fecha: paciente.fecha,
      sector: paciente.sector.trim(),
      cama: paciente.cama.trim(),
    }
    const nextErrors = validate(next)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setAviso('Faltan datos del paciente.')
      setAvisoError(true)
      nombreRef.current?.focus()
      return
    }

    setEnviando(true)
    setAviso(null)
    try {
      await submitRegistro(next, totales)
      setAviso(`Se envió el registro de ${next.nombre}. ${resumen}.`)
      setAvisoError(false)
      setPaciente(emptyPaciente(next.fecha))
      setCantidades({})
      nombreRef.current?.focus()
    } catch (error) {
      const message =
        error instanceof EnvioError
          ? error.message
          : 'No se pudo enviar. Revisá la conexión e intentá de nuevo.'
      setAviso(message)
      setAvisoError(true)
    } finally {
      setEnviando(false)
    }
  }

  return (
    <form onSubmit={onSubmit} autoComplete="off" className="max-w-xl pb-36" noValidate>
      <h1 className="text-2xl font-bold">Paciente</h1>
      <p className="mt-2 text-base leading-relaxed text-muted">
        Un registro por paciente. La fecha queda en el turno de hoy.
      </p>

      <div className="mt-6 flex flex-col gap-4">
        <TextField
          ref={nombreRef}
          name="nombre"
          label="Nombre del paciente"
          value={paciente.nombre}
          error={errors.nombre}
          autoComplete="off"
          onChange={(event) => update('nombre', event.target.value)}
        />
        <TextField
          name="hc"
          label="HC"
          value={paciente.hc}
          error={errors.hc}
          autoComplete="off"
          autoCapitalize="characters"
          onChange={(event) => update('hc', event.target.value)}
        />
        <TextField
          name="fecha"
          label="Fecha"
          type="date"
          value={paciente.fecha}
          error={errors.fecha}
          onChange={(event) => update('fecha', event.target.value)}
        />
        <TextField
          name="sector"
          label="Sector"
          value={paciente.sector}
          error={errors.sector}
          autoComplete="off"
          onChange={(event) => update('sector', event.target.value)}
        />
        <TextField
          name="cama"
          label="Cama"
          value={paciente.cama}
          error={errors.cama}
          autoComplete="off"
          onChange={(event) => update('cama', event.target.value)}
        />
      </div>

      <ActividadList cantidades={cantidades} onCambiar={cambiarCantidad} />

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-line bg-surface px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:left-60 lg:px-8">
        <div className="max-w-xl">
          {aviso ? (
            <p className="mb-2 text-base text-ink" role={avisoError ? 'alert' : 'status'}>
              {aviso}
            </p>
          ) : null}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-lg font-bold" aria-live="polite">
              {resumen}
            </p>
            <Button type="submit" className="w-full sm:w-auto" disabled={enviando}>
              {enviando ? 'Enviando registro' : 'Enviar registro'}
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}
