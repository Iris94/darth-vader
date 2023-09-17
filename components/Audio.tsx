import React, { useEffect } from 'react';

interface AudioProps {
  src: string;
}

const Audio: React.FC<AudioProps> = ({ src }) => {
  useEffect(() => {
    const audioElement = document.createElement('audio'); // Create an audio element

    audioElement.src = src; // Set the source URL

    audioElement.play().catch((error) => {
      // Handle any play errors
      console.error('Error playing audio:', error);
    });

    return () => {
      // Cleanup or stop the audio when the component unmounts
      audioElement.pause();
      audioElement.currentTime = 0;
    };
  }, [src]);

  return (
    <audio controls className='transparent'>
      <source src={src} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default Audio;
