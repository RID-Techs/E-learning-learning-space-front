import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// Image logo, stars, star, username, password is from https://icons8.com/
import logo from "/learns.png";
import stars from "/stars.png";
import star from "/stars_2.png";
import E_crew from "/E_crew.png";
import courses from "/coursess.png";
// import password from "/password.png";
import E_member from "/E_picture.webp";
import { toast, Zoom } from "react-toastify";

export function Welcome_Page() {
  const navigate = useNavigate();
  const [showNote, setShowNote] = useState(null);
  const [hasReadNote, setHasReadNote] = useState(false);
  const [dateOfCreation, setDateOfCreation]  = useState("2024");

  const Welcome = (message) => {
    toast.success(message, {
        theme: "light",
        position:"top-center",
        autoClose: 2000,
        transition: Zoom
    })
}

  const [newUser, setNewUser] = useState("");
  const [UserAlredyLoggedIn, setUserAlredyLoggedIn] = useState(true);
  const User = localStorage.getItem("User");

  useEffect(() => {
    const getNote = localStorage.getItem("Show Note");
    const HasReadNotes = localStorage.getItem("HasReadNote");

    if (getNote === "true") {
      setShowNote(false);
    } else {
      setShowNote(true);
    }

    const timer = setTimeout(() => {
        const firstWelcomeMessage = document.querySelector("#first-welcome-message");
      const nextBtn = document.querySelector("#next-btn");
      const nextBtn_2 = document.querySelector("#next-btn-2");
      const prevBtn = document.querySelector("#prev-btn");
      const prevBtn_2 = document.querySelector("#prev-btn-2");
      const secondWelcomeMessage = document.querySelector("#second-welcome-message");
      const integrateWhatsapp = document.querySelector("#integrate-whatsapp");

      const PrevBtnFunc = () => {
        if(firstWelcomeMessage && secondWelcomeMessage) {
          secondWelcomeMessage.style.display = "none";
        firstWelcomeMessage.style.display = "block";
        }
      }

      const PrevBtnFunc_2 = () => {
        if(firstWelcomeMessage && integrateWhatsapp && secondWelcomeMessage) {
          firstWelcomeMessage.style.display = "none";
        integrateWhatsapp.style.display = "none";
        secondWelcomeMessage.style.display = "block";
        }
      }
      const PrevBtnFunc_3 = () => {
        if(firstWelcomeMessage && secondWelcomeMessage) {
          firstWelcomeMessage.style.display = "none";
        secondWelcomeMessage.style.display = "block";
        }
      }
      const PrevBtnFunc_4 = () => {
        if(secondWelcomeMessage && integrateWhatsapp) {
          secondWelcomeMessage.style.display = "none";
        integrateWhatsapp.style.display = "block";
        }
      }

      if(prevBtn) prevBtn.addEventListener("click", PrevBtnFunc);
        
      if(prevBtn_2) prevBtn_2.addEventListener("click", PrevBtnFunc_2);
      if(nextBtn) nextBtn.addEventListener("click", PrevBtnFunc_3);
      if(nextBtn_2) nextBtn_2.addEventListener("click", PrevBtnFunc_4);

      return () => {
        if(prevBtn) prevBtn.removeEventListener("click", PrevBtnFunc);
        if(prevBtn_2) prevBtn_2.removeEventListener("click", PrevBtnFunc_2);
        if(nextBtn) nextBtn.removeEventListener("click", PrevBtnFunc_3);
        if(nextBtn_2) nextBtn_2.removeEventListener("click", PrevBtnFunc_4);
      }

    }, 1000)

    if(HasReadNotes === "true") {
      setHasReadNote(true)
    } else {
      setHasReadNote(false)
    }
    
    return () => clearTimeout(timer);
  }, []);


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

  const CloseNoteButton = () => {
    setShowNote(false);
    localStorage.setItem("Show Note", "true");
    setHasReadNote(true);
    localStorage.setItem("HasReadNote", "true");
  };

  const EnterMySession = () => { 
    if(User) {
      Welcome(`Hi ${User}`)
      navigate("/Home")
    } else {
      setUserAlredyLoggedIn(false);
      document.body.classList.add("no-scroll")
    }
}

const SignInNewUser = (e) => {
  const NewUser = e.target.value;
  setNewUser(NewUser)
}

const LoginByName = () => {
  localStorage.setItem("User", newUser)
  setUserAlredyLoggedIn(true)
  document.body.classList.remove("no-scroll")
  Welcome(`Welcome ${newUser}`)
  navigate("/Home")
}

  return (
    <>
        {showNote && (
            <div className="conatiner-fluid Info-holder">
            <div className="container">
                <div className="Info-wrapper">
                <div className="ContentInfo">
                    <div className="info-title">
                    <h1>
                        {" "}
                        <span className="note">~</span> Important Note{" "}
                        <span className="note">~</span>{" "}
                    </h1>
                    </div>
                    <hr />
                    <div className="info-body">
                    <div id="first-welcome-message">
                        <p>
                        Welcome to the{" "}
                        <span id="site-name">
                            <strong>
                            <em>E-learning website</em>
                            </strong>
                        </span>
                        . Our platform is a learning space for students of
                        Anglophone Studies who want to enhance their understanding
                        of the courses taught by lecturers. On the platform, you
                        will find all the resources you need to improve your
                        comprehension of the material, increase your interactions
                        with lecturers during courses, and ultimately enable you
                        to transmit the knowledge you gain.
                        </p>
                        <hr />
                        <div className="leave">
                        <button className="hi-btn" type="button">
                            Hi
                        </button>
                        <button id="next-btn" type="button">
                            Next
                        </button>
                        </div>
                    </div>

                    <div id="second-welcome-message">
                        <p>
                        By doing so, you will broaden your scope on various topics
                        in the field of the English language.{" "}
                        <span className="underline">
                            {" "}
                            <strong>
                            However, some resources may not be up to date, as
                            lecturers often modify or change the content of their
                            courses.
                            </strong>{" "}
                        </span>{" "}
                        Otherwise, you are all set.
                        </p>

                        <hr />
                        <div className="leave">
                        <button id="prev-btn" type="button">
                            Previous
                        </button>
                        <button id="next-btn-2" type="button">
                            Next
                        </button>
                        </div>
                    </div>

                    <div id="integrate-whatsapp">
                        <div className="whatsapp-content">
                        <p>
                            Join our special WhatsApp group,{" "}
                            <strong>
                            {"'"}E-learning Crew,{"'"}
                            </strong>{" "}
                            for more tips on the English language and essential
                            resources to help you dive deeper into the world of
                            English like never before.
                        </p>
                        <img
                            id="e-crew-icon"
                            height={100}
                            src={E_crew}
                            alt="E-learning Crew"
                        />
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
                        <p id="click-here">
                        {" "}
                        <span className="up-arrow">￪</span>{" "}
                        <span className="up-arrow">￪</span> Click here{" "}
                        <span className="up-arrow">￪</span>{" "}
                        <span className="up-arrow">￪</span>{" "}
                        </p>
                        <hr />
                        <div className="leave">
                        <button id="prev-btn-2" type="button">
                            Previous
                        </button>
                        <button
                            id="close-btn"
                            onClick={CloseNoteButton}
                            type="button"
                        >
                            Close
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        )}

      <div className="container-fluid header-wraper-home">
        <div className="header-holder">
          <header>
            <img height={50} src={logo} alt="E-learning" />
            <h1>E-learning</h1>
          </header>
        </div>

        <div className="header-elements">
          <h3 id="member">
            Welcome Dear E-learning Member <img src={stars} alt="stars" />{" "}
          </h3>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="ms-4">
          {" "}
          Click the{" "}
          <span id="click-open-btn">
            {" "}
            <span id="open-btn">centered-button</span>
          </span>{" "}
          below to access the E-learning learning space{" "}
          <img src={star} alt="star" />{" "}
        </h3>
      </div>



      <div className="login-holder mt-4">

{hasReadNote && (<div className="welcome-button">
    <button onClick={EnterMySession} id="login-button"> <img height={32} src={courses} alt="user" /> Open my Learning Space</button>
</div>)}

<div>
    <img height={350} src={E_member} alt="learning" />
</div>

</div>


{!UserAlredyLoggedIn && (
          <div className="container">
          <div className="user-name-holder">
            <div className="username-wrapper">
            <div className="user-name">
              <label htmlFor="new-user">Your name :</label>
              <input type="text" value={newUser} onChange={SignInNewUser} id="new-user" placeholder="Enter your Name" />
            </div>
            <button type="button" onClick={LoginByName}>Login</button>
            </div>
          </div>
        </div>
        )}

<footer className="container-fluid">
      <div className="footer-first-part">
      <div className="header-holder">
          <header>
            <img height={32} src={logo} alt="E-learning" />
            <h3>E-learning</h3>
          </header>
        </div>
        <div className="rights">
          <p>&copy; {dateOfCreation} | All Rights Reserved</p>
        </div>
        <div className="author">
          <p>Made with <span style={{color: "red"}}>&hearts;</span> by E-learning</p>
        </div>
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
        <div className="Phone-number">
          <p>Contact : +228 79 83 62 19</p>
        </div>
      </div>
      </footer>

    </>
  );
}