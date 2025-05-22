import React from 'react';

interface PlaceholderImageProps {
  width: number;
  height: number;
  text?: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
  alt?: string;
  isRounded?: boolean;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  width,
  height,
  text = '',
  bgColor = '0ea5e9', // Color primario del tema
  textColor = 'FFFFFF',
  className = '',
  alt = 'Placeholder Image',
  isRounded = false,
}) => {
  // Generar URL de placeholder
  const placeholderUrl = `https://placehold.co/${width}x${height}/${bgColor}/${textColor}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
  
  return (
    <img 
      src={placeholderUrl}
      alt={alt}
      width={width}
      height={height}
      className={`${className} ${isRounded ? 'rounded-full' : ''}`}
    />
  );
};

export default PlaceholderImage;
