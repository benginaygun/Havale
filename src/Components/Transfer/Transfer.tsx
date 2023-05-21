import { Route, Routes } from 'react-router-dom';
import WalletNav from '../WalletNav/WalletNav';
import './Transfer.scss';
import Withdrawal from '../Withdrawal/Withdrawal';
import AddBalance from '../AddBalance/AddBalance';
import MoneyTransfer from '../MoneyTransfer/MoneyTransfer';

const Transfer = () => (
    <div className="transfer">
        <WalletNav/>
        <Routes>
          <Route path="/withdrawal/" element={<Withdrawal />} />
          <Route path="/addbalance/" element={<AddBalance />} />
          <Route path="/transfer/" element={<MoneyTransfer />} />
        </Routes>
    </div>
)

export default Transfer;