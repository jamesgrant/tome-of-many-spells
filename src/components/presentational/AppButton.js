import React from 'react';

const AppButton = ({children, disabled, onClick}) => {
  return (
    <button disabled={disabled} onClick={typeof onClick === 'function' ? onClick : () => {}}>
      { children }
    </button>
  );
};

export default AppButton;
