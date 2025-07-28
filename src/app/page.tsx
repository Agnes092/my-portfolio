"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Github, Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/lib/projects"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const experiences = [
    {
      title: "대리 / 기업부설연구소 디자인팀 (UX/UI 디자인 & UI 개발)",
      company: "㈜비즈인사이트 ",
      period: "2024.04 - 재직중",
      description:
        "B2B 멤버십 관리자 플랫폼 어드민: 기획부터 UX 설계, UI 디자인에 참여했으며, Next.js, React, TypeScript, Tailwind CSS 기반으로 프론트엔드 팀과 협력하여 UI를 개발했습니다. 사용자 워크플로우 분석을 통한 직관적인 어드민 UI 설계 및 실제 서비스에 적용되는 UI 컴포넌트 개발에 기여했습니다. 이밖에 디지털 헬스케어 앱 UX/UI 디자인 설계 보조 및 디자인 시스템 UI 작업에 참여했습니다.",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white text-black">
      
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl">Portfolio</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["about", "experience", "projects"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section ? "text-black font-medium" : "text-gray-600 hover:text-black"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              {["about", "experience", "projects"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 capitalize text-gray-600 hover:text-black"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Hello, I&apos;m <span className="text-green-800">Hanji Kim</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            사용자 경험을 깊이 이해하고, <br /> 접근성 높은 UI를 구현하는 김한지입니다.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="mailto:agneskim032@gmail.com">
              <Button variant="outline" size="lg" className="bg-black text-white hover:bg-gray-800 cursor-pointer">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
            </Link>
            <Link href="https://github.com/Agnes092" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="bg-white text-black border-black hover:bg-gray-50 cursor-pointer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </Link>
          </div>
          <div className="mt-16">
            <ChevronDown className="w-6 h-6 mx-auto animate-bounce text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                UX/UI 디자이너로서 사용자의 마음을 읽고 직관적인 경험을 설계해왔습니다. 이 과정에서 제가 직접 구상한 아이디어가 <strong>HTML, CSS, JavaScript 코드를 통해 실제 화면</strong>으로 생생하게 구현될 때, 그 어떤 작업보다 깊은 몰입과 즐거움을 느꼈습니다. 디자인에 대한 통찰력과 개발 구현의 즐거움을 겸비한, <strong>사용자 중심의 개발 전문가로 성장</strong>하고자 이 길을 선택했습니다.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                현재는 AI 기반 디자인 툴을 활용한 <strong>효율적인 콘텐츠 생성</strong>부터 <strong>UI 컴포넌트 개발 및 웹/앱 프론트엔드 구현</strong> (HTML/CSS/JS, React 기반), 나아가 Bubble, Webflow, 아임웹 등 노코드 툴 퍼블리싱까지 다양한 UI 구현 경험을 쌓고 있습니다. 이러한 실무 경험을 바탕으로, 제 디자인적 안목에 견고한 개발 역량을 더해 <strong>사용자 경험을 완벽하게 구현하는 전문가</strong>로 도약할 준비가 되어 있습니다.
              </p>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS","JavaScript", "TypeScript", "Next.js","React"].map((skill) => (
                  <Badge key={skill} variant="outline" className="border-black text-black">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-[280px] h-[280px] overflow-hidden rounded-full">
                <Image
                  src="/profile.png"
                  alt="프로필 사진"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-l-4 border-l-black">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-gray-600">{exp.company}</CardDescription>
                    </div>
                    <Badge variant="outline" className="mt-2 sm:mt-0 border-black text-black">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <Card className="cursor-pointer transition-transform hover:scale-105 border-2 hover:border-black h-full flex flex-col">
                  <div className="relative aspect-video rounded-t-lg overflow-hidden">
                    <Image
                      src={project.images[0] || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-black text-black">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
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
  )
}
