import React, { useState, Fragment } from "react";
import { Rule, ValidateErrorEntity } from "rc-field-form/lib/interface";
import { Form, Input, InputNumber, Button } from "antd";
import { v4 as uuidv4 } from "uuid";

import "./form.css";
import Spend from "../../models/spend.model";

const validationsData: Rule[] = [
  { required: true, message: "Budget is required!" },
  { type: "number", min: 1, message: "Budget should be less than 1" },
];

export interface FormBudgetProps {
  setSpend: Function;
  setCreateSpend:Function;
}

const FormBudget: React.FC<FormBudgetProps> = ({ setSpend,setCreateSpend }) => {
  //-------------STATES
  const [nameSpend, setNameSpend] = useState<string>("");
  const [amountSpend, setAmountSpend] = useState<number>(0);
  // eslint-disable-next-line
  const [error, setError] = useState<boolean>(false);

  const [form] = Form.useForm();
  //--------------FUNCTIONS FORM
  const keyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const pattern = new RegExp("^[A-Z]+$", "i");
    if (pattern.test(e.key) && e.key !== "Backspace") {
      e.preventDefault();
    }
  };
  const onFinish = (e: any) => {
    setError(false);
    const spend: Spend = {
      id: uuidv4(),
      title: nameSpend,
      amount: amountSpend,
    };
    setSpend(spend);
    setCreateSpend(true);
    //-----------RESET FORM
    setNameSpend("");
    setAmountSpend(0);

    return;
  };
  const onFinishFailed = (e: ValidateErrorEntity<any>) => {
    setError(true);
    return;
  };

  return (
    <Fragment>
      <div className="form-wrapp">
        <h1>Add your expenses here</h1>
        <div className="form-expense">
          <Form
            form={form}
            name="form"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
            initialValues={{ title: "Insert Name Expense", amount: 100 }}
          >
            <Form.Item
              label="Title Expense"
              name="title"
              rules={[
                { required: true, message: "Please input your Title Expense!" },
              ]}
            >
              <Input
                className="input-text"
                placeholder="Insert Title."
                value={nameSpend}
                onChange={(e) => setNameSpend(e.target.value.trim())}
              />
            </Form.Item>
            <Form.Item
              label="Amount Expense"
              name="amount"
              rules={validationsData}
            >
              <InputNumber
                placeholder="Insert Quantity"
                onKeyDown={keyHandler}
                value={amountSpend}
                onChange={(e: any) => setAmountSpend(e)}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => {
                  form.resetFields();
                }}
              >
                Add Expense
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Fragment>
  );
};

export default FormBudget;
