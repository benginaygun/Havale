import React, { useEffect } from "react";
import "./AdminInvestsTableItem.scss";
import { IAdminInvestsTableItemProps } from "../../../Interfaces/IAdminInvestsTableItemProps";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IGetAdminInvests } from "../../../Interfaces/IGetAdminInvests";
import { useAppDispatch } from "../../../redux/store/store";
import { getAllInvests } from "../../../redux/slices/adminInvests/actionCreators";

const AdminInvestsTableItem: React.FC<IGetAdminInvests> = ({
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

  const dispatch = useAppDispatch();

  useEffect(() => {
    let buttons = document.querySelectorAll('.admin_invests_table-item button');
    [...buttons].forEach(btn => {
      
      btn.addEventListener('click',() => dispatch(getAllInvests()))
    })
  }, []);

  return (
    <div className="admin_invests_table-item">
      <div className="admin_invests_table-item_user_info">
        <div className="admin_invests_table-item_user_name">
          <p>{user.fullname}</p>
        </div>
        <div className="admin_invests_table-item_user_website">
          <p>{reciver}</p>
        </div>
        <div className="admin_invests_table-item_user_id">
          <p>#{user.id}</p>
        </div>
        <div className="admin_invests_table-item_user_username">
          <p>Kullancı Adı : {user.userName}</p>
        </div>
      </div>
      <div className="admin_invests_table-item_bank_info">
        <div className="admin_invests_table-item_bank_fullname">
          <p>{user.fullname}</p>
        </div>
        <div className="admin_invests_table-item_bank_iban">
          <p>{bankAccount.iban}</p>
        </div>
        <div className="admin_invests_table-item_bank_name">
          <p>{bankAccount.name}</p>
        </div>
      </div>
      <div className="admin_invests_table-item_quantity">
        <p>{sum}</p>
      </div>
      <div className="admin_invests_table-item_state">
        <p>{state}</p>
      </div>
      <div className="admin_invests_table-item_accept">
        <button onClick={() => clickAcceptFunction(id)}>
          <FontAwesomeIcon icon={faCheck} /> <span>Yatırımı Onayla</span>
        </button>
      </div>
      <div className="admin_invests_table-item_reject">
        <button onClick={() => clickRejectFunction(id)}>
          <FontAwesomeIcon icon={faXmark} /> <span>Yatırımı Reddet</span>
        </button>
      </div>
    </div>
  );
};

export default AdminInvestsTableItem;
