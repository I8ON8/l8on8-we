import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function CopyPlaceholder() {
  const [copied, setCopied] = useState(false);
  const placeholder = "test";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(placeholder);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-8 inline-flex items-center gap-4 bg-black/30 px-6 py-3 rounded-full backdrop-blur-sm">
      <button
        onClick={handleCopy}
        className="text-gray-400 hover:text-white transition-colors duration-200 flex-shrink-0"
        aria-label="Copy placeholder"
      >
        {copied ? (
          <Check className="w-5 h-5 text-green-500" />
        ) : (
          <Copy className="w-5 h-5" />
        )}
      </button>
      <p className="text-lg text-gray-200 font-cinzel font-semibold tracking-wide select-all">
        {placeholder}
      </p>
    </div>
  );
}