/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { IoSend } from "react-icons/io5";
import Image from "next/image";

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();


  const handleOpen = () => {
    onOpen();
  }

  return (
    <>
      <Button onPress={handleOpen} color="success" variant='flat' className="text-xl hover:text-2xl transition-all">
        <IoSend />
      </Button>
      <Modal
        size="sm"
        isOpen={isOpen}
        onClose={onClose}
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Notifaction</ModalHeader>
              <ModalBody className="w-full">
                <div className="flex justify-center">
                  <Image
                    src="/logo/smile.svg"
                    width={10}
                    height={10}
                    alt="logo-smile"
                    className="w-40 h-auto flex justify-center"
                  />
                </div>
                <p className="flex justify-center">
                  Oops.. You have to log in first!!
                </p>
              </ModalBody>
              <ModalFooter className="flex justify-center">
                <Button color="primary" variant="light" onPress={onClose}>
                  Oke
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
