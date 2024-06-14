import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import SignUp from "./pages/SignUp";
import Write from "./pages/Write";
import Introduce from "../src/sidepages/Introduce";
import Album from "../src/sidepages/Album";
import Information from "../src/sidepages/Information";
import Notice from "../src/sidepages/Notice";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/Write" element={<Write/>} />
        <Route path="/introduce" element={<Introduce/>} />
        <Route path="/album" element={<Album />} />
        <Route path="/information" element={<Information />} />
        <Route path="/notice" element={<Notice />} />

      </Routes>
    </BrowserRouter>
  );
}

export default Router;
