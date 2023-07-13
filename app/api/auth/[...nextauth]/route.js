import NextAuth from 'next-auth/next'
import GithubProvider from "next-auth/providers/github"
import TwitterProvider from "next-auth/providers/twitter"

const handler= NextAuth({
    providers: [
        TwitterProvider({
          clientId: process.env.TWITTER_CLIENT_ID,
          clientSecret: process.env.TWITTER_CLIENT_SECRET,
          version: "2.0",
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
          })
      ]
})

export {handler as GET, handler as POST}