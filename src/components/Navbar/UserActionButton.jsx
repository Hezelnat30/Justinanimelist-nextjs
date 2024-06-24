import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";

export default async function UserActionButton() {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="w-1/4 flex justify-end gap-2 flex-wrap">
      {user && (
        <Link
          href="/users/dashboard"
          className="rounded-full order-2 flex justify-center items-center px-6 py-2 uppercase font-semibold bg-color-accent-200 hover:bg-color-accent-100 hover:text-color-primary hover:border-color-primary hover:shadow-lg transition-all"
        >
          Dashboard
        </Link>
      )}
      <Link
        href={actionURL}
        className="rounded-full order-1 flex justify-center items-center px-8 py-2 uppercase font-semibold bg-color-accent-200 hover:bg-color-accent-100 hover:text-color-primary hover:border-color-primary hover:shadow-lg transition-all"
      >
        {actionLabel}
      </Link>
    </div>
  );
}
