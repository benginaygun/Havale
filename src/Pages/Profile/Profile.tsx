import { Route, Routes } from "react-router-dom";
import CustomContainer from "../../Components/CustomContainer/CustomContainer";
import ProfileNav from "../../Components/ProfileNav/ProfileNav";
import "./Profile.scss";
import UserSettings from "../../Components/UserSettings/UserSettings";
import Wallet from "../../Components/Wallet/Wallet";
import Transfer from "../../Components/Transfer/Transfer";
import { useEffect } from "react";

const Profile = () => {
  useEffect(() => {
    const nav: HTMLDivElement = document.querySelector(".navbar")!;
    const footer: HTMLElement = document.querySelector(".footer")!;
    const layout: HTMLElement[] = [nav, footer];
    [...layout].forEach((element) => {
      element.style.display = "block";
    });
  }, []);
  return(
  <div className="profile">
    <CustomContainer>
      <div className="profile_content">
        <ProfileNav />
        <Routes>
          {/* <Route path="/bilets" element={<MyBilets />} /> */}
          <Route path="/usersettings/*" element={<UserSettings />} />
          <Route path="/wallet/*" element={<Wallet />} />
          <Route path="/moneytransfer/*" element={<Transfer />} />
        </Routes>
      </div>
    </CustomContainer>
  </div>
)};

export default Profile;
