import React from 'react';
import { ICustomContainer } from '../../Interfaces/ICustomContainer';
import './CustomContainer.scss';

const CustomContainer:React.FC<ICustomContainer> = ({children,maxWidth}) => (
    <div className="custom_container" style={{maxWidth:`${maxWidth}px`}}>
        {children}
    </div>
)

CustomContainer.defaultProps = {
    maxWidth:1400
}

export default CustomContainer;