import React from 'react'

import { PiNewspaperClippingLight } from 'react-icons/pi';

export default function HeaderPost() {
  return (
    <div className='flex space-x-3 py-5 text-xl md:text-2xl'>
      <PiNewspaperClippingLight />
      <h1>ALL POST</h1>
    </div>
  )
}
