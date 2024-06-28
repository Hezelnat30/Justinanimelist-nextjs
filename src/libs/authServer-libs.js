import { getServerSession } from "next-auth/next";
import { authOption } from "@/app/api/auth/[...nextauth]/route";

export async function authServerSession() {
  const session = await getServerSession(authOption);
  return session?.user;
}
