import React from 'react';

type ButtonProps = {
  children?: React.ReactNode;
  btnStyle?: string;
  onClick?: () => void | any;
};

const Button = ({ children, btnStyle, onClick }: ButtonProps) => {
  return (
    <>
      <button onClick={onClick} className={btnStyle}>
        {children}
      </button>
    </>
  );
};

export default Button;
