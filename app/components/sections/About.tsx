import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { profileData } from "../../data/profile";
import { Star } from 'lucide-react';

export const About = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="w-5 h-5" />
          Top Skills
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {profileData.topSkills.map((skill, idx) => (
          <Badge key={idx} variant="secondary">{skill}</Badge>
        ))}
      </CardContent>
    </Card>
  );
};