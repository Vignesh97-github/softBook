import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()

const generateAccessToken = async (email, password) => {
    try {
        const token = jwt.sign(
            {
                email: email,
                password: password
            },
            process.env.JWT_ACCESS_SECRET_KEY,
            {
                expiresIn: process.env.JWT_ACCESS_EXPIRES_IN
            }
        )
        return token
    } catch (error) {
        return null
    }
}
const generateRefreshToken = async (email, password) => {
    try {
        const token = jwt.sign(
            {
                email: email,
                password: password
            },
            process.env.JWT_REFRESH_SECRET_KEY,
            {
                expiresIn: process.env.JWT_REFRESH_EXPIRES_IN
            }
        )
        return token
    } catch (error) {
        return null
    }
}
const verifyToken = async (req,res,next) => {
    const token = req.headers.authorization.split(' ')[1]
    if(!token)
        res.status(401)
            .json({
                success:false,
                message:'Unauthorized'
            })
    const decoded = jwt.verify('token',process.env.JWT_ACCESS_SECRET_KEY)
    req.user = decoded
    next()
}

export { generateAccessToken,generateRefreshToken, verifyToken };