import fastify from 'fastify'
import { dailyDietRoutes } from './routes/diet'

export const app = fastify()

app.register(dailyDietRoutes)

