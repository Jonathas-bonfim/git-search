import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Profile from "../pages/Profile";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/profile/:username' element={<Profile />} />
    </Routes>
  )
}