import React, { Children } from "react";

export default function Checkbox({ isChecked, onChangeChecked, children }) {
  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onChangeChecked} />
      {children}
    </label>
  );
}
