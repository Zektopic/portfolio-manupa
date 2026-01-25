import React from 'react';

export const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 px-4 py-2 bg-background text-foreground border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ring-offset-background"
    >
      Skip to content
    </a>
  );
};
