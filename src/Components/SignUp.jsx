// Image logo, stars, star, username, password is from https://icons8.com/
import logo from "/learns.png";
import stars from "/stars.png";
import star from "/stars_2.png";
import username from "/username.png";
import password from "/password.png";
import E_member from "/E_picture.webp";
import { toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export function SignUp () {
    const navigate = useNavigate()

    const FillInputs = () => {
        toast.warn("Please, All fields are required !", {
            theme: "light",
            position:"top-center",
            autoClose: 2000,
            transition: Zoom
        })
    }
    const Welcome = (message) => {
        toast.success(message, {
            theme: "light",
            position:"top-center",
            autoClose: 2000,
            transition: Zoom
        })
    }
    const FailedToSignUp = (message) => {
        toast.error(message, {
            theme: "light",
            position:"top-center",
            autoClose: 2000,
            transition: Zoom
        })
    }

    const Login = (e) => {
        e.preventDefault()
        const username = document.querySelector("#username")
        const password = document.querySelector("#password")

        if(username.value === "" || password.value === "") {
            FillInputs()
        } else{
            e.target.textContainer = "Processing..."
            const SigningUp = async () => {
                const SigningUpProcess = await fetch("https://e-learning-learning-space-back.onrender.com/myElearning/signup", {
                  method: "POST",
                  headers: {
                    "Content-Type":"application/json"
                  },
                  body: JSON.stringify({
                    username: username.value,
                    password: password.value
                  })
                })

                const getMessage = await SigningUpProcess.json()

                if(SigningUpProcess.ok){
                  Welcome(`Welcome ${username.value}`)
                  navigate("/")
                } else{
                  const errorMessage = getMessage.SignUpError
                  if(errorMessage){
                    FailedToSignUp(errorMessage)
                  }
                }
            }
            SigningUp()
        }
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
            <h3 className="ms-4">Sign up to get access to the E-learning learning space <img src={star} alt="star" /> </h3>
        </div>

        <div className="login-holder mt-4">

            <div className="inputs-wraper">
                <form>
                    <div className="input-holder">
                        <label htmlFor="username"> <img id="user-icon" height={36} src={username} alt="username" /> Username :</label>
                        <input type="text" id="username" placeholder="Username"/>
                    </div>
                    <div className="input-holder mt-3">
                        <label htmlFor="password"> <img height={36} src={password} alt="password" /> Password :</label>
                        <input type="password" id="password" placeholder="Password"/>
                    </div>
                    <div className="">
                        <button onClick={Login} id="login-button" type="button">Sign up</button>
                    </div>
                </form>
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