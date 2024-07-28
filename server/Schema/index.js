const graphql = require("graphql");

const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} =  graphql

const {EMP_LIST} =  require('./Queries/Emp')
const RootQuery = new GraphQLObjectType({
    name:"employee",
    fields:{
        empList:EMP_LIST
    }
})

module.exports = new GraphQLSchema({query:RootQuery})