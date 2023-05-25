import { AdminWithdrawalsTableData } from '../../Data/AdminWithdrawalsTableData';
import './AdminWithdrawalsTable.scss';
import AdminWithdrawalsTableItem from './AdminWithdrawalsTableItems/AdminWithdrawalsTableItem';

const AdminWithdrawalsTable = () => (
    <div className="admin_withdrawals_table">
       <div className="admin_withdrawals_table_heading">
            <div className="admin_withdrawals_table_heading_name">
                <p>Çeken Kişi</p>
            </div>
            <div className="admin_withdrawals_table_heading_bank">
                <p>Banka</p>
            </div>
            <div className="admin_withdrawals_table_heading_quantity">
                <p>Tutar</p>
            </div>
            <div className="admin_withdrawals_table_heading_state">
                <p>Durum</p>
            </div>
       </div>
       <div className="admin_withdrawals_table_main">
        {
            AdminWithdrawalsTableData.map((data,index) => (
                <AdminWithdrawalsTableItem key={index} {...data}/>
            ))
        }
       </div>
    </div>
)

export default AdminWithdrawalsTable;