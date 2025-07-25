import type {NextConfig} from "next";

// Per GitHub Pages, rileva automaticamente il repository
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Per GitHub Pages: aggiunge basePath automaticamente
  basePath: isGitHubActions && repoName ? `/${repoName}` : "",
  assetPrefix: isGitHubActions && repoName ? `/${repoName}/` : "",
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
