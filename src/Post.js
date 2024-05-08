
// import React, { Component } from 'react';
// import axios from 'axios';

// class Post extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       posts: []
//     };
//   }

//   componentDidMount() {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then(response => {
//         this.setState({ posts: response.data });
//       });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Posts</h1>
//         <ul>{this.state.posts.slice(0, 3).map(post => <li key={post.id}>{post.title}</li>)}
//         </ul>
//       </div>
//     );
//   }
// }



// export default Post;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      });
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>{posts.slice(0, 3).map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
}

export default Post;