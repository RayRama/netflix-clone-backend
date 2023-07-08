"use client";

import { Link } from "@material-ui/core";
import { ColumnDef } from "@tanstack/react-table";

export type IList = {
  _id: string;
  title: string;
  type: string;
  genre: string;
  content: string[];
};

export const columns: ColumnDef<IList>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "genre",
    header: "Genre",
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      const list = row.original;

      return <Link href={`/lists/${list._id}`}>Edit</Link>;
    },
  },
];
