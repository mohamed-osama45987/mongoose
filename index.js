const mongoose = require('mongoose')
const UserModel = require("./user")

// connecting to DB
function connectToDB() {

    mongoose.connect("mongodb://127.0.0.1:27017/test")
        .then(() => console.log("dataBase is connected"))
        .catch(e => console.log(e))

}

connectToDB()


// Create user

// UserModel.create({
//     firstName: "Ahmed",
//     lastName: "Fawzy",
//     age: 19, 
//     email: "test@gmail.com"
// }).then((user) => console.log(`User created successfully : ${user}`))


// Read user
// UserModel.findOne({ firstName: "Ahmed" }).select({ _id: false }).then((user) => console.log(user))

// update User
//UserModel.findOneAndUpdate({ user_name: "test user" }, { age: 40s }).then((user) => console.log(`user updated ${user}`))

//delete
// UserModel.deleteOne({ user_name: "test user" }).then(() => console.log("user deleted"))
