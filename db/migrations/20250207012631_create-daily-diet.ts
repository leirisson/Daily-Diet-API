import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('refeicoes', (table) => {
    table.uuid('id').primary()
    table.uuid('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE')
    table.text('nome').notNullable()
    table.text('descricao').notNullable()
    table.boolean('status_dieta').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('update_at').defaultTo(knex.fn.now())
    
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('refeicoes')
}

