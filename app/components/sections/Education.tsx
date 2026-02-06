import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { educationData } from "../../data/education";
import { GraduationCap, ChevronDown } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
        {educationData.map((edu, idx) => {
          const hasDetails = (edu.activities && edu.activities.length > 0) || (edu.skills && edu.skills.length > 0);

          return (
            <div key={idx} className="flex items-start gap-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src={edu.logo} alt={edu.institution} />
                <AvatarFallback>{edu.institution.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{edu.institution}</h3>
                <p className="text-muted-foreground">{edu.degree}</p>
                <p className="text-sm text-muted-foreground mb-2">{edu.duration}</p>

                {hasDetails && (
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 group"
                        aria-label={`Show details for ${edu.institution}`}
                      >
                        Details
                        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-2 space-y-3">
                      {edu.activities && edu.activities.length > 0 && (
                        <div>
                          <p className="text-sm font-semibold mb-1">Activities:</p>
                          <ul className="list-disc list-inside text-sm text-muted-foreground">
                            {edu.activities.map((activity, i) => (
                              <li key={i}>{activity}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {edu.skills && edu.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {edu.skills.map((skill, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">{skill}</Badge>
                          ))}
                        </div>
                      )}
                    </CollapsibleContent>
                  </Collapsible>
                )}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};
