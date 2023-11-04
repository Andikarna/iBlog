import { Spinner } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const loading = () => {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <div className='flex w-5/6 justify-center lg:w-6/12 space-y-3'>
        <section>
          <div className="flex-col flex justify-center items-center h-screen text-center">
            <Image src="/logo/404.svg" width={100} height={100} alt="error" />
            <Link isBlock showAnchorIcon href="/" color="foreground">
              Page not found, back to homepage!
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default loading
