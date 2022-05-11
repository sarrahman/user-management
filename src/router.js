import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/app/dashboard";
import SignIn from "./pages/login";

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<SignIn />} />
                <Route path="/" element={<SignIn />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}