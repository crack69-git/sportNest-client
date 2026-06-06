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
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import Link from "next/link";

const RegisterPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signUp.email({
      name: user.name, // required
      email: user.email, // required
      password: user.password, // required
      image: user.imageLink,
      callbackURL: "/",
    });
    if (data) {
      toast.success("Registration successful! ");
      redirect("/login");
    } else {
      toast.error(error.message || "Registration failed. Please try again.");
    }
  };
  return (
    <div className="bg-[#003057] text-white p-4 rounded-lg w-3/12 mx-auto my-20">
      <h2 className="text-4xl font-bold">Register</h2>
      <p className="text-lg font-semibold text-gray-300 mb-10">
        Create a new account
      </p>
      <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
        <TextField isRequired name="name" type="text">
          <Label className="text-white text-lg">Name</Label>
          <Input placeholder="John Doe" />
          <FieldError />
        </TextField>
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
        <TextField isRequired name="imageLink" type="text">
          <Label className="text-white text-lg">Image Link</Label>
          <Input placeholder="https://example.com/image.jpg" />
          <FieldError />
        </TextField>
        <TextField isRequired minLength={8} name="password" type="password">
          <Label className="text-white text-lg">Password</Label>
          <Input placeholder="Enter your password" />
          <FieldError />
        </TextField>
        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
        <p className="flex ">
          Already Have an Account?{" "}
          <Link className="underline active:text-blue-500" href="/login">
            Login
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default RegisterPage;
