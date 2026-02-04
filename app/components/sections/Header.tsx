import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { profileData } from "../../data/profile";
import { Globe, Linkedin, Github, Users, UserPlus, LocateFixed } from 'lucide-react';


import { ThemeToggle } from "../theme-toggle";

const initials = profileData.name.split(' ').map(n => n[0]).join('');

export const Header = () => {
  return (
    <Card className="rounded-3xl shadow-2xl overflow-hidden">
      <CardHeader className="relative flex flex-col md:flex-row items-center gap-8 p-8 md:p-12 bg-card/50">
        <div className="absolute top-4 right-4 print:hidden">
          <ThemeToggle />
        </div>
        <Avatar className="w-40 h-40">
          <AvatarImage src="/profile-image.jpg" alt={profileData.name} />
          <AvatarFallback className="text-5xl font-bold">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 text-center md:text-left">
          <CardTitle className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-3">
            {profileData.name}
          </CardTitle>
          <CardDescription className="text-xl mb-4 font-medium">
            {profileData.title}
          </CardDescription>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profileData.location)}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground mb-6 hover:text-primary transition-colors group"
            aria-label={`View ${profileData.location} on Google Maps`}
          >
            <LocateFixed className="w-5 h-5 group-hover:text-primary transition-colors" />
            <span className="group-hover:underline underline-offset-4">{profileData.location}</span>
          </a>
        </div>
      </CardHeader>
      <CardContent className="p-8 md:p-12">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p className="text-muted-foreground">{profileData.about}</p>
      </CardContent>
      <CardFooter className="p-8 md:p-12 pt-0 flex flex-wrap gap-4 justify-center md:justify-start">
        <Badge variant="secondary" className="flex items-center gap-2 p-2">
          <Users className="w-5 h-5" />
          <span className="font-semibold">{profileData.followers}</span>
          <span>followers</span>
        </Badge>
        <Badge variant="secondary" className="flex items-center gap-2 p-2">
          <UserPlus className="w-5 h-5" />
          <span className="font-semibold">{profileData.connections}</span>
          <span>connections</span>
        </Badge>
        <div className="flex-grow"></div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" asChild>
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit LinkedIn profile"
              title="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit GitHub profile"
              title="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a
              href={profileData.socials.blog}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Blog"
              title="Blog"
            >
              <Globe className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};