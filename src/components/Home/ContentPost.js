import React from 'react'
import Image from 'next/image'

import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Link } from '@nextui-org/react'

// icons
import { LuView } from 'react-icons/lu';


const ContentPost = ({api}) => {
  return (
    <div>
      {api.map((value,index) => (
        <Card key={value.id} className='my-5'>
          <CardHeader className="flex gap-3">
            <Image
              alt={value.title}
              height={40}
              radius="sm"
              src={`https://i.pravatar.cc/150?u=${value.id}`}
              width={40}
              className='rounded-full'
            />
            <div className="flex flex-col">
              <p className="text-small text-default-500">{value.title}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{value.body}</p>
          </CardBody>
          <Divider />
          <CardFooter className='jusc'>
            <Button
              href={`/detailPost/${value.id}`}
              as={Link}
              color="primary"
              size='sm'
              variant="flat"
              >
              <LuView />
              View Detail
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default ContentPost
