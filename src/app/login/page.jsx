"use client";
import React from "react";

import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import { UserKey } from "lucide-react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const LoginSection = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    console.log(user);
    const { data, error } = await authClient.signIn.email({
      email: user.email, // required
      password: user.password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    if (data) {
      alert("Login successful! ");
      redirect("/");
    }
  };
  return (
    <div className="my-20  bg-[#003057] text-white w-3/12 mx-auto  p-4 rounded-lg">
      <div className="mx-auto">
        <h2 className="text-4xl font-bold">
          <UserKey />
          Login
        </h2>
        <p className="text-lg font-semibold text-gray-300 mb-10">
          Sign in to access your account
        </p>
        <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-white text-lg">Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          <TextField isRequired minLength={8} name="password" type="password">
            <Label className="text-white text-lg">Password</Label>
            <Input placeholder="Enter your password" />
            <FieldError />
          </TextField>
          <div className="flex gap-2">
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </div>
        </Form>
        <Separator className="my-4"></Separator>
        <Button variant="secondary" className="w-full mb-5">
          <Image src="/google.png" alt="Google Logo" width={20} height={20} />
          Sign In GOOGLE
        </Button>
        <p>
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginSection;
