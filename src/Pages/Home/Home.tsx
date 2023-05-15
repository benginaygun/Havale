import FinancialControl from "../../Components/FinancialControl/FinancialControl";
import HomeFeatures from "../../Components/HomeFeatures/HomeFeatures";
import HomeHeader from "../../Components/HomeHeader/HomeHeader";
import NewGeneration from "../../Components/NewGeneration/NewGeneration";

const Home = () => (
    <div className="home">
        <HomeHeader/>
        <HomeFeatures/>
        <FinancialControl/>
        <NewGeneration/>
    </div>
)

export default Home;