const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
require('dotenv')

const app = express()

mongoose.connect(processe.env.DB_URL)
mongoose.connection.once('open', ()=>{
    console.log('Connected to the database!')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('Server is up on port 4000🐱‍🏍')
})