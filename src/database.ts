import {knex as setuKnex, Knex} from 'knex'
import { env } from './env/index';


export const configureKnex: Knex.Config = {
    client: 'sqlite',
    connection: {
        filename: env.DATABASE_URL
    },
    useNullAsDefault: true,
    migrations:{
        extension: 'ts',
        directory: './db/migrations'
    }
}

export const  knex = setuKnex(configureKnex)