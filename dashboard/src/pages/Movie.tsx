import React from "react";
import { columns, IMovie } from "../data/movie/column";
import { DataTable } from "../data/movie/data-table";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import axios from "../helper/api/axios";
import { Toaster, toast } from "react-hot-toast";

export default function Movie() {
  const [data, setData] = React.useState<IMovie[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const token = JSON.parse(localStorage.getItem("token") || "{}");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  React.useEffect(() => {
    setLoading(true);
    async function getData() {
      try {
        await axios
          .get("/movies", {
            headers: {
              token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzMyNmVhNjEyNGQ3ODIwOTMyMzQxNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODc4MDg5MywiZXhwIjoxNjg5MjEyODkzfQ.07MBeUT8TpNaRTWBwv3QJ7l4I46VoN5pDRaxSRbMEAo`,
            },
          })
          .then((res) => {
            setData(res.data);
            setLoading(false);
            console.log(res.data);
          })
          .catch((err) => {
            toast.error("Gagal Mengambil Data", {
              icon: "❌",
            });
            setLoading(false);
          });
      } catch (error) {
        toast.error("Gagal Mengambil Data", {
          icon: "❌",
        });
        setLoading(false);
      }
    }

    getData();
  }, [token]);

  return (
    <div className="flex flex-col md:p-10 p-5 md:mt-0 mt-20">
      <Toaster reverseOrder={false} position="top-center" />
      {location.pathname === "/movies" ? (
        <>
          {/* Content Title */}
          <div className="bg-white rounded-md w-full p-5 border border-gray">
            <h1 className="text-lg">
              <span className="font-bold">All Movies</span>
            </h1>
          </div>

          {/* Content */}
          <div className="bg-white rounded-md w-full h-auto p-5 mt-5 border border-gray">
            {loading ? (
              <div className="flex justify-center items-center">
                <h1 className="text-lg">Loading...</h1>
              </div>
            ) : (
              <DataTable columns={columns} data={data} />
            )}
          </div>

          {/* Button */}
          <div className="flex flex-row-reverse mt-5">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => navigate("addmovie")}
            >
              Add Movie
            </button>
          </div>
        </>
      ) : (
        <Outlet />
      )}
    </div>
  );
}
