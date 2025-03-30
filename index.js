import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import userRoutes from './src/routes/user.routes.js';
import postRoutes from './src/routes/post.routes.js';
import messageRoutes from './src/routes/message.routes.js';
dotenv.config()

//ititialization
const app = express()

//database connection
connectDB();

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes
app.use('/api/v1/users', userRoutes)
app.use('api/v1/post',postRoutes)
app.use('api/v1/message',messageRoutes)


//start the server
const port = process.env.PORT || 4001
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})