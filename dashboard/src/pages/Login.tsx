import React from "react";
import axios from "../helper/api/axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();

  async function handleLogin() {
    setLoading(true);
    await axios
      .post("/auth/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        setLoading(false);
        localStorage.setItem("token", res.data.accessToken);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Default user */}
      <h1 className="text-2xl font-bold mb-4">Default Admin</h1>
      <p className="mb-2">Username: RayRama</p>
      <p className="mb-2">Password: 12345678</p>
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input
        className="border border-gray-300 rounded-md px-4 py-2 mb-2"
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="border border-gray-300 rounded-md px-4 py-2 mb-2"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => handleLogin()}
        disabled={loading}
      >
        Login
      </button>
    </div>
  );
}
