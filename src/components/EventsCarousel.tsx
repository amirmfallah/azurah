import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { useState } from "react";
import { events } from "../data/events";
import { getArtistNames } from "../utils/data";

export function EventsCarousel() {
  const [api, setApi] = useState<CarouselApi>();

  // Sort events by date (descending - newest first)
  const sortedEvents = [...events].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const isPastEvent = (dateString: string) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    eventDate.setHours(0, 0, 0, 0);
    return eventDate < today;
  };

  return (
    <div className="w-full">
      {/* Carousel */}
      <Carousel
        setApi={setApi}
        opts={{
          align: "end",
          loop: false,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-6">
          {sortedEvents.map((event) => {
            const isPast = isPastEvent(event.date);
            return (
              <CarouselItem key={event.id} className="pl-6 basis-auto">
                <div className={`group block w-72 md:w-96 ${isPast ? "opacity-50" : ""}`}>
                  {/* Event Poster */}
                  <div className="aspect-3/4 bg-black mb-4 overflow-hidden">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  </div>

                  {/* Event Info */}
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-black tracking-tight">{event.title}</h3>

                    <p className="text-xs opacity-70 tracking-wide">
                      {formatDate(event.date)} {event.time && `• ${event.time}`}
                    </p>

                    <p className="text-xs opacity-70 tracking-wide">
                      {event.venue} • {event.city}, {event.country}
                    </p>

                    <p className="text-xs opacity-50 tracking-wide">{getArtistNames(event.artistIds)}</p>

                    {!isPast && event.ticketUrl && (
                      <a href={event.ticketUrl} className="inline-block text-xs tracking-widest hover:underline mt-4">
                        + Tickets
                      </a>
                    )}
                  </div>
                </div>
              </CarouselItem>
            );
          })}
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
