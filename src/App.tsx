import React, { useState,useEffect } from "react";

import "./App.css";
import Spend from "./models/spend.model";

import Question from "./components/question/question";
import FormBudget from "./components/form/form";
import ExpenseList from "./components/expense-list/expense-list";
import BudgetControl from "./components/budget-control/budget-control";

function App() {
  //-----DEFINE STATE
  const [budget, setBudget] = useState<number>(0); //Initial Amount
  const [leftOver, setLeftOver] = useState<number>(0); //remaining amount
  const [showQuestion, setShowQuestion] = useState<boolean>(true);
  const [spends, setSpends] = useState<Spend[]>([]); //my expenses

  const [SpendTemporal, setSpend] = useState<Spend | any>({});
  const [createSpend, setCreateSpend] = useState<boolean>(false)
  //------DEFINE EFFECT
  useEffect(() => {
    if (createSpend) {
      //------Add new Budget
      setSpends([...spends, SpendTemporal]);  
      //-----------CHNAGE INITIAL AMOUNT
      const remainigBudget=leftOver-SpendTemporal.amount;
      setLeftOver(remainigBudget);
      //-----RESET VALUE TO FALSE
      setCreateSpend(false);
      return;
    }
   
   
  }, [createSpend,SpendTemporal,leftOver,spends])
  //----------
  /* const addNewExpense = (spend: Spend) => {
    setSpends([...spends, spend]);
  }; */

  return (
    <div className="inner-content">
      <div className="container">
        <h1>Weekly Expenses</h1>
        <div className="content">
          {showQuestion ? (
            <Question
              setBudget={setBudget}
              setLeftOver={setLeftOver}
              setShowQuestion={setShowQuestion}
            />
          ) : (
            <div className="content-row">
              <div className="c1">
                <FormBudget setSpend={setSpend} setCreateSpend={setCreateSpend} />
              </div>
              <div className="c2">
                <div className="r1">
                   <ExpenseList spends={spends} />
                </div>
               <div className="r2">
                 <BudgetControl  budget={budget} leftOver={leftOver}/>
               </div>
                
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
