import { useState, useEffect, useMemo } from 'react';
import { cn } from '@/lib/utils'; // Assuming you have shadcn/ui utils
import { Loader2 } from 'lucide-react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  cacheKey?: string;
  retries?: number;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  cacheKey,
  className,
  retries = 2,
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  // Convert URL if needed
  const processedSrc = useMemo(() => {
    try {
      const url = new URL(src);
      // Handle freepik URLs
      if (url.hostname.includes('freepik.com')) {
        return `/api-images${url.pathname}${url.search}`;
      }
      // Handle other external domains if needed
      return src;
    } catch {
      // If not a valid URL, return as is
      return src;
    }
  }, [src]);

  useEffect(() => {
    let isMounted = true;
    let objectUrl = '';

    const loadImage = async () => {
      try {
        if (cacheKey) {
          const cache = await caches.open('image-cache');
          const cachedResponse = await cache.match(processedSrc);

          if (cachedResponse && isMounted) {
            const blob = await cachedResponse.blob();
            objectUrl = URL.createObjectURL(blob);
            setImageSrc(objectUrl);
            setLoading(false);
            return;
          }
        }

        const response = await fetch(processedSrc, {
          mode: 'cors',
          headers: {
            Accept: 'image/*',
          },
        });

        if (!response.ok) throw new Error('Failed to fetch image');

        const blob = await response.blob();

        if (cacheKey) {
          const cache = await caches.open('image-cache');
          await cache.put(processedSrc, new Response(blob));
        }

        if (isMounted) {
          objectUrl = URL.createObjectURL(blob);
          setImageSrc(objectUrl);
          setLoading(false);
        }
      } catch (err) {
        console.error('Image loading error:', err);
        if (isMounted) {
          if (retryCount < retries) {
            setRetryCount((prev) => prev + 1);
            setTimeout(loadImage, 1000 * (retryCount + 1)); // Exponential backoff
          } else {
            setError(true);
            setLoading(false);
          }
        }
      }
    };

    loadImage();

    return () => {
      isMounted = false;
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [processedSrc, cacheKey, retryCount]);

  if (error) {
    return (
      <div className="relative flex h-full min-h-[200px] w-full items-center justify-center rounded-md bg-muted/30">
        <p className="text-sm text-muted-foreground">Failed to load image</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="relative h-full min-h-[200px] w-full animate-pulse rounded-md bg-muted/30">
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2
            strokeWidth={2}
            className="size-6 animate-spin text-rose-400"
          />
        </div>
      </div>
    );
  }

  return (
    <img
      {...props}
      src={imageSrc}
      alt={alt}
      loading="lazy"
      className={cn(
        'object-cover transition-opacity duration-300',
        'animate-fade-in opacity-0',
        className
      )}
      onError={() => setError(true)}
    />
  );
};

export default Image;
