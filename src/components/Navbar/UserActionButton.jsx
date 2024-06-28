import { authClientSession } from "@/libs/authClient-libs";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UserActionButton() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await authClientSession();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user session:", error);
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  const actionLabel = user ? "Sign Out" : "Sign Up";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="w-full sm:w-1/4 flex justify-end gap-2 flex-wrap">
      {user && (
        <Link
          href="/users/dashboard"
          className="rounded-full sm:order-2 flex justify-center items-center px-6 py-2 uppercase font-semibold bg-color-accent-200 hover:bg-color-accent-100 hover:text-color-primary hover:border-color-primary hover:shadow-lg transition-all"
        >
          Dashboard
        </Link>
      )}
      <Link
        href={actionURL}
        className="rounded-full sm:order-1 flex justify-center items-center h-10 sm:h-auto px-6 sm:px-8 sm:py-2 uppercase font-semibold bg-color-accent-200 hover:bg-color-accent-100 hover:text-color-primary hover:border-color-primary hover:shadow-lg transition-all"
      >
        {actionLabel}
      </Link>
    </div>
  );
}
