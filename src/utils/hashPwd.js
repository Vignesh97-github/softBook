import bcrypt from "bcryptjs";


const hashPassword = (inputPassword) => {
    
    const saltrounds = 10
    bcrypt.hash(inputPassword,saltrounds,(err,hash)=>{
        if(err) console.log(err);
        console.log('hashed password',hash);
    });
}

export default hashPassword;