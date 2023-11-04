import { Spinner } from '@nextui-org/react'
import React from 'react'

const loading = () => {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <div className='flex w-5/6 justify-center lg:w-6/12 space-y-3'>
        <Spinner size='lg' color="primary" labelColor="foreground" />
      </div>
    </div>
  )
}

export default loading
