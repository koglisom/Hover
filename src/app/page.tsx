export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 text-zinc-100 p-6">
      <main className="flex flex-col items-center max-w-2xl text-center space-y-8">
        <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-sm text-zinc-400 backdrop-blur">
          <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2"></span>
          Bienvenue sur Hover
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-white">
          Hover
        </h1>
        
        <p className="text-lg text-zinc-400 max-w-lg">
          Votre application Next.js est prête. Développez de nouvelles fonctionnalités en modifiant la structure dans le dossier <code className="text-indigo-400 bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">src/app/</code>.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
          >
            Documentation Next.js
          </a>
          <a
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-800 bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-zinc-300 hover:bg-zinc-800 transition-colors"
          >
            Tailwind CSS
          </a>
        </div>
      </main>
    </div>
  );
}
