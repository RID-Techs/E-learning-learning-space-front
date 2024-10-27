import logo from "/learns.png";
import Homepage from "/Homepage.png";
import Answers from "/answerss.png";
import TestOne from "/testOne.png";
import star from "/stars_2.png";
import Testpic from "/test.png";
// import { Sem_1_Grammar } from "./SEM_1_TEST/GrammarSem1";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Sem_1_Grammar } from "./SEM_1_TEST/GrammarSem1";
export function Test() {
  const [testSem, setTestSem] = useState("");

  const [storeScrollPosition, setStoreScrollPosition] = useState(null);
  const handleTestSem = (e) => {
    setTestSem(e.target.value);
    const AllSubjectsPosition = document.querySelector(".test-subjects");
      AllSubjectsPosition.addEventListener("scroll", () => {
      const scrollYdata = AllSubjectsPosition.scrollTop;
      console.log(scrollYdata);
      setStoreScrollPosition(scrollYdata)
  })
}

  useEffect(() => {
    const allInps = document.querySelectorAll("label");
    allInps.forEach((inp) =>{
      inp.addEventListener("click", () => {

        allInps.forEach((inps) => {
          const ChangStyle = inps.parentElement
          ChangStyle.classList.remove("test-radios");
        })

        const ChangStyle = inp.parentElement
        ChangStyle.classList.add("test-radios");
      })
    })
  }, []);

  const positionRef = useRef(null);
  const positionRef_2 = useRef(null);
  const [GramTest, setGramTest] = useState(false);

  const HideSubjects_1 = () => {
    const Subjects = document.querySelector(".test-subjects");
    const TestInterface = document.querySelector(".test-appear-container");
    Subjects.style.display = "none";
    setGramTest(true);
    positionRef.current.scrollTop = 0;
    TestInterface.style.display = "block";
    console.log("hop: ", storeScrollPosition);
    
  }

  const BackBtn = () => {
    positionRef_2.current.scrollY = storeScrollPosition;
    const TestInterface = document.querySelector(".test-appear-container");
    const Subjects = document.querySelector(".test-subjects");
    TestInterface.style.display = "none";
    Subjects.style.display = "";
  }

  return (
    <>
      <div ref={positionRef_2} className="container-fluid test-wraper">
        <div className="test-holder">
          <header className="test-header">
            <img height={50} src={logo} alt="E-learning" />
            <h1>E-learning</h1>
          </header>

          <div id="answers-header" className="header-elements me-xl-4 me-lg-4 me-md-4">
            <ul>
              <a href="/Home">
                <li>
                  {" "}
                  <img
                    height={22}
                    src={Homepage}
                    alt="Semester"
                  /> Homepage{" "}
                </li>
              </a>
              <a href="/Get_Answers">
                <li>
                  {" "}
                  <img height={22} src={Answers} alt="Answers" /> E-learning
                  Answer Hub{" "}
                </li>
              </a>
              <a className="active" href="Test">
                <li>
                  {" "}
                  <img height={22} src={TestOne} alt="Answers" /> Tests{" "}
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>

    <div className="container mt-4">
        <div className="test-message-header">
        <div className="take-test">
          <h1>
              <span className="test-span-holder">
                <span className="test-span">Take a test</span>
              </span> <br />
              <span className="test-span-holder">
                <span className="test-span-2">Rate yourself</span>
              </span><br />
              <span className="test-span-holder">
                <span className="test-span-3">Improve yourself</span>
              </span>
          </h1>
          <img height={100} src={Testpic} alt="Test" />
        </div>
        </div>
    </div>

    <div className="container mt-4">
      <div className="test-semester">
        <h2> ✧ Choose my semester</h2>
      </div>

      <div className="pick-semester mt-3">
        <div className="test-semesters-radio">
          <div className="test-radio">
            <label htmlFor="test-sem-1">Semester 1
            <input 
            value="Semester 1"
            checked={testSem === "Semester 1"}
            onChange={handleTestSem}
            className="ms-1" type="radio" id="test-sem-1"/>
            </label>
          </div>
          <div className="test-radio">
            <label htmlFor="test-sem-2">Semester 2
            <input
            value="Semester 2"
            checked={testSem === "Semester 2"}
            onChange={handleTestSem}
            className="ms-1" type="radio" id="test-sem-2"/>
            </label>
          </div>
          <div className="test-radio">
            <label htmlFor="test-sem-3">Semester 3
            <input 
            value="Semester 3"
            checked={testSem === "Semester 3"}
            onChange={handleTestSem}
            className="ms-1" type="radio" id="test-sem-3"/>
            </label>
          </div>
          <div className="test-radio">
            <label htmlFor="test-sem-4">Semester 4
            <input 
            value="Semester 4"
            checked={testSem === "Semester 4"}
            onChange={handleTestSem}
            className="ms-1" type="radio" id="test-sem-4"/>
            </label>
          </div>
          <div className="test-radio">
            <label htmlFor="test-sem-5">Semester 5
            <input 
            value="Semester 5"
            checked={testSem === "Semester 5"}
            onChange={handleTestSem}
            className="ms-1" type="radio" id="test-sem-5"/>
            </label>
          </div>
          <div className="test-radio">
            <label htmlFor="test-sem-6">Semester 6
            <input  
            value="Semester 6"
            checked={testSem === "Semester 6"}
            onChange={handleTestSem}
            className="ms-1" type="radio" id="test-sem-6"/>
            </label>
          </div>
        </div>
      </div>

    </div>

    <div className="container mt-4">
      {testSem === "Semester 1" ? 
      
        <div className="test-subjects">
          <div className="test-subject-item">
            <p className="subject-header">Grammar <img src={star} alt="star" /> </p>
            <hr className="test-divder" />
              <button onClick={HideSubjects_1}  className="test-btn" type="button">Take a test <img height={22} src={Testpic} alt="star" /> </button>
          </div>

          <div className="test-subject-item">
            <p className="subject-header">Phonetics & Phonology <img src={star} alt="star" /> </p>
            <hr className="test-divder" />
            <Link to={"/Test/Grammar"}>
              <button className="test-btn" type="button">Take a test <img height={22} src={Testpic} alt="star" /> </button>
            </Link>
          </div>

          <div className="test-subject-item">
            <p className="subject-header">British Civilisation <img src={star} alt="star" /> </p>
            <hr className="test-divder" />
            <Link to={"/Test/Grammar"}>
              <button className="test-btn" type="button">Take a test <img height={22} src={Testpic} alt="star" /> </button>
            </Link>
          </div>

          <div className="test-subject-item">
            <p className="subject-header">American Civilisation <img src={star} alt="star" /> </p>
            <hr className="test-divder" />
            <Link to={"/Test/Grammar"}>
              <button className="test-btn" type="button">Take a test <img height={22} src={Testpic} alt="star" /> </button>
            </Link>
          </div>

          <div className="test-subject-item">
            <p className="subject-header">Tertiary Work Methodology <img src={star} alt="star" /> </p>
            <hr className="test-divder" />
            <Link to={"/Test/Grammar"}>
              <button className="test-btn" type="button">Take a test <img height={22} src={Testpic} alt="star" /> </button>
            </Link>
          </div>
          
        </div>
      
      : null}
    </div>

    <div className="test-appear-container">
      <div ref={positionRef} className="test-appear">
        <button type="button" onClick={BackBtn} id="back-btn"> <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M13 14l-4 -4l4 -4" />
  <path d="M8 14l-4 -4l4 -4" />
  <path d="M9 10h7a4 4 0 1 1 0 8h-1" />
</svg> Back</button>
{GramTest && <Sem_1_Grammar />}
        
      </div>
    </div>






    </>
  );
}
