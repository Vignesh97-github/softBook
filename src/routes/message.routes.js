import express from 'express';
import { DeleteMessage, getAllMessage, getMessage, ReadMessage, sendMessage, UnsendMessage } from '../controllers/message.controllers';

const router = express.Routes()

router.get('/send',sendMessage)
router.get('/unsend',UnsendMessage)
router.get('/getAll',getAllMessage)
router.get('/get/:id',getMessage)
router.get('/read/:id',ReadMessage)
router.get('/delete/:id',DeleteMessage)

export default router;