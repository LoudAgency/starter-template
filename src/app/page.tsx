// Basepath per GitHub Pages - rilevato durante il build
const basePath = process.env.GITHUB_ACTIONS === 'true' && process.env.GITHUB_REPOSITORY 
  ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` 
  : '';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold">
          Hello World! 👋
        </h1>
        <p className="text-xl text-muted-foreground">
          Benvenuto nel Modern Starter Template
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href={`${basePath}/docs/`}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Vai alla Documentazione
          </a>
          <a 
            href={`${basePath}/template/`}
            className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-accent transition-colors"
          >
            Vedi il Template
          </a>
        </div>
      </div>
    </div>
  )
}