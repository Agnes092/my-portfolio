"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getProjectById } from "@/lib/projects";

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const projectId = Number.parseInt(params.slug as string);
  const project = getProjectById(projectId);

  if (!project) {
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

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="sticky top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Button variant="ghost" onClick={() => router.push("/")} className="mr-4 hover:bg-gray-100">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
            <div className="font-bold text-xl">Project Details</div>
          </div>
        </div>
      </nav>

      {/* Project Header */}
      <section className="pt-8 pb-12 px-4 sm:px-6 lg:px-8">
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

          {/* Project Image */}
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-12">
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Project Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{project.fullDescription}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Technical Implementation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    This project was built using modern web development practices and technologies to ensure
                    scalability, maintainability, and optimal user experience.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Frontend</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {project.technologies
                          .slice(0, Math.ceil(project.technologies.length / 2))
                          .map((tech, index) => (
                            <li key={index}>• {tech}</li>
                          ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Backend & Tools</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {project.technologies.slice(Math.ceil(project.technologies.length / 2)).map((tech, index) => (
                          <li key={index}>• {tech}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
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

              <Card>
                <CardHeader>
                  <CardTitle>Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Interested in this project or want to discuss similar work?
                  </p>
                  <Button variant="outline" className="w-full border-black text-black hover:bg-gray-50">
                    Get In Touch
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