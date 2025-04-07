import mongoose from "mongoose";
import User from "../modules/user.model.js";
import uploadOnCloudinary from "../config/cloudinary.js";
import hashPassword from "../utils/hashPwd.js";
import { hash } from "bcryptjs";

const Createuser = async (req, res) => {
    //business logic for creating a user account
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

        let imagePath = req.file.path;
        const imageURL = await uploadOnCloudinary(imagePath);

        if (!imageURL)
            return res.status(400)
                .json({
                    success: false,
                    message: "Failed to upload image"
                })


        // const user = new User({
        //     name: name,
        //     email: email,
        //     password: password,
        //     hashPwd: hashedPwd,
        //     mobile: mobilenumber,
        //     gender: gender,
        //     avatar: imageURL
        // })
        // user.save()
       
        // res
        //     .status(200)
        //     .json({
        //         success: true,
        //         message: "User Created Successfully",
        //         user: user
        //     })
    } catch (error) {
        res
            .status(400)
            .json({
                success: false,
                message: error
            })
    }
}

const getallusers = (req, res) => {
    //business logic for getting all users
    res.send("getall Successfully");
}

const getuser = (req, res) => {
    //business logic for getting a user
    res.send("get Successfully");
}

const deleteuser = (req, res) => {
    //business logic for deleting a user
    res.send("deleted Successfully");
}

const updateuser = (req, res) => {
    //business logic for updating a user
    res.send("Updated Successfully");
}
const logoutuser = (req, res) => {
    //business logic for logging out a user
    res.send("Logout Successfully");
}

export { Createuser, getallusers, getuser, deleteuser, updateuser, logoutuser }
