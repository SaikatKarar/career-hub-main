import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root.jsx'
import Home from './components/Home/Home.jsx'
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import JobDetails from './components/JobDetails/JobDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/applied",
        element: <AppliedJobs />,
        loader: () => fetch('../jobs.json') // do not load all data. load only what you need
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: () => fetch('../jobs.json') // do not load all data. load only what you need
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
