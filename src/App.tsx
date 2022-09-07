import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import InvalidLink from './pages/InvalidLink/InvalidLink';
import Navbar from './components/Navbar/Navbar';
import Main from './pages/Main/Main';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/not-found" element={<InvalidLink />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Main />} />
          <Route path="/*" element={<Navigate replace to="/not-found" />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
