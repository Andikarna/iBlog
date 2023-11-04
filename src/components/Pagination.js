"use client"

import { Button } from '@nextui-org/react'

import React from 'react'

export default function Pagination({ page, lastPage, setPage }) {

  const handlePrevios = () => {
    if (page <= 1) {
      setPage((prevState) => prevState - 0)
    }else{
      setPage((prevState) => prevState - 1)
    }
  }

  const handleNext = () => {
    if (page >= lastPage) {
      setPage((prevState) => prevState + 0)
    }else{
      setPage((prevState) => prevState + 1)
    }
  }

  return (
    <div className='flex justify-center space-x-5 py-3'>
      <Button size='sm' onClick={handlePrevios}
        className='bg-red-400 text-white'
      >Prev</Button>
      <p className='text-xl'>{page} of {lastPage}</p>
      <Button size='sm' onClick={handleNext}
        className='bg-gray-400 text-white'
      >Next</Button>
    </div>
  )
}
