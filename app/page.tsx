import { Install } from "@/components/install";

export default function Home() {
  return (
    <main className="flex flex-col px-6 pt-6 mx-auto">
      <Install  />

      <h1 className="text-3xl font-bold mb-2">
        Welkom bij <span className="text-indigo-500">Upstart</span>!
      </h1>
      <p className="text-base mb-6">
        Met <span className="text-indigo-500">Upstart</span> krijg je grip op je financiën, bespaar
        je op abonnementen en verzekeringen, en kun je eenvoudig advies vragen om je uitgaven te
        optimaliseren.
      </p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Wat kun je doen?</h2>
        <ul className="list-disc list-inside text-left max-w-md mx-auto space-y-2">
          <li>
            <strong>Overzicht houden</strong>: Bekijk in één oogopslag al je abonnementen,
            verzekeringen en vaste lasten.
          </li>
          <li>
            <strong>Bespaar slim</strong>: Ontvang persoonlijke bespaartips voor abonnementen die je
            niet gebruikt of verzekeringen die goedkoper kunnen.
          </li>
          <li>
            <strong>Advies vragen</strong>: Stel vragen en krijg advies over hoe je het meeste uit
            je budget haalt.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Hoe werkt het?</h2>
        <ol className="list-decimal list-inside text-left max-w-md mx-auto space-y-2">
          <li>
            Voeg een abonnement of verzekering toe door op het{" "}
            <strong className="text-indigo-500">plus-icoon</strong> onderaan het scherm te klikken.
          </li>
          <li>Vul de details in, zoals de naam, kosten en looptijd.</li>
          <li>Ontvang direct inzicht in je uitgaven en ontdek waar je kunt besparen!</li>
        </ol>
      </div>

      <p className="mt-2 mb-2 text-sm text-gray-400">
        Begin vandaag nog en houd je financiën eenvoudig onder controle. 👌
      </p>
    </main>
  );
}
