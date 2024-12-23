import React from 'react';
import VideoBackground from './VideoBackground';
import FeaturedVideo from './FeaturedVideo';
import CountdownTimer from './CountdownTimer';
import SocialLinks from './SocialLinks';

export default function Gallery() {
  return (
    <div className="h-[300vh] bg-neutral-950 font-cinzel overflow-hidden">
      {/* Hero Section */}
      <section className="h-screen w-full relative flex items-center justify-center">
        <VideoBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 to-neutral-950" />
        <div className="relative z-10 text-center px-4">
          <img 
            src="https://res.cloudinary.com/djlqus5dk/image/upload/v1734913884/l8on8_banner_animated_1_n0gel4.gif"
            alt="Real Life Art"
            className="w-[1200px] mx-auto"
          />
          <SocialLinks />
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="h-screen w-full relative flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="fluid-glow"></div>
        </div>
        <FeaturedVideo />
      </section>

      {/* Volume II Countdown Section */}
      <section className="h-screen w-full relative flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="fluid-glow"></div>
        </div>
        <div className="relative z-10">
          <CountdownTimer />
        </div>
      </section>
    </div>
  );
}