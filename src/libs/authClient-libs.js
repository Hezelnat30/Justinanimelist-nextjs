import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getSession } from "next-auth/react";

export async function authClientSession() {
  const session = await getSession(authOption);
  return session?.user;
}
