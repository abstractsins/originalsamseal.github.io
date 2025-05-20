'use client';

import { useEffect } from 'react';

const imageUrls = [
  "/sammy.png",
  "/bandit.png",
  "/reese.png",
  "/mothman.png",
];

export default function ImagePreloader() {
  useEffect(() => {
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  return null;
}
