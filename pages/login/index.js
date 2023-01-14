import React, { useRef } from "react";
import Image from "next/image";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { HiMail, HiLockClosed } from "react-icons/hi";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";

import LogoImage from "../../common/assets/image/favicon.png";

const SignIn = () => {
  const router = useRouter();
  const emailRef = useRef();
  const nameRef = useRef();
  const addressRef = useRef();
  const idRef = useRef();
  const passwordRef = useRef();
  const { signIn, user } = useAuth();

  const [isLogin, setIsLogin] = React.useState(true);

  const handleChangeLogin = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // await signIn(emailRef.current.value, passwordRef.current.value);
      // console.log(user);
      localStorage.setItem("user", emailRef.current.value);

      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="grid h-screen place-items-center bg-white">
        <div
          className={`flex bg-slate-50 shadow-lg h-[${
            isLogin ? "350px" : "480px"
          }]`}
        >
          <div className="h-full sm:w-0 lg:w-1/2 lg:p-24 sm:p-0 bg-[#F8F7F7] sm:hidden">
            <Image
              src={LogoImage}
              width={200}
              alt="Logo"
              height={200}
              // className="sm:w-0 lg:w-10"
            />
          </div>
          <div>
            {/** Auth Fields **/}
            <form
              className="flex flex-col gap-4 p-10 lg:w-[25rem] sm:w-full"
              onSubmit={handleSubmit}
            >
              <div className="flex justify-center">
                <h1 className="text-2xl font-bold text-[#00AEE8]">Sign In</h1>
              </div>
              <TextInput
                id="email4"
                type="email"
                ref={emailRef}
                placeholder="Email"
                required={true}
                icon={HiMail}
              />
              {!isLogin ? (
                <TextInput
                  id="name"
                  type="text"
                  ref={nameRef}
                  placeholder="Full legal name"
                  required={true}
                  icon={HiMail}
                />
              ) : null}
              {!isLogin ? (
                <TextInput
                  id="natId"
                  type="text"
                  ref={idRef}
                  placeholder="National ID/Passport"
                  required={true}
                  icon={HiMail}
                />
              ) : null}
              {!isLogin ? (
                <TextInput
                  id="address"
                  type="text"
                  ref={addressRef}
                  placeholder="Address"
                  required={true}
                  icon={HiMail}
                />
              ) : null}
              <TextInput
                id="password"
                type="password"
                ref={passwordRef}
                placeholder="Password"
                required={true}
                icon={HiLockClosed}
              />

              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <Button type="submit" className="bg-[#00AEE8] rounded-md">
                Submit
              </Button>

              <div className="flex justify-end mb-10">
                <a href="#" className="text-black text-sm">
                  {" "}
                  {isLogin
                    ? "Dont have an account?"
                    : "Already have an account?"}{" "}
                </a>

                <a
                  href="#"
                  className="text-[#00AEE8] text-sm font-bold ml-2"
                  onClick={() => {
                    handleChangeLogin();
                  }}
                >
                  {isLogin ? "Sign Up" : "Sign In"}
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
