// nextui
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button } from "@nextui-org/react";

import DeleteData from "@/components/User/DeleteData";
import UpdateUser from "@/components/User/UpdateUser";
import ViewUser from "@/components/User/ViewUser";


const Tables = ({ api }) => {
  return (
    <div>
      <Table aria-label="Example static collection table" className="text-start">
        <TableHeader>
          <TableColumn >Name</TableColumn>
          <TableColumn >Email</TableColumn>
          <TableColumn >Gender</TableColumn>
          <TableColumn >Status</TableColumn>
          <TableColumn className="text-center">Action</TableColumn>
        </TableHeader>
        <TableBody>
          {api.map((value,index) => (
            <TableRow key={value.id} className="text-sm">
              <TableCell className=" text-xs">{value.name}</TableCell>
              <TableCell className=" text-xs">{value.email}</TableCell>
              <TableCell className=" text-xs">{value.gender}</TableCell>
              <TableCell className=" text-xs">{value.status}</TableCell>
              <TableCell className=" h-full">
                <div className="flex justify-evenly gap-1">
                  <ViewUser name={value.name} gender={value.gender} email={value.email} index={index}/>
                  <UpdateUser data={value} />
                  <DeleteData id={value.id} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div >
  )
}

export default Tables
