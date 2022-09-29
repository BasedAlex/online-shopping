import React from 'react';
import { Link } from 'react-router-dom';
import { ItemsType } from 'store/reducers/cart/cart-reducer';
import { RootState } from 'store/store';
import {
  addToCartAction,
  clearCartAction,
  decreaseCartAction,
  removeFromCartAction,
} from '../../store/reducers/cart/cart-action';
import { useAuth } from 'hooks/use-auth';
import { totalPriceSelector } from '../../store/reducers/cart/cart-selectors';
import Button from '../../UI/Button';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';

function Cart() {
  const { isAuth } = useAuth();

  const cart = useAppSelector((state: RootState) => state.cart);

  const totalPrice = useAppSelector(totalPriceSelector);

  console.log(totalPrice);

  const dispatch = useAppDispatch();

  const handleRemoveFromCart = (cartItem: ItemsType) => {
    dispatch(removeFromCartAction(cartItem));
  };

  const handleDecreaseCart = (cartItem: ItemsType) => {
    dispatch(decreaseCartAction(cartItem));
  };

  const handleIncreaseCart = (cartItem: ItemsType) => {
    dispatch(addToCartAction(cartItem));
  };

  const handleClearCart = () => {
    dispatch(clearCartAction());
  };

  return (
    <div className="py md:pt-0 2xl:py-8 xxs:pt-4 xxs:px ">
      <h2 className="font-normal text-3xl text-center">Корзина</h2>
      {cart.items.length === 0 ? (
        <div className="flex flex-col items-center font-normal text-xl mt-2">
          <p>Ваша корзина пуста</p>
          <div>
            <Link to="/">
              <span className="flex gap-2">
                Начать покупки
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="2xl:mx-28 xxs:mx-4">
          <div className="grid mt-8 mx-0 mb-4 grid-cols-cart">
            <h3 className="font-normal text-3xs xl:text-sm md:text-xs uppercase pl-4">Продукт</h3>
            <h3 className="font-normal text-3xs xl:text-sm md:text-xs uppercase">Цена</h3>
            <h3 className="font-normal text-3xs xl:text-sm md:text-xs uppercase">Количество</h3>
            <h3 className="font-normal text-3xs xl:text-sm md:text-xs uppercase pr-4 xxs:pl-2">
              Конечная цена
            </h3>
          </div>
          <div className="">
            {cart.items?.map((cartItem: ItemsType) => (
              <div
                className="grid items-center grid-cols-cart gap-x-2 border-t border-zinc-600 pt-2"
                key={cartItem.id}
              >
                <div className="flex my-4 ">
                  <img className="rounded-t-lg w-24 max-w-fullmr-4" src={cartItem.image} alt="" />
                  <div className="ml-2">
                    <h3 className="font-normal test:text-xs xs:text-xl">{cartItem.title}</h3>
                    <button
                      className="mt-3 text-zinc-700 hover:text-black"
                      onClick={() => handleRemoveFromCart(cartItem)}
                    >
                      Удалить
                    </button>
                  </div>
                </div>
                <div className="text-xxs xl:text-xl md:text-xs">{cartItem.price}</div>
                <div className="flex justify-center md:w-28 sm:w-16 xs:w-14 xss:w-8 max-w-full border border-zinc-600 rounded-md ">
                  <button
                    className="lg:pr-4 pl-8 xs:pr-0 py-2 text-xl xl:text-2xl md:text-sm test:pl-2"
                    onClick={() => handleDecreaseCart(cartItem)}
                  >
                    -
                  </button>
                  <div className="lg:pr-0 px-1 xs:pr-0 test:pt-2 xs:pt-0 xs:m-2 text-xl xl:text-xl md:text-md sm:pt-1">
                    {cartItem.cartQuantity}
                  </div>
                  <button
                    className="lg:pl-4 mr-8 xs:pl-0 py-2 text-xl xl:text-xl md:text-xs test:mr-2"
                    onClick={() => handleIncreaseCart(cartItem)}
                  >
                    +
                  </button>
                </div>
                <div className="font-semibold text-xxs xl:text-xl md:text-xs">
                  $ {(cartItem.price * cartItem.cartQuantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-start border-t border-zinc-600 pt-8 pr-16 2xl:pr-20 xl:pr-28 test:pr-2 md:pr-8 sm:pr-4">
            <Button btnStyle="btn-white ml-2" onClick={() => handleClearCart()}>
              Очистить
            </Button>
            <div className="w-48 max-w-full pl-4">
              <div className="flex justify-between text-xl ">
                <span>Итого: </span>
                <span className="font-bold">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-sm font-extralight my-2 mt-0 ">Конечная цена уже указана</p>

              {isAuth ? (
                <button
                  className="btn-blue"
                  onClick={() => {
                    handleClearCart();
                    alert('Благодарим за покупку!');
                  }}
                >
                  Купить
                </button>
              ) : (
                <button
                  className="btn-blue"
                  onClick={() => alert('Чтобы покупать товары, необходимо зарегистрироваться!')}
                >
                  Купить
                </button>
              )}

              <div>
                <Link to="/">
                  <span className="mt-4 text-gray-500 flex items-center pl pr-2 gap-2">
                    Продолжить покупки
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
