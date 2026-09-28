import express from "express";
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import userRouter from "./routes/users.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/users', userRouter);

app.listen(PORT, () => {
    console.log(`Server running in ${PORT}`);    
})