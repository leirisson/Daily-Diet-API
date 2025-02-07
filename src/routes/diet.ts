import type { FastifyInstance } from "fastify";
import { knex } from "../database";


export function dailyDietRoutes(app: FastifyInstance){
  
app.get('/', async () => {

  const table = await knex('sqlite_schema').select()
  return table
})
}