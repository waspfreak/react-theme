import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import ImgReducer from './reducer_img';


const rootReducer = combineReducers({
  posts: PostsReducer,
  postImg: ImgReducer
});

export default rootReducer;
