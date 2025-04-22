import mongoose, { Schema, model } from "mongoose";
const postSchema = new Schema({
    postCaption: {
        type: String,
    },
    postImage: {
        type: String,
        required: true,
    },
    postBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", 
    }
}, 
{
    timestamps: true
}
)

const Post = model('Post', postSchema);
export default Post;