const Createuser = (req,res)=>{
    //business logic for creating a user account
    res.send("User created Successfully");
}

const getallusers = (req,res)=>{
    //business logic for getting all users
    res.send("getall Successfully");
}

const getuser =(req,res)=>{
    //business logic for getting a user
    res.send("get Successfully");
}

const deleteuser = (req,res)=>{
    //business logic for deleting a user
    res.send("deleted Successfully");
}

const updateuser = (req,res)=>{
    //business logic for updating a user
    res.send("Updated Successfully");
}
const logoutuser = (req,res)=>{
    //business logic for logging out a user
    res.send("Logout Successfully");
}

export {Createuser,getallusers,getuser,deleteuser,updateuser,logoutuser}
