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
        async signIn(user, account, profile) {
          // Perform any additional actions or validations here
          console.log('User signed in:', user);
          console.log('Account information:', account);
          console.log('User profile:', profile);
    
          // Include the account object in the session
          user.account = account;
    
          return true;
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

/*

 console.log('session callback triggered');
          // Fetch additional user data using Twitter API or any other source
          const additionalData = await fetchUserData(user.accessToken);
    
          // Merge the additional data into the session object
          session.user = { ...session.user, ...additionalData };

*/