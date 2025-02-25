import { SlideLayout } from "./slide-layout"

export function BlogExampleSlide() {
  return (
    <SlideLayout title="Bloga sistēmas klašu diagramma">
      <div className="grid grid-cols-1 gap-8">
        <section className="bg-white/10 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-300">Bloga sistēmas piemērs</h3>
          <div className="flex justify-center mb-6">
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium mb-2 text-purple-300">Klases</h4>
              <ul className="list-disc list-inside text-base space-y-1">
                <li>
                  <strong>Blogs</strong> - sistēmas galvenā klase
                </li>
                <li>
                  <strong>Autors</strong> - persona, kas raksta ierakstus
                </li>
                <li>
                  <strong>BlogaIeraksts</strong> - ieraksts ar nosaukumu, tekstu un datumu
                </li>
                <li>
                  <strong>Lasītājs</strong> - persona, kas lasa ierakstus
                </li>
                <li>
                  <strong>Komentārs</strong> - lasītāja atsauksme par ierakstu
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2 text-purple-300">Attiecības</h4>
              <ul className="list-disc list-inside text-base space-y-1">
                <li>
                  <strong>Kompozīcija</strong> - Blogs sastāv no BlogaIerakstiem
                </li>
                <li>
                  <strong>Asociācija</strong> - Autors izveido BlogaIerakstus
                </li>
                <li>
                  <strong>Asociācija</strong> - Lasītājs lasa BlogaIerakstus
                </li>
                <li>
                  <strong>Agregācija</strong> - BlogaIeraksts satur Komentārus
                </li>
                <li>
                  <strong>Asociācija</strong> - Lasītājs raksta Komentārus
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="text-lg font-medium mb-2 text-purple-300">Funkcionalitāte</h4>
            <p className="text-base">
              Autors var izveidot, rediģēt un dzēst BlogaIerakstus. Katram BlogaIerakstam ir nosaukums, pamatteksts un
              izveides datums. Lasītāji var lasīt ierakstus un pievienot komentārus.
            </p>
          </div>
        </section>
        <section className="col-span-1 lg:col-span-2 bg-white/10 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-300">Attēls</h3>
          <img src="https://www.freeprojectz.com/sites/default/files/xBlogging,P20System_0.jpeg.pagespeed.ic.r8Yy9uDWKF.jpg" alt="Description of the image" className="w-full h-auto rounded-lg" />
        </section>
      </div>
    </SlideLayout>
  )
}

