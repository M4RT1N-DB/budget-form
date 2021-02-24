import React, { Fragment } from "react";
import "antd/dist/antd.css";
import './question.css';


import { Form, Input, Button } from "antd";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";

type reactInputElement = React.ChangeEvent<HTMLInputElement>;

export interface QuestionProps {}
const validateMessagesInput = {
  required: "${label} is required! or it must be a number"
};
const onSuccessForm=(data:any)=>{
   return console.log('The form was sent successfully ',data)
}//ValidateErrorEntity<any>
const onErrorForm=(error:any)=>{
   return console.log('some error ',error)
}
const Question: React.FC<QuestionProps> = () => {
  return (
    <div className="wrapp-content">
      <Fragment>
      <h2>Put your budget</h2>
      <Form
        name="form"
        validateMessages={validateMessagesInput}
        layout="vertical"
        onFinish={onSuccessForm}
        onFinishFailed={onErrorForm}
      >
        <Form.Item
          label="Budget"
          name="budget" 
          rules={[{ required: true }]}
        >
          <Input placeholder="Insert Quantity" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Define Budget
          </Button>
        </Form.Item>
      </Form>
    </Fragment>
    </div>
    
  );
};

export default Question;
