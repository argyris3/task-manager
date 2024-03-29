import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import Link from "next/link";

export default async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <header className="bg-gray-200 p-4 px-8">
      <div className="flex justify-between items-center">
        <Link href="/" className="logo text-lg lg:text-3xl">
          Task Manager
        </Link>
        <div>
          {session && (
            <>
              Γεια σου {session?.user?.name}
              <LogoutButton />
            </>
          )}
          {!session && (
            <>
              <LoginButton />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
