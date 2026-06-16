"use client";
import {
  FieldGroup,
  Fieldset,
  Input,
  Label,
  TextField,
  ListBox,
  Select,
  TextArea,
  Button,
  Separator,
} from "@heroui/react";
import { FloppyDisk } from "@gravity-ui/icons";
import { ClockAlert, Mail, Pencil, RotateCcw } from "lucide-react";
import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { redirect, useRouter } from "next/navigation";
import { toast } from "react-toastify";

const AddFacility = () => {
  const router = useRouter();
  const [facilityType, setFacilityType] = useState("");

  const boxItem = (
    <>
      <ListBox.Item id="basketball" textValue="Basketball">
        Basketball
        <ListBox.ItemIndicator />
      </ListBox.Item>
      <ListBox.Item id="tennis" textValue="Tennis">
        Tennis
        <ListBox.ItemIndicator />
      </ListBox.Item>
      <ListBox.Item id="Badminton" textValue="Badminton">
        Badminton
        <ListBox.ItemIndicator />
      </ListBox.Item>
      <ListBox.Item id="Cricket" textValue="Cricket">
        Cricket
        <ListBox.ItemIndicator />
      </ListBox.Item>
      <ListBox.Item id="SwimmingPool" textValue="Swimming Pool">
        Swimming Pool
        <ListBox.ItemIndicator />
      </ListBox.Item>
    </>
  );
  const timeSlotItem = (
    <>
      <label className="cursor-pointer">
        <input
          type="checkbox"
          name="timeslots"
          value="6am"
          className="peer sr-only "
        />
        <div className="h-full border p-3 dark:border dark:border-gray-700 rounded-lg peer-checked:bg-emerald-50 peer-checked:border-emerald-500 dark:peer-checked:bg-emerald-900">
          6.00 AM
        </div>
      </label>
      <label className="cursor-pointer">
        <input
          type="checkbox"
          name="timeslots"
          value="7am"
          className="peer sr-only"
        />
        <div className="h-full border p-3 dark:border dark:border-gray-700 rounded-lg peer-checked:bg-emerald-50 peer-checked:border-emerald-500 dark:peer-checked:bg-emerald-900">
          7.00 AM
        </div>
      </label>
      <label className="cursor-pointer">
        <input
          type="checkbox"
          name="timeslots"
          value="8am"
          className="peer sr-only"
        />
        <div className="h-full border p-3 dark:border dark:border-gray-700 rounded-lg peer-checked:bg-emerald-50 peer-checked:border-emerald-500 dark:peer-checked:bg-emerald-900">
          8.00 AM
        </div>
      </label>
      <label className="cursor-pointer">
        <input
          type="checkbox"
          name="timeslots"
          value="9am"
          className="peer sr-only"
        />
        <div className="h-full border p-3 dark:border dark:border-gray-700 rounded-lg peer-checked:bg-emerald-50 peer-checked:border-emerald-500 dark:peer-checked:bg-emerald-900">
          9.00 AM
        </div>
      </label>
      <label className="cursor-pointer">
        <input
          type="checkbox"
          name="timeslots"
          value="10am"
          className="peer sr-only"
        />
        <div className="h-full border p-3 dark:border dark:border-gray-700 rounded-lg peer-checked:bg-emerald-50 peer-checked:border-emerald-500 dark:peer-checked:bg-emerald-900">
          10.00 AM
        </div>
      </label>
      <label className="cursor-pointer">
        <input
          type="checkbox"
          name="timeslots"
          value="11am"
          className="peer sr-only"
        />
        <div className="h-full border p-3 dark:border dark:border-gray-700 rounded-lg peer-checked:bg-emerald-50 peer-checked:border-emerald-500 dark:peer-checked:bg-emerald-900">
          11.00 AM
        </div>
      </label>
      <label className="cursor-pointer">
        <input
          type="checkbox"
          name="timeslots"
          value="12pm"
          className="peer sr-only"
        />
        <div className="h-full border p-3 dark:border dark:border-gray-700 rounded-lg peer-checked:bg-emerald-50 peer-checked:border-emerald-500 dark:peer-checked:bg-emerald-900">
          12.00 PM
        </div>
      </label>
      <label className="cursor-pointer">
        <input
          type="checkbox"
          name="timeslots"
          value="3pm"
          className="peer sr-only"
        />
        <div className="h-full border p-3 dark:border dark:border-gray-700 rounded-lg peer-checked:bg-emerald-50 peer-checked:border-emerald-500 dark:peer-checked:bg-emerald-900">
          3.00 PM
        </div>
      </label>
      <label className="cursor-pointer">
        <input
          type="checkbox"
          name="timeslots"
          value="4pm"
          className="peer sr-only"
        />
        <div className="h-full border p-3 dark:border dark:border-gray-700 rounded-lg peer-checked:bg-emerald-50 peer-checked:border-emerald-500 dark:peer-checked:bg-emerald-900">
          4.00 PM
        </div>
      </label>
      <label className="cursor-pointer">
        <input
          type="checkbox"
          name="timeslots"
          value="5pm"
          className="peer sr-only"
        />
        <div className="h-full border p-3 dark:border dark:border-gray-700 rounded-lg peer-checked:bg-emerald-50 peer-checked:border-emerald-500 dark:peer-checked:bg-emerald-900">
          5.00 PM
        </div>
      </label>
      <label className="cursor-pointer">
        <input
          type="checkbox"
          name="timeslots"
          value="6pm"
          className="peer sr-only"
        />
        <div className="h-full border p-3 dark:border dark:border-gray-700 rounded-lg peer-checked:bg-emerald-50 peer-checked:border-emerald-500 dark:peer-checked:bg-emerald-900">
          6.00 PM
        </div>
      </label>
      <label className="cursor-pointer">
        <input
          type="checkbox"
          name="timeslots"
          value="7pm"
          className="peer sr-only"
        />
        <div className="h-full border p-3 dark:border dark:border-gray-700 rounded-lg peer-checked:bg-emerald-50 peer-checked:border-emerald-500 dark:peer-checked:bg-emerald-900">
          7.00 PM
        </div>
      </label>
      <label className="cursor-pointer">
        <input
          type="checkbox"
          name="timeslots"
          value="8pm"
          className="peer sr-only"
        />
        <div className="h-full border p-3 dark:border dark:border-gray-700 rounded-lg peer-checked:bg-emerald-50 peer-checked:border-emerald-500 dark:peer-checked:bg-emerald-900">
          8.00 PM
        </div>
      </label>
      <label className="cursor-pointer">
        <input
          type="checkbox"
          name="timeslots"
          value="9pm"
          className="peer sr-only"
        />
        <div className="h-full border p-3 dark:border dark:border-gray-700 rounded-lg peer-checked:bg-emerald-50 peer-checked:border-emerald-500 dark:peer-checked:bg-emerald-900">
          9.00 PM
        </div>
      </label>
      <label className="cursor-pointer">
        <input
          type="checkbox"
          name="timeslots"
          value="10pm"
          className="peer sr-only"
        />
        <div className="h-full border p-3 dark:border dark:border-gray-700 rounded-lg peer-checked:bg-emerald-50 peer-checked:border-emerald-500 dark:peer-checked:bg-emerald-900">
          10.00 PM
        </div>
      </label>
      <label className="cursor-pointer">
        <input
          type="checkbox"
          name="timeslots"
          value="11pm"
          className="peer sr-only"
        />
        <div className="h-full border p-3 dark:border dark:border-gray-700 rounded-lg peer-checked:bg-emerald-50 peer-checked:border-emerald-500 dark:peer-checked:bg-emerald-900">
          11.00 PM
        </div>
      </label>
      <label className="cursor-pointer">
        <input
          type="checkbox"
          name="timeslots"
          value="12pm"
          className="peer sr-only"
        />
        <div className="h-full border p-3 dark:border dark:border-gray-700 rounded-lg peer-checked:bg-emerald-50 peer-checked:border-emerald-500 dark:peer-checked:bg-emerald-900">
          12.00 PM
        </div>
      </label>
    </>
  );

  const { data: session } = authClient.useSession();
  const user = session?.user;
  const userId = session?.user.id;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const timeslots = formData.getAll("timeslots");
    if (timeslots.length) data.timeslots = timeslots;
    data.userId = userId;
    const { data: tokenData } = await authClient.token();

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokenData.token}`,
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      toast.success("Facility added successfully!");
      redirect("/manage-facility");
      // router.refresh();
    } else {
      toast.error("Failed to add facility. Please try again.");
    }
    const resData = await res.json();
  };
  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="bg-orange-400 h-10 w-10 rounded-full flex items-center justify-center">
          <Pencil className="text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Basic Details</h2>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="mt-10">
        <input type="hidden" name="facilitytype" value={facilityType} />
        <Fieldset>
          <FieldGroup className="grid max-sm:grid-cols-2 grid-cols-4 gap-4">
            <TextField
              isRequired
              name="facilityname"
              className="max-sm:col-span-3 col-span-2"
            >
              <Label>Facility Name</Label>
              <Input
                placeholder="John Doe"
                className="shadow-none border border-gray-300"
              />
            </TextField>
            <Select
              isRequired
              className="max-sm:col-span-3 col-span-2 "
              placeholder="Select one"
              onSelectionChange={(keys) => {
                if (keys instanceof Set) {
                  const firstKey = Array.from(keys)[0];
                  setFacilityType(firstKey ? String(firstKey) : "");
                  return;
                }
                setFacilityType(keys ? String(keys) : "");
              }}
            >
              <Label>Facility Type</Label>
              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>{boxItem}</ListBox>
              </Select.Popover>
            </Select>
            <TextField isRequired name="imageLink" className="col-span-2">
              <Label>Image Link</Label>
              <Input
                placeholder="https://example.com/image.jpg"
                className="shadow-none border border-gray-300"
              />
            </TextField>
            <TextField
              isRequired
              name="location"
              className="max-sm:col-span-3 col-span-2"
            >
              <Label>Location</Label>
              <Input
                placeholder="City, State"
                className="shadow-none border border-gray-300"
              ></Input>
            </TextField>
            <TextField
              isRequired
              name="price"
              className="max-sm:col-span-3 col-span-1"
            >
              <Label>Price/Hour($)</Label>
              <Input
                placeholder="$00.00"
                className="shadow-none border border-gray-300"
              />
            </TextField>
            <TextField
              isRequired
              name="capacity"
              className="max-sm:col-span-3 col-span-1"
            >
              <Label>Capacity</Label>
              <Input
                placeholder="0"
                className="shadow-none border border-gray-300"
              />
            </TextField>

            <TextField
              isRequired
              name="description"
              className="max-sm:col-span-3 col-span-4 "
            >
              <Label>Description</Label>
              <TextArea
                placeholder="Unique features of your facility..."
                className="shadow-none border border-gray-300"
              />
            </TextField>
            <div className="col-span-4">
              <Label className="flex items-center gap-3">
                <ClockAlert />
                Available Time Slots
              </Label>
              <div className="mt-2  gap-2 grid max-sm:grid-cols-3 grid-cols-5">
                {timeSlotItem}
              </div>
            </div>
          </FieldGroup>
          <Separator className="my-4 bg-gray-300 h-px" />
          <div className="flex max-sm:flex-col-reverse  justify-between items-center">
            <Fieldset.Actions>
              <Button type="submit" className="bg-[#003057]">
                <FloppyDisk />
                Add Facility
              </Button>
              <Button type="reset" variant="secondary" className="text-red-500">
                <RotateCcw />
                Reset
              </Button>
            </Fieldset.Actions>
          </div>
        </Fieldset>
      </form>
    </div>
  );
};

export default AddFacility;
