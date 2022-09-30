import Login from 'components/Login/Login';
import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <>
      <div className="xxs:py-2 xxs:px-4 py-8 px-16 font-normal flex flex-col items-center">
        <h1 className="xxs:mt-12 xs:mt-12 sm:mt-12 md:mt-8 xs:text-2xl md:text-xl xxs:text-xl text-center">
          Войдите, чтобы приобретать товары
        </h1>
        <Login />
        <p className="xs:text-xl xxs:text-md text-center">
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
