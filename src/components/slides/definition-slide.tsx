import { SlideLayout } from "./slide-layout"

export function DefinitionSlide() {
  return (
    <SlideLayout title="Kas ir klašu diagramma?">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-white/10 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-300">Definīcija</h3>
          <p className="text-lg mb-4">
            Klašu diagramma ir <strong>struktūras modeļa</strong> daļa, kas attēlo sistēmas statisko struktūru.
          </p>
          <p className="text-lg">Tā parāda sistēmas klases, to atribūtus, metodes un attiecības starp klasēm.</p>
        </section>

        <section className="bg-white/10 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-300">Klasifikācija</h3>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>
              Pieder pie <strong>strukturālajām diagrammām</strong> UML
            </li>
            <li>Fokusējas uz sistēmas statisko struktūru</li>
            <li>Parāda klases un to savstarpējās attiecības</li>
            <li>Neattēlo sistēmas uzvedību vai darbību secību</li>
          </ul>
        </section>
      </div>
    </SlideLayout>
  )
}

