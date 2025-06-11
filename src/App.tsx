import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Home';
import Posts from './pages/Posts';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Define the routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/posts',
    element: <Posts />,
  },
]);

function App() {
  return (
    <>
      <Navbar />
      <div className="">
        <RouterProvider router={router} />
      </div>
      <p className="footer">
        © Copyright 2025 Sapan Gajjar. All rights reserved.
      </p>
    </>
  );
}

export default App;
