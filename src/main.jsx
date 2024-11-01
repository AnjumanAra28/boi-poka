import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import BookDetail from './components/BookDetail/BookDetail.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<HomePage></HomePage>
      },
      {
        path:'/books/:bookId',
        element:<BookDetail></BookDetail>,
        loader: ()=>fetch('/booksData.json')
      },
      {
        path:'/listedBooks',
        element:<ListedBooks></ListedBooks>,
        loader: ()=> fetch('/booksData.json')
      },
      {
        path:'/dashboard',
        element: <Dashboard></Dashboard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
      <ToastContainer />
  </StrictMode>,
)
