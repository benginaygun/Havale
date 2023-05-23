import React from 'react';
import './AdminTop.scss';
import { IAdminTopProps } from '../../Interfaces/IAdminTopProps';

const AdminTop:React.FC<IAdminTopProps> = ({title}) => (
    <div className="admin_top">
        <div className="admin_top_content">
            <div className="admin_top_title">
                <h2>{title}</h2>
            </div>
            <div className="admin_top_profile">
                <div className="admin_top_profile_text">
                    <p>Hoşgeldin, Admin</p>
                </div>
                <div className="admin_top_profile_image">
                    <h4>AM</h4>
                </div>
            </div>
        </div>
    </div>
)

export default AdminTop;