import React, { useState } from 'react';
import './Profile.css';

function Profile() {
  const [followers, setFollowers] = useState(520); // Initial follower count
  const [isFollowing, setIsFollowing] = useState(false); // Track follow state

  const handleFollowClick = () => {
    if (isFollowing) {
      // If already following, unfollow
      setFollowers(followers - 1);
    } else {
      // If not following, follow
      setFollowers(followers + 1);
    }
    setIsFollowing(!isFollowing); // Toggle follow state
  };

  return (
    <div className="profile">
      <img
        src="/images/Max.jpeg"
        alt="Profile"
        className="profile-picture"
      />
      <h2>Maxwell Hu</h2>
      <p>Bio: unc 28'</p>
      <p>Followers: {followers}</p>
      <button onClick={handleFollowClick} className="follow-button">
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  );
}

export default Profile;