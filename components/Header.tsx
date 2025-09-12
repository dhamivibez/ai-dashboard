// app/components/Header.tsx
'use client';

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
  Highlighter,
  Sun,
  Moon,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useTheme } from 'next-themes';

export default function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="w-full bg-background flex items-center justify-between px-4 py-2">
      {/* Logo and User DropDown */}

      <div className="flex items-center gap-3">
        <div className="w-4 h-4 bg-foreground rounded-sm" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-sm text-foreground"
            >
              Dhamivibez
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
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

      <div className="flex items-center bg-muted rounded-lg p-0.5">
        <Button variant="ghost" size="icon" className="rounded-lg group">
          <span className="inline-flex items-center justify-center p-2 rounded-lg bg-card transition-colors">
            <Home className="h-4 w-4 text-foreground" />
          </span>
        </Button>

        <Button variant="ghost" size="icon" className="rounded-lg group">
          <span className="inline-flex items-center justify-center p-2 rounded-lg group-hover:bg-card transition-colors">
            <ImageIcon className="h-4 w-4 text-foreground" />
          </span>
        </Button>

        <Button variant="ghost" size="icon" className="rounded-lg group">
          <span className="inline-flex items-center justify-center p-2 rounded-lg group-hover:bg-card transition-colors">
            <Video className="h-4 w-4 text-foreground fill-current" />
          </span>
        </Button>

        <Button variant="ghost" size="icon" className="rounded-lg group">
          <span className="inline-flex items-center justify-center p-2 rounded-lg group-hover:bg-card transition-colors">
            <Wand2 className="h-4 w-4 text-foreground" />
          </span>
        </Button>

        <Button variant="ghost" size="icon" className="rounded-lg group">
          <span className="inline-flex items-center justify-center p-2 rounded-lg group-hover:bg-card transition-colors">
            <Pencil className="h-4 w-4 text-foreground" />
          </span>
        </Button>

        <Button variant="ghost" size="icon" className="rounded-lg group">
          <span className="inline-flex items-center justify-center p-2 rounded-lg group-hover:bg-card transition-colors">
            <Highlighter className="h-4 w-4 text-foreground" />
          </span>
        </Button>

        <Button variant="ghost" size="icon" className="rounded-lg group">
          <span className="inline-flex items-center justify-center p-2 rounded-lg group-hover:bg-card transition-colors">
            <Folder className="h-4 w-4 text-sidebar-foreground fill-current" />
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
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="rounded-lg"
        >
          {theme === 'light' ? (
            <Sun className="h-4 w-4 text-foreground" />
          ) : (
            <Moon className="h-4 w-4 text-foreground" />
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
