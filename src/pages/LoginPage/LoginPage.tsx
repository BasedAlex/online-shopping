import Login from 'components/Login/Login';
import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <>
      <div className="xxs:py-2 xxs:px-4 py-8 px-16 font-normal flex flex-col items-center">
        <h1 className="xxs:mt-32 xs:mt-24 sm:mt-24 md:mt-8 xs:text-2xl md:text-xl xxs:text-xl">
          Войдите, чтобы приобретать товары
        </h1>
        <Login />
        <p className="xs:text-xl xxs:text-md">
          Или{' '}
          <Link to="/register" className="text-blue-500 hover:text-black">
            зарегистрируйтесь
          </Link>
        </p>
      </div>
    </>
  );
}

export default LoginPage;
