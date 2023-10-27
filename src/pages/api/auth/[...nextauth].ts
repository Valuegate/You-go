// import { AUTH_ROUTES } from '@services/routes';
import { AUTH_ROUTES } from "../../../services/routes";
import axios from "axios";
import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
    CredentialsProvider({
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: {
          type: "text",
        },
        password: {
          type: "password",
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials as any;
        const result = await axios.post(`${process.env.BASE_URL}auth/login`, {
          email: email.toLowerCase(),
          password,
        });
        // console.log("Getting here", result)
        // console.log("GETTING TO AUTHORIZE WITH EMAIL", email, password);
        const user = result?.data?.data;
        console.log("The user", user);
        console.log("SUCCESS", result.data.success);
        if (result.data.success) {
          return user;
        } else {
          throw new Error("Invalid username or password");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 6 * 24,
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      //   console.log("Token NOW", token);
      console.log("TRIGGER", trigger);
      console.log("SESSION", session);
      console.log("");
      if (trigger === "update" && session) {
        return { ...token, ...session?.user };
      }
      return { ...token, ...user };
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.user = token as any;
      console.log("CURRENT SESSION", session);
      return session;
    },
    // async signIn() {
    //   return true;
    // },
    // async redirect({ url, baseUrl }) {
    //   return "/buyer";
    // },
  },
  pages: {
    signIn: "/login",
    // error: "/login",
  },
};

export default NextAuth(authOptions);
// const handler = NextAuth(authOptions)

// export { handler as GET, handler as POST };
