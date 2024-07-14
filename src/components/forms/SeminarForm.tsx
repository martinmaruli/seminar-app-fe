"use client"

import React from "react";
import TextField from "../fields/TextField";
import NumberField from "../fields/NumberField";
import DatePickerField from "../fields/DatePickerField";
import Button from "../buttons/Button";
import { useRouter } from "next/navigation";

interface SeminarFormProps {
  title?: string;
}

const SeminarForm = (props: SeminarFormProps) => {
  const { title } = props;

  const router = useRouter();

  const directList = () => {
    router.push("/seminar");
  }

  const submit = () => {
    directList();
  }

  return (
    <form className="w-2/3 flex flex-col gap-3 border p-10">
      {title && <h2 className="text-3xl font-semibold mb-4">{ title }</h2>}
      <TextField name="title" label="Judul Seminar" />
      <div className="flex gap-4">
        <DatePickerField name="schedule" label="Schedule" />
        <NumberField name="maxParticipants" label="Maksimal Peserta" />
      </div>
      <Button fullWidth className="mt-6" onClick={submit}>Simpan</Button>
    </form>
  )
}

export default React.memo(SeminarForm);
