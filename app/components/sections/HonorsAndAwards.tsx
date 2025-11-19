import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { honorsAwards } from "../../data/certifications";
import { Award } from 'lucide-react';

export const HonorsAndAwards = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="w-5 h-5" />
          Honors & Awards
        </CardTitle>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 gap-6">
        {honorsAwards.map((award, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle>{award.title}</CardTitle>
              <CardDescription>{award.issuer}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{award.date}</p>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};