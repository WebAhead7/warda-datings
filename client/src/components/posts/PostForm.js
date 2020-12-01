import React, { useState } from 'react';

const PostForm = () => {
  const [post, setPost] = useState({
    title: '',
    content: '',
  });
  return (
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input id="title" type="text" class="validate" />
            <label for="title">Title</label>
          </div>
        </div>

        <div class="row">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s12">
                <textarea
                  id="textarea1"
                  class="materialize-textarea"
                ></textarea>
                <label for="textarea1">Textarea</label>
              </div>
            </div>
          </form>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
