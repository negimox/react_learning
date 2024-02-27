import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex col-span-12 overflow-x-scroll mb-auto">
      <Button name={"All"} />
      <Button name={"Gaming"} />
      <Button name={"Music"} />
      <Button name={"Movies"} />
      <Button name={"Sitcom"} />
      <Button name={"Comedy"} />
      <Button name={"Sitcom"} />
      <Button name={"Comedy"} />
      <Button name={"Sitcom"} />
      <Button name={"Comedy"} />
    </div>
  );
};

export default ButtonList;
