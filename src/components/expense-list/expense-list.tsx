import React,{Fragment} from 'react'
import './expense-list.css';

import Spend from "../../models/spend.model";
import SpendFragment from "../spend/spend";

export interface ExpenseListProps {
    spends:Spend[];
}
 
const ExpenseList: React.FC<ExpenseListProps> = ({spends}) => {
    return (
      <Fragment>
        <h1>Expense List</h1>
        {spends.map((spend:Spend)=>{
          return <SpendFragment key={spend.id} spend={spend}/>
        })}
      </Fragment>
        
      );
}
 
export default ExpenseList;