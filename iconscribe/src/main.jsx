import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Login from './Pages/loginpage.jsx';
import Signup from './Pages/signup-page.jsx';
import Dashboard from './Pages/dashboard.jsx';
import ATP from './Pages/ATP.jsx'
import Enquiries from './Pages/enquiry.jsx';
import Overview from './Pages/overview.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/atp', element: <ATP/>},
  { path: '/enquires', element: <Enquiries/>},
  { path: '/overview', element: <Overview />}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-7mzp2148b0rbg0al.us.auth0.com"
      clientId="sVsSxUW3PsHsRP8o6RiooFfZRle0NkBQ"
      authorizationParams={{ redirect_uri: window.location.origin }} 
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </StrictMode>
);
