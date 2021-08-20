import React from 'react';
import Post from './post/post';
import { Grid, CircularProgress } from '@material-ui/core';
import useStyles from './styles';
import { useSelector } from 'react-redux';

const Posts = () => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);
    console.log(posts);
    return(
      <>
        <h1>post</h1>
        <Post></Post>
      </>
    );

};

export default Posts;
