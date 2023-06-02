import { useSelector } from "react-redux";
import { AdminInvestsTableData } from "../../Data/AdminInvestsTableData";
import { RootState, useAppDispatch } from "../../redux/store/store";
import "./AdminInvestsTable.scss";
import AdminInvestsTableItem from "./AdminInvestsTableItem/AdminInvestsTableItem";
import {
  acceptInvestById,
  getAllInvests,
  rejectInvetsById,
} from "../../redux/slices/adminInvests/actionCreators";
import { rejectAdminInvests } from "../../api/adminInvests";
import { useEffect } from "react";

const AdminInvestsTable = () => {
  const dispatch = useAppDispatch();
  const adminInvestsData = useSelector(
    (state: RootState) => state.AdminInvests.adminInvests
  );

  // function acceptInvest(id: number) {
  //   dispatch(acceptInvestById(id));
  //   dispatch(getAllInvests());
  // }
  // function rejectWithdrawal(id: number) {
  //   dispatch(rejectInvetsById(id));
  //   dispatch(getAllInvests());
  // }

  useEffect(() => {
    dispatch(getAllInvests());
  }, []);

  // dispatch(getAllInvests());

  return (
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
        {adminInvestsData.map((data) => (
          <AdminInvestsTableItem
            key={data.id}
            id={data.id}
            user={data.user}
            reciver={data.reciver}
            bankAccount={data.bankAccount}
            sum={data.sum}
            date={data.date}
            isInvest={data.isInvest}
            state={data.state}
            clickAcceptFunction={acceptInvestById(data.id)}
            clickRejectFunction={rejectInvetsById(data.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminInvestsTable;
