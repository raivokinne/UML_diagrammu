import { useState, useEffect, useCallback } from "react"
import { IntroSlide } from "./slides/intro-slide"
import { DefinitionSlide } from "./slides/definition-slide"
import { UsageSlide } from "./slides/usage-slide"
import { ElementsSlide } from "./slides/elements-slide"
import { ExampleSlide } from "./slides/example-slide"
import { BlogExampleSlide } from "./slides/blog-example-slide"
import { TaskSlide } from "./slides/task-slide"
import { SlideNavigation } from "./slide-navigation"

export function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    <IntroSlide key="intro" />,
    <DefinitionSlide key="definition" />,
    <UsageSlide key="usage" />,
    <ElementsSlide key="elements" />,
    <ExampleSlide key="example" />,
    <BlogExampleSlide key="blog-example" />,
    <TaskSlide key="task" />,
  ]

  const goToNextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }, [currentSlide])

  const goToPrevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }, [currentSlide])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        goToNextSlide()
      } else if (e.key === "ArrowLeft") {
        goToPrevSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [goToNextSlide, goToPrevSlide])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {slides[currentSlide]}
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrev={goToPrevSlide}
        onNext={goToNextSlide}
      />
    </section>
  )
}

