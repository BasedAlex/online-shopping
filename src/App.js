import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Cart from './Components/Cart/Cart'
import Hero from './Components/Hero/Hero'
import InvalidLink from './Components/InvalidLink/InvalidLink'
import Navbar from './Components/Navbar/Navbar'

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />

				<Routes>
					<Route path='/not-found' element={<InvalidLink />} />
					<Route path='/cart' exact element={<Cart />} />
					<Route path='/' exact element={<Hero />} />
					<Route path='/*' element={<Navigate replace to='/not-found' />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
