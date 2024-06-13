import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import SignUp from "./pages/SignUp";
import Write from "./pages/Write";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/MyPage" element={<MyPage/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/Write" element={<Write/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
