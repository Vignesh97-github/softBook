import {Schema,model} from "mongoose";
const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String, // data type of the value
        required: true, //value is compulsory
        //unique: true, // value should be unique / no two users can have the same email
        trim:true
    },
    password:{
        type:String,
        required:'true',
        minlength:8
    },
    isVerified:{
        type:'Boolean',
        default:false // default value of the field
    },
    mobile:{
        type:'number',
        required:true,
        unique:true,
        maxlength:10
    },
    gender:{
        required:true,
        type:String,
        enum: ['male', 'female', 'other'] //accepts only these values
    },
    bio:{
        type:String,
        maxlength:200,
        trim:true
    },
    avatar:String,
    DOB:'date'
})

const User = model('User',userSchema);
export default User;