import React, { useState } from "react";
import { Input } from "antd";

const MyInput = ({ onChange, val = "" }) => {
  return (
    <Input
      value={val}
      style={{ width: 300, display: "block" }}
      onChange={onChange}
    />
  );
};

export default MyInput;
