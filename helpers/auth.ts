import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_ID as string,
      clientSecret: process.env.NEXT_GOOGLE_SECRET as string,
    }),
    // ...add more providers here
  ],
};
