import React from 'react'

import Spends from '../../models/spend.model';
import './spend.css';

export interface SpendFragmentProps {
    spend:Spends;
}
 
const SpendFragment: React.FC<SpendFragmentProps> = ({spend}) => {
    const {amount,title}=spend;
    return ( 
        <li className="spend">  
            <p>
                {title}
                <span>$ {amount}</span>
            </p>
        </li>
     );
}
 
export default SpendFragment;