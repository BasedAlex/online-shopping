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
      <div className="flex-col p-8">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border-2 border-sky-800	rounded p-2 m-4"
        />
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Пароль"
          className="border-2 border-sky-800	rounded p-2 m-4"
        />
        <button onClick={() => handleClick(email, pass)} className="btn-white w-40 p-2">
          {title}
        </button>
      </div>
    </>
  );
};

export default Form;
