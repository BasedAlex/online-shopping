import React from 'react'

const ProductItem = ({ posts }) => {
	return (
		<div>
			<div className='flex w-full bg-indigo-500 hover:bg-indigo-300 transition-all py-1 px-2 text-white rounded-sm'>
				{posts.title}
			</div>
		</div>
	)
}

export default ProductItem
