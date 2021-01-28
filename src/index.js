import Post from './models/Post'
import './styles/styles.css'
import logo from './assets/webpack-logo.png'

const post = new Post('Post Title', logo)

console.log('post: ', post.toString());