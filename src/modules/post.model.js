import {Schema,model} from "mongoose";
const postSchema = new Schema({
    postCaption:{
        type:String,
    },
    postImage:{
        type:String,
        required:true,
    },
    postBy:{
        type:mongoose.Schema.Types
    }
},{timestamps:true
})

const Post = model('Post',postSchema);
export default Post;