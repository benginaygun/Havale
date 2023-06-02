import { AdminTransfer } from './../redux/slices/adminTransfers/adminTransfersSlice';
import * as auth from './auth';
import * as user from './user';
import * as adminWithdrawals from './adminWithdrawals';
import * as adminInvests from './adminInvests';
import * as adminTransfers from './adminTransfers';

const api = {
    auth,
    user,
    adminWithdrawals,
    adminInvests,
    adminTransfers
}

export default api;