"use client";
import React, { useEffect, useState } from 'react'

// nextui
import { Button, Input } from '@nextui-org/react'

import AddCommentLock from './AddCommentLock'

// icons
import { AiOutlineComment } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';
import { BiUserCircle } from 'react-icons/bi';
import { IoSend } from 'react-icons/io5';

const AddComment = ({id}) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [body, setBody] = useState('')

  async function handleSubmit(e) {
    await fetch(`/public/v2/posts/${id}/comments`, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name:name,
        email:email,
        body:body,
      }),
    })
    setBody('');
    router.refresh
  }

  console.log("body",body);

  useEffect(() => {
  }, [])

  return (
    <form onSubmit={handleSubmit} className='flex flex-row w-full gap-5'>
      <Input
        id='name'
        name='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder='Your Name'
        className='w-full'
        autoComplete='off'
        endContent={
          <BiUserCircle />
        }
      />
      <Input
        id='email'
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder='Your email ...'
        className='w-full'
        autoComplete='off'
        endContent={
          <MdOutlineEmail />
        }
      />
      <Input
        id='body'
        name='body'
        value={body}
        onChange={(e) => setBody(e.target.value)}
        type="text"
        placeholder='Comment ...'
        className='w-full'
        autoComplete='off'
        endContent={
          <AiOutlineComment />
        }
      />
      {/* <Button type='submit' color="success" variant='flat' className="text-xl">
        <IoSend />
      </Button> */}

      {/* Sementara Fitur Belum Dibuka :) */}
      <AddCommentLock />
    </form>
  )
}

export default AddComment
