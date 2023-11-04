import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Alert from './tableComponents/Alert';

// netxui
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link, Select, SelectItem } from "@nextui-org/react";

// icons
import { BiSolidUser } from 'react-icons/bi';
import { MdOutlineEmail } from 'react-icons/md';
import { IoMdAddCircle } from 'react-icons/io';

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');

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
      setName('')
      setEmail('')
      setGender('')
      setStatus('')
      setAlert('success')
      router.refresh
    } else {
      setAlert('failed')
    }
  };

  return (
    <>
      <Button onPress={onOpen} color="success" variant='flat' size="sm" className='flex items-center shadow-md border-1 hover:bg-white hover:border-green-400' 
        startContent={
          <IoMdAddCircle className='text-xl' />
        }
      >
        Add User
      </Button>
      {alert === 'success' ? <Alert title="User Data added successfully!" color="green" /> : ''}
      {alert === 'failed' ? <Alert title="Failed to add user data!" color="red" /> : ''}
      <Modal
        size='sm'
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <form onSubmit={handleSubmit}>
                <ModalHeader className="flex flex-col gap-1">
                  Add User
                </ModalHeader>
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
                    autoComplete='off'
                    required
                  />
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    endContent={
                      <MdOutlineEmail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Email"
                    placeholder="Enter your email"
                    variant="bordered"
                    autoComplete='off'
                    required
                  />
                  <Select
                    label="Gender"
                    variant='bordered'
                    value={gender}
                    onChange={(e) => { setGender(e.target.value) }}
                  >
                    <SelectItem
                      key="male"
                      value="male"
                    >
                      Male
                    </SelectItem>
                    <SelectItem
                      key="female"
                      value="female"
                    >
                      Female
                    </SelectItem>
                  </Select>
                  <Select
                    label="Status"
                    variant='bordered'
                    value={status}
                    onChange={(e) => { setStatus(e.target.value) }}
                  >
                    <SelectItem
                      key="active"
                      value="active"
                    >
                      Active
                    </SelectItem>
                    <SelectItem
                      key='inactive'
                      value="inactive"
                    >
                      In-active
                    </SelectItem>
                  </Select>
                </ModalBody>
                <ModalFooter>
                  <Button color="success" type="submit" variant='flat'  onPress={onClose}>
                    Add User
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

export default AddUser
