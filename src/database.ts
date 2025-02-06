import {knex as setuKnex, Knex} from 'knex'


export const configureKnex: Knex.Config = {
    client: 'sqlite',
    connection: {
        filename: './db/app.db'
    },
    useNullAsDefault: true,
    migrations:{
        extension: 'ts',
        directory: './db/migrations'
    }
}

export const  knex = setuKnex(configureKnex)