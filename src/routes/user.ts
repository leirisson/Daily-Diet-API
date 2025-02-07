import type { FastifyInstance } from "fastify";
import { knex } from "../database";
import {z} from 'zod'
import {randomUUID} from 'crypto'
export function userRoutes(app: FastifyInstance){
  app.get('/', async () => {
  
    const table = await knex('sqlite_schema').select()
    return table
  })

  app.post('/', async (request, reply) => {

    const createSchemaUser = z.object({
      name: z.string(),
      email: z.string()
    })

    const {name, email} = createSchemaUser.parse(request.body)

    let sessionId = request.cookies.sessionId

    if(!sessionId){
      sessionId = randomUUID()
      reply.cookie('sessionId', sessionId, {
        path: '/',
        maxAge: 60 * 60 * 24 * 5 // esse cookie tem a duração de 5 dias
      })
    }

    // await knex('user')
  })
}