import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function Feature() {
  return (
    <div className="w-full py-10 lg:py-40">
      <div className="container mx-auto px-4">
        <div className="grid border rounded-lg p-4 sm:p-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">Pourquoi Helixlab</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Acquisition automatique, 24h/24.
                </h2>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  Votre agent IA travaille pendant que vous êtes en soin.
                </p>
              </div>
            </div>
            <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Réponse immédiate 24h/24</p>
                  <p className="text-muted-foreground text-sm">
                    Votre prospect reçoit une réponse en quelques secondes, même à 23h.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Prise de RDV automatique</p>
                  <p className="text-muted-foreground text-sm">
                    L&apos;agent qualifie, gère les objections et réserve directement dans votre agenda.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Zéro effort de votre part</p>
                  <p className="text-muted-foreground text-sm">
                    Vous arrivez le matin avec des RDV confirmés.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-md overflow-hidden aspect-video lg:aspect-square">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/telephone.jpg" alt="Téléphone" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
