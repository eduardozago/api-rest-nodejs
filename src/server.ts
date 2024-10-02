import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database'
import { env } from './env'

const app = fastify()

app.get('/', async () => {
  const transaction = await knex('transactions')
    .insert({
      id: crypto.randomUUID(),
      title: 'Some title here',
      amount: 4560,
    })
    .returning('*')

  return transaction
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('Server running')
  })
