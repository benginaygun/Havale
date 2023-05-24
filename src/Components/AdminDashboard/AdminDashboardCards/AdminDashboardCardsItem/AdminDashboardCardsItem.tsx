import './AdminDashboardCardsItem.scss';
import allInvests from '../../../../assets/images/tum-yatirimlar-icon.png';
import React from 'react';
import { IAdminDashboardCardsItemProps } from '../../../../Interfaces/IAdminDashboardCardsItemProps';

const AdminDashboardCardsItem:React.FC<IAdminDashboardCardsItemProps> = ({icon,quantity,title,isMoney,backgroundColor}) => (
    <div className="admin_dashboard_cards-item" style={{backgroundColor:`#${backgroundColor}`}}>
        <div className="admin_dashboard_cards-item_image">
            <img src={icon} alt="yatirimlar" />
        </div>
        <div className="admin_dashboard_cards-item_main">
            <div className="admin_dashboard_cards-item_quantity">
                <h3>{quantity} {isMoney ? 'TL' : ''}</h3>
            </div>
            <div className="admin_dashboard_cards-item_title">
                <p>{title}</p>
            </div>
        </div>
    </div>
)

export default AdminDashboardCardsItem;