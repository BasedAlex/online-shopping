import React from 'react'
import { Link } from 'react-router-dom'

function InvalidLink() {
	return (
		<div className='block mx-auto'>
			<h2 className=''>Something went wrong! Page not found.</h2>
			<Link to='/' className='text-blue-500'>
				Return to main screen.
			</Link>
		</div>
	)
}

export default InvalidLink
