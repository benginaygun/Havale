import { useEffect } from "react";
import { AdminWithdrawalsTableData } from "../../Data/AdminWithdrawalsTableData";
import { RootState, useAppDispatch } from "../../redux/store/store";
import "./AdminWithdrawalsTable.scss";
import AdminWithdrawalsTableItem from "./AdminWithdrawalsTableItems/AdminWithdrawalsTableItem";
import { getAdminWithdrawals } from "../../api/adminWithdrawals";
import { acceptWithdrawalById, getAllWithDrawals, rejectWithdrawalById } from "../../redux/slices/adminWithdrawals/actionCreators";
import { useSelector } from "react-redux";

const AdminWithdrawalsTable = () => {
  const dispatch = useAppDispatch();
  const adminWithdrawalsData = useSelector(
    (state: RootState) => state.adminWithdrawals.adminWithdrawals
  );

  function acceptWithdrawal(id: number) {
    dispatch(acceptWithdrawalById(id));
    dispatch(getAllWithDrawals());
  }
  function rejectWithdrawal(id: number) {
    dispatch(rejectWithdrawalById(id));
    dispatch(getAllWithDrawals());
  }
  
  // dispatch(getAllWithDrawals());


  useEffect(() => {
    dispatch(getAllWithDrawals());
  }, []);

  return (
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
        {adminWithdrawalsData.map((data) => (
          <AdminWithdrawalsTableItem
            key={data.id}
            id={data.id}
            user={data.user}
            reciver={data.reciver}
            bankAccount={data.bankAccount}
            sum={data.sum}
            date={data.date}
            isInvest={data.isInvest}
            state={data.state}
            clickAcceptFunction={acceptWithdrawalById(data.id)}
            clickRejectFunction={rejectWithdrawalById(data.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminWithdrawalsTable;
