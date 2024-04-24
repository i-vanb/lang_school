import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

import type { NextAuthConfig } from "next-auth";
import {SignInSchema} from "@/lib/db/SignDTO";
import {getUserByEmail} from "@/lib/db/user";
import bcryptjs from "bcryptjs";

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      // @ts-ignore
      authorize: async (credentials) => {

        const validatedFields = SignInSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password} = validatedFields.data;
          let [user] = await getUserByEmail(email);


          if(!user || !user.password) return null;

          const match = await bcryptjs.compare(password, user.password);
          if(match) return user;
        }

        return null;
      },
    })
  ],
  pages: {
    signIn: '/auth/signin'
  }
} satisfies NextAuthConfig;