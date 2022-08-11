import React, { useEffect } from 'react'
import '../../input.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, getProducts } from '../../features/Products/productsSlice'

function Hero() {
	const dispatch = useDispatch()
	const products = useSelector(state => state.product.products)

	const handleAddToCart = product => {
		dispatch(addToCart(product))
	}

	useEffect(() => {
		dispatch(getProducts())
	}, [dispatch])

	let properProducts = products.results
	properProducts = properProducts?.map(item => {
		const value = item.price.formattedValue
		const itemName = item.name
		let image = item.images[0].url
		const fullValue = item.price.value
		const code = item.code
		return [value, itemName, image, fullValue, code]
	})

	return (
		<>
			<div className='griden '>
				{properProducts?.map(item => (
					<div key={item[4]} className='mt-5  mx-10'>
						<div className='max-w-2xl mx-auto'>
							<div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700'>
								<a href='%'>
									<img className='rounded-t-lg' src={item[2]} alt='' />
								</a>
								<div className='p-5'>
									<a href='%'>
										<h5 className='text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white h-20'>
											{item[1]}
										</h5>
									</a>
									<p className='font-normal text-gray-700 mb-3 dark:text-gray-400'>
										Price: {item[0]}
									</p>
									<button
										className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
										onClick={() => handleAddToCart(item)}
									>
										Add to cart
										<svg
											className='-mr-1 ml-2 h-4 w-4'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												fillRule='evenodd'
												d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
												clipRule='evenodd'
											></path>
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default Hero
