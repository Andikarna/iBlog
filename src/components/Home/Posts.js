/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-async-client-component */
"use client"

import { useEffect, useState } from 'react'

import HeaderPost from './HeaderPost'
import Pagination from '../Pagination'
import ContentPost from './ContentPost'

const Posts = () => {
  const [page, setPage] = useState(1);
  const [dataPost, setDataPost] = useState([])
  const [dataLastPage, setDataPLastPage] = useState([])

  const fetchData = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_POST}?page=${page}`)
    const api= await res.json();
    setDataPost(api);
  }

  const fetchData2 = async() => {
    const res = await fetch(`https://gorest.co.in/public/v1/posts`)
    const api= await res.json();
    setDataPLastPage(api);
  }

  useEffect(()=>{
    fetchData();
    fetchData2();
  },[dataPost])

  return (
    <div className='w-5/6 lg:w-6/12 space-y-3'>
      <HeaderPost />
      <div className='line'></div>
      <ContentPost api={dataPost} id={dataPost.id}/>
      <Pagination setPage={setPage} page={page} lastPage={dataLastPage.meta?.pagination.pages} />
    </div>
  )
}

export default Posts
