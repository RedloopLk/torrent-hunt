import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface MovieSliderProps {
  title: string
}

export function MovieSlider({ title }: MovieSliderProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <Carousel className="w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="p-3">
                <img
                  src={`/placeholder.svg?height=400&width=600`}
                  alt={`Movie ${index + 1}`}
                  width={600}
                  height={400}
                  className="rounded-md object-cover"
                />
                <h3 className="mt-2 font-semibold">Movie Title {index + 1}</h3>
                <p className="text-sm text-muted-foreground">2024 • Action</p>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}

