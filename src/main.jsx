import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Header from './components/UI/Header';
import AboutMe from './components/UI/AboutMe';
import Portfolio from './components/UI/Portfolio';
import Contact from './components/UI/Contact';
import Resume from './components/UI/Resume';
import Footer from './components/UI/Footer';
import Navigation from './components/UI/Navigation';

import 'bootstrap/dist/css/bootstrap.min.css';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'about',
        element: <AboutMe />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
