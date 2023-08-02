import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import TwitterProvider from "next-auth/providers/twitter";

const handler = NextAuth({
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: "2.0",
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks:{
    async jwt({ token, user, session, account, profile }) {
      if(user){
        return{
          ...session,
         myObj:{
          my_token: token,
          my_session: session,
          my_account: account,
          my_profile:profile,
        }
        }
      }
      return token;
    },
    async session({ session, user, token }){
      return {
        ...session,
        user:{
          ...session.user,
          
        },
       
      };
      return session;
    },
  },
  secret:process.env.NEXTAUTH_SECRET,
  session:{
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV==="development"
});

export { handler as GET, handler as POST };

