import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Profile from './Profile'; // Import the Profile component
import Post from './Post';
import Modal from './Modal';
import Footer from './Footer';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    { id: 1, image: "/images/Post1.jpeg", likes: 403, comments: 57 },
    { id: 2, image: "/images/Post2.jpeg", likes: 397, comments: 50 },
    { id: 3, image: "/images/Post3.jpeg", likes: 491, comments: 62 },
  ];

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <div className="App">
      {/* Add the Navbar */}
      <Navbar />

      {/* Add the Profile component */}
      <Profile />

      {/* Posts Section */}
      <div className="post-section">
        {posts.map((post) => (
          <Post
            key={post.id}
            image={post.image}
            likes={post.likes}
            comments={post.comments}
            onClick={() => handlePostClick(post)}
          />
        ))}
      </div>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} post={selectedPost} />
      
      {/* Add the Footer */}
      <Footer />
    </div>

  );
  
}

export default App;