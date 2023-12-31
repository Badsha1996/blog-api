import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
    blogId : {type: Number, required : true},
    title : { type: String, required : true},
    desc : {type: String, required : true},
    img : {type:String, default : ""},
    authorid: {type:String, required : true},
    rating:{type:Number, required : true}
}, {
    timestamps : true
});

export default mongoose.model("Blog",blogSchema)

