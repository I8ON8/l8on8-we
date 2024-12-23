import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

type CopyTextProps = {
  text: string;
};

export default function CopyText({ text }: CopyTextProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <button
        onClick={handleCopy}
        className="text-gray-400 hover:text-white transition-colors duration-200"
        aria-label="Copy text"
      >
        {copied ? (
          <Check className="w-5 h-5 text-green-500" />
        ) : (
          <Copy className="w-5 h-5" />
        )}
      </button>
      <p className="text-lg text-gray-200 font-cinzel font-semibold tracking-wide">
        {text}
      </p>
    </div>
  );
}