// Image logo, stars, star, username, password is from https://icons8.com/
import logo from "/learns.png";
import stars from "/stars.png";
import star from "/stars_2.png";
import courses from "/coursess.png";
// import password from "/password.png";
import E_member from "/E_picture.webp";
import { toast, Zoom } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function WelcomePage () {
    const navigate = useNavigate()
    const [note, setNote] = useState(true)
  const [hasRead, setHasRead] = useState(false)
  const CloseNoteButton = () => {
    setNote(false)
    localStorage.setItem("Show Note", false)
    localStorage.setItem("Read", true)
    setHasRead(true)
  }
    useEffect(() => {
      const getNote = localStorage.getItem("Show Note")
      const Read = localStorage.getItem("Read")
      if(getNote){
        setNote(false)
      }
      if(Read){
        setHasRead(true)
      }
    }, [])

    const Welcome = (message) => {
        toast.success(message, {
            theme: "light",
            position:"top-center",
            autoClose: 2000,
            transition: Zoom
        })
    }
    const User = localStorage.getItem("User")
    const EnterMySession = () => { 
        if(User) {
          Welcome(`Hi ${User}`)
          navigate("/Home")
        } else {
          const username = prompt("What is your Username ?")
          Welcome(`Welcome ${username}`)
          localStorage.setItem("User", username)
          navigate("/Home#welcome-message")
        }
    }

    return (
        <>

        {note && (
          <div className="conatiner-fluid Info-holder">
          <div className="container">
          <div className="Info-wrapper">
          <div className="ContentInfo">
              <div className="info-title">
                <h1> <span className="note">~</span> Important Note <span className="note">~</span> </h1>
              </div>
              <hr />
              <div className="info-body">
                <p>
                Welcome to the <span id="site-name"><strong><em>E-learning website</em></strong></span>. Our platform is a learning space for students of Anglophone Studies who want to enhance their understanding of the courses taught by lecturers. On the platform, you will find all the resources you need to improve your comprehension of the material, increase your interactions with lecturers during courses, and ultimately enable you to transmit the knowledge you gain. By doing so, you will broaden your scope on various topics in the field of the English language. <span className="underline"> <strong>However, some resources may not be up to date, as lecturers often modify or change the content of their courses.</strong> </span> Otherwise, you are all set.
                </p>
              </div>
              <hr />
              <div className="leave">
                <button id="close-Button" onClick={CloseNoteButton} type="button">Close</button>
              </div>
            </div>
          </div>
          </div>
        </div>
        ) }



              <div className="container-fluid header-wraper-home">
        <div className="header-holder">
          <header>
            <img height={50} src={logo} alt="E-learning" />
            <h1>E-learning</h1>
          </header>
        </div>

        <div className="header-elements">
        <h3 id="member">Welcome Dear E-learning Member <img src={stars} alt="stars" /> </h3>
        </div>
    </div>

        <div className="mt-4">
            <h3 className="ms-4"> Click {`"`}Open{`"`} to access the E-learning learning space <img src={star} alt="star" /> </h3>
        </div>

        <div className="login-holder mt-4">

            {hasRead && (<div className="welcome-button">
                <button onClick={EnterMySession} id="login-button"> <img height={32} src={courses} alt="user" /> Open my Learning Space</button>
            </div>)}

            <div>
                <img height={350} src={E_member} alt="learning" />
            </div>

        </div>

        <footer className="container-fluid">
      <div className="footer-first-part">
      <div className="header-holder">
          <header>
            <img height={32} src={logo} alt="E-learning" />
            <h3>E-learning</h3>
          </header>
        </div>
        <div className="rights">
          <p>&copy; 2024 | All Rights Reserved</p>
        </div>
        <div className="author">
          <p>Made with <span style={{color: "red"}}>&hearts;</span> by E-learning</p>
        </div>
      </div>
        <div className="Phone-number">
          <p>Contact : +228 79 83 62 19</p>
        </div>
      </footer>

        </>
    )
}