import { Route, Routes } from "react-router-dom";
import Layout from "./components/molecules/Layout";
import RequireAuth from "./components/molecules/RequireAuth";
import AddMovie from "./pages/AddMovie";
import EditMovie from "./pages/EditMovie";
import EditUser from "./pages/EditUser";
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import Movie from "./pages/Movie";
import List from "./pages/List";
import AddList from "./pages/AddList";
import EditList from "./pages/EditList";
import DetailMovie from "./pages/DetailMovie";
import DetailList from "./pages/DetailList";
import DetailUser from "./pages/DetailUser";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public route */}
        <Route path="/login" element={<Login />} />

        {/* private routes */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<User />}>
            {/* nested route */}
            <Route path="edituser" element={<EditUser />} />
            <Route path=":userId" element={<DetailUser />} />
          </Route>

          <Route path="/movies" element={<Movie />}>
            {/* nested route */}
            <Route path="addmovie" element={<AddMovie />} />
            <Route path="editmovie/:movieId" element={<EditMovie />} />
            <Route path=":movieId" element={<DetailMovie />} />
          </Route>

          <Route path="/lists" element={<List />}>
            {/* nested route */}
            <Route path="addlist" element={<AddList />} />
            <Route path="editlist" element={<EditList />} />
            <Route path=":listId" element={<DetailList />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}
