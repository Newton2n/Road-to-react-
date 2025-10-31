import React, { useState } from "react";

import authservice from "../../appwrite/auth";
import { login as authLogin } from "../store/authSlice";
import { Input, Button, Logo } from "./index";
import { useForm } from "react-hook-form";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    // const userData = useSelector((userData)=> userData.auth.userData);
    // console.log(userData)
  const { register, formState: { errors }, handleSubmit } = useForm();
 
  const [error, setError] = useState(null);
console.log(error)

  const login = async (data) => {
    console.log(data)
    setError("");
    try {
      const session =await authservice.login(data);
      console.log("session ", session)
      if (session) {
        const userData =await authservice.getCurrentUser();
        console.log("user data: ",userData)
        if (userData) dispatch(authLogin(userData));
        navigate("/");
        //  console.log(errors.gmail,errors.password)
      }
    } catch (error) {
      setError(`${error.message}: error occurred in log in system`);
    }

  };
  return (
    <div className="flex items-center justify-center w-full">
      <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
              <div className='space-y-5'>
                <Input label={'email'} type={'email'} placeholder ={'enter you email'} {
                    ...register('email',{
                        required :true,
                        validate : {
                            matchPattern : (value)=>
                                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i.test(value)||"enter a valid email address",
                            
                        }
                    })
                }/>
                 {errors.email && <p className="text-red-600" role="alert">{errors.email.message}</p>}
              </div>
              <div className='space-y-5'>
                <Input label={'password'} type={'password'} placeholder ={'enter you password'} {
                    ...register('password',{
                        required :true,
                        validate : {
                          matchPattern :(value)=>
                            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value) || 'enter a strong password at least 8 characters must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number'
                          
                        }
                    })
                }/>
                {errors.password && <p className="text-red-500" role="alert">{errors.password.message}</p>}
                <Button type="submit" children={'Submit'} className="w-full"/>
              </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
