"use client";

import { Button } from "@/components/ui/button";

export interface ISlideCard {
  label: string;
  name: string;
  title: string;
  description: string;
  buttonText: string;
}

export const SlideCard = ({
  label,
  name,
  title,
  description,
  buttonText,
}: ISlideCard) => {
  return (
    <div className="relative mb-12 flex min-w-[60%] items-end rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 text-white">
      <p className="absolute top-4 left-6 text-xs">{label}</p>
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold">
        {name}
      </h2>
      <div className="flex w-full items-end justify-between p-6">
        <div className="w-1/2 space-y-2">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-sm opacity-90">{description}</p>
        </div>
        <Button className="rounded-full bg-white text-sm font-medium text-gray-900 transition hover:bg-gray-100">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
