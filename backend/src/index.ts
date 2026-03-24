import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

// import connectDB from "./db.js";
// import { User } from "./user.model.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO!)

    console.log("MongoDB Connected:", conn.connection.host)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

export default connectDB

const app = express()

// import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
})

export const User = mongoose.model("User", userSchema)

const start = async () => {
  await connectDB()

  const user = await User.create({
    name: "Dhananjay",
    email: "dj@example.com",
  })

  console.log(user)
}

start()

app.listen(3000, () => {
  console.log(`Server listening at port : http://localhost:${3000}`)
})
