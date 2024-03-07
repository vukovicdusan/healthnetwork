import React from "react";

type InputLabelPropsTypes = {
  labelName: string;
  isEmpty: boolean;
  htmlFor: string;
  additionalClass?: string;
};

const InputLabel = (props: InputLabelPropsTypes) => {
  let labelClass = {
    labelTop:
      "absolute transition-all duration-200 ease-linear top-0 text-sm text-secondaryAccent",
    labelBottom:
      "absolute top-[25px] text-textLighter transition-all duration-200 ease-linear peer-focus:-top-0 peer-focus:text-sm peer-focus:text-secondaryAccent",
  };

  return (
    <label
      className={props.isEmpty ? labelClass.labelBottom : labelClass.labelTop}
      htmlFor={props.htmlFor}
    >
      {props.labelName}
    </label>
  );
};

export default InputLabel;
