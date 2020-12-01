import React, { useState, useContext } from 'react';
import PostContext from '../../context/post/postContext';

const PostForm = () => {
  const postContext = useContext(PostContext);

  const [post, setPost] = useState({
    title: '',
    content: '',
  });

  const { title, content } = post;

  const onSubmit = (e) => {
    e.preventDefault();
    postContext.addPost(post);
    setPost({
      title: '',
      content: '',
    });
  };

  return (
    <div class="row">
      <form class="col s12" onSubmit={onSubmit}>
        <div class="row">
          <div class="input-field col s12">
            <input
              id="title"
              type="text"
              value={title}
              class="validate"
              onChange={(e) => setPost({ title: e.target.value, content })}
            />
            <label for="title">Title</label>
          </div>
        </div>

        <div class="row">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s12">
                <textarea
                  value={content}
                  onChange={(e) => setPost({ title, content: e.target.value })}
                  id="textarea1"
                  class="materialize-textarea"
                ></textarea>
                <label for="textarea1">Textarea</label>
              </div>
            </div>
          </form>
        </div>

        <button
          class="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Submit
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
};

export default PostForm;
