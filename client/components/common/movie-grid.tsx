import { Card } from '@/components/ui/card';
import { useEffect, useState } from 'react';

interface MovieGridProps {
  title: string;
}

export function MovieGrid({ title }: MovieGridProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 15 }).map((_, index) => (
          <Card key={index} className="p-3">
            <RandomImage
              alt={`Movie ${index + 1}`}
              width={600}
              height={400}
              className="rounded-md object-cover"
            />
            <h3 className="mt-2 font-semibold">Movie Title {index + 1}</h3>
            <p className="text-sm text-muted-foreground">2024 • Action</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

const RandomImage: React.FC<{
  alt: string;
  width: number;
  height: number;
  className: string;
}> = ({ alt, width, height, className }) => {
  const [src, setSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/randomimage?category=technology`,
          {
            method: 'GET',
            headers: {
              'X-Api-Key': 'qG5PlYr6daCKRLfEx7K6yg==e6HrpMvfzWEWh7Ij',
              Accept: 'image/jpg',  // Fixed typo in 'Accept'
            },
          }
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch image');
        }
        
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        setSrc(imageUrl);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    }
  
    setTimeout(() => {
      fetchImage();
    }, 1000);
  
    // Cleanup function to revoke object URL
    return () => {
      if (src) {
        URL.revokeObjectURL(src);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    );
  }
};
