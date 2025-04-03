import mongoose from "mongoose";
import User from "../modules/user.model.js";
import hashPassword from "../utils/hashPwd.js";

const Createuser = async (req,res)=>{
    //business logic for creating a user account
    const {name,email,password,mobile,gender} = req.body

    //Check if all parameter are present
    if(!(name && email && password && gender))
        return res.status(400)
                  .json({
                    success:false,
                    message:"Please enter all the fields"
                  })
    
    if(password.length < 8)
        return res.status(400)
                .json({
                    success:false,
                    message:"Password should be at least 8 characters long"
                })

    if(!email.match())
        return res.status(400)
                .json({
                    success:false,
                    message:"Invalid email id"
                })

    try {
        const existinguser = await User.findOne({email:email})
        if(existinguser)
            return res.status(400)
                .json({
                    success:false,
                    message:"user with this email already exist"
                }) 

        



        const user = new User({
            name:name,
            email:email,
            password:password,
            mobile:mobile,
            gender:gender
        })
        user.save()
        res
            .status(200)
            .json({
                success:true,
                message:"User Created Successfully",
                user:user
            })
    } catch (error) {
        res
            .status(400)
            .json({
                success:false,
                message:error
            })
    }
}

const getallusers = (req,res)=>{
    //business logic for getting all users
    res.send("getall Successfully");
}

const getuser =(req,res)=>{
    //business logic for getting a user
    res.send("get Successfully");
}

const deleteuser = (req,res)=>{
    //business logic for deleting a user
    res.send("deleted Successfully");
}

const updateuser = (req,res)=>{
    //business logic for updating a user
    res.send("Updated Successfully");
}
const logoutuser = (req,res)=>{
    //business logic for logging out a user
    res.send("Logout Successfully");
}

export {Createuser,getallusers,getuser,deleteuser,updateuser,logoutuser}
