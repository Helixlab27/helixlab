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
            <div><dt className="inline font-medium text-gray-900">Email : </dt><dd className="inline"><a href="mailto:helixlab27@gmail.com" className="underline underline-offset-2 hover:text-gray-900">helixlab27@gmail.com</a></dd></div>
            <div><dt className="inline font-medium text-gray-900">Site : </dt><dd className="inline">helixlab.fr</dd></div>
            <div><dt className="inline font-medium text-gray-900">Localisation : </dt><dd className="inline">Auvergne-Rhône-Alpes, France</dd></div>
            <div><dt className="inline font-medium text-gray-900">Hébergement : </dt><dd className="inline">Vercel Inc. — 340 Pine Street, San Francisco, CA 94104, USA</dd></div>
          </dl>
        </section>

        <hr className="border-gray-100 mb-14" />

        {/* CGV */}
        <section className="mb-14">
          <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-6">
            Conditions générales de vente
          </h2>
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <p><span className="font-medium text-gray-900">Article 1 — Objet : </span>Les présentes CGV régissent les relations entre HelixLab® et tout professionnel souscrivant au service de relance automatique de prospects.</p>
            <p><span className="font-medium text-gray-900">Article 2 — Prix : </span>Sur devis personnalisé. TVA non applicable — article 293 B du CGI.</p>
            <p><span className="font-medium text-gray-900">Article 3 — Durée : </span>Abonnement mensuel sans engagement. Résiliation par email à <a href="mailto:helixlab27@gmail.com" className="underline underline-offset-2 hover:text-gray-900">helixlab27@gmail.com</a> avec 30 jours de préavis.</p>
            <p><span className="font-medium text-gray-900">Article 4 — Paiement : </span>Par virement bancaire.</p>
            <p><span className="font-medium text-gray-900">Article 5 — Responsabilité : </span>HelixLab® est soumis à une obligation de moyens. Responsabilité limitée au montant mensuel.</p>
            <p><span className="font-medium text-gray-900">Article 6 — Droit applicable : </span>Droit français. Tribunaux d&apos;Auvergne-Rhône-Alpes.</p>
          </div>
        </section>

        <hr className="border-gray-100 mb-14" />

        {/* Politique de confidentialité */}
        <section className="mb-14">
          <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-6">
            Politique de confidentialité
          </h2>
          <dl className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <div><dt className="inline font-medium text-gray-900">Responsable : </dt><dd className="inline">HelixLab® — Elisa Tholin — <a href="mailto:helixlab27@gmail.com" className="underline underline-offset-2 hover:text-gray-900">helixlab27@gmail.com</a></dd></div>
            <div><dt className="inline font-medium text-gray-900">Données collectées : </dt><dd className="inline">Nom, email, téléphone des cliniques clientes</dd></div>
            <div><dt className="inline font-medium text-gray-900">Finalité : </dt><dd className="inline">Fourniture du service de relance automatique</dd></div>
            <div><dt className="inline font-medium text-gray-900">Hébergement : </dt><dd className="inline">Vercel — conforme RGPD</dd></div>
            <div><dt className="inline font-medium text-gray-900">Sous-traitants : </dt><dd className="inline">Anthropic (Claude AI), Twilio (WhatsApp), Make (automatisation), Google Sheets (données)</dd></div>
            <div><dt className="inline font-medium text-gray-900">Durée de conservation : </dt><dd className="inline">Durée de l&apos;abonnement + 12 mois</dd></div>
            <div><dt className="inline font-medium text-gray-900">Droits : </dt><dd className="inline">Accès, rectification, effacement — contact <a href="mailto:helixlab27@gmail.com" className="underline underline-offset-2 hover:text-gray-900">helixlab27@gmail.com</a> — réclamation <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-gray-900">www.cnil.fr</a></dd></div>
            <div><dt className="inline font-medium text-gray-900">Cookies : </dt><dd className="inline">Techniques uniquement</dd></div>
          </dl>
        </section>

        <p className="text-xs text-gray-400 mt-10">Mise à jour : Juin 2026</p>
      </div>
    </main>
  );
}
