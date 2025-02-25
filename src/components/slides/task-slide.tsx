import { SlideLayout } from "./slide-layout"

export function TaskSlide() {
  return (
    <SlideLayout title="Uzdevums kursa biedriem">
      <div className="grid grid-cols-1 gap-8">
        <section className="bg-white/10 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-300">Izveidojiet klašu diagrammu e-veikalam</h3>

          <div className="mb-6">
            <p className="text-lg mb-4">Izveidojiet klašu diagrammu vienkāršam e-veikalam, kurā ir šādas prasības:</p>

            <ul className="list-disc list-inside text-base space-y-2">
              <li>E-veikalā ir produkti ar nosaukumu, cenu, aprakstu un kategoriju</li>
              <li>Lietotāji var reģistrēties, pievienot produktus grozam un veikt pasūtījumus</li>
              <li>Pasūtījumam ir statuss, datums un piegādes adrese</li>
              <li>Administrators var pievienot, rediģēt un dzēst produktus</li>
              <li>Produktiem var būt atlaides</li>
            </ul>
          </div>

          <div className="bg-blue-900/30 p-4 rounded-lg">
            <h4 className="text-lg font-medium mb-2 text-yellow-300">Uzdevuma prasības:</h4>
            <ol className="list-decimal list-inside text-base space-y-2">
              <li>Identificējiet vismaz 5 klases</li>
              <li>Norādiet katrai klasei atribūtus un metodes</li>
              <li>Definējiet attiecības starp klasēm (asociācija, agregācija, kompozīcija, mantošana)</li>
              <li>Norādiet kardinalitāti attiecībām</li>
              <li>Paskaidrojiet, kāpēc izvēlējāties tieši šādas attiecības</li>
            </ol>
          </div>
        </section>

        <section className="bg-white/10 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-300">Noderīgi resursi</h3>
          <ul className="list-disc list-inside text-base space-y-2">
            <li>
              <a
                href="https://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-class-diagram-tutorial/"
                className="text-blue-300 hover:underline"
              >
                UML Class Diagram Tutorial
              </a>
            </li>
            <li>
              <a href="https://www.lucidchart.com/pages/uml-class-diagram" className="text-blue-300 hover:underline">
                Lucidchart - UML Class Diagrams
              </a>
            </li>
            <li>
              <a href="https://app.diagrams.net/" className="text-blue-300 hover:underline">
                Draw.io - Bezmaksas diagrammu veidošanas rīks
              </a>
            </li>
          </ul>
        </section>
      </div>
    </SlideLayout>
  )
}

