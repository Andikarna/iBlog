/* eslint-disable @next/next/no-async-client-component */
import Image from 'next/image'
import AddComment from './AddComment';

// nextui
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'


const Comment = async ({ id }) => {
  
  const resComment = await fetch(`https://gorest.co.in/public/v2/posts/${id}/comments`)
  const apiComment = await resComment.json();

  console.log("data", apiComment)

  return (
    <div className='inline w-full'>
      <div className='w-full flex pb-5'>
        <AddComment id={id} />
      </div>
      <div className='w-full space-y-2'>
        {apiComment.map((value,index) => (
          <Card key={value.id} className=''>
            <CardHeader className='gap-2'>
              <Image 
              src={`https://i.pravatar.cc/150?img=${index + 50}`} 
              width={30} height={30} 
              alt={value.name} 
              className='rounded-full' />
              <h1>{value.name}</h1>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400">
              <p>
                {value.body}
              </p>
            </CardBody>
            <CardFooter>
              <p className=" text-default-400 text-small">{value.email}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Comment
