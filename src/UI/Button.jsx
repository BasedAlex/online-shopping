import React from 'react'

const Button = ({ children, btnStyle, onClick }) => {
	return (
		<>
			<button onClick={onClick} className={btnStyle}>
				{children}
			</button>
		</>
	)
}

export default Button
