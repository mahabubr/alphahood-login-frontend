import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import OTP from './Pages/OTP';
import Success from './Pages/Success';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/otp',
      element: <OTP />
    },
    {
      path: '/success',
      element: <Success />
    },
  ])

  return (
    <div className='overflow-x-hidden'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
