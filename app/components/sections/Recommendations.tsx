import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { recommendationsData } from "../../data/recommendations";
import { MessageCircle } from 'lucide-react';

const processedRecommendations = recommendationsData.map(rec => ({
  ...rec,
  initials: rec.name.split(' ').map(n => n[0]).join('')
}));

export const Recommendations = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5" />
          Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {processedRecommendations.map((rec, idx) => (
          <Card key={idx}>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="w-16 h-16">
                <AvatarFallback>{rec.initials}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{rec.name}</CardTitle>
                <CardDescription>{rec.title}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground italic border-l-4 pl-4">{rec.text}</p>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};