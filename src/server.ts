import express, { response } from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.json({
    message: "Olá nlw 05!"
  })
})

app.post('/', (request, response) => {
  return response.json({
    message: "Olá nlw 05 no método POST"
  })
})

app.listen(3333, () => console.log("Server is running on port 3333"))