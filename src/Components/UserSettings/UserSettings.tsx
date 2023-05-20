import { Route, Routes } from 'react-router-dom';
import './UserSettings.scss';
import UserSettingsNav from './UserSettingsNav/UserSettingsNav';
import UserInfo from '../UserInfo/UserInfo';
import ChangePassword from '../ChangePassword/ChangePassword';
import BankInfo from '../BankInfo/BankInfo';

const UserSettings = () => (
    <div className="user_settings">
        <div className="user_settings_title">
            <h2>Kullancı Bilgilerim</h2>
        </div>
        <UserSettingsNav/>
        <Routes>
          <Route path="/userinfo/" element={<UserInfo />} />
          <Route path="/changepassword/" element={<ChangePassword />} />
          <Route path="/bankinfo/" element={<BankInfo />} />
        </Routes>
    </div>
)

export default UserSettings;