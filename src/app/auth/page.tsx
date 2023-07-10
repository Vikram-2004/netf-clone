"use client";
import { FC, useCallback, useState } from "react";
import Inputs from "../../components/Inputs";

interface authProps {}

const Auth: FC<authProps> = ({}) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  return (
    <div className="relative h-screen w-screen bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full md:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="netflix" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-75 px-16 py-16 self-center mt-2 md:w-1/2 lg:w-2/5 lg:max-w-md rounded-md  w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Inputs
                  id="name"
                  label="Username"
                  type="text"
                  value={name}
                  onChange={(e: any) => setName(e.target.value)}
                />
              )}
              <Inputs
                id="email"
                label="email"
                type="email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
              <Inputs
                id="password"
                label="password"
                type="password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              Login
            </button>
            <p className="text-neutral-500 mt-12">
              {variant === "login"
                ? "First time to Netflix?"
                : "Have an account?"}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === "login" ? "Create an account" : "Sign in"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
