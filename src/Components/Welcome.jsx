// Image logo, stars, star, username, password is from https://icons8.com/
import logo from "/learns.png";
import stars from "/stars.png";
import star from "/stars_2.png";
import courses from "/coursess.png";
// import password from "/password.png";
import E_member from "/E_picture.webp";
import { toast, Zoom } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export function WelcomePage () {
    const navigate = useNavigate()

    const Welcome = (message) => {
        toast.success(message, {
            theme: "light",
            position:"top-center",
            autoClose: 2000,
            transition: Zoom
        })
    }

    const EnterMySession = () => {  
        const username = prompt("What is your Username ?")
        Welcome(`Welcome ${username}`)
        localStorage.setItem("User", username)
        navigate("/Home")
    }

    return (
        <>
              <div className="container-fluid header-wraper-home">
        <div className="header-holder">
          <header>
            <img src={logo} alt="E-learning" />
            <h1>E-learning</h1>
          </header>
        </div>

        <div className="header-elements">
        <h3 id="member">Welcome Dear E-learning Member <img src={stars} alt="stars" /> </h3>
        </div>
    </div>

        <div className="mt-4">
            <h3 className="ms-4">Sign in to get access to the E-learning learning space <img src={star} alt="star" /> </h3>
        </div>

        <div className="login-holder mt-4">

            <div className="welcome-button">
                <button onClick={EnterMySession} id="login-button"> <img height={32} src={courses} alt="user" /> Open my Learning Space</button>
            </div>

            <div className="">
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
          <p>2024 | All Rights Reserved</p>
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