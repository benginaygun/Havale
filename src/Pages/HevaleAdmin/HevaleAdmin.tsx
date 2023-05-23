import { useEffect } from "react";
import "./HevaleAdmin.scss";
import CustomContainer from "../../Components/CustomContainer/CustomContainer";
import AdminSidebar from "../../Components/AdminSidebar/AdminSidebar";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../../Components/AdminDashboard/AdminDashboard";

const HevaleAdmin = () => {
  useEffect(() => {
    const nav: HTMLDivElement = document.querySelector(".navbar")!;
    const footer: HTMLElement = document.querySelector(".footer")!;
    const layout: HTMLElement[] = [nav, footer];
    [...layout].forEach((element) => {
      element.style.display = "none";
    });
  }, []);

  return (
    <div className="hevale_admin">
      <CustomContainer maxWidth={1920}>
        <div className="hevale_admin_content">
          <AdminSidebar />
          <Routes>
            <Route path="/dashboard/*" element={<AdminDashboard />} />
          </Routes>
        </div>
      </CustomContainer>
    </div>
  );
};

export default HevaleAdmin;
