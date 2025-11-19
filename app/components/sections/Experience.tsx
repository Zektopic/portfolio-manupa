import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { experienceData } from "../../data/experience";
import { Briefcase, Calendar, MapPin, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const Experience = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Briefcase className="w-5 h-5" />
          Experience
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {experienceData.map((company, companyIdx) => (
          <div key={companyIdx} className="space-y-4">
            <div className="flex items-center gap-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src={company.logo} alt={company.company} />
                <AvatarFallback>{company.company.charAt(0)}</AvatarFallback>
              </Avatar>
              <h3 className="text-2xl font-bold">{company.company}</h3>
            </div>
            <div className="space-y-6 pl-8">
              {company.positions ? (
                company.positions.map((position, posIdx) => (
                  <Card key={posIdx} className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-[-2rem] top-8 bottom-0 w-0.5 bg-border"></div>
                    {/* Timeline dot */}
                    <div className="absolute left-[-2.4rem] top-2 w-4 h-4 bg-primary rounded-full ring-4 ring-background"></div>

                    <CardHeader>
                      <CardTitle>{position.title}</CardTitle>
                      <div className="text-sm text-muted-foreground">{position.type}</div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {position.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </div>
                      </div>
                      <Collapsible>
                        <CollapsibleTrigger asChild>
                          <Button variant="outline" size="sm" className="flex items-center gap-2">
                            Details
                            <ChevronDown className="w-4 h-4" />
                          </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="pt-4">
                          {position.description && (
                            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
                              {position.description.map((desc, i) => (
                                <li key={i}>{desc}</li>
                              ))}
                            </ul>
                          )}
                          {position.skills && (
                            <div className="flex flex-wrap gap-2">
                              {position.skills.map((skill, i) => (
                                <Badge key={i} variant="secondary">{skill}</Badge>
                              ))}
                            </div>
                          )}
                        </CollapsibleContent>
                      </Collapsible>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-[-2rem] top-8 bottom-0 w-0.5 bg-border"></div>
                  {/* Timeline dot */}
                  <div className="absolute left-[-2.4rem] top-2 w-4 h-4 bg-primary rounded-full ring-4 ring-background"></div>

                  <CardHeader>
                    <CardTitle>{company.position}</CardTitle>
                    <div className="text-sm text-muted-foreground">{company.type}</div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {company.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {company.location}
                      </div>
                    </div>
                    {company.skills && (
                      <div className="flex flex-wrap gap-2">
                        {company.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary">{skill}</Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};