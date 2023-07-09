import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title:{ type: String, required: true},
    content:{ type: String, required: true},
    author:{ type: String, required: true},
    attachment:{ type: String},
    likeCount:{ type: Number, default: 0}

},{timestamps:true});

export const postSchema = mongoose.model('Post',Schema)