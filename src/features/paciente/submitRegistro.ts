import type { Paciente, Registro, Tiempos } from './types'

export class EnvioError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'EnvioError'
  }
}

export async function submitRegistro(paciente: Paciente, tiempos: Tiempos): Promise<void> {
  const url = import.meta.env.VITE_SHEETS_WEB_APP_URL?.trim()
  const clave = import.meta.env.VITE_SHEETS_WEB_APP_TOKEN?.trim()

  if (!url || !clave) {
    throw new EnvioError('Falta conectar el script de Google Sheets.')
  }

  const registro: Registro = {
    clave,
    paciente,
    tiempos,
  }

  try {
    await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(registro),
    })
  } catch {
    throw new EnvioError('No se pudo enviar. Revisá la conexión e intentá de nuevo.')
  }
}
