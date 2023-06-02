import React, { useEffect, useState } from 'react';
import './AdminTop.scss';
import { IAdminTopProps } from '../../Interfaces/IAdminTopProps';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store/store';
import { getUserInfo } from '../../redux/slices/user/actionCreators';

const AdminTop:React.FC<IAdminTopProps> = ({title}) => {

      const dispatch = useAppDispatch();
      const userData = useSelector((state:RootState) => state.user.userData);
    
      useEffect(() => {
        dispatch(getUserInfo());
      }, [])
      
    //   dispatch(getUserInfo());


    return(
    <div className="admin_top">
        <div className="admin_top_content">
            <div className="admin_top_title">
                <h2>{title}</h2>
            </div>
            <div className="admin_top_profile">
                <div className="admin_top_profile_text">
                    <p>Hoşgeldin, {userData.fullname}</p>
                </div>
                <div className="admin_top_profile_image">
                    <h4>AM</h4>
                </div>
            </div>
        </div>
    </div>
)}

export default AdminTop;