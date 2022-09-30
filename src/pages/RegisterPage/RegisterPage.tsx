import SignUp from 'components/SignUp/SignUp';
import React from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <>
      <div className="xxs:py-2 xxs:px-4 py-8 px-16 font-normal flex flex-col items-center">
        <h1 className="xxs:mt-12 xs:mt-12 sm:mt-12 md:mt-8 xs:text-2xl md:text-xl xxs:text-xl text-center">
          Зарегистрируйтесь, чтобы приобретать товары
        </h1>
        <SignUp />
        <p className="xs:text-xl xxs:text-md text-center">
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
