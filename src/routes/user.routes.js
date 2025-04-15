import express from 'express';
import { Createuser, deleteuser, getallusers, getuser, updateuser,logoutuser,loginuser, verifyUser } from '../controllers/user.controllers.js';
import { upload } from '../middlewares/multer.middleware.js';

const router = express.Router();

router.post('/create',upload.single('avatar'),Createuser);
router.get('/getall',getallusers);
router.get('/get/:id',getuser);
router.delete('/delete/:id',deleteuser);
router.patch('/update/:id',updateuser);
router.get('/logout',logoutuser);
router.post('/login',loginuser);
router.post('/verify-user/:id', verifyUser);

export default router;