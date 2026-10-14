export type Actividad = {
  id: string
  nombre: string
  minutos: number
}

export const ACTIVIDADES: Actividad[] = [
  { id: '1', nombre: 'Entrevista al paciente', minutos: 15 },
  { id: '2', nombre: 'Control de temperatura', minutos: 6 },
  { id: '3', nombre: 'Control de tensión arterial', minutos: 6 },
  { id: '4', nombre: 'Control de pulso', minutos: 3 },
  { id: '5', nombre: 'Control de respiración', minutos: 3 },
  { id: '6', nombre: 'Perímetros', minutos: 3 },
  { id: '7', nombre: 'Curación simple', minutos: 6 },
  { id: '8', nombre: 'Curación compleja', minutos: 15 },
  { id: '9', nombre: 'Curación de escara', minutos: 21 },
  { id: '10', nombre: 'Vendaje simple', minutos: 3 },
  { id: '11', nombre: 'Vendaje elástico', minutos: 3 },
  { id: '12', nombre: 'Faja de cuerpo', minutos: 6 },
  { id: '13', nombre: 'Pruebas cualitativas en sangre', minutos: 3 },
  { id: '14', nombre: 'Pruebas cualitativas en orina', minutos: 3 },
  { id: '15', nombre: 'Pruebas cualitativas en materia fecal', minutos: 3 },
  { id: '16', nombre: 'Medicación vía oral', minutos: 3 },
  { id: '17', nombre: 'Medicación ocular', minutos: 3 },
  { id: '18', nombre: 'Medicación ótica', minutos: 3 },
  { id: '19', nombre: 'Medicación nasal', minutos: 3 },
  { id: '20', nombre: 'Medicación sublingual', minutos: 3 },
  { id: '21', nombre: 'Balance hidroelectrolítico', minutos: 9 },
  { id: '22', nombre: 'Lavado de boca', minutos: 3 },
  { id: '23', nombre: 'Confección de Kardex o tarjetero', minutos: 6 },
  { id: '24', nombre: 'Confección de report', minutos: 6 },
  { id: '25', nombre: 'Medicación intramuscular', minutos: 6 },
  { id: '26', nombre: 'Medicación intravenosa', minutos: 9 },
  { id: '27', nombre: 'Medicación subcutánea', minutos: 6 },
  { id: '28', nombre: 'Medicación intradérmica', minutos: 3 },
  { id: '29', nombre: 'Medicación cutánea', minutos: 3 },
  { id: '30', nombre: 'Medicación rectal', minutos: 6 },
  { id: '31', nombre: 'Medicación vaginal', minutos: 6 },
  { id: '32', nombre: 'Medicación por tubuladura', minutos: 3 },
  { id: '33', nombre: 'Venoclisis', minutos: 18 },
  { id: '34', nombre: 'Control de goteo', minutos: 3 },
  { id: '35', nombre: 'Control de permeabilidad del catéter', minutos: 3 },
  { id: '36', nombre: 'Cambio de frasco', minutos: 3 },
  { id: '37', nombre: 'Lavado de oído', minutos: 9 },
  { id: '38', nombre: 'Control de peso', minutos: 3 },
  { id: '39', nombre: 'Control de talla', minutos: 3 },
  { id: '40', nombre: 'Asistencia en examen', minutos: 9 },
  { id: '41', nombre: 'Nebulizaciones', minutos: 9 },
  { id: '42', nombre: 'Proetz', minutos: 12 },
  { id: '43', nombre: 'Asistencia en procedimientos invasivos', minutos: 9 },
  { id: '44', nombre: 'Información al paciente', minutos: 3 },
  { id: '45', nombre: 'Confección de registros', minutos: 3 },
  { id: '46', nombre: 'Control de presión venosa central', minutos: 3 },
  { id: '47', nombre: 'Baño de cama', minutos: 30 },
  { id: '48', nombre: 'Baño de ducha o bañera', minutos: 15 },
  { id: '49', nombre: 'Aseo perineal', minutos: 9 },
  { id: '50', nombre: 'Colocación de chata', minutos: 6 },
  { id: '51', nombre: 'Colocación de orinal', minutos: 6 },
  { id: '52', nombre: 'Enema', minutos: 12 },
  { id: '53', nombre: 'Arreglo de la unidad', minutos: 6 },
  { id: '54', nombre: 'Ayuda en la alimentación oral', minutos: 15 },
  { id: '55', nombre: 'Ayuda en la marcha', minutos: 9 },
  { id: '56', nombre: 'Traslado de cama a silla', minutos: 6 },
  { id: '57', nombre: 'Rasurado higiénico', minutos: 6 },
  { id: '58', nombre: 'Rasurado quirúrgico', minutos: 12 },
  { id: '59', nombre: 'Administración de líquidos por boca', minutos: 3 },
  { id: '60', nombre: 'Alimentación por sonda', minutos: 12 },
  { id: '61', nombre: 'Alimentación parenteral', minutos: 18 },
  { id: '62', nombre: 'Colocación de sonda', minutos: 9 },
  { id: '63', nombre: 'Control y medición de drenaje', minutos: 6 },
  { id: '64', nombre: 'Medición de micción horaria', minutos: 3 },
  { id: '65', nombre: 'Control de diuresis', minutos: 3 },
  { id: '66', nombre: 'Control de pérdidas por orificios naturales', minutos: 6 },
  { id: '67', nombre: 'Cuidado de colostomía', minutos: 15 },
  { id: '68', nombre: 'Aspiración secreciones por traqueostomía', minutos: 9 },
  { id: '69', nombre: 'Aspiración secreciones por tubo endotraqueal', minutos: 6 },
  { id: '70', nombre: 'Pase de guardia', minutos: 15 },
  { id: '71', nombre: 'Control de registros', minutos: 3 },
  { id: '72', nombre: 'Control de monitor individual', minutos: 3 },
  { id: '73', nombre: 'Quimioterapia por catéter', minutos: 30 },
  { id: '74', nombre: 'Control asistencia respiratoria', minutos: 6 },
  { id: '75', nombre: 'Diálisis peritoneal', minutos: 90 },
  { id: '76', nombre: 'Ejercicios respiratorios', minutos: 3 },
  { id: '77', nombre: 'Drenaje postural', minutos: 6 },
  { id: '78', nombre: 'Control de dolor', minutos: 3 },
  { id: '79', nombre: 'Oxígeno por sonda o máscara (con tubo)', minutos: 12 },
  { id: '80', nombre: 'Aplicación de calor', minutos: 3 },
  { id: '81', nombre: 'Aplicación de frío', minutos: 3 },
  { id: '82', nombre: 'Muestra para hemocultivo', minutos: 9 },
  { id: '83', nombre: 'Muestra para urocultivo', minutos: 6 },
  { id: '84', nombre: 'Muestra para coprocultivo', minutos: 3 },
  { id: '85', nombre: 'Muestra para esputo', minutos: 3 },
  { id: '86', nombre: 'Lavado vesical', minutos: 12 },
  { id: '87', nombre: 'Peso de pañales', minutos: 3 },
  { id: '88', nombre: 'Alimentación por biberón', minutos: 9 },
  { id: '89', nombre: 'Sujeción de paciente', minutos: 9 },
  { id: '90', nombre: 'Cambios de posición', minutos: 6 },
  { id: '91', nombre: 'Control de riesgos ambientales', minutos: 6 },
  { id: '92', nombre: 'Lavado de mano', minutos: 3 },
  { id: '93', nombre: 'Observación del paciente (sueño y reposo)', minutos: 6 },
  { id: '94', nombre: 'Entrevista a la familia', minutos: 6 },
  { id: '95', nombre: 'Visita domiciliaria', minutos: 21 },
  { id: '96', nombre: 'Vigilancia en procedimientos especiales', minutos: 60 },
  { id: '97', nombre: 'Arreglo de uñas', minutos: 6 },
  { id: '98', nombre: 'Tratamiento de pediculosis', minutos: 30 },
  { id: '99', nombre: 'Lavado de cabello', minutos: 12 },
  { id: '100', nombre: 'Control de la eliminación normal', minutos: 3 },
  { id: '101', nombre: 'Control de estado de conciencia', minutos: 6 },
  { id: '102', nombre: 'Control de las condiciones del material, insumos y medicamentos', minutos: 6 },
]

export function totalesDe(cantidades: Record<string, number>) {
  let minutos = 0
  for (const actividad of ACTIVIDADES) {
    minutos += (cantidades[actividad.id] ?? 0) * actividad.minutos
  }
  return { minutos, upe: minutos / 3 }
}

export function textoTotal(minutos: number, upe: number) {
  const minutosLabel = minutos === 1 ? '1 minuto' : `${minutos} minutos`
  const upeLabel = Number.isInteger(upe) ? String(upe) : upe.toFixed(1)
  return `${minutosLabel}, ${upeLabel} U.P.E.`
}

export function coincideActividad(nombre: string, busqueda: string) {
  const consulta = normalizar(busqueda.trim())
  if (!consulta) return true
  return normalizar(nombre).includes(consulta)
}

function normalizar(valor: string) {
  return valor.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase()
}
