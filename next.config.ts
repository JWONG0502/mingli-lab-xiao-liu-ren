import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const githubBasePath = process.env.GITHUB_PAGES_BASE_PATH || "";
const projectRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  output: "export",
  turbopack: {
    root: projectRoot,
  },
  basePath: githubBasePath || undefined,
  assetPrefix: githubBasePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: githubBasePath,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
