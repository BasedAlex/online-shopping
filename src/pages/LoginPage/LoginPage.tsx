import Login from 'components/Login/Login';
import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <>
      <div className="py-8 px-16 font-normal text-3xs xl:text-sm md:text-xs flex flex-col items-center">
        <h1>Войдите, чтобы приобретать товары</h1>
        <Login />
        <p>
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
