"use client";
import { Rocket } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

const DeleteModal = ({ id }) => {
  const router = useRouter();

  const handleDelete = async (id) => {
    const { data: tokenData } = await authClient.token();

    const res = await fetch(`http://localhost:5000/product/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${tokenData}`,
      },
    });
    if (res.ok) {
      toast.success("Facility deleted successfully");
      router.refresh();
    } else {
      toast.error("Failed to delete the facility");
    }
  };
  return (
    <Modal>
      <Button
        variant="secondary"
        className="bg-red-100 rounded-lg border border-red-300 hover:bg-red-500 hover:text-white"
      >
        Delete
      </Button>
      <Modal.Backdrop>
        <Modal.Container scroll="inside">
          <Modal.Dialog className="sm:max-w-[360px]">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-default text-foreground">
                <Rocket className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Delete Facility</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <p>
                Are you sure you want to delete this facility? This action
                cannot be undone.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                onClick={() => handleDelete(id)}
                className="w-full bg-red-500"
                slot="close"
              >
                <Trash2></Trash2>
                Delete
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default DeleteModal;
