const createPost =(req,res)=>{
    res.send("Created Post Successfully");
}
const getPost = (req,res)=>{
    res.send("Get Post Successfully");
}
const getAllPost = (req,res)=>{
    res.send("GetAll Post Successfully");
}
const updatePost = (req,res)=> {
    res.send("Updated Post Successfully");
}
const deletePost = (req,res)=>{
   res.send("Deleted Post Successfully"); 
}

export {createPost,getAllPost,getPost,updatePost,deletePost}