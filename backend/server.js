import express from "express";
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import userRouter from "./routes/users.js";
import cors from 'cors';

dotenv.config();
console.log("FRONTEND_URI from env:", process.env.FRONTEND_URI);
connectDB();

const app = express();
const PORT = process.env.PORT;
const allowedOrigins = [process.env.FRONTEND_URI]


app.use(cors({
    origin: allowedOrigins,
    credentials: true
}))
app.use(express.json());
app.use('/users', userRouter);

app.listen(PORT, () => {
    console.log(`Server running in ${PORT}`);    
})