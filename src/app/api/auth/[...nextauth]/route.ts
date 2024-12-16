// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId:  process.env.GOOGLE_CLIENT_ID || "24997519628-ghakg3k8o39e9qmm7psvs498iecocus9.apps.googleusercontent.com",
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET || "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",
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET || "Ey7nTKnggBc0bRN8WUjyShw2qzOZ6KW4fUyqcKBePxY=",
//   debug: true,
// };
// export const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
// // src/app/api/auth/[...nextauth]/route.js
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
  pages: {
    signIn: "/login", // Custom sign-in page
  },
  secret: process.env.NEXTAUTH_SECRET, // Required for JWT
});

export { handler as GET, handler as POST };