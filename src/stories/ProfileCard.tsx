import React from 'react';
import './ProfileCard.css'; // We'll create this next for pixel-perfect styling

// 1. Define the TypeScript contract for our data
export interface ProfileCardProps {
  name: string;
  role: string;
  avatarUrl: string;
  isOnline?: boolean; // The '?' means this property is optional
  onMessageClick?: () => void; // A function type for handling clicks
}

// 2. Build the Component
export const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  avatarUrl,
  isOnline = false,
  onMessageClick,
}) => {
  return (
    <div className="profile-card">
      <div className="avatar-container">
        <img src={avatarUrl} alt={`${name}'s avatar`} className="avatar-img" />
        {/* If isOnline is true, render the green status badge */}
        {isOnline && <span className="status-badge" aria-label="Online" />}
      </div>
      
      <div className="profile-info">
        <h3 className="profile-name">{name}</h3>
        <p className="profile-role">{role}</p>
      </div>

      <button className="message-btn" onClick={onMessageClick}>
        Message
      </button>
    </div>
  );
};
