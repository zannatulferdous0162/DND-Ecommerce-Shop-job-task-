import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { authContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const navigate=useNavigate()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const {user,createAccount,updateUserProfile,googleLogin}=useContext(authContext)
  const onSubmit = data => {
    createAccount(data.email, data.password)
    .then((userCredential)=>{
      const user = userCredential.user;
      console.log(user)
      navigate('/')
      toast.success('login success')
      updateUserProfile(data.name,data.photo)
      .then((userCredential)=>{
          const user = userCredential.user;
          console.log(user)
          toast.success('login success')
      })
    }) .catch(error=>{console.log(error)
      toast.error(error.message)
  //    toast.error(error.message)
 })
  }
  const handelGoogle=()=>{
    googleLogin()
    .then((result)=>{
        const user = result.user;
        console.log(user)
        toast.success('login success')
        navigate('/')
    })
 }
 if (user?.email) {
  navigate('/')
 }
    return (
        <div>
              <div className="flex font-poppins items-center justify-center">
    <div className="h-screen w-screen flex justify-center items-center dark:bg-gray-900">
    <div className="grid gap-8">
      <div
        id="back-div"
        className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4"
      >
        <div
          className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2"
        >
          <h1 className="pt-8 pb-6 font-bold dark:text-gray-400 text-5xl text-center cursor-default">
           Register
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label  className="mb-2  dark:text-gray-400 text-lg">Name</label>
              <input
                id="name"
                className="border p-3 dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                type="text"
                placeholder="Name"
                {...register("name", { required: true })}
              />
            </div>
            <div>
              <label  className="mb-2  dark:text-gray-400 text-lg">Photo URL</label>
              <input
                id="photo"
                className="border p-3 dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                type="url"
                placeholder="Photo Url"
                {...register("photo", { required: true })}
              />
            </div>
            <div>
              <label  className="mb-2  dark:text-gray-400 text-lg">Email</label>
              <input
                id="email"
                className="border p-3 dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <label  className="mb-2 dark:text-gray-400 text-lg">Password</label>
              <input
                id="password"
                className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </div>
          
            <button
              className="bg-gradient-to-r dark:text-gray-300 from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
              type="submit"
            >
             REGISTER
            </button>
          </form>
          <div className="flex flex-col mt-4 items-center justify-center text-sm">
            <h3 className="dark:text-gray-300">
              Don't have an account?
              <Link to='/login'
                className="group text-blue-400 transition-all duration-100 ease-in-out"
               
              >
                <span
                  className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                >
                 Login
                </span>
              </Link>
            </h3>
          </div>
      
          <div
            id="third-party-auth"
            className="flex items-center justify-center mt-5 flex-wrap"
          >
            <button onClick={handelGoogle}
              className="flex items-center gap-2 hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
            >
              <img
                className="max-w-[25px]"
                src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                alt="Google"
              />  <p> Sign In With Google</p>
            </button>
          </div>

         
        </div>
      </div>
      </div>
    </div>
  </div>
        </div>
    );
};

export default Register;