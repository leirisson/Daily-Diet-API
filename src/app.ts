import fastify from 'fastify'
import { dailyDietRoutes } from './routes/diet'
import { userRoutes } from './routes/user'
import cookie from '@fastify/cookie'

export const app = fastify()



app.register(cookie)
app.register(userRoutes, {
    prefix: '/users'
})
app.register(dailyDietRoutes,{
    prefix: '/refeicoes'
})

