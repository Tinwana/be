import express from 'express'
import postController from '../controllers/postController.js'


const postRouter = express.Router()

postRouter.get('/', postController.getPost)
postRouter.post('/create', postController.createPost)
postRouter.post('/update', postController.updatePost)







export default postRouter