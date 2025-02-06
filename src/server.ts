import fastify from 'fastify'

const app = fastify()


app.get('/', async () => {
    return 'oi, Daily Diet API !'
})

app.listen({
    port : 3334
})
.then(() => {
    console.log("http-server runing")
    console.log("servidor rodando...")
})