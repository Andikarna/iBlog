import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { redirect, useRouter } from "next/navigation";

import { MdDelete } from "react-icons/md";

const DeleteUser = ({ id }) => {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const router = useRouter()

  const handleDeleteUser = async () => {
    try {
      const response = await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer da28bd909db1bd1b65b8ca8a16a2ea1458cdd7d713aac10d49714b5ba6034794",
          "Content-Type": "application/json",
        },
      });

      if (response.status === 204) {
        router.refresh();
      } else {
        const data = await response.json();
        setMessage(data.message);
        router.refresh();
      }
      redirect('/user')
    } catch (error) {
      router.refresh
    }
  };

  return (
    <div>
      <Button
        onPress={onOpen}
        color="danger"
        size="sm"
        variant='flat'
      >
        <MdDelete className="text-md hover:text-[20px] transition-all" />
      </Button>
      <Modal
        size='sm'
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Delete User</ModalHeader>
              <ModalBody>
                <p>You want delete this user?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  No
                </Button>
                <Button color="primary" onClick={handleDeleteUser}>
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default DeleteUser;
