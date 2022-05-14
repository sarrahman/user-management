import { connect } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/app/dashboard";
import HakAkses from "./pages/app/pengguna/hakAkses";
import Task from "./pages/app/pengguna/task";
import Users from "./pages/app/pengguna/user";
import FormUser from "./pages/app/pengguna/user/form";
import SignIn from "./pages/login";
import NotFound from "./pages/notFound";

function Router(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={props.isAuthenticated ? <Navigate to="/" /> : <SignIn />}
        />
        <Route
          path="/"
          element={props.isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
        />
        <Route path="/dashboard" element={props.isAuthenticated ? <Dashboard /> : <Navigate to="/404" />} />
        <Route path="/pengguna" element={props.isAuthenticated ? <Users /> : <Navigate to="/404" />} />
        <Route path="/pengguna/akses" element={props.isAuthenticated ? <HakAkses /> : <Navigate to="/404" />} />
        <Route path="/pengguna/tugas" element={props.isAuthenticated ? <Task /> : <Navigate to="/404" />} />
        <Route path="/pengguna/form" element={props.isAuthenticated ? <FormUser /> : <Navigate to="/404" />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

const reduxState = (state) => ({
  isAuthenticated: state.isAuthenticated,
});

export default connect(reduxState, null)(Router);
