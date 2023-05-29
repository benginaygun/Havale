import { useEffect } from "react";
import FinancialControl from "../../Components/FinancialControl/FinancialControl";
import HomeFeatures from "../../Components/HomeFeatures/HomeFeatures";
import HomeHeader from "../../Components/HomeHeader/HomeHeader";
import NewGeneration from "../../Components/NewGeneration/NewGeneration";

const Home = () => {
    useEffect(() => {
        const nav: HTMLDivElement = document.querySelector(".navbar")!;
        const footer: HTMLElement = document.querySelector(".footer")!;
        const layout: HTMLElement[] = [nav, footer];
        [...layout].forEach((element) => {
          element.style.display = "block";
        });
      }, []);
    return(
    <div className="home">
        <HomeHeader/>
        <HomeFeatures/>
        <FinancialControl/>
        <NewGeneration/>
    </div>
)}

export default Home;