import React, { useState } from 'react'
import Search from "./Search"

// icons
import AddUser from "@/components/User/AddUser";

const HeaderTable = () => {
  return (
    <div>
      <div className="block space-y-5 sm:space-y-0 sm:flex w-full h-fit justify-between rounded-2xl px-2 py-1 items-center">
        <AddUser />
        <Search/>
      </div>
    </div>
  )
}

export default HeaderTable
