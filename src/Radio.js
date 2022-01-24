import React from "react";

export default function Radio({children, onChange, ...props}) {

  const handleSelected = (e) => {
    onChange(e.target.value)
  }

  return (
    <>
      <label>
        <input {...props}  type='radio' onChange={handleSelected} />
        {children}
      </label>
    </>
  );
}
