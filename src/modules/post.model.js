import {Schema,model} from "mongoose";
const postSchema = new Schema({
    postCaption:{
        type:String,
    },
    postimage:{
        type:String,
        required:true,
    },
    postvideos:{
        type:String
    }
})

const Post = model('Post',postSchema);
export default Post;