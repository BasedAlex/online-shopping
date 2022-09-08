import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCartAction } from '../../store/reducers/cart/cart-action';
import Button from '../../UI/Button';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ItemsType } from 'store/reducers/cart/cart-reducer';

function Card() {
  const { isLoading, data } = useQuery(['products'], () => {
    return axios.get('https://fakestoreapi.com/products');
  });

  const dispatch = useDispatch();

  const [visible, setVisible] = useState(5);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 5);
  };

  const handleAddToCart = (product: ItemsType) => {
    dispatch(addToCartAction(product));
  };

  if (isLoading) {
    return <h2>Загрузка...</h2>;
  }

  return (
    <>
      <div className="2xl:griden-2xl xl:griden-xl lg:griden-lg md:griden-md sm:griden-sm">
        {data!.data?.slice(0, visible).map((item: ItemsType) => (
          <div key={item.id} className="mt-5 mx-10">
            <div className="max-w-2xl mx-auto ">
              <div className="bg-white shadow-md border border-gray-200 rounded-lg align-center max-w-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="%">
                  <img className="h-80 w-full rounded-t-lg" src={item.image} alt="" />
                </a>
                <div className="p-5  min-h-50">
                  <a href="%">
                    <h5 className="text-gray-900 font-bold text-xl tracking-tight mb-2 dark:text-white h-40">
                      {item.title}
                    </h5>
                  </a>
                  <p className="font-normal text-gray-700 mb-3 dark:text-gray-400 h-full">
                    Цена: $ {item.price}
                  </p>
                  <Button btnStyle="btn-blue" onClick={() => handleAddToCart(item)}>
                    Добавить в корзину
                    <svg
                      className="-mr-1 ml-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Button btnStyle="btn-blue w-36 my-4 2xl:mr-24" onClick={() => showMoreItems()}>
          Загрузить ещё
        </Button>
      </div>
    </>
  );
}

export default Card;
