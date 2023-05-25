import React from 'react';
import './AdminInvestsTableItem.scss';
import { IAdminInvestsTableItemProps } from '../../../Interfaces/IAdminInvestsTableItemProps';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AdminInvestsTableItem:React.FC<IAdminInvestsTableItemProps> = ({fullname,website,userId,username,bankFullname,iban,bankName,quantity,state}) => (
    <div className="admin_invests_table-item">
        <div className="admin_invests_table-item_user_info">
            <div className="admin_invests_table-item_user_name">
                <p>{fullname}</p>
            </div>
            <div className="admin_invests_table-item_user_website">
                <p>{website}</p>
            </div>
            <div className="admin_invests_table-item_user_id">
                <p>#{userId}</p>
            </div>
            <div className="admin_invests_table-item_user_username">
                <p>Kullancı Adı : {username}</p>
            </div>
        </div>
        <div className="admin_invests_table-item_bank_info">
            <div className="admin_invests_table-item_bank_fullname">
                <p>{bankFullname}</p>
            </div>
            <div className="admin_invests_table-item_bank_iban">
                <p>{iban}</p>
            </div>
            <div className="admin_invests_table-item_bank_name">
                <p>{bankName}</p>
            </div>
        </div>
        <div className="admin_invests_table-item_quantity">
            <p>{quantity}</p>
        </div>
        <div className="admin_invests_table-item_state">
            <p>{state}</p>
        </div>
        <div className="admin_invests_table-item_accept">
            <button><FontAwesomeIcon icon={faCheck} /> <span>Yatırımı Onayla</span></button>
        </div>
        <div className="admin_invests_table-item_reject">
            <button><FontAwesomeIcon icon={faXmark} /> <span>Yatırımı Reddet</span></button>
        </div>
    </div>
)

export default AdminInvestsTableItem;