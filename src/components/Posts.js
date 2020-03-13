import React, { Component } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map(post => (    
      <div key={post.id}>
        <Card>
            <CardContent>
                <Typography>
                <h3>{post.title}</h3>                
                </Typography >
                <Typography color="textSecondary">
                <p>{post.body}</p>        
                </Typography>
            </CardContent>            
        </Card>
        <br />
      </div>
        
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);