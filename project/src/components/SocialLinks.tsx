import React from 'react';

export default function SocialLinks() {
  return (
    <div className="mt-12">
      <a 
        href="https://x.com/l8on8" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
      >
        <svg 
          viewBox="0 0 24 24" 
          className="w-12 h-12" 
          aria-hidden="true"
        >
          <path 
            fill="currentColor" 
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
          />
        </svg>
      </a>
    </div>
  );
}