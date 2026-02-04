import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { educationData } from "../../data/education";
import { GraduationCap } from 'lucide-react';

export const Education = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5" />
          Education
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {educationData.map((edu, idx) => (
          <div key={idx} className="flex items-start gap-4 break-inside-avoid">
            <Avatar className="w-12 h-12">
              <AvatarImage src={edu.logo} alt={edu.institution} />
              <AvatarFallback>{edu.institution.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold">{edu.institution}</h3>
              <p className="text-muted-foreground">{edu.degree}</p>
              <p className="text-sm text-muted-foreground">{edu.duration}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};