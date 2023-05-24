import { DashboardTransfersData } from '../../Data/DashboardTransfersData';
import './DashboardTransfers.scss';
import DashboardTransfersItem from './DashboardTransfersItem/DashboardTransfersItem';

const DashboardTransfers = () => (
    <div className="dashboard_transfers">
        <div className="dashboard_transfers_content">
            <div className="dashboard_transfers_text">
                <div className="dashboard_transfers_title">
                    <h4>Transferler</h4>
                </div>
                <div className="dashboard_transfers_desc">
                    <p>Tüm transfer işlemleri</p>
                </div>
            </div>
            <div className="dashboard_transfers_main">
                {
                    DashboardTransfersData.map((data,index) => index <= 4 ?  (
                        <DashboardTransfersItem key={index} {...data}/>
                    ) : '')
                }
            </div>
        </div>
    </div>
)

export default DashboardTransfers;