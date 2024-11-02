"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export const GoogleAuthButton = () => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button variant="outline" className="w-full" disabled>
          <Loader2 className="size-4 animate-spin" />
          Please wait
        </Button>
      ) : (
        <Button variant="outline" className="w-full text-base">
          <FcGoogle className="size-4 mr-2 dark:invert" />
          Sign in with Google
        </Button>
      )}
    </>
  );
};

export const GithubAuthButton = () => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button variant="outline" className="w-full text-base" disabled>
          <Loader2 className="size-4 animate-spin" />
          Please wait
        </Button>
      ) : (
        <Button variant="outline" className="w-full text-base">
          <FaGithub className="size-4 mr-2 dark:invert" />
          Sign in with Github
        </Button>
      )}
    </>
  );
};

export const LogoutButton = () => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button variant="outline" className="w-full text-base" disabled>
          <Loader2 className="size-4 animate-spin" />
          Please wait
        </Button>
      ) : (
        <Button variant="outline" className="">
          Logout
        </Button>
      )}
    </>
  );
};
