import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AdminWithdrawalsTableItem.scss';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { IAdminWithdrawalsTableItemProps } from '../../../Interfaces/IAdminWithdrawalsTableItemProps';

const AdminWithdrawalsTableItem:React.FC<IAdminWithdrawalsTableItemProps> = ({fullname,website,userId,username,bankFullname,iban,bankName,quantity,state}) => (
    <div className="admin_withdrawals_table-item">
        <div className="admin_withdrawals_table-item_user_info">
            <div className="admin_withdrawals_table-item_user_name">
                <p>{fullname}</p>
            </div>
            <div className="admin_withdrawals_table-item_user_website">
                <p>{website}</p>
            </div>
            <div className="admin_withdrawals_table-item_user_id">
                <p>#{userId}</p>
            </div>
            <div className="admin_withdrawals_table-item_user_username">
                <p>Kullancı Adı : {username}</p>
            </div>
        </div>
        <div className="admin_withdrawals_table-item_bank_info">
            <div className="admin_withdrawals_table-item_bank_fullname">
                <p>{bankFullname}</p>
            </div>
            <div className="admin_withdrawals_table-item_bank_iban">
                <p>{iban}</p>
            </div>
            <div className="admin_withdrawals_table-item_bank_name">
                <p>{bankName}</p>
            </div>
        </div>
        <div className="admin_withdrawals_table-item_quantity">
            <p>{quantity}</p>
        </div>
        <div className="admin_withdrawals_table-item_state">
            <p>{state}</p>
        </div>
        <div className="admin_withdrawals_table-item_accept">
            <button><FontAwesomeIcon icon={faCheck} /> <span>Çekimi Onayla</span></button>
        </div>
        <div className="admin_withdrawals_table-item_reject">
            <button><FontAwesomeIcon icon={faXmark} /> <span>Çekimi Reddet</span></button>
        </div>
    </div>
)

export default AdminWithdrawalsTableItem;