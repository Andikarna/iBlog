"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// netxui
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";

// icons
import { BiEditAlt, BiSolidUser } from 'react-icons/bi';
import { MdOutlineEmail } from 'react-icons/md';
import Alert from './tableComponents/Alert';


const UpdateUser = ({ data }) => {
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [gender, setGender] = useState(data.gender);
  const [status, setStatus] = useState(data.status);

  const [alert, setAlert] = useState('');

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://gorest.co.in/public/v2/users', {
      method: "POST",
      headers: {
        Authorization: "Bearer da28bd909db1bd1b65b8ca8a16a2ea1458cdd7d713aac10d49714b5ba6034794",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        gender: gender,
        status: status,
      }),
    });

    if (response.ok) {
      alert('User berhasil ditambahkan!');
      setName('')
      setEmail('')
      setGender('')
      setStatus('')
      alert('User data updated successfully!')
    } else {
      alert('User data failed to update!')
    }
  };

  return (
    <>
      <Button onPress={onOpen} color="primary" variant='flat' size="sm">
        <BiEditAlt className='text-lg hover:text-[22px] transition-all' />
      </Button>
      <Modal
        size="sm"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <form onSubmit={handleSubmit}>
                <ModalHeader className="flex flex-col gap-1">Update User</ModalHeader>
                <ModalBody>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    endContent={
                      <BiSolidUser className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Name"
                    placeholder="Enter your name"
                    type="text"
                    variant="bordered"
                  />
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoFocus
                    endContent={
                      <MdOutlineEmail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Email"
                    placeholder="Enter your email"
                    variant="bordered"
                  />
                  <Input
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    autoFocus
                    label="Gender"
                    placeholder="Enter your Gender"
                    variant="bordered"
                  />
                  <Input
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    autoFocus
                    label="Status"
                    placeholder="Enter your Status"
                    variant="bordered"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" type="submit" variant="flat" onPress={onClose}>
                    Update
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default UpdateUser
