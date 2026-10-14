// Pegar en Extensiones → Apps Script del Google Sheet.
// Completar DESTINO y CLAVE. CLAVE tiene que ser la misma que VITE_SHEETS_WEB_APP_TOKEN.
// Implementar → Aplicación web → Ejecutar como: yo → Quién tiene acceso: cualquier persona.
// Copiar la URL /exec a VITE_SHEETS_WEB_APP_URL.

const DESTINO = ''
const CLAVE = ''
const HOJA = 'Registros'

const COLUMNAS = ['Enviado', 'Fecha', 'Nombre', 'HC', 'Sector', 'Cama', 'Minutos', 'U.P.E.']

function doPost(e) {
  const lock = LockService.getScriptLock()
  lock.waitLock(15000)
  try {
    const data = JSON.parse(e.postData.contents)
    if (!CLAVE || data.clave !== CLAVE) {
      return responder_({ ok: false, error: 'clave' })
    }
    if (!DESTINO) {
      return responder_({ ok: false, error: 'destino' })
    }

    const paciente = data.paciente || {}
    const tiempos = data.tiempos || {}
    const sheet = obtenerHoja_()
    asegurarEncabezados_(sheet)

    const fila = [
      new Date(),
      fechaHoja_(paciente.fecha),
      paciente.nombre || '',
      paciente.hc || '',
      paciente.sector || '',
      paciente.cama || '',
      Number(tiempos.minutos) || 0,
      Number(tiempos.upe) || 0,
    ]
    sheet.appendRow(fila)

    MailApp.sendEmail({
      to: DESTINO,
      subject: 'Paciente ' + (paciente.nombre || '') + ' — ' + fechaLegible_(paciente.fecha),
      body: cuerpo_(paciente, tiempos),
    })

    return responder_({ ok: true })
  } catch (error) {
    return responder_({ ok: false, error: String(error) })
  } finally {
    lock.releaseLock()
  }
}

function doGet() {
  return responder_({ ok: true })
}

function obtenerHoja_() {
  const book = SpreadsheetApp.getActive()
  return book.getSheetByName(HOJA) || book.insertSheet(HOJA)
}

function asegurarEncabezados_(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(COLUMNAS)
    sheet.getRange(1, 1, 1, COLUMNAS.length).setFontWeight('bold')
    sheet.setFrozenRows(1)
    return
  }
  const actuales = sheet.getRange(1, 1, 1, Math.max(sheet.getLastColumn(), 1)).getValues()[0]
  if (actuales.indexOf('Minutos') === -1) {
    const columna = actuales.length + 1
    sheet.getRange(1, columna, 1, 2).setValues([['Minutos', 'U.P.E.']]).setFontWeight('bold')
  }
}

function cuerpo_(paciente, tiempos) {
  const lineas = [
    'Nombre: ' + (paciente.nombre || ''),
    'HC: ' + (paciente.hc || ''),
    'Fecha: ' + fechaLegible_(paciente.fecha),
    'Sector: ' + (paciente.sector || ''),
    'Cama: ' + (paciente.cama || ''),
    'Minutos: ' + (Number(tiempos.minutos) || 0),
    'U.P.E.: ' + (Number(tiempos.upe) || 0),
  ]
  return lineas.join('\n')
}

function fechaHoja_(iso) {
  const partes = String(iso || '').split('-')
  if (partes.length !== 3) return iso || ''
  return new Date(Number(partes[0]), Number(partes[1]) - 1, Number(partes[2]))
}

function fechaLegible_(iso) {
  const partes = String(iso || '').split('-')
  if (partes.length !== 3) return iso || ''
  return partes[2] + '/' + partes[1] + '/' + partes[0]
}

function responder_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  )
}
