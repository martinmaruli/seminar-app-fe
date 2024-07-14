"use client"

import React, { ReactNode } from "react";

export type RenderTableColumnProps = {
  row: TableRow;
  value: string | number;
}

export type TableColumn = {
  name: string;
  propName: string;
  component?: (props: RenderTableColumnProps) => ReactNode;
  [key: string]: any;
};

export type TableRow = { 
  id: number | string; 
  [key: string]: any;
};

interface TableProps {
  columns: TableColumn[];
  rows: TableRow[];
}

const Table: React.FC<TableProps> = ({ columns, rows }) => {
  console.log("rendering table components ...");
  
  return (
    <table className='table-auto w-full border border-collapse border-slate-500'>
      <thead>
        <tr className="h-10">
          {columns.map((col: TableColumn) => (
            <th key={col.propName} className='border border-slate-500'>
              {col.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row: TableRow) => (
          <tr key={row.id} className="h-20">
            {columns.map((col: TableColumn) => (
              <td
                key={`${row.id}-${col.propName}`}
                className='border border-slate-500'
              >
                {col.component 
                  ? col.component({row, value: row[col.propName]}) 
                  : row[col.propName]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default React.memo(Table);