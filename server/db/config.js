const mongoose = require('mongoose')

const connectionDb = async() => {
    try {
        await mongoose.connect("mongodb+srv://raj:isiIspRAgla0F41x@nodeexpressprojects.z1gchzr.mongodb.net/graphql?retryWrites=true&w=majority")
        console.log("Connection Successfully..!!");
    } catch (error) {
        console.log(error);
    }
}
connectionDb()