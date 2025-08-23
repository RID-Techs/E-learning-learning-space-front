// Images logo, semester, courses, Answers, user, download, docs and warning are from https://icons8.com/
import logo from "/learns.png";
import semester from "/semester_2.png";
import Answers from "/answerss.png";
import user from "/user.png";
import courses from "/coursess.png";
import open from "/course.png";
import warning from "/warning.png";
import download from "/download.png";
import docs from "/doc.png";
// Illustration OnlineLearning is from https://undraw.co/
import OnlineLearning from "/Online_learning.svg";

import { toast, Zoom } from "react-toastify";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { pdfFiles_sem_1, pdfFiles_sem_2 } from "../All_Couses_Docs/Sem_1_2/courses_docs_1_2";
import { pdfFiles_sem_3, pdfFiles_sem_4 } from "../All_Couses_Docs/Sem_3_4/courses_docs_3_4";
import { pdfFiles_sem_5, pdfFiles_sem_6 } from "../All_Couses_Docs/Sem_5_6/courses_docs_5_6";

export function Home() {
  const navigate = useNavigate();
  const LogOut = () => {
    toast.warn("You have just quit your session !", {
      theme: "light",
      position: "top-center",
      autoClose: 2000,
      transition: Zoom,
    });
  };

  useEffect(() => {
    function One() {
      const headerHeight =
        document.querySelector(".header-wraper").offsetHeight;
      const TargetElement = document.getElementById("welcome-message");

      if (TargetElement && window.innerWidth <= 476) {
        window.scrollTo({
          top: TargetElement.offsetTop - headerHeight,
          behavior: "smooth",
        });
      }
    }

    One();

    function Position() {
      const headerHeight = document.querySelector(".header-wraper");
      if (!headerHeight) {
        console.error("Header element not found.");
        return;
      }
      const GetHeight = headerHeight.offsetHeight;

      const AllLinks = document.querySelectorAll("a[href^='#']");

      AllLinks.forEach((eachLink) => {
        eachLink.addEventListener("click", (e) => {
          e.preventDefault();
          const TargetId = eachLink.getAttribute("href").substring(1);
          const TargetElement = document.getElementById(TargetId);

          if (TargetElement) {
            window.scrollTo({
              top: TargetElement.offsetTop - GetHeight,
              behavior: "smooth",
            });
          }
        });
      });
    }

    Position();
  }, []);

  const hola = localStorage.getItem("User");
  const [checked_sem_1, setChecked_Sem_1] = useState(false);
  const [checked_sem_3, setChecked_Sem_3] = useState(false);
  const [checked_sem_5, setChecked_Sem_5] = useState(false);
  const [checked_sem_2, setChecked_Sem_2] = useState(false);
  const [checked_sem_4, setChecked_Sem_4] = useState(false);
  const [checked_sem_6, setChecked_Sem_6] = useState(false);

  const getMemberStatus = localStorage.getItem("isLoggedIn");
  const isMember = getMemberStatus === "true";

  useEffect(() => {
    const all = document.querySelectorAll(".semester-choice ul li");
    const Inps = document.querySelectorAll("input");

    if (
      checked_sem_1 ||
      checked_sem_2 ||
      checked_sem_3 ||
      checked_sem_4 ||
      checked_sem_5 ||
      checked_sem_6
    ) {
      Inps.forEach((inp) => {
        if (inp.checked) {
          const styleToParent = inp.parentElement;
          styleToParent.style.backgroundImage =
            "linear-gradient(to right, rgb(214, 253, 253), rgb(180, 255, 236))";
          styleToParent.style.borderTop = "2px solid rgba(67, 161, 238, 0.87)";
          styleToParent.style.borderBottom = "2px dotted rgb(0, 113, 128)";
          styleToParent.style.boxShadow =
            "inset 3px 0px 0px yellow, -3px 0px 0px brown, inset -3px 0px 0px brown, 3px 0px 0px yellow";
        }
      });
    } else {
      Inps.forEach((inp) => {
        const styleToParent_2 = inp.parentElement;
        styleToParent_2.style.backgroundImage = "";
        styleToParent_2.style.borderTop = "";
        styleToParent_2.style.borderBottom = "";
        styleToParent_2.style.boxShadow = "";
      });
    }

    const handleClick = (event) => {
      const target = event.currentTarget;
      if (target) {
        all.forEach((el) => {
          el.style.backgroundImage = "";
          el.style.borderTop = "";
          el.style.borderBottom = "";
          el.style.boxShadow = "";
        });
        target.style.backgroundImage =
          "linear-gradient(to right, rgb(214, 253, 253), rgb(180, 255, 236))";
        target.style.borderTop = "2px solid rgba(67, 161, 238, 0.87)";
        target.style.borderBottom = "2px dotted rgb(0, 113, 128)";
        target.style.boxShadow =
          "inset 3px 0px 0px yellow, -3px 0px 0px brown, inset -3px 0px 0px brown, 3px 0px 0px yellow";
      }
    };

    all.forEach((el) => {
      el.addEventListener("click", handleClick);
    });

    return () => {
      all.forEach((el) => {
        el.removeEventListener("click", handleClick);
      });
    };
  }, [
    checked_sem_1,
    checked_sem_2,
    checked_sem_3,
    checked_sem_4,
    checked_sem_5,
    checked_sem_6,
  ]);

  const True_Sem_1_Checked = (e) => {
    localStorage.removeItem("Sem_2");
    localStorage.removeItem("Sem_3");
    localStorage.removeItem("Sem_5");
    localStorage.removeItem("Sem_4");
    localStorage.removeItem("Sem_6");
    setChecked_Sem_1(e.target.checked);
    setChecked_Sem_2(false);
    setChecked_Sem_3(false);
    setChecked_Sem_5(false);
    setChecked_Sem_4(false);
    setChecked_Sem_6(false);
    localStorage.setItem("Sem_1", true);
  };

  const True_Sem_3_Checked = (e) => {
    localStorage.removeItem("Sem_1");
    localStorage.removeItem("Sem_2");
    localStorage.removeItem("Sem_5");
    localStorage.removeItem("Sem_4");
    localStorage.removeItem("Sem_6");
    setChecked_Sem_3(e.target.checked);
    setChecked_Sem_1(false);
    setChecked_Sem_2(false);
    setChecked_Sem_5(false);
    setChecked_Sem_4(false);
    setChecked_Sem_6(false);
    localStorage.setItem("Sem_3", true);
  };

  const True_Sem_5_Checked = (e) => {
    localStorage.removeItem("Sem_1");
    localStorage.removeItem("Sem_3");
    localStorage.removeItem("Sem_2");
    localStorage.removeItem("Sem_4");
    localStorage.removeItem("Sem_6");
    setChecked_Sem_5(e.target.checked);
    setChecked_Sem_1(false);
    setChecked_Sem_3(false);
    setChecked_Sem_2(false);
    setChecked_Sem_4(false);
    setChecked_Sem_6(false);
    localStorage.setItem("Sem_5", true);
  };

  const True_Sem_2_Checked = (e) => {
    localStorage.removeItem("Sem_1");
    localStorage.removeItem("Sem_3");
    localStorage.removeItem("Sem_5");
    localStorage.removeItem("Sem_4");
    localStorage.removeItem("Sem_6");
    setChecked_Sem_2(e.target.checked);
    setChecked_Sem_1(false);
    setChecked_Sem_3(false);
    setChecked_Sem_5(false);
    setChecked_Sem_4(false);
    setChecked_Sem_6(false);
    localStorage.setItem("Sem_2", true);
  };

  const True_Sem_4_Checked = (e) => {
    localStorage.removeItem("Sem_1");
    localStorage.removeItem("Sem_3");
    localStorage.removeItem("Sem_5");
    localStorage.removeItem("Sem_2");
    localStorage.removeItem("Sem_6");
    setChecked_Sem_4(e.target.checked);
    setChecked_Sem_1(false);
    setChecked_Sem_3(false);
    setChecked_Sem_5(false);
    setChecked_Sem_2(false);
    setChecked_Sem_6(false);
    localStorage.setItem("Sem_4", true);
  };
  const True_Sem_6_Checked = (e) => {
    localStorage.removeItem("Sem_1");
    localStorage.removeItem("Sem_3");
    localStorage.removeItem("Sem_5");
    localStorage.removeItem("Sem_2");
    localStorage.removeItem("Sem_4");
    setChecked_Sem_6(e.target.checked);
    setChecked_Sem_1(false);
    setChecked_Sem_3(false);
    setChecked_Sem_5(false);
    setChecked_Sem_2(false);
    setChecked_Sem_4(false);
    localStorage.setItem("Sem_6", true);
  };

  useEffect(() => {
    const getSem_1 = localStorage.getItem("Sem_1");
    const getSem_3 = localStorage.getItem("Sem_3");
    const getSem_5 = localStorage.getItem("Sem_5");
    const getSem_2 = localStorage.getItem("Sem_2");
    const getSem_4 = localStorage.getItem("Sem_4");
    const getSem_6 = localStorage.getItem("Sem_6");

    if (getSem_1) {
      setChecked_Sem_1(true);
    }
    if (getSem_3) {
      setChecked_Sem_3(true);
    }
    if (getSem_5) {
      setChecked_Sem_5(true);
    }

    if (getSem_2) {
      setChecked_Sem_2(true);
    }
    if (getSem_4) {
      setChecked_Sem_4(true);
    }
    if (getSem_6) {
      setChecked_Sem_6(true);
    }
  }, []);

  useEffect(() => {
    const getMemberStatus = localStorage.getItem("isLoggedIn");
    const isMember = getMemberStatus === "true";
    if(isMember) {

    const getSem_3_NewBadge_1 = localStorage.getItem("Sem_3_NewBadge_1");
    const getSem_3_NewBadge_2 = localStorage.getItem("Sem_3_NewBadge_2");
    const getSem_5_NewBadge_1 = localStorage.getItem("Sem_5_NewBadge_1");
    const getSem_5_NewBadge_2 = localStorage.getItem("Sem_5_NewBadge_2");
    const getSem_5_NewBadge_3 = localStorage.getItem("Sem_5_NewBadge_3");
    const getSem_5_NewBadge_4 = localStorage.getItem("Sem_5_NewBadge_4");

    if(!getSem_3_NewBadge_1) {
      localStorage.setItem("Sem_3_NewBadge_1", "true");
    }
    if(!getSem_3_NewBadge_2) {
      localStorage.setItem("Sem_3_NewBadge_2", "true");
    }
    if(!getSem_5_NewBadge_1) {
      localStorage.setItem("Sem_5_NewBadge_1", "true");
    }
    if(!getSem_5_NewBadge_2) {
      localStorage.setItem("Sem_5_NewBadge_2", "true");
    }
    if(!getSem_5_NewBadge_3) {
      localStorage.setItem("Sem_5_NewBadge_3", "true");
    }
    if(!getSem_5_NewBadge_4) {
      localStorage.setItem("Sem_5_NewBadge_4", "true");
    }
    }
    
  }, [])

  // const HideNewItemBadge_S3 = (e) => {
  //   const currentItem = e.currentTarget;
  //   const ToBeSeen = currentItem.getAttribute("data-actual-btn");
  //   if(ToBeSeen === "btn-S3-8") {
  //     localStorage.setItem("Sem_3_NewBadge_1", "false");
  //   }
  //   if(ToBeSeen === "btn-S3-9") {
  //     localStorage.setItem("Sem_3_NewBadge_2", "false");
  //   }
  // }
  // const HideNewItemBadge_S5 = (e) => {
  //   const currentItem = e.currentTarget;
  //   const ToBeSeen = currentItem.getAttribute("data-actual-btn");
  //   if(ToBeSeen === "btn-S5-17") {
  //     localStorage.setItem("Sem_5_NewBadge_1", "false");
  //   }
  //   if(ToBeSeen === "btn-S5-18") {
  //     localStorage.setItem("Sem_5_NewBadge_2", "false");
  //   }
  //   if(ToBeSeen === "btn-S5-20") {
  //     localStorage.setItem("Sem_5_NewBadge_3", "false");
  //   }
  //   if(ToBeSeen === "btn-S5-21") {
  //     localStorage.setItem("Sem_5_NewBadge_4", "false");
  //   }
  // }


  // const pdfFiles_sem_3_Filtered = pdfFiles_sem_3.filter((item) => {
  //   return item.id !== 8 && item.id !== 9
  // })
  // const pdfFiles_sem_5_Filtered = pdfFiles_sem_5.filter((item) => {
  //   return item.id !== 17 && item.id !== 18 && item.id !== 20 && item.id !== 21
  // })

  const LoggedOut = () => {
    LogOut();
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const [dateOfCreation, setDateOfCreation] = useState("2024");
  useEffect(() => {
    const getYear = () => {
      const currentYear = new Date().getFullYear().toString();

      setDateOfCreation((prevDateOfCreation) => {
        if (!prevDateOfCreation.includes(currentYear)) {
          return `${prevDateOfCreation} - ${currentYear}`;
        }
        return prevDateOfCreation;
      });
    };

    getYear();
  }, []);

  const [trackCourses_Sem_1, setTrackCourses_Sem_1] = useState(() => {
    const saved = localStorage.getItem("tr_cs_1");

    if (saved) {
      return JSON.parse(saved);
    }

    return [
      { courseKey: "English_Grammar", courses: [] },
      { courseKey: "American_Civilization", courses: [] },
      { courseKey: "African_Civilization", courses: [] },
      { courseKey: "Phonetics_Phonology", courses: [] },
      { courseKey: "Travail_Universitaire", courses: [] },
      { courseKey: "Civilisation_Britanique", courses: [] },
      { courseKey: "Expression_Écrite", courses: [] },
      { courseKey: "Composition_En_Français", courses: [] }
    ];
  });

  const [trackCourses_Sem_3, setTrackCourses_Sem_3] = useState(() => {
    const saved = localStorage.getItem("tr_cs_3");

    if (saved) {
      return JSON.parse(saved);
    }

    return [
      { courseKey: "English_Novel", courses: [] },
      { courseKey: "Morphology_and_Syntax", courses: [] },
      { courseKey: "African_Novel", courses: [] },
      { courseKey: "American_Novel", courses: [] },
      { courseKey: "Théâtre_Africain", courses: [] },
      { courseKey: "Théâtre_Classique", courses: [] },
      { courseKey: "Traduction_Avancée", courses: [] },
      { courseKey: "Expression_Écrite_Avancée", courses: [] }
    ];
  });

  const [trackCourses_Sem_5, setTrackCourses_Sem_5] = useState(() => {
    const saved = localStorage.getItem("tr_cs_5");

    if (saved) {
      return JSON.parse(saved);
    }

    return [
      { courseKey: "English_Novel", courses: [] },
      { courseKey: "Morpho_Phonology", courses: [] },
      { courseKey: "Post_African_Novel", courses: [] },
      { courseKey: "Discourse_Analysis", courses: [] },
      { courseKey: "Litt_Env", courses: [] },
      { courseKey: "Litt_Culture", courses: [] },
      { courseKey: "Modern_American", courses: [] }
    ];
  });

  const [trackCourses_Sem_2, setTrackCourses_Sem_2] = useState(() => {
    const saved = localStorage.getItem("tr_cs_2");

    if (saved) {
      return JSON.parse(saved);
    }

    return [
      { courseKey: "Anglophone_Lit", courses: [] },
      { courseKey: "Anglophone_Poetry", courses: [] },
      { courseKey: "Anglophone_Prose", courses: [] },
      { courseKey: "Anglophone_Theater", courses: [] },
      { courseKey: "Creative_Writing", courses: [] },
      { courseKey: "Méth_de_Traduction", courses: [] },
      { courseKey: "Oral_Express", courses: [] },
      { courseKey: "Allemand", courses: [] },
      { courseKey: "Espagnol", courses: [] }
    ];
  });

  const [trackCourses_Sem_4, setTrackCourses_Sem_4] = useState(() => {
    const saved = localStorage.getItem("tr_cs_4");

    if (saved) {
      return JSON.parse(saved);
    }

    return [
      { courseKey: "African_Civilisation", courses: [] },
      { courseKey: "African_Poetry", courses: [] },
      { courseKey: "American_Civilisation", courses: [] },
      { courseKey: "American_Poetry", courses: [] },
      { courseKey: "Contemporary_British_Civ", courses: [] },
      { courseKey: "Early_Am_Theater", courses: [] },
      { courseKey: "English_Poetry", courses: [] },
      { courseKey: "Advanced_Oral_Exp", courses: [] }
    ];
  });

  const [trackCourses_Sem_6, setTrackCourses_Sem_6] = useState(() => {
    const saved = localStorage.getItem("tr_cs_6");

    if (saved) {
      return JSON.parse(saved);
    }

    return [
      { courseKey: "Academic_Writing", courses: [] },
      { courseKey: "Litt_Theory", courses: [] },
      { courseKey: "Critique_Litt_Africa", courses: [] },
      { courseKey: "Critique_Litt_America", courses: [] },
      { courseKey: "Critique_Litt_Anglaise", courses: [] },
      { courseKey: "Litt_Comparée", courses: [] },
      { courseKey: "Litt_Media", courses: [] }
    ];
  });

  const getCourseOfSem = (e) => {
    const targetedCourse = e.currentTarget.getAttribute("data-course");
    const targetedCourseKey = e.currentTarget.getAttribute("data-course-key");
    const targetedCourseIndex = e.currentTarget.getAttribute("data-course-index");
    const convertedTargetedCourseIndex = Number(targetedCourseIndex);
    
    

    if(checked_sem_1) {
      if(trackCourses_Sem_1[convertedTargetedCourseIndex].courseKey !== targetedCourseKey) {
        return;
      }
  
      if(trackCourses_Sem_1[convertedTargetedCourseIndex].courses.includes(targetedCourse)){
        return;
      }
  
      setTrackCourses_Sem_1(prev =>
        prev.map((item, idx) => {
          if(idx === convertedTargetedCourseIndex) {
            return {...item, courses: [...item.courses, targetedCourse]}
          } else {
            return item
          }
        })
      );
    } else if(checked_sem_3) {
      if(trackCourses_Sem_3[convertedTargetedCourseIndex].courseKey !== targetedCourseKey) {
        return;
      }
  
      if(trackCourses_Sem_3[convertedTargetedCourseIndex].courses.includes(targetedCourse)){
        return;
      }
  
      setTrackCourses_Sem_3(prev =>
        prev.map((item, idx) => {
          if(idx === convertedTargetedCourseIndex) {
            return {...item, courses: [...item.courses, targetedCourse]}
          } else {
            return item
          }
        })
      );
    } else if(checked_sem_5) {
      if(trackCourses_Sem_5[convertedTargetedCourseIndex].courseKey !== targetedCourseKey) {
        return;
      }
  
      if(trackCourses_Sem_5[convertedTargetedCourseIndex].courses.includes(targetedCourse)){
        return;
      }
  
      setTrackCourses_Sem_5(prev =>
        prev.map((item, idx) => {
          if(idx === convertedTargetedCourseIndex) {
            return {...item, courses: [...item.courses, targetedCourse]}
          } else {
            return item
          }
        })
      );
    } else if(checked_sem_2) {
      if(trackCourses_Sem_2[convertedTargetedCourseIndex].courseKey !== targetedCourseKey) {
        return;
      }
  
      if(trackCourses_Sem_2[convertedTargetedCourseIndex].courses.includes(targetedCourse)){
        return;
      }
  
      setTrackCourses_Sem_2(prev =>
        prev.map((item, idx) => {
          if(idx === convertedTargetedCourseIndex) {
            return {...item, courses: [...item.courses, targetedCourse]}
          } else {
            return item
          }
        })
      );
    } else if(checked_sem_4) {
      if(trackCourses_Sem_4[convertedTargetedCourseIndex].courseKey !== targetedCourseKey) {
        return;
      }
  
      if(trackCourses_Sem_4[convertedTargetedCourseIndex].courses.includes(targetedCourse)){ 
        return;
      }
  
      setTrackCourses_Sem_4(prev =>
        prev.map((item, idx) => {
          if(idx === convertedTargetedCourseIndex) {
            return {...item, courses: [...item.courses, targetedCourse]}
          } else {
            return item
          }
        })
      );
    } else if(checked_sem_6) {
      if(trackCourses_Sem_6[convertedTargetedCourseIndex].courseKey !== targetedCourseKey) {
        return;
      }
  
      if(trackCourses_Sem_6[convertedTargetedCourseIndex].courses.includes(targetedCourse)){
        return;
      }
  
      setTrackCourses_Sem_6(prev =>
        prev.map((item, idx) => {
          if(idx === convertedTargetedCourseIndex) {
            return {...item, courses: [...item.courses, targetedCourse]}
          } else {
            return item
          }
        })
      );
    }
  }

  useEffect(() => {
    if(isMember) {
      if(checked_sem_1) localStorage.setItem("tr_cs_1", JSON.stringify(trackCourses_Sem_1));
      if(checked_sem_3) localStorage.setItem("tr_cs_3", JSON.stringify(trackCourses_Sem_3));
      if(checked_sem_5) localStorage.setItem("tr_cs_5", JSON.stringify(trackCourses_Sem_5));
      if(checked_sem_2) localStorage.setItem("tr_cs_2", JSON.stringify(trackCourses_Sem_2));
      if(checked_sem_4) localStorage.setItem("tr_cs_4", JSON.stringify(trackCourses_Sem_4));
      if(checked_sem_6) localStorage.setItem("tr_cs_6", JSON.stringify(trackCourses_Sem_6));
    }
  }, [trackCourses_Sem_1, trackCourses_Sem_3, trackCourses_Sem_5, trackCourses_Sem_2, trackCourses_Sem_4, trackCourses_Sem_6, checked_sem_1, checked_sem_3, checked_sem_5, checked_sem_2, checked_sem_4, checked_sem_6, isMember]);


  return (
    <>
         <div className="modal" id="logInMember" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-primary-emphasis fw-bold">E-learning Member</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>Want to get access ? Alright, <strong>register</strong> to enjoy all the <strong>Resources</strong>, available exclusively to <strong>E-learning members</strong>, and therefore assess your learning progress and continue improving.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <Link to={"/signin"}>
            <button type="button" className="btn btn-primary fw-bold fst-italic" data-bs-dismiss="modal">Sign in <svg
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
      <path d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
      <path d="M3 12h13l-3 -3" />
      <path d="M13 15l3 -3" />
    </svg> </button>
            </Link>
          </div>
        </div>
      </div>
    </div>

      <div className="container-fluid header-wraper">
        <div className="header-holder">
          <header>
            <img height={50} src={logo} alt="E-learning" />
            <h1>E-learning</h1>
          </header>

          <div className="header-elements">
            <ul>
              <a href="#my">
                <li>
                  {" "}
                  <img height={22} src={semester} alt="Semester" /> My Semester{" "}
                </li>
              </a>
              <a href="#my-courses">
                <li>
                  {" "}
                  <img height={22} src={courses} alt="Semester" /> My Current
                  Courses{" "}
                </li>
              </a>
              <a href="Get_Answers">
                <li>
                  {" "}
                  <img height={22} src={Answers} alt="Answers" /> E-learning
                  Answer Hub{" "}
                </li>
              </a>
              <a href="https://elerning-e-library.netlify.app" target="_blank">
                <li>
                  {" "}
                  <img height={22} src={Answers} alt="Answers" /> My E-library{" "}
                </li>
              </a>
              <button id="Log-out" onClick={LoggedOut} type="button">
                Log Out <svg
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
  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
  <path d="M9 12h12l-3 -3" />
  <path d="M18 15l3 -3" />
</svg>{" "}
              </button>
            </ul>
          </div>
        </div>
      </div>

      <div className="container welcome">
        <div className="welcome-text">
          <h2 id="welcome-message">
            {" "}
            <span id="my-semester-span">~</span> Welcome {hola}{" "}
            <img src={user} alt="user" /> ~{" "}
          </h2>
          <p>
            Enjoy learning with E-learning ! Here, you have everything you need
            to grasp your courses and enhance your understanding by broadening
            your scope.
          </p>
          <p id="welcome-foot">With E-learning, everything becomes easier !</p>
        </div>

        <div className="onlineImg">
          <img src={OnlineLearning} alt="Online Learning" />
        </div>
      </div>
      <div className="container mt-4">
        <hr className="divider" />
      </div>
      <div id="my" className="container mt-5">
        <h1 id="my-semester">
          {" "}
          <span id="my-semester-span">~</span>{" "}
          <span id="my-semester-text">Choose my semester</span>
        </h1>
      </div>

      <div className="container semester-choice mt-4">
        <ul>
          <label htmlFor="semester_1">
            <li>
              Semester 1{" "}
              <input
                checked={checked_sem_1}
                onChange={True_Sem_1_Checked}
                type="checkbox"
                id="semester_1"
              />
            </li>
          </label>
          <label htmlFor="semester_2">
            <li>
              Semester 2{" "}
              <input
                checked={checked_sem_2}
                onChange={True_Sem_2_Checked}
                type="checkbox"
                id="semester_2"
              />
            </li>
          </label>
          <label htmlFor="semester_3">
            <li>
              Semester 3{" "}
              <input
                checked={checked_sem_3}
                onChange={True_Sem_3_Checked}
                type="checkbox"
                id="semester_3"
              />
            </li>
          </label>
          <label htmlFor="semester_4">
            <li>
              Semester 4{" "}
              <input
                checked={checked_sem_4}
                onChange={True_Sem_4_Checked}
                type="checkbox"
                id="semester_4"
              />
            </li>
          </label>
          <label htmlFor="semester_5">
            <li>
              Semester 5{" "}
              <input
                checked={checked_sem_5}
                onChange={True_Sem_5_Checked}
                type="checkbox"
                id="semester_5"
              />
            </li>
          </label>
          <label htmlFor="semester_6">
            <li>
              Semester 6{" "}
              <input
                checked={checked_sem_6}
                onChange={True_Sem_6_Checked}
                type="checkbox"
                id="semester_6"
              />
            </li>
          </label>
        </ul>
        <p>
          <span id="semester-note">Please note</span> : You have to choose your
          semester before seeing your{" "}
          <span id="semester-note-2">current courses</span> !
        </p>
      </div>

      <div id="my-courses" className="container mt-4">
        <h1 id="my-current-courses">
          {" "}
          <span id="my-semester-span">~</span>{" "}
          <span id="my-semester-text">My Current Courses</span>
        </h1>
      </div>

      <div className="container mt-5">
        {checked_sem_1 === false &&
        checked_sem_3 === false &&
        checked_sem_5 === false &&
        checked_sem_2 === false &&
        checked_sem_4 === false &&
        checked_sem_6 === false ? (
          <p id="no-course">
            {" "}
            <img className="me-2" height={32} src={warning} alt="warning" /> You
            have no courses at the moment ! Please choose your semester first.
          </p>
        ) : null}

        {checked_sem_1 && (
          <div className="row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 g-4">
            {pdfFiles_sem_1.map((doc) => (
              <div key={doc.id} className="col">
                <div className="doc-item">
                  <div className="doc-img-and-name">
                    <div>
                      <img src={docs} alt="doc" />
                    </div>
                    <p> ~ {doc.name}</p>
                  </div>
                  {
                      isMember === true ? (
                        <div className="doc-action-button">
                      <a
                        onClick={getCourseOfSem}
                        href={doc.opendoc}
                        rel="noopener noreferrer"
                        data-actual-btn={`btn-S5-${doc.id}`}
                        data-course={doc.name}
                        data-course-key={doc.course_key}
                        data-course-index={doc.course_index}
                        target="_blank"
                      >
                        <img
                          className="me-2"
                          height={22}
                          src={open}
                          alt="arrow"
                        />{" "}
                        Open
                      </a>
                      <a
                        onClick={getCourseOfSem}
                        data-course={doc.name}
                        data-course-key={doc.course_key}
                        data-course-index={doc.course_index}
                        href={doc.url}
                        rel="noopener noreferrer"
                        data-actual-btn={`btn-S5-${doc.id}`}
                        download={`${doc.name}.pdf`}
                      >
                        <img
                          className="me-2"
                          height={22}
                          src={download}
                          alt="arrow"
                        />{" "}
                        <span className="both-screens">Download</span>
                      </a>
                    </div>
                      ) : (
                        <div className="doc-action-button">
                      <a data-bs-toggle="modal" data-bs-target="#logInMember">
                        <img
                          className="me-2"
                          height={22}
                          src={open}
                          alt="arrow"
                        />{" "}
                        Open
                      </a>
                      <a data-bs-toggle="modal" data-bs-target="#logInMember">
                        <img
                          className="me-2"
                          height={22}
                          src={download}
                          alt="arrow"
                        />{" "}
                        <span className="both-screens">Download</span>
                      </a>
                    </div>
                      )
                    }
                </div>
              </div>
            ))}
          </div>
        )}

        {checked_sem_3 && (
          <div className="row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 g-4">
           {pdfFiles_sem_3.map((doc) => (
              <div key={doc.id} className="col">
                <div className="doc-item">
                    {/* <div className="new-added-items">
                      {doc.newAdded_1 === true ? <p>New !</p> : null}
                      {doc.newAdded_2 === true ? <p>New !</p> : null}
                    </div> */}
                  <div className="doc-img-and-name">
                    <div>
                      <img src={docs} alt="doc" />
                    </div>
                    <p> ~ {doc.name}</p>
                  </div>
                  {
                      isMember === true ? (
                        <div className="doc-action-button">
                      <a
                        onClick={getCourseOfSem}
                        href={doc.opendoc}
                        rel="noopener noreferrer"
                        data-actual-btn={`btn-S5-${doc.id}`}
                        data-course-key={doc.course_key}
                        data-course-index={doc.course_index}
                        // onClick={HideNewItemBadge_S3}
                        data-course={doc.name}
                        target="_blank"
                      >
                        <img
                          className="me-2"
                          height={22}
                          src={open}
                          alt="arrow"
                        />{" "}
                        Open
                      </a>
                      <a
                        onClick={getCourseOfSem}
                        href={doc.url}
                        rel="noopener noreferrer"
                        data-actual-btn={`btn-S5-${doc.id}`}
                        data-course-key={doc.course_key}
                        data-course-index={doc.course_index}
                        // onClick={HideNewItemBadge_S3}
                        download={`${doc.name}.pdf`}
                        data-course={doc.name}
                      >
                        <img
                          className="me-2"
                          height={22}
                          src={download}
                          alt="arrow"
                        />{" "}
                        <span className="both-screens">Download</span>
                      </a>
                    </div>
                      ) : (
                        <div className="doc-action-button">
                      <a data-bs-toggle="modal" data-bs-target="#logInMember">
                        <img
                          className="me-2"
                          height={22}
                          src={open}
                          alt="arrow"
                        />{" "}
                        Open
                      </a>
                      <a data-bs-toggle="modal" data-bs-target="#logInMember">
                        <img
                          className="me-2"
                          height={22}
                          src={download}
                          alt="arrow"
                        />{" "}
                        <span className="both-screens">Download</span>
                      </a>
                    </div>
                      )
                    }
                </div>
              </div>
            ))}
            
          </div>
        )}

        {checked_sem_5 && (
          <div className="row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 g-4">
            { pdfFiles_sem_5.map((doc) => (
                <div key={doc.id} className="col">
                  <div className="doc-item">
                  {/* <div className="new-added-items">
                  {doc.newAdded_1 === true ? <p>New !</p> : null}
                  {doc.newAdded_2 === true ? <p>New !</p> : null}
                  {doc.newAdded_3 === true ? <p>New !</p> : null}
                  {doc.newAdded_4 === true ? <p>New !</p> : null}
                      </div> */}
                    <div className="doc-img-and-name">
                      <div>
                        <img src={docs} alt="doc" />
                      </div>
                      <p> ~ {doc.name}</p>
                    </div>
                    {
                      isMember === true ? (
                        <div className="doc-action-button">
                      <a
                        onClick={getCourseOfSem}
                        href={doc.opendoc}
                        rel="noopener noreferrer"
                        data-actual-btn={`btn-S5-${doc.id}`}
                        data-course-key={doc.course_key}
                        data-course-index={doc.course_index}
                        // onClick={HideNewItemBadge_S5}
                        data-course={doc.name}
                        target="_blank"
                      >
                        <img
                          className="me-2"
                          height={22}
                          src={open}
                          alt="arrow"
                        />{" "}
                        Open
                      </a>
                      <a
                        onClick={getCourseOfSem}
                        href={doc.url}
                        rel="noopener noreferrer"
                        data-actual-btn={`btn-S5-${doc.id}`}
                        data-course-key={doc.course_key}
                        data-course-index={doc.course_index}
                        // onClick={HideNewItemBadge_S5}
                        download={`${doc.name}.pdf`}
                        data-course={doc.name}
                      >
                        <img
                          className="me-2"
                          height={22}
                          src={download}
                          alt="arrow"
                        />{" "}
                        <span className="both-screens">Download</span>
                      </a>
                    </div>
                      ) : (
                        <div className="doc-action-button">
                      <a data-bs-toggle="modal" data-bs-target="#logInMember">
                        <img
                          className="me-2"
                          height={22}
                          src={open}
                          alt="arrow"
                        />{" "}
                        Open
                      </a>
                      <a data-bs-toggle="modal" data-bs-target="#logInMember">
                        <img
                          className="me-2"
                          height={22}
                          src={download}
                          alt="arrow"
                        />{" "}
                        <span className="both-screens">Download</span>
                      </a>
                    </div>
                      )
                    }
                  </div>
                </div>
              ))}
          </div>
        )}

        {checked_sem_2 && (
          <div className="row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 g-4">
            {pdfFiles_sem_2.map((doc) => (
              <div key={doc.id} className="col">
                <div className="doc-item">
                  <div className="doc-img-and-name">
                    <div>
                      <img src={docs} alt="doc" />
                    </div>
                    <p> ~ {doc.name}</p>
                  </div>
                  <div>
                    {
                      isMember === true ? (
                        <div className="doc-action-button">
                      <a
                        onClick={getCourseOfSem}
                        href={doc.opendoc}
                        rel="noopener noreferrer"
                        data-actual-btn={`btn-S5-${doc.id}`}
                        data-course-key={doc.course_key}
                        data-course-index={doc.course_index}
                        data-course={doc.name}
                        target="_blank"
                      >
                        <img
                          className="me-2"
                          height={22}
                          src={open}
                          alt="arrow"
                        />{" "}
                        Open
                      </a>
                      <a
                      onClick={getCourseOfSem}
                        href={doc.url}
                        rel="noopener noreferrer"
                        data-actual-btn={`btn-S5-${doc.id}`}
                        data-course-key={doc.course_key}
                        data-course-index={doc.course_index}
                        download={`${doc.name}.pdf`}
                        data-course={doc.name}
                      >
                        <img
                          className="me-2"
                          height={22}
                          src={download}
                          alt="arrow"
                        />{" "}
                        <span className="both-screens">Download</span>
                      </a>
                    </div>
                      ) : (
                        <div className="doc-action-button">
                      <a data-bs-toggle="modal" data-bs-target="#logInMember">
                        <img
                          className="me-2"
                          height={22}
                          src={open}
                          alt="arrow"
                        />{" "}
                        Open
                      </a>
                      <a data-bs-toggle="modal" data-bs-target="#logInMember">
                        <img
                          className="me-2"
                          height={22}
                          src={download}
                          alt="arrow"
                        />{" "}
                        <span className="both-screens">Download</span>
                      </a>
                    </div>
                      )
                    }

                    {doc.Traduction_rectification && (
                      <details className="mt-3">
                        <summary>
                          Click to see some small Rectifications 📌
                        </summary>

                        <p className="Rectification mt-2">
                          📌🥇Rectification of some parts in this document, make
                          sure to take into consideration what will be said next
                          : 🌿The proper and actual definitions of the terms{" "}
                          <strong>
                            {`"`}Thème and Version{`"`}
                          </strong>{" "}
                          in the context of Translation are these ones bellow,
                          not the ones in the document. <br />
                          <strong>Thème:</strong> refers to the translation of
                          text into a foreign language. <br />
                          <strong>Version:</strong> refers to the translation of
                          text into one’s own language. <br />
                          🌿 Also, there are some mistakes{" "}
                          <strong>Since, For, Ago</strong> in the document. Here
                          is the rectified explanation about them : Translation
                          of « since, » « for, » and « ago » ? In French, the
                          words « since, » « for, » and « ago » can be
                          translated in different ways depending on the context.
                          Here are some examples : Since : « Since » can be
                          translated as « depuis » in French, which indicates
                          the starting point of an action or event. For example
                          : « I have been studying French since last year » can
                          be translated as « J’étudie le français depuis l’année
                          dernière » in French. For : « For » can be translated
                          as « depuis » in French when indicating a duration of
                          time. For example : « I have been studying French for
                          two years » can be translated as « J’étudie le
                          français depuis deux ans » in French. Ago : « Ago »
                          can be translated as « il y a » in French when
                          indicating a past time. For example : « I worked here
                          two years ago » can be translated as « J’ai travaillé
                          ici il y a deux ans » in French. It’s important to
                          note that these translations may vary depending on the
                          context and the specific meaning of the word in the
                          sentence. A professional translator will always
                          consider the context and use the appropriate
                          translation based on the intended meaning. <br />
                          Thanks for your understanding !!!🌿
                        </p>
                      </details>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {checked_sem_4 && (
          <div className="row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 g-4">
            {pdfFiles_sem_4.map((doc) => (
              <div key={doc.id} className="col">
                <div className="doc-item">
                  <div className="doc-img-and-name">
                    <div>
                      <img src={docs} alt="doc" />
                    </div>
                    <p> ~ {doc.name}</p>
                  </div>
                  {
                      isMember === true ? (
                        <div className="doc-action-button">
                      <a
                      onClick={getCourseOfSem}
                        href={doc.opendoc}
                        rel="noopener noreferrer"
                        data-actual-btn={`btn-S5-${doc.id}`}
                        data-course-key={doc.course_key}
                        data-course-index={doc.course_index}
                        data-course={doc.name}
                        target="_blank"
                      >
                        <img
                          className="me-2"
                          height={22}
                          src={open}
                          alt="arrow"
                        />{" "}
                        Open
                      </a>
                      <a
                      onClick={getCourseOfSem}
                        href={doc.url}
                        rel="noopener noreferrer"
                        data-actual-btn={`btn-S5-${doc.id}`}
                        data-course-key={doc.course_key}
                        data-course-index={doc.course_index}
                        download={`${doc.name}.pdf`}
                        data-course={doc.name}
                      >
                        <img
                          className="me-2"
                          height={22}
                          src={download}
                          alt="arrow"
                        />{" "}
                        <span className="both-screens">Download</span>
                      </a>
                    </div>
                      ) : (
                        <div className="doc-action-button">
                      <a data-bs-toggle="modal" data-bs-target="#logInMember">
                        <img
                          className="me-2"
                          height={22}
                          src={open}
                          alt="arrow"
                        />{" "}
                        Open
                      </a>
                      <a data-bs-toggle="modal" data-bs-target="#logInMember">
                        <img
                          className="me-2"
                          height={22}
                          src={download}
                          alt="arrow"
                        />{" "}
                        <span className="both-screens">Download</span>
                      </a>
                    </div>
                      )
                    }
                </div>
              </div>
            ))}
          </div>
        )}

        {checked_sem_6 && (
          <div className="row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 g-4">
            {pdfFiles_sem_6.map((doc) => (
              <div key={doc.id} className="col">
                <div className="doc-item">
                  <div className="doc-img-and-name">
                    <div>
                      <img src={docs} alt="doc" />
                    </div>
                    <p> ~ {doc.name}</p>
                  </div>
                  {
                      isMember === true ? (
                        <div className="doc-action-button">
                      <a
                      onClick={getCourseOfSem}
                        href={doc.opendoc}
                        rel="noopener noreferrer"
                        data-actual-btn={`btn-S5-${doc.id}`}
                        data-course-key={doc.course_key}
                        data-course-index={doc.course_index}
                        data-course={doc.name}
                        target="_blank"
                      >
                        <img
                          className="me-2"
                          height={22}
                          src={open}
                          alt="arrow"
                        />{" "}
                        Open
                      </a>
                      <a
                        onClick={getCourseOfSem}
                        href={doc.url}
                        rel="noopener noreferrer"
                        data-actual-btn={`btn-S5-${doc.id}`}
                        data-course-key={doc.course_key}
                        data-course-index={doc.course_index}
                        download={`${doc.name}.pdf`}
                        data-course={doc.name}
                      >
                        <img
                          className="me-2"
                          height={22}
                          src={download}
                          alt="arrow"
                        />{" "}
                        <span className="both-screens">Download</span>
                      </a>
                    </div>
                      ) : (
                        <div className="doc-action-button">
                      <a data-bs-toggle="modal" data-bs-target="#logInMember">
                        <img
                          className="me-2"
                          height={22}
                          src={open}
                          alt="arrow"
                        />{" "}
                        Open
                      </a>
                      <a data-bs-toggle="modal" data-bs-target="#logInMember">
                        <img
                          className="me-2"
                          height={22}
                          src={download}
                          alt="arrow"
                        />{" "}
                        <span className="both-screens">Download</span>
                      </a>
                    </div>
                      )
                    }
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <footer className="container-fluid normal-footer">
        <div className="footer-first-part">

          <div className="header-holder">
            <div className="header-footer">
              <img height={32} src={logo} alt="E-learning" />
              <h3>E-learning</h3>
            </div>
          </div>

        </div>

        <div className="footer-second-part">
          <div className="privacy">
            <div className="rights">
              <p>&copy; {dateOfCreation} | All Rights Reserved</p>
            </div>

            <div className="author">
              <p>Made with <span style={{ color: "red" }}>&hearts;</span> by E-learning</p>
            </div>
          </div>

          <div className="social-links">
            <div className="whatsapp-content-2">
              <a
                href="https://chat.whatsapp.com/KEHsubuy8gKBogstCaBPzq"
                target="_blank"
              >
                {" "}
                <svg
                  id="whatsapp-icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <path d="M27.281 4.65c-2.994-3-6.975-4.65-11.219-4.65-8.738 0-15.85 7.112-15.85 15.856 0 2.794 0.731 5.525 2.119 7.925l-2.25 8.219 8.406-2.206c2.319 1.262 4.925 1.931 7.575 1.931h0.006c0 0 0 0 0 0 8.738 0 15.856-7.113 15.856-15.856 0-4.238-1.65-8.219-4.644-11.219zM16.069 29.050v0c-2.369 0-4.688-0.637-6.713-1.837l-0.481-0.288-4.987 1.306 1.331-4.863-0.313-0.5c-1.325-2.094-2.019-4.519-2.019-7.012 0-7.269 5.912-13.181 13.188-13.181 3.519 0 6.831 1.375 9.319 3.862 2.488 2.494 3.856 5.8 3.856 9.325-0.006 7.275-5.919 13.188-13.181 13.188zM23.294 19.175c-0.394-0.2-2.344-1.156-2.706-1.288s-0.625-0.2-0.894 0.2c-0.262 0.394-1.025 1.288-1.256 1.556-0.231 0.262-0.462 0.3-0.856 0.1s-1.675-0.619-3.188-1.969c-1.175-1.050-1.975-2.35-2.206-2.744s-0.025-0.613 0.175-0.806c0.181-0.175 0.394-0.463 0.594-0.694s0.262-0.394 0.394-0.662c0.131-0.262 0.069-0.494-0.031-0.694s-0.894-2.15-1.219-2.944c-0.319-0.775-0.65-0.669-0.894-0.681-0.231-0.012-0.494-0.012-0.756-0.012s-0.694 0.1-1.056 0.494c-0.363 0.394-1.387 1.356-1.387 3.306s1.419 3.831 1.619 4.1c0.2 0.262 2.794 4.269 6.769 5.981 0.944 0.406 1.681 0.65 2.256 0.837 0.95 0.3 1.813 0.256 2.494 0.156 0.762-0.113 2.344-0.956 2.675-1.881s0.331-1.719 0.231-1.881c-0.094-0.175-0.356-0.275-0.756-0.475z"></path>
                </svg>{" "}
                E-learning Crew
              </a>
            </div>

            <div className="average-content">
              <a href="https://ma-moyenne.netlify.app/" target="_blank">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-3 6c0 -1.014 -1.336 -1.384 -1.857 -.514l-2.143 3.57l-2.143 -3.57c-.521 -.87 -1.857 -.5 -1.857 .514v8a1 1 0 0 0 1 1l.117 -.007a1 1 0 0 0 .883 -.993v-4.39l1.143 1.904l.074 .108a1 1 0 0 0 1.64 -.108l1.143 -1.904v4.39a1 1 0 0 0 2 0z" />
                </svg>{" "}
                Ma-moyenne
              </a>
            </div>
          </div>

          <div className="Phone-number">
            <p>Contact : +228 79 83 62 19</p>
          </div>
        </div>
      </footer>
    </>
  );
}
