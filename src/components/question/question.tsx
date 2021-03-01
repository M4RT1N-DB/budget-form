import React, { Fragment, useState } from "react";
import "antd/dist/antd.css";
import "./question.css";

import { Form, InputNumber, Button } from "antd";
import { Rule, ValidateErrorEntity } from "rc-field-form/lib/interface";
//-----------INTERFACE PROPS
export interface QuestionProps {
  setBudget:Function;
  setLeftOver:Function;
  setShowQuestion:Function;
}
//-----------VALIDATE DATA
const validationsData: Rule[] = [
  { required: true, message: "Budget is required!" },
  { type: "number", min: 1, message: "Budget should be less than 1" },
];
//---------------COMPONENT---------
const Question: React.FC<QuestionProps> = ({setBudget,setLeftOver,setShowQuestion}) => {
  //-----------STATE COMPONENT
  const [amount, setAmount] = useState<number>(0);
  // eslint-disable-next-line
  const [error, setError] = useState<boolean>(false);
  //------------FUNCTIONS FORM
  const onSuccessForm = (data: any) => {
    //----------------VALIDATE FORM
    setError(false);
    setBudget(amount);
    setLeftOver(amount);
    setShowQuestion(false)
    //----------------VALIDATE SUCCESS
    return console.log("The form was sent successfully ", data);
  };
  const onErrorForm = (error: ValidateErrorEntity<any>) => {
    setError(true);
    return console.log("some error ", error);
  };
  const keyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const pattern = new RegExp("^[A-Z]+$", "i");
    if (pattern.test(e.key) && e.key !== "Backspace") {
      e.preventDefault();
    }
  };
  //-----------FUNCTION HANDLER STATE
  const changeHandler = (e: any) => {
    setAmount(parseInt(e));
    return;
  };
  return (
    <Fragment>
      <h1>Put your budget</h1>
      <Form
        name="form"
        layout="vertical"
        onFinish={onSuccessForm}
        onFinishFailed={onErrorForm}
      >
        <Form.Item label="Budget" name="budget" rules={validationsData}>
          <InputNumber
            type="number"
            placeholder="Insert Quantity"
            onKeyDown={keyHandler}
            onChange={changeHandler}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Define Budget
          </Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
};

export default Question;
