export default function MentionsLegales() {
  return (
    <main className="bg-white min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-3xl">

        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-12">
          Informations légales
        </h1>

        {/* Mentions légales */}
        <section className="mb-14">
          <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-6">
            Mentions légales
          </h2>
          <dl className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <div><dt className="inline font-medium text-gray-900">Éditeur : </dt><dd className="inline">HelixLab® — Elisa Tholin</dd></div>
            <div><dt className="inline font-medium text-gray-900">Statut : </dt><dd className="inline">Auto-entrepreneur</dd></div>
            <div><dt className="inline font-medium text-gray-900">SIRET : </dt><dd className="inline">10328251300011</dd></div>
            <div><dt className="inline font-medium text-gray-900">Email : </dt><dd className="inline"><a href="mailto:contact@helixlab.fr" className="underline underline-offset-2 hover:text-gray-900">contact@helixlab.fr</a></dd></div>
            <div><dt className="inline font-medium text-gray-900">Site : </dt><dd className="inline">helixlab.fr</dd></div>
            <div><dt className="inline font-medium text-gray-900">Localisation : </dt><dd className="inline">Auvergne-Rhône-Alpes, France</dd></div>
            <div><dt className="inline font-medium text-gray-900">Hébergement : </dt><dd className="inline">Netlify, Inc. — 2325 3rd Street, Suite 215, San Francisco, CA 94107, USA</dd></div>
          </dl>
        </section>

        <hr className="border-gray-100 mb-14" />

        {/* CGV */}
        <section className="mb-14">
          <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-6">
            Conditions générales de vente
          </h2>
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <p><span className="font-medium text-gray-900">Article 1 — Objet : </span>Les présentes CGV régissent les relations entre Helixlab (Elisa Tholin, SIRET 10328251300011) et tout professionnel souscrivant au service d&apos;agent IA disponible 24h/24 sur Instagram, WhatsApp et Messenger pour cliniques esthétiques — réponse aux prospects, prise de RDV Google Calendar, et relances automatiques (formule Premium).</p>
            <p><span className="font-medium text-gray-900">Article 2 — Prix : </span>Les tarifs sont ceux mentionnés dans le devis accepté par le client. Helixlab se réserve le droit de les modifier avec un préavis de 30 jours. TVA non applicable — Art. 293B CGI.</p>
            <p><span className="font-medium text-gray-900">Article 3 — Durée : </span>Contrat mensuel renouvelable tacitement après une semaine d&apos;essai gratuit. Résiliation possible avec 30 jours de préavis par email à <a href="mailto:contact@helixlab.fr" className="underline underline-offset-2 hover:text-gray-900">contact@helixlab.fr</a>.</p>
            <p><span className="font-medium text-gray-900">Article 4 — Paiement : </span>Par virement bancaire, selon les modalités du devis accepté.</p>
            <p><span className="font-medium text-gray-900">Article 5 — Responsabilité : </span>Helixlab est soumis à une obligation de moyens. La responsabilité est limitée au montant mensuel de la formule souscrite.</p>
            <p><span className="font-medium text-gray-900">Article 6 — Sous-traitants RGPD : </span>Convocore/TIXAE Labs (agent IA), Anthropic/Claude (intelligence artificielle), Google LLC (Sheets + Calendar), Meta Platforms (Instagram + Messenger), Make/Celonis (automatisation).</p>
            <p><span className="font-medium text-gray-900">Article 7 — Droit applicable : </span>Droit français. Tribunaux d&apos;Auvergne-Rhône-Alpes compétents.</p>
          </div>
        </section>

        <hr className="border-gray-100 mb-14" />

        {/* Politique de confidentialité */}
        <section id="politique-confidentialite" className="mb-14">
          <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-6">
            Politique de confidentialité
          </h2>
          <dl className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <div><dt className="inline font-medium text-gray-900">Responsable : </dt><dd className="inline">HelixLab® — Elisa Tholin — <a href="mailto:contact@helixlab.fr" className="underline underline-offset-2 hover:text-gray-900">contact@helixlab.fr</a></dd></div>
            <div><dt className="inline font-medium text-gray-900">Données collectées : </dt><dd className="inline">Nom, email, téléphone des cliniques clientes</dd></div>
            <div><dt className="inline font-medium text-gray-900">Finalité : </dt><dd className="inline">Fourniture du service d&apos;agent IA d&apos;acquisition de clients</dd></div>
            <div><dt className="inline font-medium text-gray-900">Hébergement : </dt><dd className="inline">Netlify — conforme RGPD</dd></div>
            <div><dt className="inline font-medium text-gray-900">Sous-traitants : </dt><dd className="inline">Convocore/TIXAE Labs (agent IA), Anthropic/Claude (intelligence artificielle), Google LLC (Sheets + Calendar), Meta Platforms (Instagram + Messenger), Make/Celonis (automatisation)</dd></div>
            <div><dt className="inline font-medium text-gray-900">Durée de conservation : </dt><dd className="inline">Durée de l&apos;abonnement + 12 mois</dd></div>
            <div><dt className="inline font-medium text-gray-900">Droits : </dt><dd className="inline">Accès, rectification, effacement — contact <a href="mailto:contact@helixlab.fr" className="underline underline-offset-2 hover:text-gray-900">contact@helixlab.fr</a> — réclamation <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-gray-900">www.cnil.fr</a></dd></div>
            <div><dt className="inline font-medium text-gray-900">Cookies : </dt><dd className="inline">Techniques uniquement</dd></div>
          </dl>
        </section>

        <p className="text-xs text-gray-400 mt-10">Mise à jour : Juillet 2026 — Elisa Tholin, Helixlab</p>
      </div>
    </main>
  );
}
