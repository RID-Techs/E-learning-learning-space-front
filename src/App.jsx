
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Error } from "./Errors/Error";
import { ErrorPage } from "./Errors/ErrorPage";
import { Welcome_Page } from "./Components/WelcomePage";
import { Home } from "./Components/Home";
import { Get_Answers } from "./Components/Get_Answers";
import { Test } from "./Components/TEST_SECTION/Test";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SignIn } from "./Components/SignIn";
import { SignUp } from "./Components/SignUp";
import { Podcast } from "./Components/Podcast";
import { WebsiteTour } from "./Components/webTour";
import { Survey } from "./Components/Feedback/survey";
import { ExamPapersWrapper } from "./Components/Add_Paper_holder";
import { GetAllExamPapersWrapper } from "./Components/All_Exam_Papers_Holder";
import { User_Progress } from "./Components/Progress_Tracker/User_Progress";
import { E_Quiz } from "./Components/E_Quiz_Folder/E_QUIZ";
import { Create_Quiz } from "./Components/E_Quiz_Folder/Create_Quiz";
import { Create_Quiz_Extension } from "./Components/E_Quiz_Folder/Sample_Quiz";
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ErrorBoundary fallback={<Error/>}>
          <Welcome_Page/>
        </ErrorBoundary>
      ),
      errorElement: <ErrorPage/>
    },
    {
      path: "/sigup-adins",
      element: (
        <ErrorBoundary fallback={<Error/>}>
          <SignUp/>
        </ErrorBoundary>
      ),
      errorElement: <ErrorPage/>
    },
    {
      path: "/signin",
      element: (
        <ErrorBoundary fallback={<Error/>}>
          <SignIn/>
        </ErrorBoundary>
      ),
      errorElement: <ErrorPage/>
    },
    {
      path: "/Home",
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
    },
    {
      path: "/Test",
      element: (
        <ErrorBoundary fallback={<Error/>}>
          <Test/>
        </ErrorBoundary>
      ),
      errorElement: <ErrorPage/>
    },
    {
      path: "/Podcast",
      element: (
        <ErrorBoundary fallback={<Error/>}>
          <Podcast/>
        </ErrorBoundary>
      ),
      errorElement: <ErrorPage/>
    },
    {
      path: "/Websitetour",
      element: (
        <ErrorBoundary fallback={<Error/>}>
          <WebsiteTour />
        </ErrorBoundary>
      ),
      errorElement: <ErrorPage/>
    },
    {
      path: "/Exam-papers/add",
      element: (
        <ErrorBoundary fallback={<Error/>}>
          <ExamPapersWrapper />
        </ErrorBoundary>
      ),
      errorElement: <ErrorPage/>
    },
    {
      path: "/Exam-papers",
      element: (
        <ErrorBoundary fallback={<Error/>}>
          <GetAllExamPapersWrapper />
        </ErrorBoundary>
      ),
      errorElement: <ErrorPage/>
    },
    {
      path: "/Learning_progress",
      element: (
        <ErrorBoundary fallback={<Error/>}>
          <User_Progress />
        </ErrorBoundary>
      ),
      errorElement: <ErrorPage/>
    },
    {
      path: "/E-Quiz",
      element: (
        <ErrorBoundary fallback={<Error/>}>
          <E_Quiz />
        </ErrorBoundary>
      ),
      errorElement: <ErrorPage/>
    },
    {
      path: "/E-Quiz/:id",
      element: (
        <ErrorBoundary fallback={<Error/>}>
          <Create_Quiz />
        </ErrorBoundary>
      ),
      errorElement: <ErrorPage/>
    },
    {
      path: "/E-Quiz-Gen",
      element: (
        <ErrorBoundary fallback={<Error/>}>
          <Create_Quiz_Extension />
        </ErrorBoundary>
      ),
      errorElement: <ErrorPage/>
    },
    {
      path: "/Survey",
      element: (
        <ErrorBoundary fallback={<Error/>}>
          <Survey />
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
