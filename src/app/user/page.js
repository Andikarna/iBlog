/* eslint-disable @next/next/no-async-client-component */
"use client";

import React,{ useEffect, useState } from "react";

import Table from "../../components/User/tableComponents/Table"
import HeaderTable from "../../components/User/tableComponents/HeaderTable";
import Pagination from "@/components/Pagination";

// icons
import { TbUsers } from 'react-icons/tb';

const Page = () => {
  const [data, setData] = useState([])
  const [data2, setData2] = useState([])
  const [page,setPage] = useState(1)

  const fetchData = async() => {
    const res = await fetch(`https://gorest.co.in/public/v2/users?page=${page}`)
    const user = await res.json();
    setData(user)
  }

  const fetchData2 = async() => {
    const res = await fetch(`https://gorest.co.in/public/v1/users?page=${page}`)
    const user = await res.json();
    setData2(user)
  }

  useEffect(()=>{
    fetchData(),
    fetchData2()
  },[data])

  return (
    <div className="flex w-full justify-center">
      <div className="w-5/6 lg:w-8/12 space-y-2">
        <h1 className="flex items-center gap-2 text-xl md:text-2xl font-medium py-5">
          <TbUsers />
          ALL USER</h1>
        <div className="line"></div>
        <HeaderTable />
        <Table api={data} />
        <Pagination page={page} lastPage={data2.meta?.pagination.pages} setPage={setPage}/>
      </div>
    </div>
  )
}

export default Page
