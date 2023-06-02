import { useSelector } from 'react-redux';
import { DashboardTransfersData } from '../../Data/DashboardTransfersData';
import { RootState, useAppDispatch } from '../../redux/store/store';
import './DashboardTransfers.scss';
import DashboardTransfersItem from './DashboardTransfersItem/DashboardTransfersItem';
import { useEffect } from 'react';
import { getAllWithDrawals } from '../../redux/slices/adminWithdrawals/actionCreators';
import { getAllTransfers } from '../../redux/slices/adminTransfers/actionCreators';

const DashboardTransfers = () => {

    const dispatch = useAppDispatch();
  const adminTransfersData = useSelector(
    (state: RootState) => state.AdminTransfers.adminTransfers
  );

  useEffect(() => {
    dispatch(getAllTransfers());
  }, []);

//   dispatch(getAllTransfers());


    return(
    <div className="dashboard_transfers">
        <div className="dashboard_transfers_content">
            <div className="dashboard_transfers_text">
                <div className="dashboard_transfers_title">
                    <h4>Transferler</h4>
                </div>
                <div className="dashboard_transfers_desc">
                    <p>Tüm transfer işlemleri</p>
                </div>
            </div>
            <div className="dashboard_transfers_main">
                {
                    adminTransfersData.map((data,index) => index <= 4 ?  (
                        <DashboardTransfersItem key={index} {...data}/>
                    ) : '')
                }
            </div>
        </div>
    </div>
)}

export default DashboardTransfers;