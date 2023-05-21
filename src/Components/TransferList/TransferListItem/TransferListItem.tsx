import './TransferListItem.scss';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import walletIcon from '../../../assets/images/cuzdan-logo.png';
import cartIcon from '../../../assets/images/cart-icon.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { ITransferListItemProps } from '../../../Interfaces/ITransferListItemProps';


const TransferListItem:React.FC<ITransferListItemProps> = ({title,desc,value,date,isAdd}) => (
    <div className="transfer_list-item">
          <div className="transfer_list-item_icon">
            <img src={cartIcon} alt="transfer" />
          </div>
          <div className="transfer_list-item_main">
            <div className="transfer_list-item_text">
              <div className="transfer_list-item_title">
                <h5>{title}</h5>
              </div>
              <div className="transfer_list-item_desc">
                <p>{desc}</p>
              </div>
            </div>
            <div className="transfer_list-item_info">
              <div className="transfer_list-item_info_main">
                <div className="transfer_list-item_info_value">
                    <p className={`${isAdd ? 'balance_add' : 'balance_sub'}`}>{isAdd ? "+" + value + " TL" : "-" + value + " TL"}</p>
                </div>
                <div className="transfer_list-item_info_date">
                    <p>{date}</p>
                </div>
              </div>
              <div className="transfer_list-item_info_button">
                <button><FontAwesomeIcon icon={faAngleRight} /></button>
              </div>
            </div>
          </div>
        </div>
)

export default TransferListItem;