"use client";

import { Button } from "@/components/ui/button";
import { ISlideCard, SlideCard } from "@/components/ui/SlideCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides: ISlideCard[] = [
    {
      label: "NEW IMAGE MODEL",
      name: "WAN 2.2",
      title: "WAN 2.2 Image generation",
      description:
        "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
      buttonText: "Try WAN 2.2",
    },
    {
      label: "OPEN-SOURCE RELEASE",
      name: "Open Source",
      title: "FLUX.1 Krea",
      description: `We're making the weights to our Flux.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image`,
      buttonText: "Try FlUX.1 Krea",
    },
    {
      label: "CREATIVE ENGINE",
      name: "Krea 1",
      title: "Krea 1 Creative Engine",
      description:
        "Push aesthetic boundaries with Krea’s original creative model. Perfect balance of speed, style, and photorealism.",
      buttonText: "Try Krea 1",
    },
    {
      label: "AI DESIGN MODEL",
      name: "ChatGPT Image",
      title: "ChatGPT Image Model",
      description:
        "Produce logos, icons, and text with unmatched clarity. Precision prompt-following for design-grade output.",
      buttonText: "Try ChatGPT Image",
    },
    {
      label: "FAST GENERATION",
      name: "Flux",
      title: "Flux Fast Generation",
      description:
        "Get images instantly with Flux. Optimized for speed and cost without sacrificing creativity.",
      buttonText: "Try Flux",
    },
    {
      label: "PRO TIER",
      name: "Flux 1.1 Pro",
      title: "Flux 1.1 Pro",
      description:
        "Strike the balance between performance and quality. Refined output at efficient speed.",
      buttonText: "Try Flux 1.1 Pro",
    },
    {
      label: "ULTRA TIER",
      name: "Flux 1.1 Pro Ultra",
      title: "Flux 1.1 Pro Ultra",
      description:
        "Take it further with Ultra. Stunning detail and depth for your most ambitious projects.",
      buttonText: "Try Flux 1.1 Pro Ultra",
    },
    {
      label: "EDITING MODEL",
      name: "Flux Kontext",
      title: "Flux Kontext Editing",
      description:
        "Purpose-built for editing workflows. Clean adjustments, seamless context awareness.",
      buttonText: "Use Flux Kontext",
    },
    {
      label: "EDITING PRO",
      name: "Seedream 4",
      title: "Seedream 4",
      description:
        "Next-gen realism with superior text rendering and photoreal details.",
      buttonText: "Try Seedream 4",
    },
  ];

  const getSlideWidth = () => {
    const el = scrollRef.current;
    if (!el || el.children.length === 0) return 0;
    return (el.children[0] as HTMLElement).clientWidth + 32; // gap-8 = 32px
  };

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    const slideWidth = getSlideWidth();
    if (!el || !slideWidth) return;

    el.scrollBy({
      left: direction === "left" ? -slideWidth : slideWidth,
      behavior: "smooth",
    });
  };

  const scrollToSlide = (index: number) => {
    const el = scrollRef.current;
    const slideWidth = getSlideWidth();
    if (!el || !slideWidth) return;

    el.scrollTo({
      left: slideWidth * index,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const slideWidth = getSlideWidth();
      if (!slideWidth) return;

      setCurrentIndex(Math.round(el.scrollLeft / slideWidth));
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full">
      <div
        ref={scrollRef}
        className="mt-8 flex h-[400px] w-full gap-8 overflow-x-auto scroll-smooth px-4"
      >
        {slides.map(
          ({ label, name, title, description, buttonText }, index) => (
            <SlideCard
              key={index}
              label={label}
              name={name}
              title={title}
              buttonText={buttonText}
              description={description}
            />
          ),
        )}
      </div>

      {/* Left and right carousel control */}
      <div className="absolute right-4 bottom-2 flex gap-2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="text-primary h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="text-primary h-5 w-5" />
        </Button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-primary" : "bg-secondary"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
