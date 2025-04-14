import mongoose from "mongoose";
import User from "../modules/user.model.js";
import fs from "fs";
import uploadOnCloudinary from "../config/cloudinary.js";
import {hashPassword,verifyPwd} from "../utils/hashPwd.js";
import { hash } from "bcryptjs";
import { generateToken,verifyToken } from "../utils/jwt.js";

const Createuser = async (req, res) => {
    //
    const { name, email, password, mobile, gender, avatar } = req.body
    const mobilenumber = Number(mobile);

    //Check if all parameter are present
    if (!(name && email && password && gender && mobilenumber))
        return res.status(400)
            .json({
                success: false,
                message: "Please enter all the fields"
            })

    if (password.length < 8)
        return res.status(400)
            .json({
                success: false,
                message: "Password should be at least 8 characters long"
            })

    if (!email.match())
        return res.status(400)
            .json({
                success: false,
                message: "Invalid email id"
            })

    const hashedPwd = await hashPassword(password);

    try {
        const existinguser = await User.findOne({ email: email })
        if (existinguser)
            return res.status(400)
                .json({
                    success: false,
                    message: "user with this email already exist"
                })

        const imagePath = req.file.path;
        const imageURL = await uploadOnCloudinary(imagePath);

        if (!imageURL)
            return res.status(400)
                .json({
                    success: false,
                    message: "Failed to upload image"
                })

        fs.unlink(imagePath,(err)=>{
            if(err)
                return res.status(400)
                    .json({
                        success: false,
                        message: "Failed to delete image"
                    })
        })


        const user = new User({
            name: name,
            email: email,
            password: password,
            hashPwd: hashedPwd,
            mobile: mobilenumber,
            gender: gender,
            avatar: imageURL
        })
        await user.save()

        res
            .status(200)
            .json({
                success: true,
                message: "User Created Successfully",
                // user: user
            })
    } catch (error) {
        res
            .status(400)
            .json({
                success: false,
                message: error.message
            })
    }
}

const getallusers = (req, res) => {
    //business logic for getting all users
    try {
        const users = User.find()
        if(!users)
            res.status(400)
                .json({
                    success: false,
                    message: "No users found"
                })
        res.status(200)
        .json({
            success: true,
            message: "Users retieved successfully",
            users: users
        })
    } catch (error) {
        res,status(400)
        .json({
            success: false,
            message: error.message
        })
    }
}

const getuser = (req, res) => {
    //business logic for getting a user
    const {id} = req.params
    try {
        const user = User.findById(id)
        if(!user)
            res.status(400)
                .json({
                    success: false,
                    message: "User not found"
                })
        res.status(200)
            .json({
                success: true,
                message: "User retrieved successfully",
                user: user
            })
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
}

const deleteuser = (req, res) => {
    const {id} = req.params
    try {
        const user = User.findByIdAndDelete(id)
        if(!user)
            res.status(400)
                .json({
                    success: false,
                    message:'No user found'
                })
        res.status(200)
        .json({
            success: true,
            message: "User deleted successfully",
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
}

const updateuser = async (req, res) => {
    const {id} = req.params
    const {name, mobile, bio, DOB} = req.body
    const {path} = req.file

    if(!name && !mobile && !bio && !DOB)
        return res.status(400)
                .json({
                    success: false,
                    message: "No fields to update"
                })
    try {
        const user = User.findById(id)
        if(!user)
            res.status(400)
                .json({
                    success: false,
                    message: "No user found"
                })
        let imageURL
        if(path){
            const imagePath = req.file.path
            imageURL = await uploadOnCloudinary(imagePath)
            if(!imageURL)
                return res.status(400)
                        .json({
                            success: false,
                            message: "Failed to upload image"
                        })
            fs.unlink(imagePath,(err)=>{
                if(err)
                    return res.status(400)
                            .json({
                                success:false,
                                message:"something went wrong"
                            })
            })
        }
        
        // use this when changes are conditional
        // database calls = 2
        // triggers middlewares
        user.name = name || user.name
        user.mobile = mobile || user.mobile
        user.bio = bio || user.bio
        user.DOB = DOB || user.DOB
        user.avatar = req.file.path || user.avatar
        user.save();
        
        // use this when changes are conditional
        // database calls = 1
        // no middleware
        // const updateUser = await User.findByIdAndUpdate(id,{
        //     name: name||user.name
        //     mobile: mobile||user.mobile
        //     bio: bio||user.bio
        //     DOB: DOB||user.DOB
        //     avatar: imageURL||user.avatar
        // })
        // if(!updateUser)
        //     return res.status(400)
        //             .json({
        //                 success: false,
        //                 message: "user not updated"
        //             })
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
}
const logoutuser = (req, res) => {
    //business logic for logging out a user
    res.send("Logout Successfully");
}
const loginuser = async (req, res) => {
    // 1. access token using JWT
    // 2. refresh token using JWT
    // 1. Check for input email, password
    const { email, password } = req.body;
    if(!email || !password)
        res.status(400)
            .json({
                success: false,
                message: "Please enter email and password"
            })
    try {
        // 2. check if user exists
        const user = await User.findOne({ email: email });
        if(!user)
            res.status(400)
                .json({
                    success: false,
                    message: "User does not exist"
                })
        // 3. check if password is correct
        const isPwdCorrect = await verifyPwd(password,user.hashPwd)
        if(!isPwdCorrect)
            res.status(400)
                .json({
                    success: false,
                    message: "Incorrect password"
                })

        const token = await generateToken(email,user.hashPwd)
        if(!token)
            res.status(400).json({
                success:false,
                message:"token generation failed"
            })
        console.log('token =>',token)

        // 4. send response to client
        res.status(200)
            .json({
                success: true,
                message: "Login Successfully",
                user: user
            })
    } catch (error) {
        res.status(400)
            .json({
                success: false,
                message: err.message
            })
    }
    
    
}

export { Createuser, getallusers, getuser, deleteuser, updateuser, logoutuser, loginuser}
