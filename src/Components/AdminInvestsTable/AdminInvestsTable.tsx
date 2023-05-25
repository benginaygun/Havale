import { AdminInvestsTableData } from '../../Data/AdminInvestsTableData';
import './AdminInvestsTable.scss';
import AdminInvestsTableItem from './AdminInvestsTableItem/AdminInvestsTableItem';

const AdminInvestsTable = () => (
    <div className="admin_invests_table">
       <div className="admin_invests_table_heading">
            <div className="admin_invests_table_heading_name">
                <p>Gönderen Kişi</p>
            </div>
            <div className="admin_invests_table_heading_bank">
                <p>Banka</p>
            </div>
            <div className="admin_invests_table_heading_quantity">
                <p>Tutar</p>
            </div>
            <div className="admin_invests_table_heading_state">
                <p>Durum</p>
            </div>
       </div>
       <div className="admin_invests_table_main">
            {
                AdminInvestsTableData.map((data,index) => (
                    <AdminInvestsTableItem key={index} {...data}/>
                ))
            }
       </div>
    </div>
)

export default AdminInvestsTable;