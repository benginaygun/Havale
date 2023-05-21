import { useEffect } from "react";
import "./HevaleAdmin.scss";
import CustomContainer from "../../Components/CustomContainer/CustomContainer";
import AdminSidebar from "../../Components/AdminSidebar/AdminSidebar";

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
        <AdminSidebar/>
      </CustomContainer>
    </div>
  );
};

export default HevaleAdmin;
