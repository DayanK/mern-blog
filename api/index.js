import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv"
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

const PORT = 3005;


dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log("Error DB", err);
  });

const app = express();
app.use(express.json());



app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}!`);
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false, 
        statusCode: statusCode, 
        message: message
    });
})


