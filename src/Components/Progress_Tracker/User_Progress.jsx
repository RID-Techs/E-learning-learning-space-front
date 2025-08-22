import { useEffect, useState } from "react";
import "./progress.css";
import logo from "/learns.png";
import warning from "/warning.png";
import stars from "/stars.png";
import { Courses_Sem_1 } from "./Courses/Sem_1_2/courses_sem_1";
import { Courses_Sem_3 } from "./Courses/Sem_3_4/courses_sem_3";
import { Courses_Sem_5 } from "./Courses/Sem_5_6/courses_sem_5";
import { Courses_Sem_6 } from "./Courses/Sem_5_6/courses_sem_6";
import { Courses_Sem_2 } from "./Courses/Sem_1_2/courses_sem_2";
import { Courses_Sem_4 } from "./Courses/Sem_3_4/courses_sem_4";

export const User_Progress = () => {

  const [sem_1_Progress, setSem_1_Progress] = useState(false);
  const [sem_2_Progress, setSem_2_Progress] = useState(false);
  const [sem_3_Progress, setSem_3_Progress] = useState(false);
  const [sem_4_Progress, setSem_4_Progress] = useState(false);
  const [sem_5_Progress, setSem_5_Progress] = useState(false);
  const [sem_6_Progress, setSem_6_Progress] = useState(false);

  const handleSem_1_Progress = (e) => {
    setSem_1_Progress(e.target.checked);
    localStorage.setItem("pr", "pr_s_1");
    setSem_2_Progress(false);
    setSem_3_Progress(false);
    setSem_4_Progress(false);
    setSem_5_Progress(false);
    setSem_6_Progress(false);
  }
  const handleSem_2_Progress = (e) => {
    setSem_2_Progress(e.target.checked);
    localStorage.setItem("pr", "pr_s_2");
    setSem_1_Progress(false);
    setSem_3_Progress(false);
    setSem_4_Progress(false);
    setSem_5_Progress(false);
    setSem_6_Progress(false);
  }
  const handleSem_3_Progress = (e) => {
    setSem_3_Progress(e.target.checked);
    localStorage.setItem("pr", "pr_s_3");
    setSem_1_Progress(false);
    setSem_2_Progress(false);
    setSem_4_Progress(false);
    setSem_5_Progress(false);
    setSem_6_Progress(false);
  }
  const handleSem_4_Progress = (e) => {
    setSem_4_Progress(e.target.checked);
    localStorage.setItem("pr", "pr_s_4");
    setSem_1_Progress(false);
    setSem_2_Progress(false);
    setSem_3_Progress(false);
    setSem_5_Progress(false);
    setSem_6_Progress(false);
  }
  const handleSem_5_Progress = (e) => {
    setSem_5_Progress(e.target.checked);
    localStorage.setItem("pr", "pr_s_5");
    setSem_1_Progress(false);
    setSem_2_Progress(false);
    setSem_3_Progress(false);
    setSem_4_Progress(false);
    setSem_6_Progress(false);
  }
  const handleSem_6_Progress = (e) => {
    setSem_6_Progress(e.target.checked);
    localStorage.setItem("pr", "pr_s_6");
    setSem_1_Progress(false);
    setSem_2_Progress(false);
    setSem_3_Progress(false);
    setSem_4_Progress(false);
    setSem_5_Progress(false);
  }

  useEffect(() => {
    const getSemProgress = localStorage.getItem("pr");
    if(!getSemProgress) return;
    switch(getSemProgress) {
      case "pr_s_1":
        setSem_1_Progress(true);
        break;
      case "pr_s_2":
        setSem_2_Progress(true);
        break;
      case "pr_s_3":
        setSem_3_Progress(true);
        break;
      case "pr_s_4":
        setSem_4_Progress(true);
        break;
      case "pr_s_5":
        setSem_5_Progress(true);
        break;
      case "pr_s_6":
        setSem_6_Progress(true);
        break;
    }
  }, [])

  const noneOfTheSemestersSelected = !sem_1_Progress && !sem_2_Progress && !sem_3_Progress && !sem_4_Progress && !sem_5_Progress && !sem_6_Progress

  return (
    <>
    <div className="container-fluid header-wraper-home" style={{zIndex: 1000}}>
                    <div className="header-holder">
                      <header>
                        <img height={50} src={logo} alt="E-learning" />
                        <h1>E-learning</h1>
                      </header>
                    </div>
            
                    <div className="header-elements">
                      <h3 id="member">
                        Track your progress <img className="member-stars" height={52} src={stars} alt="stars" />{" "}
                      </h3>
                    </div>
                  </div>

        <div className="container contribute-msg-holder">
          <div className="progress-msg-holder">
            <div className="progress-msg">
              <p><span id="eye-progress">Eye</span>,</p>
              <p><span id="embody-progress">embody</span>, and</p> 
              <p><span id="enjoy-progress">Enjoy</span></p>
              <p><span id="learning-progress"><em>Your Learning Progress</em></span></p>
            </div>
          </div>
        </div>

        <div className="container">
          <h2 id="choose-semester"><span>Choose your semester</span></h2>
          <div className="progress-by-semester-wrapper">
            <div className="progress-by-semester">
              <div className={sem_1_Progress ? "progress-inputs-group-checked" : "progress-inputs-group"}>
                <input type="checkbox" id="sem-1-progress" checked={sem_1_Progress} onChange={handleSem_1_Progress}/>
                <label htmlFor="sem-1-progress">
                  {sem_1_Progress ? (
                    <span className="checked-semester"></span>
                  ) : 
                    <span className="unchecked-semester"></span>
                  }
                  <span>Semester 1</span>
                </label>
              </div>
              <div className={sem_2_Progress ? "progress-inputs-group-checked" : "progress-inputs-group"}>
                <input type="checkbox" id="sem-2-progress" checked={sem_2_Progress} onChange={handleSem_2_Progress}/>
                <label htmlFor="sem-2-progress">
                  {sem_2_Progress ? (
                    <span className="checked-semester"></span>
                  ) : 
                    <span className="unchecked-semester"></span>
                  }
                  <span>Semester 2</span>
                </label>
              </div>
              <div className={sem_3_Progress ? "progress-inputs-group-checked" : "progress-inputs-group"}>
                <input type="checkbox" id="sem-3-progress" checked={sem_3_Progress} onChange={handleSem_3_Progress}/>
                <label htmlFor="sem-3-progress">
                  {sem_3_Progress ? (
                    <span className="checked-semester"></span>
                  ) : 
                    <span className="unchecked-semester"></span>
                  }
                  <span>Semester 3</span>
                </label>
              </div>
              <div className={sem_4_Progress ? "progress-inputs-group-checked" : "progress-inputs-group"}>
                <input type="checkbox" id="sem-4-progress" checked={sem_4_Progress} onChange={handleSem_4_Progress}/>
                <label htmlFor="sem-4-progress">
                  {sem_4_Progress ? (
                    <span className="checked-semester"></span>
                  ) : 
                    <span className="unchecked-semester"></span>
                  }
                  <span>Semester 4</span>
                </label>
              </div>
              <div className={sem_5_Progress ? "progress-inputs-group-checked" : "progress-inputs-group"}>
                <input type="checkbox" id="sem-5-progress" checked={sem_5_Progress} onChange={handleSem_5_Progress}/>
                <label htmlFor="sem-5-progress">
                  {sem_5_Progress ? (
                    <span className="checked-semester"></span>
                  ) : 
                    <span className="unchecked-semester"></span>
                  }
                  <span>Semester 5</span>
                </label>
              </div>
              <div className={sem_6_Progress ? "progress-inputs-group-checked" : "progress-inputs-group"}>
                <input type="checkbox" id="sem-6-progress" checked={sem_6_Progress} onChange={handleSem_6_Progress}/>
                <label htmlFor="sem-6-progress">
                  {sem_6_Progress ? (
                    <span className="checked-semester"></span>
                  ) : 
                    <span className="unchecked-semester"></span>
                  }
                  <span>Semester 6</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="courses-choice-holder">
            <div className="courses-choice">
              <div className="courses-to-choose">
                {sem_1_Progress && <Courses_Sem_1/>}
                {sem_3_Progress && <Courses_Sem_3/>}
                {sem_5_Progress && <Courses_Sem_5/>}
                {sem_2_Progress && <Courses_Sem_2/>}
                {sem_4_Progress && <Courses_Sem_4/>}
                {sem_6_Progress && <Courses_Sem_6/>}
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          { noneOfTheSemestersSelected && (
                  <div className="no-semester-selected-msg-wrapper">
                  <div className="no-semester-selected-msg">
                    <img src={warning} height={32} alt="Warning" />
                    <p>Please select a semester to track your progress in it.</p>
                  </div>
                  </div>
                )}
        </div>
    </>
  )
}