import bcrypt from "bcryptjs";


const hashPassword = async (inputPassword) => {
    
    const saltrounds = 10

    try {
        let hashedPassword = await bcrypt.hash(
            inputPassword, saltrounds
        );
        return hashedPassword;
    } catch (error) {
        return error;
    }

    // bcrypt.hash(inputPassword,saltrounds,(err,hash)=>{
    //     if(err) console.log(err);
    //     console.log('hashed password',hash);
    // });
}

const verifyPwd = async (inputPassword,hashedPassword) => {
    try {
        const isMatch = await bcrypt.compare(inputPassword,hashedPassword)
        return isMatch;
    } catch (error) {
        console.log('error', error)
        return false;
    }
}

export {hashPassword, verifyPwd};