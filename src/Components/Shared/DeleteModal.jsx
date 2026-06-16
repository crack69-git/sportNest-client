"use client";
import { authClient } from "@/lib/auth-client";
import { Rocket } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const DeleteModal = ({ id }) => {
  const router = useRouter();

  const handleDelete = async (id) => {
    const { data: tokenData, error } = await authClient.token();

    if (error) {
      toast.error("Failed to fetch authentication token");
      return;
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/product/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenData.token}`,
        },
      },
    );
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
        className="bg-red-400 rounded-lg border border-red-500 dark:bg-red-500 dark:hover:bg-red-600 text-white hover:bg-red-500 hover:text-white"
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
