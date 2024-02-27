const express = require('express')
const cors = require('cors');
const uuid = require('uuid')

const app = express()
const PORT = 3001
app.use(express.json())
app.use(cors())

const users = []

app.get('/users', (request, response) => {

    return response.json(users)
})

app.post('/users', (request, response) => {
    const { name, order } = request.body

    const user = { id: uuid.v4(), name, order }

    users.push(user)

    return response.json(user)
})

app.delete('/users/:id', (request, response) => {
    const index = request.userIndex

    users.splice(index, 1)

    return response.status(204).json()
})

app.listen(PORT, () => {
    console.log(`App online na porta ${PORT}`)
})

