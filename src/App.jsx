
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import { ErrorBoundary } from "react-error-boundary";
import { Home } from "./Components/Home"
import { Error } from "./Errors/Error";
import { ErrorPage } from "./Errors/ErrorPage"
import { Get_Answers } from "./Components/Get_Answers";
import { SignUp } from "./Components/SignUp";
import { SignIn } from "./Components/SignIn";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoadHomePage } from "./Components/loaderPreFetch";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ErrorBoundary fallback={<Error/>}>
          <SignIn/>
        </ErrorBoundary>
      ),
      errorElement: <ErrorPage/>
    },
    {
      path: "/E_SignUps",
      element: (
        <ErrorBoundary fallback={<Error/>}>
          <SignUp/>
        </ErrorBoundary>
      ),
      errorElement: <ErrorPage/>
    },
    {
      path: "/Home",
      loader: LoadHomePage,
      element: (
        <ErrorBoundary fallback={<Error/>}>
          <Home/>
        </ErrorBoundary>
      ),
      errorElement: <ErrorPage/>
    },
    {
      path: "/Get_Answers",
      element: (
        <ErrorBoundary fallback={<Error/>}>
          <Get_Answers/>
        </ErrorBoundary>
      ),
      errorElement: <ErrorPage/>
    }
  ])
  

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer/>
    </>
  )
}

export default App
