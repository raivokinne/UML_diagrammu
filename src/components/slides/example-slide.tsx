import { SlideLayout } from "./slide-layout"

export function ExampleSlide() {
  return (
    <SlideLayout title="Klašu diagrammas piemērs">
      <div className="grid grid-cols-1 gap-8">
        <section className="bg-white/10 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-300">Universitātes sistēmas piemērs</h3>
          <div className="flex justify-center mb-6">
            <img src="https://cdn.discordapp.com/attachments/1113037503428038757/1343928240711925790/12-uml-class-diagram-example.webp?ex=67bf0e35&is=67bdbcb5&hm=814aca0bc206eb70d10cab7cbc76bfcebe6a6d3d2fe59f66f576987625a211df&format=webp&width=1834&height=872"
             alt="Descriptive caption" className="rounded-lg" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium mb-2 text-purple-300">Klases un atribūti</h4>
              <ul className="list-disc list-inside text-base space-y-1">
                <li>
                  <strong>Persona</strong> - vārds, uzvārds, dzimšanas datums
                </li>
                <li>
                  <strong>Students</strong> - studenta ID, fakultāte, kurss
                </li>
                <li>
                  <strong>Pasniedzējs</strong> - darbinieka ID, departaments, amats
                </li>
                <li>
                  <strong>Kurss</strong> - nosaukums, kredītpunkti, apraksts
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2 text-purple-300">Attiecības</h4>
              <ul className="list-disc list-inside text-base space-y-1">
                <li>
                  <strong>Mantošana</strong> - Students un Pasniedzējs manto no Personas
                </li>
                <li>
                  <strong>Asociācija</strong> - Pasniedzējs pasniedz Kursu
                </li>
                <li>
                  <strong>Agregācija</strong> - Kurss satur Studentus
                </li>
                <li>
                  <strong>Kardinalitāte</strong> - viens-pret-daudziem, daudzi-pret-daudziem
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      
    </SlideLayout>
  )
}

