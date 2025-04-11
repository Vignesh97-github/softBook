import uploadOnCloudinary from "../config/cloudinary.js";
import Post from "../modules/post.model.js";

const createPost = async (req,res)=>{
    const {postcaption} = req.body;
    if(!postcaption && !postImage)
        res.status(400)
            .json({
                success:false,
                message:"Please provide post caption and image"
            })
    try {
        let postImage = ""
        if(req.file){
            let imagePath = req.file.path
            postImage = await uploadOnCloudinary(imagePath)
            if(!postImage)
                return res.status(400).json({
                    success:false,
                    message:"Failed to upload image on cloudinary"
                })
        }

        const post = await Post.create({
            postcaption:postcaption.trim(),
            postImage,
            postBy:req.user._id
        })

        res.status(200).json({
            success:true,
            message:"Post created successfully",
            post:post
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
}
const getPost = (req,res)=>{
    const {id} = req.params
    try {
        const post = Post.findById(id)
        if(!post)
            return res.status(400).json({
                success:false,
                message:"Post not found"
            })
        res.status(200).json({
            success:true,
            message:"post retrived successfully",
            post:post
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
}
const getAllPost = async (req,res)=>{
    const user = req.user._id
    const {page = 1} = req.query
    const skip = (page - 1) * 10
    const limit = 10
    try {
        const posts = await Post
            .find({postBy: user})
            .sort({createdAt: -1})
            .skip(skip)
            .limit(limit)
        if(!posts)
            return res.status(400).json({
                success:false,
                message:"No posts found"
            })
        res.status(200).json({
            success:true,
            message:"Posts retrived successfully",
            posts:posts
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
}
const updatePost = (req,res)=> {
    res.send("Updated Post Successfully");
}
const deletePost = (req,res)=>{
    const {id} = req.params
    try {
        const post = Post.findByIdAndDelete(id)
        if(!post)
            res.status(400)
                .json({
                    success: false,
                    message:'No user found'
                })
        res.status(200)
        .json({
            success: true,
            message: "Post deleted successfully",
            post: post
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
}

export {createPost,getAllPost,getPost,updatePost,deletePost}