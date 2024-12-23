import React, { useState, useRef } from 'react';
import VideoOverlay from './VideoOverlay';

export default function FeaturedVideo() {
  const [isRevealed, setIsRevealed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleReveal = () => {
    setIsRevealed(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setIsRevealed(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div 
        className="relative aspect-video rounded-lg overflow-hidden shadow-2xl z-10"
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          playsInline
          controlsList="nodownload nofullscreen noremoteplayback"
        >
          <source src="https://res.cloudinary.com/djlqus5dk/video/upload/v1734914875/l8on8_banner_animated_1_pltunu.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <VideoOverlay onReveal={handleReveal} isRevealed={isRevealed} />
      </div>
    </div>
  );
}