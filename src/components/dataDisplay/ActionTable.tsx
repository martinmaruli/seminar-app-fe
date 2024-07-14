"use client"

import React from "react";
import { MdAdd } from "react-icons/md";
import Button from "../buttons/Button";
import TextField from "../fields/TextField";
import Table, { RenderTableColumnProps, TableColumn, TableRow } from "./Table";
import { useRouter } from "next/navigation";

const dummyRows: TableRow[] = [
  {
    id: 1,
    title: "The Sliding Mr. Bones (Next Stop, Pottersville)",
    schedule: "July 13th 2024, 8:00:06 pm",
    maxParticipants: 10,
    currentParticipants: 8,
  },
  {
    id: 2,
    title: "The Sliding Mr. Bones (Next Stop, Pottersville)",
    schedule: "July 13th 2024, 8:00:06 pm",
    maxParticipants: 10,
    currentParticipants: 8,
  },
  {
    id: 3,
    title: "The Sliding Mr. Bones (Next Stop, Pottersville)",
    schedule: "July 13th 2024, 8:00:06 pm",
    maxParticipants: 10,
    currentParticipants: 10,
  },
];

const dummycolumn: TableColumn[] = [
  {
    name: "Judul",
    propName: "title",
  },
  {
    name: "Jadwal",
    propName: "schedule",
  },
  {
    name: "Maksimal Peserta",
    propName: "maxParticipants",
    component: (({ value }: RenderTableColumnProps) => (
      <p className="text-center">{value}</p>
    ))
  },
  {
    name: "Total Peserta",
    propName: "currentParticipants",
    component: (({ value }: RenderTableColumnProps) => (
      <p className="text-center">{value}</p>
    ))
  },
  {
    name: "Action",
    propName: "action",
    component: ({ row }: RenderTableColumnProps) => (
      <div className='w-full flex justify-center'>
        <Button disabled={row.currentParticipants >= row.maxParticipants}>
          {row.currentParticipants < row.maxParticipants ? "Join" : "Penuh"}
        </Button>
      </div>
    ),
  },
];

const ActionTable = () => {
  const router = useRouter();

  const directCreate = () => {
    router.push('/seminar/create');
  }

  return (
    <>
      <div className='flex justify-between mb-4'>
        <TextField
          name='search'
          className='max-w-xs'
          placeholder='Search....'
          type='search'
        />
        <Button className='h-10 flex items-center' onClick={directCreate}>
          <MdAdd /> &nbsp; Buat Seminar
        </Button>
      </div>
      <Table columns={dummycolumn} rows={dummyRows} />
    </>
  );
}

export default React.memo(ActionTable);
