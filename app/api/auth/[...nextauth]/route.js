import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import TwitterProvider from "next-auth/providers/twitter";
import { fetchUserData } from '../../../../pages/api/twitter'; 
const handler = NextAuth({
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: "2.0",
      callbacks: {
        async session(session, user) {
          console.log('session callback triggered');
          // Fetch additional user data using Twitter API or any other source
          const additionalData = await fetchUserData(user.accessToken);
    
          // Merge the additional data into the session object
          session.user = { ...session.user, ...additionalData };

          session.debugData = {
            key1: 'value1',
            key2: 'value2',
            // Add more hardcoded data as needed
          };

          return session;
        },
      },
      
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});

export { handler as GET, handler as POST };
