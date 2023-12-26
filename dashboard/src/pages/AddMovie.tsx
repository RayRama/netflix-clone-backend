import React from "react";
import axios from "../helper/api/axios";
import toast from "react-hot-toast";

export default function AddMovie() {
  const [data, setData] = React.useState<any>({});
  const token = localStorage.getItem("token") || "{}";
  async function handleAdd() {
    await axios
      .post("/movies", data, {
        headers: {
          token: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Berhasil Menambahkan Data", {
          icon: "✅",
        });
      })
      .catch((err) => {
        toast.error("Gagal Menambahkan Data", {
          icon: "❌",
        });
      });
  }
  return (
    <div className="flex flex-col md:p-10 p-5 md:mt-0 mt-20">
      <div className="bg-white rounded-md w-full h-auto p-5 mt-5 border border-gray">
        <div className="flex flex-col md:flex-row md:space-x-5">
          <div className="flex flex-col md:w-1/2 w-full">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              className="bg-gray-100 p-2 rounded-md border border-gray focus:outline-none focus:ring-1 focus:ring-blue-500"
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
          </div>
          {/* Description */}
          <div className="flex flex-col md:w-1/2 w-full">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              className="bg-gray-100 p-2 rounded-md border border-gray focus:outline-none focus:ring-1 focus:ring-blue-500"
              onChange={(e) => setData({ ...data, desc: e.target.value })}
            ></textarea>
          </div>
          <div className="flex flex-col md:w-1/2 w-full">
            <label htmlFor="year">Year</label>
            <input
              type="number"
              name="year"
              id="year"
              className="bg-gray-100 p-2 rounded-md border border-gray focus:outline-none focus:ring-1 focus:ring-blue-500"
              onChange={(e) => setData({ ...data, year: e.target.value })}
            />
          </div>
        </div>
        <div className="flex flex-col md:space-x-5">
          <div className="flex flex-col md:w-1/2 w-full">
            <label htmlFor="genre">Genre</label>
            <input
              type="text"
              name="genre"
              id="genre"
              className="bg-gray-100 p-2 rounded-md border border-gray focus:outline-none focus:ring-1 focus:ring-blue-500"
              onChange={(e) => setData({ ...data, genre: e.target.value })}
            />
          </div>
          <div className="flex flex-col md:w-1/2 w-full">
            <label htmlFor="duration">Duration</label>
            <input
              type="number"
              name="duration"
              id="duration"
              className="bg-gray-100 p-2 rounded-md border border-gray focus:outline-none focus:ring-1 focus:ring-blue-500"
              onChange={(e) => setData({ ...data, duration: e.target.value })}
            />
          </div>
        </div>

        <div className="flex flex-col md:space-x-5">
          <div className="flex flex-col md:w-1/2 w-full">
            <label htmlFor="director">Director</label>
            <input
              type="text"
              name="director"
              id="director"
              className="bg-gray-100 p-2 rounded-md border border-gray focus:outline-none focus:ring-1 focus:ring-blue-500"
              onChange={(e) => setData({ ...data, director: e.target.value })}
            />
          </div>
          <div className="flex flex-col md:w-1/2 w-full">
            <label htmlFor="cast">Cast</label>
            <input
              type="text"
              name="cast"
              id="cast"
              placeholder="Separate with comma (,)"
              className="bg-gray-100 p-2 rounded-md border border-gray focus:outline-none focus:ring-1 focus:ring-blue-500"
              onChange={(e) =>
                setData({ ...data, cast: e.target.value.split(",") })
              }
            />
          </div>
          {/* Rating age */}
          <div className="flex flex-col md:w-1/2 w-full">
            <label htmlFor="rating">Rating</label>
            <input
              type="text"
              name="rating"
              id="rating"
              placeholder="18+, PG-13, etc"
              className="bg-gray-100 p-2 rounded-md border border-gray focus:outline-none focus:ring-1 focus:ring-blue-500"
              onChange={(e) => setData({ ...data, rating: e.target.value })}
            />
          </div>
          {/* Link poster */}
          <div className="flex flex-col md:w-1/2 w-full">
            <label htmlFor="poster">Poster</label>
            <input
              type="text"
              name="poster"
              id="poster"
              placeholder="https://link.com/file.jpg"
              className="bg-gray-100 p-2 rounded-md border border-gray focus:outline-none focus:ring-1 focus:ring-blue-500"
              onChange={(e) => setData({ ...data, poster: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="flex flex-row-reverse mt-5">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleAdd()}
        >
          Save
        </button>
      </div>
    </div>
  );
}
