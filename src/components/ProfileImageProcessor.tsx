
import { useState, useEffect } from 'react';
import { removeBackground, loadImage } from '../utils/backgroundRemoval';

interface ProfileImageProcessorProps {
  originalImageSrc: string;
  alt: string;
  className?: string;
}

const ProfileImageProcessor = ({ originalImageSrc, alt, className }: ProfileImageProcessorProps) => {
  const [processedImageSrc, setProcessedImageSrc] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const processImage = async () => {
      try {
        setIsProcessing(true);
        setError('');
        
        // Fetch the original image
        const response = await fetch(originalImageSrc);
        const blob = await response.blob();
        
        // Load image
        const imageElement = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(imageElement);
        
        // Create URL for processed image
        const processedUrl = URL.createObjectURL(processedBlob);
        setProcessedImageSrc(processedUrl);
        
      } catch (err) {
        console.error('Failed to process image:', err);
        setError('Failed to process image');
        // Fallback to original image
        setProcessedImageSrc(originalImageSrc);
      } finally {
        setIsProcessing(false);
      }
    };

    processImage();
    
    // Cleanup function to revoke object URLs
    return () => {
      if (processedImageSrc && processedImageSrc.startsWith('blob:')) {
        URL.revokeObjectURL(processedImageSrc);
      }
    };
  }, [originalImageSrc]);

  if (isProcessing) {
    return (
      <div className={`${className} flex items-center justify-center bg-gray-100 rounded-2xl`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Processing image...</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={processedImageSrc || originalImageSrc}
      alt={alt}
      className={className}
    />
  );
};

export default ProfileImageProcessor;
