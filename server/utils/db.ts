import { drizzle } from 'drizzle-orm/d1'
import * as schema from '../database/schema'
import {H3Event} from "h3";
export { sql, eq, and, or } from 'drizzle-orm'

export const tables = schema
export function useDB(event: H3Event) {
  // const event = useEvent()
  return drizzle(event.context.cloudflare.env.DB, { schema, casing: 'snake_case' })
}
