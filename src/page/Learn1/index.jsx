import React, { useState } from "react";
import { Button } from "antd";
import MyInput from "./MyInput";

const Learn1 = () => {
  const [value, setValue] = useState("");
  const onTextChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };
  const onTextReset = () => {
    setValue("");
  };
  return (
    <div>
      <MyInput val={value} onChange={onTextChange} />
      <Button type="primary" onClick={onTextReset}>
        重置input
      </Button>
    </div>
  );
};
export default Learn1;
