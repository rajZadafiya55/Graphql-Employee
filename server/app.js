const express = require('express');
const app = express();
const connectionDb = require('./db/config')
const PORT = 8000;
const {graphqlHTTP} = require('express-graphql')
const Employee = require('./models/Emp')
const {graphql}= require('graphql');
const schema = require('./Schema/index')


connectionDb
app.use(express.json());

app.use('/graphql',
    graphqlHTTP(({
        schema,
        graphiql:true
    }))
)
app.listen(PORT, () =>{
    console.log(`App listening at http://localhost:${PORT}`);
})