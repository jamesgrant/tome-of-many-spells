import React from 'react';

const AppButton = ({label, onClick}) => {
  return (
    <button onClick={typeof onClick === 'function' ? onClick : () => {}}>
      {label}
    </button>
  );
};

export default AppButton;
