import Image from "next/image";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import Logo from "@/public/logo.png";
import { signIn } from "@/app/lib/auth";
import { GithubAuthButton, GoogleAuthButton } from "./SubmitButtons";

const AuthModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Try for Free</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[360px] py-10">
        <DialogHeader className="flex flex-row items-center justify-center gap-2">
          <Image src={Logo} alt="Logo" className="size-10 mt-1" />

          <h4 className="text-3xl font-semibold">
            Cal<span className="text-primary">Mate</span>
          </h4>
        </DialogHeader>

        <div className="flex flex-col items-center gap-4 mt-10">
          <form
            action={async () => {
              "use server";

              await signIn("google");
            }}
          >
            <GoogleAuthButton />
          </form>

          <form
            action={async () => {
              "use server";

              await signIn("github");
            }}
          >
            <GithubAuthButton />
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
