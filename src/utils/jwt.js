import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()

const generateToken = async (email, password) => {
    try {
        const token = jwt.sign(
            {
                email: email,
                password: password
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        )
        return token
    } catch (error) {
        return null
    }
}

const verifyToken = async (req,res,next) => {
    const token = req.headers.authorization.split(' ')[1]
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        return decoded
    } catch (error) {
        return false
    }
}

export { generateToken, verifyToken };