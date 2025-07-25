// Utility per gestire il basePath in modo consistente
export function getBasePath(): string {
  // In produzione GitHub Pages, usa il nome del repository
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    const pathname = window.location.pathname;
    
    // Se siamo su GitHub Pages (*.github.io) e non è il sito principale dell'utente
    if (hostname.includes('github.io') && pathname !== '/') {
      const pathParts = pathname.split('/').filter(Boolean);
      if (pathParts.length > 0) {
        return `/${pathParts[0]}`;
      }
    }
  }
  
  // Durante il build, usa la variabile d'ambiente
  if (process.env.GITHUB_ACTIONS === 'true') {
    const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
    return repoName ? `/${repoName}` : '';
  }
  
  // In sviluppo locale, nessun basePath
  return '';
}

export function withBasePath(path: string): string {
  const basePath = getBasePath();
  return `${basePath}${path}`;
}