import AdminInvestsTable from '../AdminInvestsTable/AdminInvestsTable';
import AdminTop from '../AdminTop/AdminTop';
import './AdminInvests.scss';

const AdminInvests = () => (
    <div className="admin_invests">
        <AdminTop title='Tüm Yatırımlar'/>
        <AdminInvestsTable/>
    </div>
)

export default AdminInvests;