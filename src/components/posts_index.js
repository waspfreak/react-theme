import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/post';
import _ from 'lodash';

class PostsIndex extends Component{

  componentDidMount() {
    //[fetchPosts] function we call inside the component come from ../actions/index function for get date
    this.props.fetchPosts()
  }

  renderPosts(){
    return _.map(this.props.posts, post =>{
      return(
        <li key={post.id}>{post.title} </li>
      );
    });
  }

  render(){
      //console.log(this.props.posts);
    return(
      <div>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { posts: state.posts};
}

export default connect(mapStateToProps, {fetchPosts}) (PostsIndex);
