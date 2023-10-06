let mongoose = require('mongoose')
let validator = require("validator")

 
const User = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true,
            validate: (value) => {
                return validator.isInt(String(value))
            }
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            validate: (value) => {
                return validator.isEmail(value)
            }
        },

    }, { timestamps: true }

) 





module.exports = mongoose.model('User', User)

