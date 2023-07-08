"use client";

import { Link } from "@material-ui/core";
import { ColumnDef } from "@tanstack/react-table";

export type IMovie = {
  _id: string;
  title: string;
  genre: string;
  rating: string;
  year: string;
  director: string;
  poster: string;
};

export const columns: ColumnDef<IMovie>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "genre",
    header: "Genre",
  },
  {
    accessorKey: "rating",
    header: "Rating",
  },
  {
    accessorKey: "year",
    header: "Year",
  },
  {
    accessorKey: "director",
    header: "Director",
  },
  {
    accessorKey: "poster",
    header: "Poster",
  },
  {
    header: "Action",
    id: "actions",
    cell: ({ row }) => {
      const movie = row.original;
      return (
        <div>
          <Link href={`/movies/${movie._id}`}>Edit</Link>
        </div>
      );
    },
  },
];
