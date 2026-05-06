import React from "react";
import { Eye } from "lucide-react";
import Input from "../../../shared/components/Input";
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router";
import Button from "../../../shared/components/Button";

const LoginPage = () => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode:"onChange"
  })

  let navigate = useNavigate()

  let handleFormSubmit = (data) => {
    console.log(data)
    reset()
  }
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg flex overflow-hidden">

        {/* LEFT SIDE */}
        <div className="w-1/2 bg-linear-to-br from-blue-600 to-blue-800 text-white p-10 flex flex-col justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-white text-blue-600 p-2 rounded-md">
              ✦
            </div>
            <h2 className="font-semibold text-lg">ERP Admin</h2>
          </div>

          {/* Content */}
          <div>
            <h1 className="text-3xl font-bold mb-4 leading-snug">
              Enterprise Intelligence Redefined.
            </h1>
            <p className="text-blue-100 text-sm">
              Manage your workforce with a terminal designed for high-level
              decision making and serene clarity.
            </p>
          </div>

          {/* Footer Info */}
          <div className="flex justify-between text-sm text-blue-200">
            <div>
              <p className="uppercase text-xs">Status</p>
              <p className="text-white">System Nominal</p>
            </div>
            <div>
              <p className="uppercase text-xs">Security</p>
              <p className="text-white">AES-256 Encrypted</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-1/2 p-10">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            Welcome Back
          </h2>
          <p className="text-gray-500 mb-6 text-sm">
            Please enter your administrative credentials.
          </p>


          <form onSubmit={handleSubmit(handleFormSubmit)} className="mb-2" >

            {/* Email */}
            <Input
              register={register}
              name={"email"}
              rules={{
                required:"Email is required"
              }}
              placeholder={"employee@example.com"}
              type={"email"}
              label={"work Email"}
              error={errors.email}
            />

            {/* Password */}
            <Input
              register={register}
              name={"password"}
              rules={{
                required:"Password is required",
                minLength:{
                  value:6,
                  message:"Minimum 6 charachters are required!",
                }
              }}
              placeholder={"Enter your password"}
              type={"password"}
              label={"Password"}
              error={errors.password}
            />


            {/* Button */}
            <Button text={"Sign In"} />
          </form>

          <div className="text-center text-[12px]">
            <p>Don't have an account? <span onClick={() => navigate("/register")} className="text-blue-800 cursor-pointer">Register Here</span></p>
          </div>

          {/* Footer */}
          <p className="text-xs text-gray-400 text-center mt-4">
            Protected by Multi-Factor Authentication. <br />
            Confidential Internal Access Only.
          </p>
        </div>
      </div>

      {/* Support Button */}
      <div className="absolute bottom-6 right-6 bg-white shadow-md rounded-full px-4 py-2 text-sm flex items-center gap-2">
        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
        Need Assistance? <span className="text-blue-600 font-medium">Support</span>
      </div>
    </div>
  );
};

export default LoginPage;