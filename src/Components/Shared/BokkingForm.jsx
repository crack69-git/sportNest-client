"use client";
import React, { useState } from "react";
import BookSection from "./BookSection";
import StartTime from "./StartTime";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const BokkingForm = ({ data }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { data: session } = authClient.useSession();
  // console.log("session", session);
  const handleChange = (e) => {
    const hours = e.target.value;
    const price = hours * data.price;
    setTotalPrice(price);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formdata = Object.fromEntries(formData.entries());
    const currentDate = new Date();
    console.log("currentDate", currentDate);
    // console.log("data", data);
    // console.log("data", formdata);
    const bookingData = {
      id: data._id,
      email_id: session?.user?.id,
      email: session?.user?.email,
      facilitytype: data.facilitytype,
      facilityname: data.facilityname,
      image: data.imageLink,
      price: data.price,
      capacity: data.capacity,
      location: data.location,
      date: formdata.date,
      currentDate: currentDate,
      startTime: formdata.startTime,
      hours: formdata.hours,
      totalPrice: totalPrice,
      status: "pending",
    };
    const { data: tokenData } = await authClient.token();
    console.log("tokenData", tokenData);
    const booking = fetch("http://localhost:5000/mybookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokenData}`,
      },
      body: JSON.stringify(bookingData),
    });
    if (booking) {
      alert("Booking successful!");
      redirect("/my-booking");
    } else {
      alert("Booking failed. Please try again.");
    }
    // const bookingDataResponse = booking.json();
    // console.log("bookingDataResponse", bookingDataResponse);
  };

  return (
    <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
      <div>
        <BookSection></BookSection>
      </div>
      <div>
        <StartTime data={data}></StartTime>
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="hours">Hours</Label>
        <Input
          onChange={handleChange}
          name="hours"
          id="hours"
          placeholder="Enter hours"
          type="number"
          min="1"
        />
      </div>
      <div>
        <Card className="w-full border flex" variant="default">
          <p>Total Price: </p>
          <p>${totalPrice.toFixed(2) || "0.00"}</p>
        </Card>
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
