import { ChevronLeft, ChevronRight } from "lucide-react"

interface SlideNavigationProps {
  currentSlide: number
  totalSlides: number
  onPrev: () => void
  onNext: () => void
}

export function SlideNavigation({ currentSlide, totalSlides, onPrev, onNext }: SlideNavigationProps) {
  return (
    <nav className="absolute bottom-6 left-0 right-0 flex justify-between items-center px-8">
      <button
        onClick={onPrev}
        disabled={currentSlide === 0}
        className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <div className="text-white/80">
        {currentSlide + 1} / {totalSlides}
      </div>

      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </nav>
  )
}

