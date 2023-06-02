import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AdminWithdrawalsTableItem.scss";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import { IAdminWithdrawalsTableItemProps } from "../../../Interfaces/IAdminWithdrawalsTableItemProps";
import { IGetAdminWithdrawals } from "../../../Interfaces/IGetAdminWithdrawals";
import { useAppDispatch } from "../../../redux/store/store";
import {
  acceptWithdrawalById,
  getAllWithDrawals,
} from "../../../redux/slices/adminWithdrawals/actionCreators";
import axios from "axios";

const AdminWithdrawalsTableItem: React.FC<IGetAdminWithdrawals> = ({
  id,
  name,
  state,
  user,
  sum,
  date,
  isInvest,
  reciver,
  bankAccount,
  clickAcceptFunction,
  clickRejectFunction,
}) => {


  return (
    <div className="admin_withdrawals_table-item">
      <div className="admin_withdrawals_table-item_user_info">
        <div className="admin_withdrawals_table-item_user_name">
          <p>{user.fullname}</p>
        </div>
        <div className="admin_withdrawals_table-item_user_website">
          <p>{reciver}</p>
        </div>
        <div className="admin_withdrawals_table-item_user_id">
          <p>#{user.id.substring(0, 20)}...</p>
        </div>
        <div className="admin_withdrawals_table-item_user_username">
          <p>Kullancı Adı : {user.userName}</p>
        </div>
      </div>
      <div className="admin_withdrawals_table-item_bank_info">
        <div className="admin_withdrawals_table-item_bank_fullname">
          <p>{user.fullname}</p>
        </div>
        <div className="admin_withdrawals_table-item_bank_iban">
          <p>{bankAccount.iban}</p>
        </div>
        <div className="admin_withdrawals_table-item_bank_name">
          <p>{bankAccount.name}</p>
        </div>
      </div>
      <div className="admin_withdrawals_table-item_quantity">
        <p>{sum}</p>
      </div>
      <div className="admin_withdrawals_table-item_state">
        <p>{state}</p>
      </div>
      <div className="admin_withdrawals_table-item_accept">
        <button onClick={() => clickAcceptFunction(id)}>
          <FontAwesomeIcon icon={faCheck} /> <span>Çekimi Onayla</span>
        </button>
      </div>
      <div className="admin_withdrawals_table-item_reject">
        <button onClick={() => clickRejectFunction(id)}>
          <FontAwesomeIcon icon={faXmark} /> <span>Çekimi Reddet</span>
        </button>
      </div>
    </div>
  );
};

export default AdminWithdrawalsTableItem;
