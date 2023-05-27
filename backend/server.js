import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import authRouter from './routes/auth.js'
import pollRouter from './routes/poll.js'
import userRouter from './routes/user.js'

dotenv.config();

const app = new express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Serverin jeevanund..."));

mongoose.connect(process.env.MONGO_URI);

const connection = mongoose.connection;



connection.once("open", () => {
    console.log("MongoDB connection established successfully");
  });

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/polls", pollRouter);


app.listen(process.env.PORT, () =>
  console.log(`Server is running at ${process.env.PORT}.....`)
);