import React from "react";
import { Label, ListBox, Select } from "@heroui/react";
const StartTime = ({ data }) => {
  return (
    <div>
      <Select name="startTime" className="w-full mt-5" placeholder="Select one">
        <Label>Start Time</Label>
        <Select.Trigger>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            {data?.timeslots?.map((slot, index) => (
              <ListBox.Item key={index} id={slot} textValue={slot}>
                {slot}
              </ListBox.Item>
            ))}
          </ListBox>
        </Select.Popover>
      </Select>
    </div>
  );
};

export default StartTime;
