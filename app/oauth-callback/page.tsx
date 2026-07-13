export default function OAuthCallback() {
  return (
    <main className="bg-white min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="flex flex-col items-center justify-center text-center py-20">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 mb-3">
            Connexion réussie.
          </h1>
          <p className="text-sm text-gray-500">
            Vous pouvez fermer cette fenêtre.
          </p>
        </div>
      </div>
    </main>
  );
}
