import React, {useEffect, useState} from 'react'
import Post from './Post';
import PropTypes from 'prop-types';


const Posts = ({posts, users}) => posts.map(p => <Post post={p} user={users[p.userId]} key={p.id}/>);

Posts.defaultProps = {
    posts: [],
    users: {}
};

Posts.propTypes = {
    posts: PropTypes.array,
    users: PropTypes.object
};

export default Posts