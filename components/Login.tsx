"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ChatGPTLogo from "../public/ChatGPT_logo.svg";
import GoogleLogo from "../public/GoogleLogo.svg";

const Login = () => {
  const router = useRouter();

  return (
    <div className="bg-[#74AA9C] h-screen flex flex-col items-center justify-center text-center">
      <Image src={ChatGPTLogo} width={300} height={300} alt="logo" />
      <span className="text-white font-bold text-3xl pb-5">
        Welcome to ChatGPT
      </span>
      <button
        className="text-[#74AA9C] bg-white font-bold text-3xl loginButton"
        onClick={() => {
          signIn("google");
          router.replace("/");
        }}
      >
        <Image
          className="inline-flex mr-3"
          src={GoogleLogo}
          width={30}
          height={30}
          alt="googleLogo"
        />
        Sign In with Google
      </button>
    </div>
  );
};

export default Login;
