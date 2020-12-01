import React, { Fragment } from 'react';

const Post = ({ post }) => {
  return (
    <Fragment>
      <div class="row" style={{ display: 'flex', alignItems: 'center' }}>
        <div class="col s12 m6" style={{ margin: '0 auto' }}>
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">{post.title}</span>
              <p>{post.content}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Post;
