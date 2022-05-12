import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/app/dashboard";
import HakAkses from "./pages/app/pengguna/hakAkses";
import Users from "./pages/app/pengguna/users";
import SignIn from "./pages/login";
import NotFound from "./pages/notFound";

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<SignIn />} />
                <Route path="/" element={<SignIn />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/pengguna" element={<Users />} />
                <Route path="/pengguna/tugas" element={<HakAkses />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}