import express from 'express';

const router = express.Router();

router.post('api/v1/user/create',(req,res)=>{
    //business logic of creating
})
router.get('api/v1/user/getall',(req,res)=>{
    //business logic of getting all users
})
router.get('api/v1/user/get/:id',(req,res)=>{
    //business logic of getting user by id
})
router.delete('api/v1/user/delete/:id',(req,res)=>{
    //business logic of deleting user by id
})
router.put('api/v1/user/update/:id',(req,res)=>{
    //business logic of updating user by id
})

export default router;