const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;


const EmpType = new GraphQLObjectType({
  name: "emp",
  fields: () => ({
    field1: { type: GraphQLString },
    field2: { type: GraphQLInt },
    field3: { type: GraphQLString },
  }),
});

module.exports = EmpType;
