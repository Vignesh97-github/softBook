import express from 'express';
import { Createuser, deleteuser, getallusers, getuser, updateuser,logoutuser } from '../controllers/user.controllers.js';

const router = express.Router();

router.post('/create',Createuser);
router.get('/getall',getallusers);
router.get('/get/:id',getuser);
router.delete('/delete/:id',deleteuser);
router.put('/update/:id',updateuser);
router.get('/logout',logoutuser);

export default router;