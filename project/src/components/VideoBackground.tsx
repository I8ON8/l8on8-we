import React from 'react';

export default function VideoBackground() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="https://res.cloudinary.com/djlqus5dk/video/upload/v1734911287/l8bg_maqh62.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}