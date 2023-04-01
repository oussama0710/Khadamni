const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const service = require("../models/service.model");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
    },
    // image: {
    //     type: String,
    //     default: ""
    // },
    // favourites: service,

}, { timestamps: true });



// Get declare  an empty attribute = _confirmPassword
// Set assign the value to the attribute

userSchema.virtual('confirmPassword').get(() => {
    return this._confirmPassword
}).set(value => this._confirmPassword = value)

userSchema.pre('validate', function (next) {
    console.log("inside password validation")
    console.log(this.password, "------" , this.confirmPassword)
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', "password must match")
    }
    next()
}, { timestamps: true })

userSchema.pre('save', async function (next) {
    console.log("In hashing the password")
    try {
        const hashedPassword = await bcrypt.hash(this.password,10)
        this.password = hashedPassword
        console.log("Hashed Password = ", hashedPassword)
    }catch(error){
        console.log(error)
    }
    // next to continue to save 
    next()
})

const user = mongoose.model("User", userSchema)
module.exports = user
