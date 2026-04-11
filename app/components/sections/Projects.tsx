"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectsData } from "../../data/projects";
import { Layers, LayoutGrid, X, ImageOff } from "lucide-react";

export const Projects = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);

  useEffect(() => {
    if (!galleryOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setGalleryOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [galleryOpen]);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="w-5 h-5" />
            Projects
          </CardTitle>
          <CardAction>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setGalleryOpen(true)}
            >
              <LayoutGrid className="w-4 h-4" />
              Gallery
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <Card key={project.title} className="break-inside-avoid">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                {project.duration && (
                  <CardDescription>{project.duration}</CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>

      <AnimatePresence>
        {galleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setGalleryOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-background rounded-xl w-full max-w-4xl max-h-[85vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="sticky top-0 bg-background z-10 flex items-center justify-between px-6 py-4 border-b">
                <h2 className="font-semibold text-lg flex items-center gap-2">
                  <LayoutGrid className="w-5 h-5" />
                  Project Showcase
                </h2>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  onClick={() => setGalleryOpen(false)}
                  aria-label="Close gallery"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Gallery grid */}
              <div className="grid md:grid-cols-2 gap-6 p-6">
                {projectsData.map((project) => (
                  <div
                    key={project.title}
                    className="rounded-lg border bg-card overflow-hidden flex flex-col"
                  >
                    {/* Image area */}
                    {project.images && project.images.length > 0 ? (
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-40 object-cover"
                      />
                    ) : (
                      <div className="w-full h-40 bg-muted flex items-center justify-center">
                        <ImageOff className="w-8 h-8 text-muted-foreground/40" />
                      </div>
                    )}

                    {/* Project info */}
                    <div className="p-4 flex flex-col gap-2 flex-1">
                      <div>
                        <h3 className="font-semibold leading-tight">{project.title}</h3>
                        {project.duration && (
                          <p className="text-xs text-muted-foreground mt-0.5">{project.duration}</p>
                        )}
                        {project.associatedWith && (
                          <p className="text-xs text-muted-foreground">{project.associatedWith}</p>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground flex-1">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {project.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
