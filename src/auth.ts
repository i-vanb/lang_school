import NextAuth from "next-auth"
import authConfig from "@/auth.config"
import {DrizzleAdapter} from "@auth/drizzle-adapter";
import {db} from "@/lib/db";
import {getUserById} from "@/lib/db/user";


export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    async jwt({token}) {
      if(!token.sub) return token;
      const user = await getUserById(token.sub);
      if(!user) return token;
      token.role = user.role;
      return token
    },
    async session({token, session}) {
      console.log('token', token)
      if(token.sub && session.user) {
        session.user.id = token.sub
      }
      if(token.role && session.user) {
        session.user.role = token.role as string
      }
      return session
    }
  },
  adapter: DrizzleAdapter(db),
  session: {
    strategy: 'jwt',
  },
  ...authConfig
})