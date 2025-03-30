import exprees from "express";
import { createPost,getAllPost,getPost,deletePost,updatePost } from "../controllers/post.controllers.js";

const router = exprees.Router();

router.post('/create',createPost)
router.get('/get/:id',getPost)
router.get('/getall',getAllPost)
router.put('/update/:id',updatePost)
router.delete('/delete/:id',deletePost)

export default router;