import express from 'express';
import { DeleteMessage, getAllMessage, getMessage, ReadMessage, sendMessage, UnsendMessage } from '../controllers/message.controllers.js';

const router = express.Router()

router.get('/send',sendMessage)
router.get('/unsend',UnsendMessage)
router.get('/getAll',getAllMessage)
router.get('/get/:id',getMessage)
router.get('/read/:id',ReadMessage)
router.delete('/delete/:id',DeleteMessage)

export default router;