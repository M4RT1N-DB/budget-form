import React , {Fragment} from 'react'
import {exportBudget} from "../../helper";
import './budget-control.css';

export interface BudgetControlProps {
    budget:number;
    leftOver:number;
}
 
const BudgetControl: React.FC<BudgetControlProps> = ({budget,leftOver}) => {
    return ( 
        <div className="budget-control">
            <Fragment>
                <div className="alert-budget">
                    Budget:$ {budget}
                </div>
                <div className={exportBudget(budget,leftOver)}>
                    Reaming Budget:$ {leftOver}
                </div>
            </Fragment>
        </div>
     );
}
 
export default BudgetControl;