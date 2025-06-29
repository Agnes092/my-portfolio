"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, Calendar, User, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getProjectById } from "@/lib/projects";

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const projectId = Number.parseInt(params.slug as string);
  const project = getProjectById(projectId);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    setSelectedImageIndex(0);
  }, [projectId]);

  if (!project || !project.images || project.images.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => router.push("/")} variant="outline" className="bg-black text-white hover:bg-gray-800">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  const goToPrevious = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <div className="h-16"></div>

      {/* Project Header */}
      <section className="pt-16 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-gray-600">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{project.duration}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <User className="w-4 h-4 mr-2" />
                <span>{project.role}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-black text-black">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex space-x-4">
              <Button className="bg-black text-white hover:bg-gray-800">
                <Github className="w-4 h-4 mr-2" />
                View Code
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-gray-50">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            </div>
          </div>

          {/* Project Images */}
          <div className="mb-12">
            <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img
                src={project.images[selectedImageIndex]}
                alt={project.title}
                className="w-full h-full object-contain transition-opacity duration-300"
              />
              <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
                {selectedImageIndex + 1} / {project.images.length}
              </div>

              {project.images.length > 1 && (
                <>
                  <button
                    onClick={goToPrevious}
                    className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer bg-white/80 hover:bg-white hover:scale-110 active:scale-100 rounded-full p-2 transition-all duration-300 z-10 shadow-md"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-800" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer bg-white/80 hover:bg-white hover:scale-110 active:scale-100 rounded-full p-2 transition-all duration-300 z-10 shadow-md"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-800" />
                  </button>
                </>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative w-20 h-20 rounded-md cursor-pointer overflow-hidden focus:outline-none transition-all ${
                    selectedImageIndex === index ? "ring-2 ring-black ring-offset-2" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${project.title} thumbnail ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {project.sections.map((section, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-gray-600 leading-relaxed space-y-2">
                      {section.content.split("\n").map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Project Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-1">Duration</h4>
                    <p className="text-gray-600">{project.duration}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Role</h4>
                    <p className="text-gray-600">{project.role}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Technologies</h4>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs border-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full bg-black text-white hover:bg-gray-800">
                    <Github className="w-4 h-4 mr-2" />
                    View Source Code
                  </Button>
                  <Button variant="outline" className="w-full border-black text-black hover:bg-gray-50">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600">© 2025 Hanji Kim. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 