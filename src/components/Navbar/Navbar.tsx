import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RootState } from 'store/store';
import Button from 'UI/Button';
import { useAuth } from 'hooks/use-auth';
import { removeUser } from 'store/reducers/auth/userSlice';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import logo from '../../assets/images/shopping-logo.png';

function Navbar() {
  const [state, setState] = useState(false);
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();

  const cartTotalQuantity = useAppSelector((state: RootState) => state.cart.cartTotalQuantity);

  const navigation = [
    { title: 'Мужское', path: 'male' },
    { title: 'Женское', path: 'female' },
    { title: 'Детское', path: 'children' },
    { title: 'Часы', path: 'watches' },
    { title: 'Изделия', path: 'jewellery' },
    { title: 'Бренды', path: 'brands' },
  ];

  return (
    <nav className="bg-white w-full border-b md:border-0 md:static mt-8">
      <div className="flex flex-row justify-center px-4 max-w-screen-xl min-w-screen-md mx-auto">
        <Link to="/">
          <img src={logo} className="h-full" width={120} height={50} alt="logo" />
        </Link>
        <div className="flex self-center items-center justify-between py-3">
          <div className="2xl:hidden"></div>
          <ul className="hidden lg:flex justify-center items-center space-y-8  xs:space-x-6 xs:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-gray-600 hover:text-indigo-600">
                  <a>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center self-center ">
          <div className="align-center ">
            <div className="hidden flex-row	grow-0 shrink pt-1 pr-10pt-1 pr-10 fill-gray-600 hover:fill-indigo-600  text-gray-600 hover:text-indigo-600">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="self-center justify-self-center ml-5"
                >
                  <path
                    fill=""
                    d="M7 5a4 4 0 0 0-4 4c0 3.552 2.218 6.296 4.621 8.22A21.525 21.525 0 0 0 12 19.91a21.58 21.58 0 0 0 4.377-2.69C18.78 15.294 21 12.551 21 9a4 4 0 0 0-4-4c-1.957 0-3.652 1.396-4.02 3.2a1 1 0 0 1-1.96 0C10.652 6.396 8.957 5 7 5Zm5 17c-.316-.02-.56-.147-.848-.278a23.542 23.542 0 0 1-4.781-2.942C3.777 16.705 1 13.449 1 9a6 6 0 0 1 6-6 6.183 6.183 0 0 1 5 2.568A6.183 6.183 0 0 1 17 3a6 6 0 0 1 6 6c0 4.448-2.78 7.705-5.375 9.78a23.599 23.599 0 0 1-4.78 2.942c-.543.249-.732.278-.845.278Z"
                  ></path>
                </svg>
                <p>Favorites</p>
              </div>
            </div>
          </div>
          <Link to="/cart">
            <div className="flex flex-row	grow-0 shrink pt-1 pr-10 fill-gray-600 hover:fill-indigo-600 text-gray-600 hover:text-indigo-600 ml-8">
              <div className="xs:ml-6 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="self-center justify-self-center ml-4"
                >
                  <path
                    fill=""
                    d="M6 6a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2h4a1 1 0 0 1 .986 1.164l-1.582 9.494A4 4 0 0 1 17.46 22H6.54a4 4 0 0 1-3.945-3.342L1.014 9.164A1 1 0 0 1 2 8h4V6Zm2 2h5a1 1 0 1 1 0 2H3.18l1.389 8.329A2 2 0 0 0 6.54 20h10.92a2 2 0 0 0 1.972-1.671L20.82 10H17a1 1 0 0 1-1-1V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2Z"
                  ></path>
                </svg>
                <p>Корзина</p>
              </div>
              {cartTotalQuantity ? (
                <span className="bg-red-600 text-white rounded-lg	px-1 py-0 self-start text-sm">
                  {cartTotalQuantity}
                </span>
              ) : (
                ''
              )}
            </div>
          </Link>
          {isAuth ? (
            <button className="btn-blue w-16" onClick={() => dispatch(removeUser())}>
              Выйти
            </button>
          ) : (
            <Link to="/login">
              <Button btnStyle="btn-blue w-16">Войти</Button>
            </Link>
          )}
        </div>
        <button
          className="lg:hidden text-gray-700 outline-none pt-2 pl-2 ml-2 self-center rounded-md focus:border-gray-400 focus:border"
          onClick={() => {
            setState(!state);
          }}
        >
          {state ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 30 30"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 30 30"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              </svg>
            </>
          )}
        </button>
      </div>
      {state ? (
        <div className="text-end ">
          <ul className="space-y-2 md:hidden rounded-lg ml-8 p-2 pr-8 xs:flex xs:space-x-6 xs:space-y-0	bg-blue-100">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-gray-600 hover:text-indigo-600">
                  <a>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        ''
      )}
    </nav>
  );
}

export default Navbar;
