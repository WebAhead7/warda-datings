import React, { useReducer } from 'react';
import uuid from 'uuid';
import PostContext from './postContext';
import postReducer from './postReducer';

import { ADD_POST, DELETE_POST, UPDATE_POST } from '../types';

const PostState = (props) => {
  const initialState = {
    posts: [
      { title: 'hey', content: 'hello' },
      { title: 'hey2', content: 'hello' },
      { title: 'hey3', content: 'hello' },
    ],
  };

  const [state, dispatch] = useReducer(postReducer, initialState);

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
