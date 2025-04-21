const verifyRole = (...role) => {
    return (req,res,next) => {
        if(!role.includes(req.user.role)){
            return res.status(403).json({
                success:false,
                message:"You are not authorized to perform this action"
            })
        }
        next()
    }
}

export default verifyRole