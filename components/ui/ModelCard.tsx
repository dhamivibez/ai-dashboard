import { Button } from "@/components/ui/button";
import { Image } from "lucide-react";

export interface IModelCard {
  name: string;
  description: string;
  icon: React.ReactElement;
  gradient: string;
  isNew: boolean;
}

export const ModelCard = ({
  name,
  description,
  icon,
  gradient,
  isNew,
}: IModelCard) => {
  return (
    <div className="mt-4 flex w-full items-center gap-2">
      <div className={`h-fit w-fit rounded-md p-2 text-white ${gradient}`}>
        {icon}
      </div>
      <div className="w-full">
        <div className="flex items-center gap-1">
          <p className="text-xs font-medium">{name}</p>
          {isNew && (
            <span className="rounded-full bg-blue-500 px-1 text-[8px] text-white">
              New
            </span>
          )}
        </div>
        <p className="w-2/3 text-[8px]">{description}</p>
      </div>
      <Button variant="secondary" className="text-xs">
        Open
      </Button>
    </div>
  );
};
