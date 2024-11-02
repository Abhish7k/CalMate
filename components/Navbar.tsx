import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";
import AuthModal from "./AuthModal";
import { auth, signOut } from "@/app/lib/auth";
import { LogoutButton } from "./SubmitButtons";

const Navbar = async () => {
  const authenticatedUser = await auth();

  return (
    <div className="relative flex flex-col w-full px-20 py-5 mx-auto md:flex-row md:items-center md:justify-between border">
      <div className="flex flex-row items-center justify-between text-sm lg:justify-start">
        <Link href="/" className="flex items-center gap-2">
          <Image src={Logo} className="size-10" alt="Logo" />

          <h4 className="text-3xl font-semibold">
            Cal<span className="text-primary">Mate</span>
          </h4>
        </Link>
        <div className="md:hidden">
          Theme Toggle
          {/* <ThemeToggle /> */}
        </div>
      </div>

      <nav className="hidden md:flex md:justify-end md:space-x-4">
        {/* <ThemeToggle /> */}

        {authenticatedUser ? (
          <form
            action={async () => {
              "use server";

              await signOut();
            }}
          >
            <LogoutButton />
          </form>
        ) : (
          <AuthModal />
        )}
      </nav>
    </div>
  );
};

export default Navbar;
