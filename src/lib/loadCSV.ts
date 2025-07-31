import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse/sync'

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

export function loadScenariosFromCSV(): OfflineSubScenario[] {
  if (cache) return cache
  const filePath = path.join(process.cwd(), 'data/scenarios.csv')
  const content = fs.readFileSync(filePath, 'utf8')
  cache = parse(content, {
    columns: true,
    skip_empty_lines: true,
  }) as OfflineSubScenario[]
  return cache
}
