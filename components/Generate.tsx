import { IModelCard, ModelCard } from "@/components/ui/ModelCard";
import {
  BookCheck,
  ChevronDownIcon,
  DraftingCompass,
  Image,
  MicVocal,
  Pencil,
  PersonStanding,
  Video,
  Wand2,
} from "lucide-react";

export default function Generate() {
  const models: IModelCard[] = [
    {
      name: "Image",
      description: "Generate images with custom styles in Flux and Ideogram",
      icon: <Image />,
      gradient: "bg-gradient-to-r from-blue-500 to-purple-800",
      isNew: true,
    },
    {
      name: "Video",
      description: "Generate videos with Hailluo, Pika, Runway, Luma, and more",
      icon: <Video className="fill-white" />,
      gradient: "bg-gradient-to-r from-yellow-400 to-orange-500",
      isNew: false,
    },
    {
      name: "Realtime",
      description: "Realtime AI rendering on a canvas. Instant feedback loops",
      icon: <Pencil />,
      gradient: "bg-gradient-to-r from-sky-400 to-blue-600",
      isNew: false,
    },
    {
      name: "Enhancer",
      description: "Upscale and enhance images and videos up to 22K",
      icon: <Wand2 />,
      gradient: "bg-gradient-to-r from-gray-700 to-gray-900",
      isNew: true,
    },
    {
      name: "Edit",
      description:
        "Add objects, change style, or expand photos and generations",
      icon: <DraftingCompass />,
      gradient: "bg-gradient-to-r from-fuchsia-500 to-pink-500",
      isNew: true,
    },
    {
      name: "Video Lipsync",
      description: "Lip sync any video to any audio",
      icon: <MicVocal />,
      gradient: "bg-gradient-to-r from-emerald-400 to-teal-500",
      isNew: true,
    },
    {
      name: "Motion Transfer",
      description: "Transfer motion to images and animate characters",
      icon: <PersonStanding />,
      gradient: "bg-gradient-to-r from-cyan-400 to-blue-500",
      isNew: true,
    },
    {
      name: "Train",
      description:
        "Teach Krea to replicate your style, products, or characters",
      icon: <BookCheck />,
      gradient: "bg-gradient-to-r from-rose-500 to-red-600",
      isNew: false,
    },
  ];

  return (
    <section className="mt-8 w-full px-4">
      <div className="flex justify-between">
        <h3 className="text-lg font-medium">Generate</h3>
        <div className="flex items-center gap-1 text-blue-500">
          <ChevronDownIcon className="size-4" />
          <p className="text-xs">Show all</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {models.map(({ name, description, icon, gradient, isNew }, index) => (
          <ModelCard
            key={index}
            name={name}
            description={description}
            gradient={gradient}
            icon={icon}
            isNew={isNew}
          />
        ))}
      </div>
    </section>
  );
}
