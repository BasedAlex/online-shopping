import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
	addToCart,
	clearCart,
	decreaseCart,
	getTotals,
	removeFromCart,
} from '../../features/Products/productsSlice'

function Cart() {
	const cart = useSelector(state => state.product)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getTotals())
	}, [cart, dispatch])

	const handleRemoveFromCart = cartItem => {
		dispatch(removeFromCart(cartItem))
	}

	const handleDecreaseCart = cartItem => {
		dispatch(decreaseCart(cartItem))
	}

	const handleIncreaseCart = cartItem => {
		dispatch(addToCart(cartItem))
	}

	const handleClearCart = () => {
		dispatch(clearCart())
	}

	return (
		<div className='py-8 px-16'>
			<h2 className='font-normal text-3xl text-center'>Shopping Cart</h2>
			{cart.cartItems.length === 0 ? (
				<div className='flex flex-col items-center font-normal text-xl mt-2'>
					<p>Your cart is currently empty</p>
					<div>
						<Link to='/'>
							<span className='flex gap-2'>
								Start Shopping
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-6 w-6 mt-1'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth={2}
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
									/>
								</svg>
							</span>
						</Link>
					</div>
				</div>
			) : (
				<div>
					<div className='grid mt-8 mx-0 mb-4 grid-cols-cart	'>
						<h3 className='font-normal text-sm uppercase pl-4'>Product</h3>
						<h3 className='font-normal text-sm uppercase'>Price</h3>
						<h3 className='font-normal text-sm uppercase'>Quantity</h3>
						<h3 className='font-normal text-sm uppercase pr-4 '>Total</h3>
					</div>
					<div className=''>
						{cart.cartItems?.map(cartItem => (
							<div
								className='grid items-center grid-cols-cart gap-x-2 border-t border-zinc-600 pt-2'
								key={cartItem[1]}
							>
								<div className='flex my-4'>
									<img
										className='rounded-t-lg w-24 max-w-full	mr-4'
										src={cartItem[2]}
										alt=''
									/>
									<div>
										<h3 className='font-normal'>{cartItem[1]}</h3>
										<button
											className='mt-3 text-zinc-700 hover:text-black'
											onClick={() => handleRemoveFromCart(cartItem)}
										>
											Remove
										</button>
									</div>
								</div>
								<div>{cartItem[0]}</div>
								<div className='flex justify-center w-28 max-w-full border border-zinc-600 rounded-md'>
									<button
										className='pr-4 py-2 text-xl'
										onClick={() => handleDecreaseCart(cartItem)}
									>
										-
									</button>
									<div className='px-1 py-2 text-xl '>
										{cartItem.cartQuantity}
									</div>
									<button
										className='pl-4 py-2 text-xl'
										onClick={() => handleIncreaseCart(cartItem)}
									>
										+
									</button>
								</div>
								<div className='font-semibold'>
									$ {cartItem[3] * cartItem.cartQuantity}
								</div>
							</div>
						))}
					</div>
					<div className='flex justify-between items-start border-t border-zinc-600 pt-8 pr-16'>
						<button
							className='w-32 max-w-full h-10 rounded-md font-normal tracking-wide border border-zinc-600 text-zinc-500 hover:text-black'
							onClick={() => handleClearCart()}
						>
							Clear Cart
						</button>
						<div className='w-48 max-w-full'>
							<div className='flex justify-between text-xl'>
								<span>Subtotal</span>
								<span className='font-bold'>${cart.cartTotalAmount}</span>
							</div>
							<p className='text-sm font-extralight my-2 mt-0	'>
								Prices are already adjusted
							</p>
							<button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center tracking-wide border inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-40 max-w-full'>
								Checkout
							</button>
							<div>
								<Link to='/'>
									<span className='mt-4 text-gray-500 flex items-center pl pr-2 gap-2'>
										Continue Shopping
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-6 w-6'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
											strokeWidth={2}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
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
	)
}

export default Cart
