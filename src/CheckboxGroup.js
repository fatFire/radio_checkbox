import React, { useState } from "react";

export default function CheckboxGroup({ children, onChange}) {

	const [values, setValues] = useState([])

	const handleChange = (value) => {
		let newValues
		if(values.includes(value)) {
			newValues = values.filter(v => v !== value)
		} else {
			newValues = [...values, value]
		}
		onChange(newValues)
		setValues(newValues)
	}

	const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { onChange: handleChange });
    }
    return child;
  });

  return <>{childrenWithProps} </>;
}
