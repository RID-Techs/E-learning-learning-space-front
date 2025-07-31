import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Image logo, stars, star, username, password is from https://icons8.com/
import logo from "/learns.png";
import stars from "/stars.png";
import reward from "/reward.png";
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

  const getMemberStatus = localStorage.getItem("isLoggedIn");
  const isMember = getMemberStatus === "true";

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

const [isLaunch, setIsLaunch] = useState(() => {
  const getFromScreenLaunch = localStorage.getItem("fromScreenLaunch");
  const webApp = getFromScreenLaunch === "Screen";
  return webApp;
});
  let reloadRoundTime = Number(sessionStorage.getItem("reloadRoundTime") || 1);
useEffect(() => {

  if (isMember && !isLaunch && reloadRoundTime < 2) {
      sessionStorage.setItem("reloadRoundTime", reloadRoundTime + 1);
      console.log("Added ng :", reloadRoundTime + 1);
      window.location.reload();
  }

      let deferredPrompt;

      window.addEventListener("beforeinstallprompt", (e) => {
        // Prevent Chrome from showing the default prompt
        e.preventDefault();
        deferredPrompt = e;

        // Show your custom "Install App" button or banner
        const installBanner = document.getElementById("install-banner");
        if (installBanner) installBanner.style.display = "block";

        // Handle the button click
        const installButton = document.getElementById("install-btn");
        if (installButton) {
          installButton.addEventListener("click", () => {
            if (installBanner) installBanner.style.display = "none"; // Hide banner
            deferredPrompt.prompt(); // Show the install prompt

            deferredPrompt.userChoice.then((choiceResult) => {
              if (choiceResult.outcome === "accepted") {
                console.log("User accepted");
                localStorage.setItem("fromScreenLaunch", "Screen");
                setIsLaunch(true);
              } else {
                console.log("User dismissed");
              }
              deferredPrompt = null;
            });
          });
        }
      });
}, [isLaunch, isMember, reloadRoundTime]);

const ClosingBanner = () => {
  const banner = document.getElementById("install-banner");
  banner.style.display = "none";
  localStorage.setItem("fromScreenLaunch", "Screen");
}

const [eco, setEco] = useState(false);

useEffect(() => {
  const ecoValue = localStorage.getItem("eco");
  if(!ecoValue) return;
  setEco(ecoValue === "true");
}, []);

const ClosingEcoBanner = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.setItem("eco", "true");
  setEco(true);
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
                            English like never before. If you are already in, just click <strong>Close.</strong> Otherwise, click the button below to join the crew, and then return here.
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
                            onClick={CloseNoteButton}
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
            Welcome Dear E-learning Member <img className="member-stars" height={42} src={stars} alt="stars" />{" "}
          </h3>

          {isMember && !isLaunch && window.innerWidth <= 786 ? (
  <div id="install-banner">
    <div className="banner-wrapper">
      <div className="banner-content">
        <div className="closing-banner"><button onClick={ClosingBanner} id="closing-banner">Close</button></div>
        <p id="banner-title">✧ New Update ✧</p>
        <p id="banner-divider">- · - - · - - · -</p>
        <p>
          Just click <strong>Install</strong> to turn the <strong><em>E-learning</em></strong> website into an application, making it directly accessible from your phone{"'"}s home screen for a better experience !
        </p>
        <button id="install-btn">Install ↯</button>
      </div>
    </div>
  </div>
) : null}

{!eco && (
   <div id="install-banner">
    <div className="banner-wrapper">
      <div className="banner-content">
        <div className="closing-banner"><button onClick={ClosingEcoBanner} id="closing-banner">Close</button></div>
        <p id="banner-title">✧ New Update ✧</p>
        <p id="banner-divider">- · - - · - - · -</p>
        <p>
          Hey 😃, <strong><em>E-Collection Of Papers</em></strong> is here ! It is a collection of past exam papers that will help you prepare for your exams and improve your knowledge. You can contribute too 🤗.
        </p>
        <button onClick={ClosingEcoBanner} id="install-btn">Got it <em>!</em></button>
      </div>
    </div>
  </div>
)}


        </div>
        <div className="elearning-member-wrapper">
          <div className="elearning-member">
        {isMember ? <button type="button">  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
  <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
</svg> E-learning Member {isMember && <img height={32} src={reward} alt="reward" />} </button> : 

<button type="button" data-bs-toggle="modal" data-bs-target="#logInMember">  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
  <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
</svg> E-learning Member</button>}
          </div>
        </div>
      </div>

      <div className="modal" id="logInMember" tabIndex="-1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title text-primary-emphasis fw-bold">E-learning Member</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>Sign in to access all content and new updates available exclusively to <strong>E-learning members</strong>. You can also take tests in the <strong>Test section</strong> to evaluate your learning progress and continue improving.</p>
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

      <div className="guide-msg">
        <h3 className="ms-4 me-4">
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
    <div className="welcome-actions">
            <button onClick={EnterMySession} id="login-button"> <img height={32} src={courses} alt="user" /> Open my Learning Space</button>
            {isMember && <a id="web-tour" href="Websitetour" target="_blank">⋄⦂ Click me to make a nice tour of the website !</a>}
            <a id="survey-link" href="Survey">Have some feedback ? Take a quick survey ፦ </a>
            <a id="exam-papers-link" href="/Exam-papers/"> <span id="exam-papers-icon">࠰⊱</span> E-Collection Of Papers 🪴</a>
    </div>
</div>)}

<div className="welcome-picture">
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

<footer className="container-fluid welcome-footer">
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