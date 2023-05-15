import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import Footer from "../Components/Footer/Footer";

const TransferRoutes = () => (
  <div className="transfer_routes">
    <BrowserRouter>
    <Navbar/>
    <Sidebar/>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </div>
);

export default TransferRoutes;
