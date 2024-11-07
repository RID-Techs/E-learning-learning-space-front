import logo from "/learns.png";
import Homepage from "/Homepage.png";
import Answers from "/answerss.png";
import TestOne from "/testOne.png";
import star from "/stars_2.png";
import Testpic from "/test.png";
import { useState, useEffect, useRef } from "react";
import { Sem_1_Grammar } from "./SEM_1_TEST/GrammarSem1";
import { Phonetics } from "./SEM_1_TEST/Phonetics";
import { TestSem_2 } from "./SEM_2/sem_2";
import { TestSem_4 } from "./SEM_4/Sem_4";
import { TestSem_6 } from "./SEM_6/Sem_6";
import { American_Test } from "./SEM_1_TEST/American_Test";
import { British_Test } from "./SEM_1_TEST/British_Test";
import { Century_18thNovel_Test } from "./SEM_1_TEST/Century_18thNovelTest";
export function Test() {
  const [testSem, setTestSem] = useState("");

  const handleTestSem = (e) => {
    setTestSem(e.target.value);
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

  const [GramTest, setGramTest] = useState(false);
  const [PhonTest, setPhonTest] = useState(false);
  const [AmericanTest, setAmericanTest] = useState(false);
  const [BritishTest, setBritishTest] = useState(false);
  const [Century_18thNovel, setCentury_18thNovel] = useState(false);
  const [MorphologyTest, setMorphologyTest] = useState(false);
  const [AmericanNovelTest, setAmericanNovelTest] = useState(false);
  const [Century_19thNovel, setCentury_19thNovel] = useState(false);
  const [Lit_EnvironmentTest, setLit_EnvironmentTest] = useState(false);

  const HideSubjects_1 = () => {
    const Subjects = document.querySelector(".test-subjects");
    const TestInterface = document.querySelector(".test-appear-container");
    Subjects.style.display = "none";
    setGramTest(true);
    setPhonTest(false);
    setAmericanTest(false);
    setBritishTest(false);
    setCentury_18thNovel(false);
    setMorphologyTest(false);
    setAmericanNovelTest(false);
    setCentury_19thNovel(false);
    setLit_EnvironmentTest(false);
    positionRef.current.scrollTop = 0;
    TestInterface.style.display = "block";
  }
  const HideSubjects_2 = () => {
    const Subjects = document.querySelector(".test-subjects");
    const TestInterface = document.querySelector(".test-appear-container");
    Subjects.style.display = "none";
    setPhonTest(true);
    setGramTest(false);
    setAmericanTest(false);
    setBritishTest(false);
    setCentury_18thNovel(false);
    setMorphologyTest(false);
    setAmericanNovelTest(false);
    setCentury_19thNovel(false);
    setLit_EnvironmentTest(false);
    positionRef.current.scrollTop = 0;
    TestInterface.style.display = "block";
  }
  const HideSubjects_3 = () => {
    const Subjects = document.querySelector(".test-subjects");
    const TestInterface = document.querySelector(".test-appear-container");
    Subjects.style.display = "none";
    setAmericanTest(true);
    setPhonTest(false);
    setGramTest(false);
    setBritishTest(false);
    setCentury_18thNovel(false);
    setMorphologyTest(false);
    setAmericanNovelTest(false);
    setCentury_19thNovel(false);
    setLit_EnvironmentTest(false);
    positionRef.current.scrollTop = 0;
    TestInterface.style.display = "block";
  }
  const HideSubjects_4 = () => {
    const Subjects = document.querySelector(".test-subjects");
    const TestInterface = document.querySelector(".test-appear-container");
    Subjects.style.display = "none";
    setBritishTest(true);
    setAmericanTest(false);
    setPhonTest(false);
    setGramTest(false);
    setCentury_18thNovel(false);
    setMorphologyTest(false);
    setAmericanNovelTest(false);
    setCentury_19thNovel(false);
    setLit_EnvironmentTest(false);
    positionRef.current.scrollTop = 0;
    TestInterface.style.display = "block";
  }
  const HideSubjects_5 = () => {
    const Subjects = document.querySelector(".test-subjects");
    const TestInterface = document.querySelector(".test-appear-container");
    Subjects.style.display = "none";
    setCentury_18thNovel(true);
    setBritishTest(false);
    setAmericanTest(false);
    setPhonTest(false);
    setGramTest(false);
    setMorphologyTest(false);
    setAmericanNovelTest(false);
    setCentury_19thNovel(false);
    setLit_EnvironmentTest(false);
    positionRef.current.scrollTop = 0;
    TestInterface.style.display = "block";
  }
  const HideSubjects_6 = () => {
    const Subjects = document.querySelector(".test-subjects");
    const TestInterface = document.querySelector(".test-appear-container");
    Subjects.style.display = "none";
    setMorphologyTest(true);
    setBritishTest(false);
    setAmericanTest(false);
    setPhonTest(false);
    setGramTest(false);
    setCentury_18thNovel(false);
    setAmericanNovelTest(false);
    setCentury_19thNovel(false);
    setLit_EnvironmentTest(false);
    positionRef.current.scrollTop = 0;
    TestInterface.style.display = "block";
  }
  const HideSubjects_7 = () => {
    const Subjects = document.querySelector(".test-subjects");
    const TestInterface = document.querySelector(".test-appear-container");
    Subjects.style.display = "none";
    setAmericanNovelTest(true);
    setBritishTest(false);
    setAmericanTest(false);
    setPhonTest(false);
    setGramTest(false);
    setCentury_18thNovel(false);
    setMorphologyTest(false);
    setCentury_19thNovel(false);
    setLit_EnvironmentTest(false);
    positionRef.current.scrollTop = 0;
    TestInterface.style.display = "block";
  }
  const HideSubjects_8 = () => {
    const Subjects = document.querySelector(".test-subjects");
    const TestInterface = document.querySelector(".test-appear-container");
    Subjects.style.display = "none";
    setCentury_19thNovel(true);
    setBritishTest(false);
    setAmericanTest(false);
    setPhonTest(false);
    setGramTest(false);
    setCentury_18thNovel(false);
    setMorphologyTest(false);
    setAmericanNovelTest(false);
    setLit_EnvironmentTest(false);
    positionRef.current.scrollTop = 0;
    TestInterface.style.display = "block";
  }
  const HideSubjects_9 = () => {
    const Subjects = document.querySelector(".test-subjects");
    const TestInterface = document.querySelector(".test-appear-container");
    Subjects.style.display = "none";
    setLit_EnvironmentTest(true);
    setBritishTest(false);
    setAmericanTest(false);
    setPhonTest(false);
    setGramTest(false);
    setCentury_18thNovel(false);
    setMorphologyTest(false);
    setAmericanNovelTest(false);
    setCentury_19thNovel(false);
    positionRef.current.scrollTop = 0;
    TestInterface.style.display = "block";
  }

  const BackBtn = () => {
    const TestInterface = document.querySelector(".test-appear-container");
    const Subjects = document.querySelector(".test-subjects");
    TestInterface.style.display = "none";
    Subjects.style.display = "";
  }

  return (
    <>
      <div className="container-fluid test-wraper">
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
              <button onClick={HideSubjects_2} className="test-btn" type="button">Take a test <img height={22} src={Testpic} alt="star" /> </button>
          </div>

          <div className="test-subject-item">
            <p className="subject-header">American Civilisation <img src={star} alt="star" /> </p>
            <hr className="test-divder" />
              <button onClick={HideSubjects_3} className="test-btn" type="button">Take a test <img height={22} src={Testpic} alt="star" /> </button>
          </div>

          <div className="test-subject-item">
            <p className="subject-header">British Civilisation <img src={star} alt="star" /> </p>
            <hr className="test-divder" />
              <button onClick={HideSubjects_4} className="test-btn" type="button">Take a test <img height={22} src={Testpic} alt="star" /> </button>
          </div>
          
        </div>
      
      : null}
    </div>

    <div className="container mt-4">
      {testSem === "Semester 3" ? 
      
        <div className="test-subjects">
          <div className="test-subject-item">
            <p className="subject-header">18<sup>th</sup> Century English Novel <img src={star} alt="star" /> </p>
            <hr className="test-divder" />
              <button onClick={HideSubjects_5}  className="test-btn" type="button">Take a test <img height={22} src={Testpic} alt="star" /> </button>
          </div>

          <div className="test-subject-item">
            <p className="subject-header">Morphology & Syntax <img src={star} alt="star" /> </p>
            <hr className="test-divder" />
              <button onClick={HideSubjects_6} className="test-btn" type="button">Take a test <img height={22} src={Testpic} alt="star" /> </button>
          </div>

          <div className="test-subject-item">
            <p className="subject-header">American Novel <img src={star} alt="star" /> </p>
            <hr className="test-divder" />
              <button onClick={HideSubjects_7} className="test-btn" type="button">Take a test <img height={22} src={Testpic} alt="star" /> </button>
          </div>
        </div>
      : null}
    </div>

    <div className="container mt-4">
      {testSem === "Semester 5" ? 
      
        <div className="test-subjects">
          <div className="test-subject-item">
            <p className="subject-header">19<sup>th</sup> Century English Novel <img src={star} alt="star" /> </p>
            <hr className="test-divder" />
              <button onClick={HideSubjects_8}  className="test-btn" type="button">Take a test <img height={22} src={Testpic} alt="star" /> </button>
          </div>

          <div className="test-subject-item">
            <p className="subject-header">Littérature & Environnement <img src={star} alt="star" /> </p>
            <hr className="test-divder" />
              <button onClick={HideSubjects_9} className="test-btn" type="button">Take a test <img height={22} src={Testpic} alt="star" /> </button>
          </div>
        </div>
      : null}
    </div>

    <div className="container mt-4">
      {testSem === "Semester 2" ? <TestSem_2 /> : null}
    </div>
    <div className="container mt-4">
      {testSem === "Semester 4" ? <TestSem_4 /> : null}
    </div>
    <div className="container mt-4">
      {testSem === "Semester 6" ? <TestSem_6 /> : null}
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
{PhonTest && <Phonetics />}
{AmericanTest && <American_Test />}
{BritishTest && <British_Test /> }
{Century_18thNovel && <Century_18thNovel_Test /> }
{MorphologyTest && <British_Test /> }
{AmericanNovelTest && <British_Test /> }
{Lit_EnvironmentTest && <British_Test /> }
{Century_19thNovel && <British_Test /> }
      </div>
    </div>


    </>
  );
}
