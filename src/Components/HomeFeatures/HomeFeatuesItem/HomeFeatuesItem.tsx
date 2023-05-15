import './HomeFeatuesItem.scss';
import React from 'react';
import { IHomeFeatuesItemProps } from '../../../Interfaces/IHomeFeatuesItemProps';

const HomeFeatuesItem:React.FC<IHomeFeatuesItemProps> = ({image,text}) => (
    <div className="home_feautures-item">
        <div className="home_feautures-item_image">
            <img src={image} alt="home features image" />
        </div>
        <div className="home_feautures-item_text">
            <p>{text}</p>
        </div>
    </div>
)

export default HomeFeatuesItem;