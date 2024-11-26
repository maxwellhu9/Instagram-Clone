import React from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, post }) {
  if (!isOpen) return null; // Do not render if modal is closed

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={post.image} alt="Post" className="modal-image" />
        <div className="modal-info">
          <p>❤️ {post.likes} Likes</p>
          <p>💬 {post.comments} Comments</p>
        </div>
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;