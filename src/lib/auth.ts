import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "./db";
import { User } from "@/models/User";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        await connectDB();

        const user = await User.findOne({
          email: credentials?.email,
        });

        if (!user) {
          throw new Error("User not found");
        }

        const isValid = await bcrypt.compare(
          credentials!.password,
          user.password
        );

        if (!isValid) {
          throw new Error("Invalid password");
        }

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
};