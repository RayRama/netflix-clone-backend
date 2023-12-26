import React from "react";
import axios from "../helper/api/axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

export default function EditMovie() {
  const [data, setData] = React.useState<any>({});
  const [updatedData, setUpdatedData] = React.useState<any>({});
  const [loading, setLoading] = React.useState<boolean>(false);
  const token = localStorage.getItem("token") || "{}";
  const params = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function getData() {
      try {
        await axios
          .get(`/movies/find/${params.movieId}`, {
            headers: {
              token: `Bearer ${token}`,
            },
          })
          .then((res) => {
            setData(res.data);
            setLoading(false);
          })
          .catch((err) => {
            toast.error("Gagal Mengambil Data, Silahkan Login Kembali", {
              icon: "❌",
            });
            setLoading(false);
          });
      } catch (error) {
        toast.error("Gagal Mengambil Data, Silahkan Login Kembali", {
          icon: "❌",
        });
        setLoading(false);
      }
    }
    getData();
  }, [params.movieId, token]);

  async function handleUpdate() {
    setLoading(true);
    await axios
      .put(`/movies/${params.movieId}`, updatedData, {
        headers: {
          token: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setLoading(false);
        toast.success("Berhasil Mengubah Data", {
          icon: "✅",
        });
        navigate("/movies");
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Gagal Mengubah Data", {
          icon: "❌",
        });
      });
  }

  return (
    <div>
      <h1>Edit Movie</h1>

      <div className="flex flex-col md:p-10 p-5 md:mt-0 mt-20">
        <div className="bg-white rounded-md w-full h-auto p-5 mt-5 border border-gray">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col w-full md:w-1/2">
              <label className="text-sm">Title</label>
              <input
                className="border border-gray-300 rounded-md px-4 py-2 mb-2"
                type="text"
                placeholder="Title"
                defaultValue={data.title}
                // value={updatedData.title}
                onChange={(e) =>
                  setUpdatedData({ ...updatedData, title: e.target.value })
                }
              />
              <label className="text-sm">Description</label>
              <textarea
                className="border border-gray-300 rounded-md px-4 py-2 mb-2"
                placeholder="Description"
                defaultValue={data.desc}
                // value={updatedData.desc}
                onChange={(e) =>
                  setUpdatedData({
                    ...updatedData,
                    desc: e.target.value,
                  })
                }
              />
              <label className="text-sm">Year</label>
              <input
                className="border border-gray-300 rounded-md px-4 py-2 mb-2"
                type="number"
                placeholder="Year"
                defaultValue={data.year}
                // value={updatedData.year}
                onChange={(e) =>
                  setUpdatedData({ ...updatedData, year: e.target.value })
                }
              />
              <label className="text-sm">Genre</label>
              <input
                className="border border-gray-300 rounded-md px-4 py-2 mb-2"
                type="text"
                placeholder="Genre"
                defaultValue={data.genre}
                // value={updatedData.genre}
                onChange={(e) =>
                  setUpdatedData({ ...updatedData, genre: e.target.value })
                }
              />
              <label className="text-sm">Duration</label>
              <input
                className="border border-gray-300 rounded-md px-4 py-2 mb-2"
                type="number"
                placeholder="Duration"
                defaultValue={data.duration}
                // value={updatedData.duration}
                onChange={(e) =>
                  setUpdatedData({ ...updatedData, duration: e.target.value })
                }
              />

              <label className="text-sm">Director</label>
              <input
                className="border border-gray-300 rounded-md px-4 py-2 mb-2"
                type="text"
                placeholder="Director"
                defaultValue={data.director}
                // value={updatedData.director}
                onChange={(e) =>
                  setUpdatedData({ ...updatedData, director: e.target.value })
                }
              />

              <button
                className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => handleUpdate()}
              >
                Save
              </button>
              {/* Delete movie with confirmation dialog */}
              <button
                className={`bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-2 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => {
                  if (
                    window.confirm(
                      "Are you sure you wish to delete this item?"
                    ) &&
                    !loading
                  )
                    axios
                      .delete(`/movies/${params.movieId}`, {
                        headers: {
                          token: `Bearer ${token}`,
                        },
                      })
                      .then((res) => {
                        toast.success("Berhasil Menghapus Data", {
                          icon: "✅",
                        });
                        navigate("/movies");
                      })
                      .catch((err) => {
                        toast.error("Gagal Menghapus Data", {
                          icon: "❌",
                        });
                      });
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
