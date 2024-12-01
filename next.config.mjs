/** @type {import('next').NextConfig} */
import dotenv from 'dotenv'
dotenv.config();

const nextConfig = {
    // Other configurations
    env: {
      MONGO_URI: process.env.MONGO_URI,
    },
  };

export default nextConfig;
