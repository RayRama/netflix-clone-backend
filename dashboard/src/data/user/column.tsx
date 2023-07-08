"use client";

import { Link } from "@material-ui/core";
import { ColumnDef } from "@tanstack/react-table";

export type IUser = {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
};

export const columns: ColumnDef<IUser>[] = [
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "isAdmin",
    header: "Role",
    cell: ({ row }) => {
      const role = row.original;
      const newRole = role.isAdmin ? "Admin" : "User";
      return <p>{newRole}</p>;
    },
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      const user = row.original;

      return !user.isAdmin ? (
        <Link href={`/users/${user._id}`}>Edit</Link>
      ) : null;
    },
  },
];
