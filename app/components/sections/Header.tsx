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

export const Header = () => {
  const initials = profileData.name.split(' ').map(n => n[0]).join('');

  return (
    <Card className="rounded-3xl shadow-2xl overflow-hidden">
      <CardHeader className="relative flex flex-col md:flex-row items-center gap-8 p-8 md:p-12 bg-card/50">
        <div className="absolute top-4 right-4">
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
          <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground mb-6">
            <LocateFixed className="w-5 h-5" />
            {profileData.location}
          </div>
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
            <a href={profileData.socials.linkedin} target="_blank" rel="noreferrer">
                <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                </Button>
            </a>
            <a href={profileData.socials.github} target="_blank" rel="noreferrer">
                <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                </Button>
            </a>
            <a href={profileData.socials.blog} target="_blank" rel="noreferrer">
                <Button variant="outline" size="icon">
                    <Globe className="h-4 w-4" />
                </Button>
            </a>
        </div>
      </CardFooter>
    </Card>
  );
};