import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import Footer from "../Components/Footer/Footer";
import Profile from "../Pages/Profile/Profile";
import HevaleAdmin from "../Pages/HevaleAdmin/HevaleAdmin";

const TransferRoutes = () => (
  <div className="transfer_routes">
    <BrowserRouter>
    <Navbar/>
    <Sidebar/>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/hevaleadmin/*" element={<HevaleAdmin />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </div>
);

export default TransferRoutes;
