import React from 'react'
import CartContent from '../../components/CartContent/CartContent'

function Cart() {
	return (
		<div className='py-8 px-16'>
			<h2 className='font-normal text-3xl text-center'>Корзина</h2>
			<CartContent />
		</div>
	)
}

export default Cart
