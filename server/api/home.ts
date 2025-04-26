import {tables, useDB} from "~/server/utils/db";
import {usersTable} from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  // const { cloudflare } = event.context
  // const stmt = await cloudflare.env.DB.prepare('SELECT id FROM table')
  // const { results } = await stmt.all()
  const {  usersTable } = tables
  console.log('event.context.cloudflare: ', event.context.cloudflare)
  const db = useDB(event)
  // const res = db.select().from(usersTable).all()
  return { data: 123 }
})
