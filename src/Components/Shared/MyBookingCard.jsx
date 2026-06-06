"use client";
import { Button, Card, CloseButton, Modal, Separator } from "@heroui/react";
import { CircleParkingOffIcon, FileX, Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const MyBookingCard = ({ data }) => {
  const router = useRouter();

  const handleCencel = async (bookingId) => {
    const { data: tokenData } = await authClient.token();
    // console.log("tokenData", tokenData);
    const res = await fetch(`http://localhost:5000/mybookings/${bookingId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokenData}`,
      },
    });
    const data = await res.json();
    // console.log(data);
    if (res.ok) {
      alert("Booking cancelled successfully");
      router.refresh();
    } else {
      alert("Failed to cancel booking");
    }
  };

  return (
    <>
      <div className="bg-gray-100">
        {data.length > 0 ? (
          data.map((booking) => (
            <Card
              key={booking.id}
              className="w-full items-stretch md:flex-row mb-3 "
            >
              <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
                <Image
                  src={booking.image}
                  fill
                  // width={120}
                  // height={120}

                  alt="Image"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3">
                <Card.Header className="gap-1">
                  <div className="flex items-center justify-between">
                    <Card.Title className="pr-8 text-xl font-semibold">
                      {booking.facilityname}
                    </Card.Title>
                    <p className="flex flex-col text-xl font-semibold">
                      ${booking.totalPrice.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <Card.Description className="bg-red-700 text-white w-fit px-5 rounded-4xl">
                      {booking.status}
                    </Card.Description>
                    <Card.Description className="bg-sky-700 text-white w-fit px-5 rounded-4xl">
                      {booking.facilitytype}
                    </Card.Description>
                  </div>
                  {/* <CloseButton
              aria-label="Close banner"
              className="absolute top-3 right-3"
            /> */}
                </Card.Header>
                <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex gap-2 flex-wrap items-center justify-between ">
                    <span className="text-sm font-medium text-foreground">
                      Players: {booking.capacity} People Max
                    </span>
                    <Separator orientation="vertical" />
                    <span className="text-sm font-medium text-foreground">
                      Start Time: {booking.startTime}
                    </span>
                    <Separator orientation="vertical" />
                    <span className="text-sm font-medium text-foreground">
                      Date: {booking.date}
                    </span>
                    <Separator orientation="vertical" />
                    <span className="text-sm font-medium text-foreground">
                      Booked for: {booking.hours} Hours
                    </span>
                  </div>
                  <Modal>
                    <Button variant="secondary" className="text-red-600">
                      Cancel Booking
                    </Button>
                    <Modal.Backdrop isDismissable={false}>
                      <Modal.Container>
                        <Modal.Dialog className="sm:max-w-[360px]">
                          <Modal.CloseTrigger />
                          <Modal.Header>
                            <Modal.Icon className="bg-default text-foreground">
                              <CircleParkingOffIcon className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Cancel Booking? </Modal.Heading>
                            <p className="text-sm leading-5 text-muted">
                              Please confirm if you want to cancel this booking.
                              This action cannot be undone.
                            </p>
                          </Modal.Header>
                          {/* <Modal.Body>
                        <p>
                          Try clicking outside this modal on the overlay - it
                          won't close. You must use the close button or press
                          ESC to dismiss it.
                        </p>
                      </Modal.Body> */}
                          <Modal.Footer>
                            <Button
                              onClick={() => handleCencel(booking._id)}
                              className="w-full bg-red-600"
                              slot="close"
                            >
                              Cancel Booking
                            </Button>
                          </Modal.Footer>
                        </Modal.Dialog>
                      </Modal.Container>
                    </Modal.Backdrop>
                  </Modal>
                </Card.Footer>
              </div>
            </Card>
          ))
        ) : (
          <div className="w-3/5 mx-auto text-center flex flex-col py-20 justify-center items-center gap-2 rounded-lg border bg-white">
            <FileX className="h-20 w-22" />
            <span className="text-xl">No bookings found</span>
          </div>
        )}
      </div>
    </>
  );
};

export default MyBookingCard;
