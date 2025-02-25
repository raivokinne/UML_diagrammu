import { SlideLayout } from "./slide-layout"

export function IntroSlide() {
  return (
    <SlideLayout title="Klašu diagrammas UML">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Klašu diagrammas
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl">Objektu orientētās sistēmas struktūras attēlošana</p>
        <div className="text-lg md:text-xl text-white/70">
          <p>Izmantojiet bultiņas ← → lai pārvietotos starp slaidiem</p>
        </div>
      </div>
    </SlideLayout>
  )
}

