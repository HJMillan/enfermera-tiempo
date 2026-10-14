export type Paciente = {
  nombre: string
  hc: string
  fecha: string
  sector: string
  cama: string
}

export type Tiempos = {
  minutos: number
  upe: number
}

export type Registro = {
  clave: string
  paciente: Paciente
  tiempos: Tiempos
}
