import React from 'react';

export default function RadioGroup({children, onChange}) {

	const handleChange = (value) => {
		onChange(value)
	}


	const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { onChange: handleChange, name: 'radio' });
    }
    return child;
  });

  return <>{childrenWithProps} </>;
}
