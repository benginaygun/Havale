import { TransferListData } from "../../Data/TransferListData";
import "./TransferList.scss";
import TransferListItem from "./TransferListItem/TransferListItem";

const TransferList = () => (
  <div className="transfer_list">
    <div className="transfer_list_content">
      <div className="transfer_list_text">
        <div className="transfer_list_title">
          <h4>İşlemlerim</h4>
        </div>
        <div className="transfer_list_show_all">
            <button>Tümü</button>
        </div>
      </div>
      <div className="transfer_list_items">
        {
            TransferListData.map((data,index) => {
                return index >= 3 ? '' : <TransferListItem key={index} {...data}/>
            })
        }
      </div>
    </div>
  </div>
);

export default TransferList;
