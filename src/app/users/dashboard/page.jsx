import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";

export default async function Page() {
  const user = await authUserSession();
  const { name, image } = user;
  return (
    <div className="text-color-secondary pt-32 text-3xl uppercase font-bold">
      <h2>Dashboard</h2>
      <h4>Hello, {name}</h4>
      <Image
        src={image}
        width={200}
        height={200}
        className="rounded-full"
        alt="profile"
      />
    </div>
  );
}
