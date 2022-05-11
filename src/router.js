import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/app/dashboard";
import Users from "./pages/app/users";
import SignIn from "./pages/login";
import NotFound from "./pages/notFound";

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<SignIn />} />
                <Route path="/" element={<SignIn />} />
                <Route path="/app/dashboard" element={<Dashboard />} />
                <Route path="/app/pengguna" element={<Users />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}