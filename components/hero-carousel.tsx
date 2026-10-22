"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  { id: 1, bg: "bg-[url('https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" },
  { id: 2, bg: "bg-[url('https://images.unsplash.com/photo-1582719478250-c8942f79a527?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" },
  { id: 3, bg: "bg-[url('https://images.unsplash.com/photo-1562605608-4d26a0834f2f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" },
];

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev() }, [emblaApi]);
  const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext() }, [emblaApi]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="h-full" ref={emblaRef}>
        <div className="flex h-full">
          {SLIDES.map((s) => (
            <div key={s.id} className={`flex-[0_0_100%] min-w-0 h-full relative ${s.bg}`}>
              <div className="absolute inset-0 bg-maroon/60 mix-blend-multiply" />
            </div>
          ))}
        </div>
      </div>
      <button onClick={scrollPrev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition">
        <ChevronLeft />
      </button>
      <button onClick={scrollNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition">
        <ChevronRight />
      </button>
    </div>
  );
}
