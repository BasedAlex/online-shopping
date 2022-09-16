import React, { FC, useState } from 'react';

type FormProps = {
  title: string;
  handleClick: (email: string, pass: string) => void;
};

const Form: FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Пароль"
        />
        <button onClick={() => handleClick(email, pass)}>{title}</button>
      </div>
    </>
  );
};

export default Form;
