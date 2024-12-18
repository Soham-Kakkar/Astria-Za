import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  session: {
    strategy: "jwt", // Use JWT for session management
  },
  secret: process.env.NEXTAUTH_SECRET, // Required for JWT
  callbacks: {
    async signIn({ user, account, profile }) {
      // Check if the user's email ends with .iitjammu.ac.in
      if (user.email && user.email.endsWith('@iitjammu.ac.in')) {
        return true; // Allow sign in
      } else {
        return false; // Reject sign in
      }
    },
  },
});

export { handler as GET, handler as POST };