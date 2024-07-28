var emp = require('../../models/Emp');
const {GraphQLList} = require('graphql');
const empType = require('../TypeDefs/EmpType')

module.exports.EMP_LIST = {
    type: new GraphQLList(empType),
    reslove(parent,args){
        let text = console.log("======>>> data");
        let data = emp.find();
        console.log("data",data);
        return text
    }
}