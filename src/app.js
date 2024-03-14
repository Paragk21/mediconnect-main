// create the application
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose');
// const User = require('./models/user');
const app = express()
app.use(morgan("dev"))

mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log('Connected!'))
  .catch(err => console.log('Error', err))

app.get('/', (req, res) => {
    res.send('Hello World!')
})


// app.get("/create-user", async (req, res)=>{
//     const user = new User({
//         name: "Lakum",
//         email: "lakumss@me.com",
//         password: "password"
//     })
//     await user.save();
//     res.json(user)
// })


// app.get("/delete-user", async (req, res)=>{
//     const deletedUser = await User.deleteOne({email: "lakumss@me.com"})
//     res.json(deletedUser)
// })


module.exports = app

