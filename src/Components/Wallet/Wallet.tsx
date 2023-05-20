import { Route, Routes } from 'react-router-dom';
import WalletNav from '../WalletNav/WalletNav';
import './Wallet.scss';
import UserInfo from '../UserInfo/UserInfo';
import Withdrawal from '../Withdrawal/Withdrawal';
import AddBalance from '../AddBalance/AddBalance';

const Wallet = () => (
    <div className="wallet">
        <WalletNav/>
        <Routes>
          <Route path="/withdrawal/" element={<Withdrawal />} />
          <Route path="/addbalance/" element={<AddBalance />} />
        </Routes>
    </div>
)

export default Wallet;