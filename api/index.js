import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv"
import userRoutes from './routes/user.route.js';



dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log("Error DB", err);
  });

const app = express();
const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}!`);
});

app.use('/api/user', userRoutes);

