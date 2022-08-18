import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import InvalidLink from './pages/InvalidLink/InvalidLink'
import Navbar from './components/Navbar/Navbar'
import Main from './pages/Main/Main'

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />

				<Routes>
					<Route path='/not-found' element={<InvalidLink />} />
					<Route path='/cart' exact element={<Cart />} />
					<Route path='/' exact element={<Main />} />
					<Route path='/*' element={<Navigate replace to='/not-found' />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
