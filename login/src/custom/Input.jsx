import React from 'react';
// const
const Input = (props) => {
  const { name, type, placeholder, classname } = props;
  return <input name={name} type={type} placeholder={placeholder} className={classname} />;
};

export default Input;
