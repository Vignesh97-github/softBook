import express from 'express';
import { Createuser, deleteuser, getallusers, getuser, updateuser,logoutuser,loginuser, verifyUser, refreshAccessToken } from '../controllers/user.controllers.js';
import { upload } from '../middlewares/multer.middleware.js';
import { verifyToken } from '../utils/jwt.js';
import verifyRole from '../middlewares/checkRole.middleware.js';
import { authRateLimit } from '../middlewares/rateLimit.js';

const router = express.Router();

router.post('/create',authRateLimit,upload.single('avatar'),Createuser);
router.get('/getall',verifyToken,verifyRole('admin','moderator'),getallusers);
router.get('/get/:id',verifyToken,verifyRole('admin','moderator','user'),getuser);
router.delete('/delete/:id',verifyToken,verifyRole('admin','moderator','user'),deleteuser);
router.patch('/update/:id',verifyToken,verifyRole('admin','moderator','user'),updateuser);
router.get('/logout',logoutuser);
router.post('/login',authRateLimit,loginuser);
router.post('/verify-user/:id',verifyToken,verifyRole('admin','moderator'), verifyUser);

router.post('/refresh-access-token',refreshAccessToken);


export default router;