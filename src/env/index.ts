import 'dotenv/config'
import {z} from 'zod'


const createSchemaEnv = z.object({
  DATABASE_URL : z.string(),
  NODE_ENV : z.enum(['development','test','production']).default('develpment')
})

const prev_env = createSchemaEnv.safeParse(process.env)

if(prev_env.success === false){
  console.log('Deurro nas variaveis de ambiente! ', prev_env.error.format())
  throw new Error('Erro nas variaveis de ambiente.')
}

export const env = prev_env.data