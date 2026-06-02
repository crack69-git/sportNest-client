"use client";
import React from "react";
import BookSection from "./BookSection";
import StartTime from "./StartTime";
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

const BokkingForm = ({ data }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };
  return (
    <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
      <div>
        <BookSection></BookSection>
      </div>
      <div>
        <StartTime data={data}></StartTime>
      </div>
      <div className="flex gap-2">
        <Button type="submit" className="w-full py-7">
          <Check />
          Confirm Booking
        </Button>
      </div>
    </Form>
  );
};

export default BokkingForm;
