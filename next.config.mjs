import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "sportz-server.vercel.app", // if your backend serves images
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // if you use Cloudinary
      },
    ],
  },
};

export default nextConfig;
