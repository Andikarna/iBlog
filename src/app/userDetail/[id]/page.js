"use client"

import { Card, CardBody, CardHeader } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = async ({ params }) => {

  const { id } = params
  const router  = useRouter

  const res = await fetch(`https://gorest.co.in/public/v2/users/${id}`)
  const userDetail = await res.json();

  return (
    <div className="flex w-full justify-center">
      <div className='py-10'>
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">{userDetail.name}</h4>
              <p className="text-tiny uppercase font-bold">{userDetail.gender}</p>
              <small className="text-default-500">{userDetail.email}</small>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://i.pravatar.cc/300"
                width={270}
                height={100}
              />
            </CardBody>
          </Card>
 

        <div className='flex w-full justify-center py-10 underline'>
          <Link href="/user">
            Back
          </Link>
        </div>

      </div>
    </div>
  )
}

export default page
