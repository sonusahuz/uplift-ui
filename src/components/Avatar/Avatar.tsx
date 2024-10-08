import React from 'react';
import './Avatar.css'; // Import the CSS file

type AvatarProps = {
  images?: { src: string; alt: string }[]; // Optional array of images
  src?: string; // Single image source
  alt?: string; // Alt text for the image
  variant?: 'default' | 'circle' | 'square' | 'outline' | string; // Variant options
  size?: 'default' | 'small' | 'medium' | 'large' | string; // Size options
};

const Avatar: React.FC<AvatarProps> = ({
  images = [], // Default to an empty array
  src,
  alt,
  variant = 'default',
  size = 'default',
}) => {
  const avatarClasses = `avatar ${variant} ${size}`;

  return (
    <div
      className={
        variant === 'circle' ? 'avatar-circles-container' : avatarClasses
      }
    >
      {images.length > 0 ? (
        images.map((image, index) => (
          <div className={`${avatarClasses} avatar-circles-image`} key={index}>
            <img src={image.src} alt={image.alt} className="avatar-image" />
          </div>
        ))
      ) : (
        <div className={avatarClasses}>
          {src ? (
            <img src={src} alt={alt} className="avatar-image" />
          ) : (
            <span>{alt?.charAt(0).toUpperCase()}</span>
          )}
        </div>
      )}
    </div>
  );
};

export default Avatar;
