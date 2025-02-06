import fastify from 'fastify'
import { knex } from './database'

export const app = fastify()


app.get('/', async () => {

    const table = await knex('sqlite_schema').select()
    return table
})