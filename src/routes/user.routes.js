import express from 'express';
import { Createuser, deleteuser, getallusers, getuser, updateuser,logoutuser,loginuser, verifyUser, refreshAccessToken } from '../controllers/user.controllers.js';
import { upload } from '../middlewares/multer.middleware.js';
import { verifyToken } from '../utils/jwt.js';

const router = express.Router();

router.post('/create',upload.single('avatar'),Createuser);
router.get('/getall',getallusers);
router.get('/get/:id',getuser);
router.delete('/delete/:id',verifyToken,deleteuser);
router.patch('/update/:id',verifyToken,updateuser);
router.get('/logout',logoutuser);
router.post('/login',loginuser);
router.post('/verify-user/:id',verifyToken, verifyUser);

router.post('/refresh-access-token',refreshAccessToken);


export default router;