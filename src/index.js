import Post from '@models/Post'
import './styles/styles.css'
import logo from './assets/webpack-logo'

const post = new Post('Post Title', logo)

console.log('post: ', post.toString());