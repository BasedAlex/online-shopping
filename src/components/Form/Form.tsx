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
      <div className="flex flex-col xs:flex-row items-center content-center align-center py-8 xxs:mt-0 xs:mt-2 ">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border-2 border-sky-800 2xl:w-60	rounded p-2 m-4 xxs:w-96 xs:w-48 xxs:h-12 xs:h-10 text-xl xxs:ml-8"
        />
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Пароль"
          className="border-2 2xl:w-60 border-sky-800	rounded p-2 m-4 xxs:w-96 xs:w-52 xxs:h-12 xs:h-10 text-xl xxs:ml-8"
        />
        <button
          onClick={() => handleClick(email, pass)}
          className="btn-white w-40 p-2 xxs:w-48 xxs:mt-6 xs:mt-0 "
        >
          {title}
        </button>
      </div>
    </>
  );
};

export default Form;
