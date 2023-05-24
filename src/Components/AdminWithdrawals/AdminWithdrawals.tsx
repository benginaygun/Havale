import AdminTop from '../AdminTop/AdminTop';
import AdminWithdrawalsTable from '../AdminWithdrawalsTable/AdminWithdrawalsTable';
import './AdminWithdrawals.scss';

const AdminWithdrawals = () => (
    <div className="admin_withdrawals">
        <AdminTop title='Tüm Çekimler'/>
        <AdminWithdrawalsTable/>
    </div>
)

export default AdminWithdrawals;