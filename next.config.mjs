/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'images.pexels.com',
        port:''
      },
      {
        protocol:'https',
        hostname:'atsthryexavsiiqazqlf.supabase.co',
        port:''
      },
      {
        protocol:'https',
        hostname:'img.clerk.com'
      }
    ]
  }
};

export default nextConfig;
