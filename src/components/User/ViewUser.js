import React from 'react'

// netxui
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Card, CardHeader, CardBody, Button, button } from "@nextui-org/react";

// icons
import { GrFormView } from 'react-icons/gr';
import Image from 'next/image';

const ViewUser = ({ name, gender, email, index }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="warning" size='sm' variant='flat'>
        <GrFormView className='text-xl hover:text-[28px] transition-all' />
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
              <ModalHeader>Detail User</ModalHeader>
              <ModalBody>
                <Card className="py-2">
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <h4 className="font-bold text-large">{name}</h4>
                    <p className="text-tiny uppercase font-bold">{gender}</p>
                    <small className="text-default-500">{email}</small>
                  </CardHeader>
                  <CardBody className=" py-2">
                    <Image
                      alt={name}
                      className="object-cover rounded-xl"
                      src={`https://i.pravatar.cc/150?img=${index}`}
                      width={500}
                      height={100}
                    />
                  </CardBody>
                </Card>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onPress={onClose}>
                  Back
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ViewUser
