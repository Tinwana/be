import { postSchema } from "../model/postModel.js"

class postController {
    
    async getPost(req , res , next) {
        try {
            const posts = await postSchema.findOne();
            res.status(200).json(posts);

        } catch (err) {
            res.status(500).json({error: err})
        }
    }
    createPost(req , res , next) {
        try {
            const newPost =  req.body;
            const posts = new postSchema(newPost);
            posts.save();
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({error: error})
        }
    }
    async updatePost(req , res , next) {
        try {
            const updatePost =  req.body;
            const posts = await postSchema.findOneAndUpdate({_id : updatePost._id},updatePost,{new:true});
            posts.save();
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({error: error})
        }
    }

}

export default new postController