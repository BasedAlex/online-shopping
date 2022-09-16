import SignUp from 'components/SignUp/SignUp';
import React from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <>
      <div className="py-8 px-16 font-normal text-3xs xl:text-sm md:text-xs flex flex-col items-center">
        <h1>Зарегистрируйтесь, чтобы приобретать товары</h1>
        <SignUp />
        <p>
          Уже зарегистрированы?{' '}
          <Link to="/login" className="text-blue-500 hover:text-black">
            Войдите!
          </Link>
        </p>
      </div>
    </>
  );
}

export default RegisterPage;
