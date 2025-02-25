import { SlideLayout } from "./slide-layout"

export function ElementsSlide() {
  return (
    <SlideLayout title="UML elementi klašu diagrammās">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="bg-white/10 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-300">Pamatelementi</h3>
          <ul className="list-disc list-inside text-lg space-y-3">
            <li>
              <strong>Klase</strong> - taisnstūris ar klases nosaukumu, atribūtiem un metodēm
            </li>
            <li>
              <strong>Atribūti</strong> - klases īpašības ar datu tipiem
            </li>
            <li>
              <strong>Metodes</strong> - klases funkcionalitāte
            </li>
            <li>
              <strong>Redzamība</strong> - publiska (+), privāta (-), aizsargāta (#)
            </li>
          </ul>
        </section>

        <section className="bg-white/10 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-300">Attiecību veidi</h3>
          <ul className="list-disc list-inside text-lg space-y-3">
            <li>
              <strong>Asociācija</strong> - saistība starp klasēm
            </li>
            <li>
              <strong>Agregācija</strong> - "satur" attiecība (vājā)
            </li>
            <li>
              <strong>Kompozīcija</strong> - "sastāv no" attiecība (stiprā)
            </li>
            <li>
              <strong>Mantošana</strong> - "ir" attiecība
            </li>
            <li>
              <strong>Realizācija</strong> - interfeisa implementācija
            </li>
          </ul>
        </section>



        <section className="col-span-1 lg:col-span-2 bg-white/10 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-300">Attēls</h3>
          <img src="https://cdn-images.visual-paradigm.com/guide/uml/what-is-class-diagram/12-uml-class-diagram-example.png" alt="Description of the image" className="w-full h-auto rounded-lg" />
        </section>
      </div>
    </SlideLayout>
  )
}

