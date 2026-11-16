const basePath = process.env.BASE_PATH ?? ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  ...(basePath ? { basePath } : {}),
  trailingSlash: true,
  images: { unoptimized: true },
}

export default nextConfig