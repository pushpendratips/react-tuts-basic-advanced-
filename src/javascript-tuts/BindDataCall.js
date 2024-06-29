import React from "react";
import { member, person } from "./BindData";

const BindDataCall = () => {
  const data = person.fullName.bind(member);
  console.log(data());
  return <div></div>;
};

export default BindDataCall;
