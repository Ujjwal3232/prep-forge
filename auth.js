import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import { User } from "./model/user-model";
import { dbConnect } from "@/service/mongoose";

export const {
  handlers,
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "credentials",

      async authorize(credentials) {
        console.log("============= AUTHORIZE START =============");

        console.log("Incoming Credentials:", credentials);

        if (!credentials?.email || !credentials?.password) {
          console.log("❌ Missing email or password");
          throw new Error("Email and Password are required");
        }

        try {
          console.log("⏳ Connecting to DB...");
          await dbConnect();
          console.log("✅ DB Connected");

          console.log("🔍 Finding user with email:", credentials.email);

          const user = await User.findOne({
            email: credentials.email,
          });

          console.log("👤 User Found:", user);

          if (!user) {
            console.log("❌ User not found in database");
            throw new Error("User not found");
          }

          console.log("🔐 Comparing passwords...");

          const isPasswordMatched = await bcrypt.compare(
            credentials.password,
            user.password
          );

          console.log("🔑 Password Match Result:", isPasswordMatched);

          if (!isPasswordMatched) {
            console.log("❌ Invalid password");
            throw new Error("Invalid password");
          }

          const loggedInUser = {
            id: user._id.toString(),
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
          };

          console.log("✅ LOGIN SUCCESS");
          console.log("Returning User:", loggedInUser);

          console.log("============= AUTHORIZE END =============");

          return loggedInUser;

        } catch (error) {
          console.log("❌ AUTHORIZE ERROR");
          console.log(error);

          throw new Error(error.message);
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {

      console.log("========== JWT CALLBACK ==========");
      console.log("TOKEN BEFORE:", token);
      console.log("USER:", user);

      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
      }

      console.log("TOKEN AFTER:", token);

      return token;
    },

    async session({ session, token }) {

      console.log("========== SESSION CALLBACK ==========");
      console.log("SESSION BEFORE:", session);
      console.log("TOKEN:", token);

      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.firstName = token.firstName;
        session.user.lastName = token.lastName;
      }

      console.log("SESSION AFTER:", session);

      return session;
    },
  },

  pages: {
    signIn: "/login",
  },

  secret: process.env.AUTH_SECRET,
});