"use client";

import {
  Home,
  Video,
  Pencil,
  ChevronDown,
  Wand2,
  Folder,
  ImageIcon,
  Headset,
  Bell,
  Sun,
  Moon,
  DraftingCompass,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="bg-background flex w-full items-center justify-between px-4 py-2">
      {/* Logo and User DropDown */}

      <div className="flex items-center gap-3">
        <div className="bg-foreground h-4 w-4 rounded-sm" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="text-foreground flex items-center gap-2 text-sm"
            >
              Dhamivibez
              <ChevronDown className="text-muted-foreground h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>DropDown 1</DropdownMenuItem>
            <DropdownMenuItem>DropDown 2</DropdownMenuItem>
            <DropdownMenuItem>DropDown 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Toolbar */}

      <div className="bg-muted flex items-center rounded-lg p-0.5">
        <Button variant="ghost" size="icon" className="group w-12 rounded-lg">
          <span className="bg-card inline-flex w-full items-center justify-center rounded-lg p-2 transition-colors">
            <Home className="text-foreground h-4 w-4" />
          </span>
        </Button>

        <Button variant="ghost" size="icon" className="group w-12 rounded-lg">
          <span className="group-hover:bg-card inline-flex w-full items-center justify-center rounded-lg p-2 transition-colors">
            <ImageIcon className="text-foreground h-4 w-4" />
          </span>
        </Button>

        <Button variant="ghost" size="icon" className="group w-12 rounded-lg">
          <span className="group-hover:bg-card inline-flex w-full items-center justify-center rounded-lg p-2 transition-colors">
            <Video className="text-foreground h-4 w-4 fill-current" />
          </span>
        </Button>

        <Button variant="ghost" size="icon" className="group w-12 rounded-lg">
          <span className="group-hover:bg-card inline-flex w-full items-center justify-center rounded-lg p-2 transition-colors">
            <Wand2 className="text-foreground h-4 w-4" />
          </span>
        </Button>

        <Button variant="ghost" size="icon" className="group w-12 rounded-lg">
          <span className="group-hover:bg-card inline-flex w-full items-center justify-center rounded-lg p-2 transition-colors">
            <Pencil className="text-foreground h-4 w-4" />
          </span>
        </Button>

        <Button variant="ghost" size="icon" className="group w-12 rounded-lg">
          <span className="group-hover:bg-card inline-flex w-full items-center justify-center rounded-lg p-2 transition-colors">
            <DraftingCompass className="text-foreground h-4 w-4" />
          </span>
        </Button>

        <Button variant="ghost" size="icon" className="group w-12 rounded-lg">
          <span className="group-hover:bg-card inline-flex w-full items-center justify-center rounded-lg p-2 transition-colors">
            <Folder className="text-sidebar-foreground h-4 w-4 fill-current" />
          </span>
        </Button>
      </div>

      {/* Actions, Theme Toggle and Avatar */}

      <div className="flex items-center gap-1">
        <Button variant="ghost" size="sm" className="text-foreground">
          <ImageIcon className="h-4 w-4" />
          Gallery
        </Button>
        <Button variant="ghost" size="sm" className="text-foreground">
          <Headset className="h-4 w-4" />
          Support
        </Button>
        <Button variant="ghost" className="rounded-lg">
          <Bell className="h-4 w-4 fill-current" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="rounded-lg"
        >
          {theme === "light" ? (
            <Sun className="text-foreground h-4 w-4" />
          ) : (
            <Moon className="text-foreground h-4 w-4" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
        <Avatar className="h-7 w-7">
          <AvatarImage src="/vercel.png" alt="profile" />
          <AvatarFallback>DH</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
