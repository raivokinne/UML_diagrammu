import { SlideLayout } from "./slide-layout"

export function UsageSlide() {
  return (
    <SlideLayout title="Kad izmanto klašu diagrammas?">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-white/10 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-300">Izmantošanas gadījumi</h3>
          <ul className="list-disc list-inside text-lg space-y-3">
            <li>Sistēmas konceptuālā modelēšana</li>
            <li>Programmatūras arhitektūras plānošana</li>
            <li>Datu bāzes shēmas projektēšana</li>
            <li>Koda ģenerēšana (forward engineering)</li>
            <li>Esošā koda dokumentēšana (reverse engineering)</li>
          </ul>
        </section>

        <section className="bg-white/10 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-300">Priekšrocības</h3>
          <ul className="list-disc list-inside text-lg space-y-3">
            <li>Skaidra sistēmas struktūras vizualizācija</li>
            <li>Palīdz identificēt klases un to attiecības</li>
            <li>Atvieglo komunikāciju starp izstrādātājiem</li>
            <li>Kalpo kā dokumentācija</li>
            <li>Palīdz atklāt dizaina problēmas agrīnā stadijā</li>
          </ul>
        </section>
      </div>
    </SlideLayout>
  )
}

