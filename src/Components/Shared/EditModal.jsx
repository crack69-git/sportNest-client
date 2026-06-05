"use client";
import { FloppyDisk } from "@gravity-ui/icons";
import React from "react";
import { Rocket } from "@gravity-ui/icons";
import { Button, ListBox, Modal } from "@heroui/react";
import {
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import { useRouter } from "next/navigation";
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
const EditModal = ({ facility, id }) => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const res = await fetch(`http://localhost:5000/product/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(res);
    if (res.ok) {
      alert("Facility updated successfully!");
      router.refresh();
    } else {
      alert("Failed to update facility. Please try again.");
    }
  };

  return (
    <Modal>
      <Button
        variant="secondary"
        className="border border-blue-200 mr-2 rounded-lg"
      >
        Edit
      </Button>
      <Modal.Backdrop>
        <Modal.Container scroll="inside">
          <Modal.Dialog className="sm:max-w-[360px] max-h-[90vh]">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-default text-foreground">
                <Rocket className="size-5" />
              </Modal.Icon>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <Form className="w-full max-w-96 " onSubmit={onSubmit}>
                <Fieldset>
                  <Fieldset.Legend>Edit</Fieldset.Legend>
                  <Description>Edit your facility information.</Description>
                  <FieldGroup>
                    <TextField
                      name="facilityname"
                      defaultValue={facility.facilityname}
                    >
                      <Label>Facility Name</Label>
                      <Input placeholder="Enter facility name" />
                      <FieldError />
                    </TextField>
                    <Select
                      className="w-full"
                      defaultValue={facility.facilitytype}
                      name="facilitytype"
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
                    <TextField name="location" defaultValue={facility.location}>
                      <Label>Location</Label>
                      <Input placeholder="Enter location" />
                      <FieldError />
                    </TextField>
                    <TextField
                      name="ImageLink"
                      defaultValue={facility.imageLink}
                    >
                      <Label>Image Link</Label>
                      <Input placeholder="Enter image link" />
                      <FieldError />
                    </TextField>
                    <TextField name="price" defaultValue={facility.price}>
                      <Label>Price</Label>
                      <Input placeholder="Enter price" />
                      <FieldError />
                    </TextField>

                    <TextField
                      name="Description"
                      defaultValue={facility.description}
                    >
                      <Label>Description</Label>
                      <TextArea placeholder="Enter facility description" />

                      <FieldError />
                    </TextField>
                  </FieldGroup>
                  <Fieldset.Actions>
                    <Button type="submit">
                      <FloppyDisk />
                      Save changes
                    </Button>
                    <Button type="reset" variant="secondary">
                      Cancel
                    </Button>
                  </Fieldset.Actions>
                </Fieldset>
              </Form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditModal;
