import { DefaultUser } from "next-auth";

declare module "next-auth" {
  // eslint-disable-next-line no-unused-vars
  interface Session {
    user: {
      role: string;
      token: string;
    } & DefaultUser;
  }
}
