import Post from './models/Post'
import './styles/styles.css'

const post = new Post('Webpack Title')

console.log('post: ', post.toString());