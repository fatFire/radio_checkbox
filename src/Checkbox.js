import React from "react";

export default function Checkbox({children, onChange, ...props}) {
	const handleChange = (e) => {
		onChange(e.target.value)
  }

  return (
    <>
      <label>
        <input {...props}  type='checkbox' onChange={handleChange} />
        {children}
      </label>
    </>
  );
}
