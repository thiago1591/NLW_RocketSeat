import express from 'express'

const app = express()

app.get('/', (request,response) => {
    return response.json({
        'message':'Olá NLW'})
})

app.post('/', (request,response) => {
    return response.json({message: "Usuario salvo com sucesso!"})
})

app.listen(3333, () => console.log('server running on port 3333'))