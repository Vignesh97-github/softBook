import express from 'express';

const router = express.Router();

router.post('/create',(req,res)=>{
    //business logic of creating
})
router.get('/getall',(req,res)=>{
    //business logic of getting all users
})
router.get('/get/:id',(req,res)=>{
    //business logic of getting user by id
})
router.delete('/delete/:id',(req,res)=>{
    //business logic of deleting user by id
})
router.put('/update/:id',(req,res)=>{
    //business logic of updating user by id
})

export default router;