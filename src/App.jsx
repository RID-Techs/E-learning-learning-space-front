
import {Outlet, RouterProvider, ScrollRestoration, createBrowserRouter} from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Error } from "./Errors/Error";
import { ErrorPage } from "./Errors/ErrorPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense } from "react";
import { PwaUpdater } from "./Components/PwaUpdater";

function RootLayout() {
  return (
          <ErrorBoundary fallback={<Error />}>
            <Suspense fallback={"Loading..."}>
              <Outlet />
            </Suspense>
            <ScrollRestoration />
          </ErrorBoundary>
  );
}
function App() {
  const excludedUsers = ["Eben", "Essossimina", "knbakle@e.member", "Paka hodabalo Francois", "Essomana", "BARRY Sidi"]
  const getUser = localStorage.getItem("User") || "E-member";
  const TookSurvey = localStorage.getItem("TookSurvey") === "true";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          lazy: async () => {
            const { Welcome_Page } = await import("./Components/WelcomePage");
            const { Survey } = await import("./Components/Feedback/survey");
            return { Component: TookSurvey || excludedUsers.includes(getUser.trim()) ? Welcome_Page : Survey };
          },
        },
        {
          path: "/sigup-adins",
          lazy: async () => {
            const { SignUp } = await import("./Components/SignUp");
            return { Component: SignUp };
          },
        },
        {
          path: "/signin",
          lazy: async () => {
            const { SignIn } = await import("./Components/SignIn");
            const { Survey } = await import("./Components/Feedback/survey");
            return { Component: TookSurvey || excludedUsers.includes(getUser.trim()) ? SignIn : Survey };
          },
        },
        {
          path: "/Home",
          lazy: async () => {
            const { Home } = await import("./Components/Home");
            const { Survey } = await import("./Components/Feedback/survey");
            return { Component: TookSurvey || excludedUsers.includes(getUser.trim()) ? Home : Survey };
          },
        },
        {
          path: "/Get_Answers",
          lazy: async () => {
            const { Get_Answers } = await import("./Components/Get_Answers");
            const { Survey } = await import("./Components/Feedback/survey");
            return { Component: TookSurvey || excludedUsers.includes(getUser.trim()) ? Get_Answers : Survey };
          },
        },
        {
          path: "/Test",
          lazy: async () => {
            const { Test } = await import("./Components/TEST_SECTION/Test");
            const { Survey } = await import("./Components/Feedback/survey");
            return { Component: TookSurvey || excludedUsers.includes(getUser.trim()) ? Test : Survey };
          },
        },
        {
          path: "/Podcast",
          lazy: async () => {
            const { Podcast } = await import("./Components/Podcast");
            const { Survey } = await import("./Components/Feedback/survey");
            return { Component: TookSurvey || excludedUsers.includes(getUser.trim()) ? Podcast : Survey };
          },
        },
        {
          path: "/Websitetour",
          lazy: async () => {
            const { WebsiteTour } = await import("./Components/webTour");
            const { Survey } = await import("./Components/Feedback/survey");
            return { Component: TookSurvey || excludedUsers.includes(getUser.trim()) ? WebsiteTour : Survey };
          },
        },
        {
          path: "/Exam-papers/add",
          lazy: async () => {
            const { ExamPapersWrapper } = await import("./Components/Add_Paper_holder");
            const { Survey } = await import("./Components/Feedback/survey");
            return { Component: TookSurvey || excludedUsers.includes(getUser.trim()) ? ExamPapersWrapper : Survey };
          },
        },
        {
          path: "/Exam-papers",
          lazy: async () => {
            const { GetAllExamPapersWrapper } = await import("./Components/All_Exam_Papers_Holder");
            const { Survey } = await import("./Components/Feedback/survey");
            return { Component: TookSurvey || excludedUsers.includes(getUser.trim()) ? GetAllExamPapersWrapper : Survey };
          },
        },
        {
          path: "/Learning_progress",
          lazy: async () => {
            const { User_Progress } = await import("./Components/Progress_Tracker/User_Progress");
            const { Survey } = await import("./Components/Feedback/survey");
            return { Component: TookSurvey || excludedUsers.includes(getUser.trim()) ? User_Progress : Survey };
          },
        },
        {
          path: "/E-Quiz",
          lazy: async () => {
            const { E_Quiz } = await import("./Components/E_Quiz_Folder/E_QUIZ");
            const { Survey } = await import("./Components/Feedback/survey");
            return { Component: TookSurvey || excludedUsers.includes(getUser.trim()) ? E_Quiz : Survey };
          },
        },
        {
          path: "/E-Quiz/:id",
          lazy: async () => {
            const { Create_Quiz } = await import("./Components/E_Quiz_Folder/Create_Quiz");
            const { Survey } = await import("./Components/Feedback/survey");
            return { Component: TookSurvey || excludedUsers.includes(getUser.trim()) ? Create_Quiz : Survey };
          },
        },
        {
          path: "/E-Quiz-Gen",
          lazy: async () => {
            const { Create_Quiz_Extension } = await import("./Components/E_Quiz_Folder/Sample_Quiz");
            const { Survey } = await import("./Components/Feedback/survey");
            return { Component: TookSurvey || excludedUsers.includes(getUser.trim()) ? Create_Quiz_Extension : Survey };
          },
        },
        {
          path: "/pdfreader",
          lazy: async () => {
            const PDFViewer = await import("./Components/PDFViewer");
            const { Survey } = await import("./Components/Feedback/survey");
            return { Component: TookSurvey || excludedUsers.includes(getUser.trim()) ? PDFViewer.default : Survey };
          },
        },
        {
          path: "/Survey",
          lazy: async () => {
            const { Survey } = await import("./Components/Feedback/survey");
            return { Component: Survey };
          },
        }
      ]
    }
  ])
  
  return (
    <>
      <PwaUpdater/>
      <RouterProvider router={router} future={{v7_startTransition: true}} />
      <ToastContainer/>
    </>
  )
}

export default App
