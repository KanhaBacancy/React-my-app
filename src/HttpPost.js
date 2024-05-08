// write http post request using axios in react
// use axios to make a post request in react

// Path: src/HttpPost.js

import React, { useState } from 'react';
import axios from 'axios';

const HttpPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/posts', { title, body })
      .then(response => {
        console.log(response);
      });
  }

  return (
    <div>
      <h1>HTTP Post Request</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HttpPost;