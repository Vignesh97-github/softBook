import express from 'express';
import dotenv from 'dotenv';
import multer from 'multer';
// import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import connectDB from './src/config/db.js';
import userRoutes from './src/routes/user.routes.js';
import postRoutes from './src/routes/post.routes.js';
import messageRoutes from './src/routes/message.routes.js';
dotenv.config();

//ititialization
const app = express();

//database connection
connectDB();

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser());


//routes
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/posts',postRoutes)
app.use('/api/v1/messages',messageRoutes)


//start the server
const port = process.env.PORT || 4001
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})