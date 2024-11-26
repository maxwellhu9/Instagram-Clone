import React from 'react';
import './Post.css';

function Post({ image, likes, comments, onClick }) {
  return (
    <div className="post" onClick={onClick}>
      <div className="post-image-wrapper">
        <img src={image} alt="Post" className="post-image" />
        <div className="post-overlay">
          <p>❤️ {likes} Likes</p>
          <p>💬 {comments} Comments</p>
        </div>
      </div>
    </div>
  );
}

export default Post;