/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ["avatars.githubusercontent.com","pbs.twimg.com","https://twitter.com/","https://abs.twimg.com"]
    },
    experimental:{
        serverActions:true,
       
    },
    reactStrictMode: false,
}

module.exports = nextConfig
