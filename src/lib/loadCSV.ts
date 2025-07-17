import fs from 'fs'
import path from 'path'

export interface OfflineSubScenario {
  scenario_id: string
  scenario_title: string
  subscenario_id: string
  subscenario_title: string
  body_text: string
  cta_text: string
  cta_link: string
  selfcare_text: string
}

let cache: OfflineSubScenario[] | null = null

function parseCSV(content: string): OfflineSubScenario[] {
  const rows: OfflineSubScenario[] = []
  const lines = content.trim().split(/\r?\n/)
  const headers = lines.shift()?.split(',') ?? []
  const quoteRegex = /^"|"$/g
  for (const line of lines) {
    const cols: string[] = []
    let current = ''
    let inQuotes = false
    for (let i = 0; i < line.length; i++) {
      const char = line[i]
      if (char === '"') {
        if (inQuotes && line[i + 1] === '"') {
          current += '"'
          i++
        } else {
          inQuotes = !inQuotes
        }
      } else if (char === ',' && !inQuotes) {
        cols.push(current)
        current = ''
      } else {
        current += char
      }
    }
    cols.push(current)
    const obj: any = {}
    headers.forEach((h, idx) => {
      obj[h.trim()] = cols[idx]?.replace(quoteRegex, '') ?? ''
    })
    rows.push(obj as OfflineSubScenario)
  }
  return rows
}

export function getScenarioData(): OfflineSubScenario[] {
  if (cache) return cache
  const filePath = path.join(process.cwd(), 'src/assets/data/scenarios.csv')
  const content = fs.readFileSync(filePath, 'utf8')
  cache = parseCSV(content)
  return cache
}
