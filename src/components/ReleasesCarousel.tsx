import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { useState } from "react";
import { releases } from "../data/releases";

export function ReleasesCarousel() {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <div className="w-full">
      {/* View All */}
      <div className="px-4 md:px-0 mb-8">
        <a href="/releases" className="text-xs tracking-widest hover:underline opacity-60">
          View All
        </a>
      </div>

      {/* Carousel */}
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-6">
          {releases.map((release) => (
            <CarouselItem key={release.id} className="pl-6 basis-auto">
              <a href={`/releases/${release.id}`} className="group block w-72 md:w-80">
                <div className="aspect-square bg-black mb-4 overflow-hidden">
                  <img src={release.image} alt={release.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg md:text-xl font-black mb-1 tracking-tight">{release.title}</h3>
                <p className="text-xs opacity-50 mb-4 tracking-wide">{release.artist}</p>
                <span className="text-xs tracking-widest group-hover:underline">
                  + View
                </span>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation */}
        <div className="flex justify-between items-center px-4 md:px-0 mt-8">
          <button
            onClick={() => api?.scrollPrev()}
            className="text-xs tracking-widest hover:underline opacity-60 hover:opacity-100 transition-opacity"
          >
            Previous
          </button>
          <button
            onClick={() => api?.scrollNext()}
            className="text-xs tracking-widest hover:underline opacity-60 hover:opacity-100 transition-opacity"
          >
            Next
          </button>
        </div>
      </Carousel>
    </div>
  );
}
