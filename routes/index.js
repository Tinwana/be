import postRouter from './post.js'


export default function route (app) {
    app.use('/api/posts', postRouter)
}