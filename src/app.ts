import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

//starting express app
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

//start our server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});