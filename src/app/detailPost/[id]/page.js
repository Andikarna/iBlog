import Comment from '@/components/Home/Comment'
import Link from 'next/link'
import Image from 'next/image';

// nextui
import { Card, CardBody, CardFooter, CardHeader, Chip, Divider } from '@nextui-org/react'

// icons
import { BiArrowBack } from 'react-icons/bi';

const Page = async ({ params }) => {
  const { id } = params

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_POST}/${id}`)
  const apiDetail = await res.json()

  return (
    <div className='flex justify-center'>
      <div className='w-5/6 lg:w-2/4 space-y-5'>
        <div className='space-y-5'>
          <h1 className='flex items-center gap-2 pt-5 '>
            <Chip color="warning" variant="flat">Detail Post</Chip>
            {apiDetail.title}</h1>
          <div className='line'></div>
          <div className='flex h-full w-fit items-center gap-2 underline py-3 text-md hover:gap-3 transition-all' >
            <BiArrowBack />
            <Link
              href='/'
            >
              Back
            </Link>
          </div>
        </div>
        <div className='flex justify-center pb-10'>
          <Card className="max-w-[800px]">
            <CardHeader className="flex gap-3">
              <Image
                alt={apiDetail.name}
                height={40}
                radius="sm"
                src={`https://i.pravatar.cc/150?u=${apiDetail.id}`}
                width={40}
                className='rounded-full'
              />
              <p className="text-small text-default-500">{apiDetail.title}</p>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>{apiDetail.body}</p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Comment id={id} />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Page
