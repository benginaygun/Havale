import { AdminDashboardCardsData } from '../../../Data/AdminDashboardCardsData';
import './AdminDashboardCards.scss';
import AdminDashboardCardsItem from './AdminDashboardCardsItem/AdminDashboardCardsItem';

const AdminDashboardCards = () => (
    <div className="admin_dashboard_cards">
        {
            AdminDashboardCardsData.map((data,index) => (
                <AdminDashboardCardsItem key={index} {...data}/>
            ))
        }
    </div>
)

export default AdminDashboardCards;