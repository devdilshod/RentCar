import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Login, { action as loginAction } from "./pages/Login";
import Register, { action as registerAction } from "./pages/Register";
import { store } from "./store";
import Hero from './components/Hero';

const HomeLayout = () => {
  return (
    <div className="min-h-screen bg-[#F6F7F9] dark:bg-base-300 transition-colors duration-300">
      <Header />
      <Navbar />
    
      <Outlet />
    </div>
  );
};

const LandingPage = () => {
  return (
    <>
      <Hero />
      <main className="max-w-[1440px] mx-auto px-6 py-8 md:px-16">
      </main>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />,
    action: loginAction(store)
  },
  {
    path: '/register',
    element: <Register />,
    action: registerAction
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}