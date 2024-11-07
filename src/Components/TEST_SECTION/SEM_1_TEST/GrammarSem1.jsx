import { useState } from "react"

export function Sem_1_Grammar() {

  const [impressions_1, setImpressions_1] = useState("");
  const [impressions_2, setImpressions_2] = useState("");
  const [impressions_3, setImpressions_3] = useState("");
  const [impressions_4, setImpressions_4] = useState("");
  const [impressions_5, setImpressions_5] = useState("");
  const [impressions_6, setImpressions_6] = useState("");
  const [impressions_7, setImpressions_7] = useState("");
  const [impressions_8, setImpressions_8] = useState("");
  const [impressions_9, setImpressions_9] = useState("");
  const [impressions_10, setImpressions_10] = useState("");
  const [impressions_11, setImpressions_11] = useState("");

  const [inputImpressions_1, setInputImpressions_1] = useState("");
  const [inputImpressions_2, setInputImpressions_2] = useState("");
  const [inputImpressions_3, setInputImpressions_3] = useState("");
  const [inputImpressions_4, setInputImpressions_4] = useState("");
  const [inputImpressions_5, setInputImpressions_5] = useState("");
  const [inputImpressions_6, setInputImpressions_6] = useState("");
  const [inputImpressions_7, setInputImpressions_7] = useState("");
  const [inputImpressions_8, setInputImpressions_8] = useState("");
  const [inputImpressions_9, setInputImpressions_9] = useState("");
  const [inputImpressions_10, setInputImpressions_10] = useState("");
  const [inputImpressions_11, setInputImpressions_11] = useState("");
  
  const [answerFound, setAnswerFound] = useState(null);
  const [emptyInput, setEmptyInput] = useState(null);

  const rightAnswerBtn_1 = (e) => {
    const CurrentBtn = e.target;
    const nearParent = CurrentBtn.closest(".question-container");
    
    const Impressions = nearParent.querySelector(".impression-section");
    const DisableBtn = nearParent.querySelectorAll(".disable-btn");
    DisableBtn.forEach((btn) => {
      btn.disabled = true;   
      btn.style.cursor = "not-allowed";
    })
    CurrentBtn.disabled = false;
    CurrentBtn.style.cursor = "pointer";
    Impressions.style.display = "inline-block";
    CurrentBtn.style.border = "2px solid lightgreen";
    Impressions.classList.add("true-style");
    setAnswerFound(true);
    setImpressions_1("Congratulations! You got it.")
  }
    const wrongAnswerBtn_1 = (e) =>{
      const CurrentBtn = e.target;
      const nearParent = CurrentBtn.closest(".question-container");
    
      const Impressions = nearParent.querySelector(".impression-section");
      const DisableBtn = nearParent.querySelectorAll(".disable-btn");
      DisableBtn.forEach((btn) => {
        btn.disabled = true;   
        btn.style.cursor = "not-allowed";
      })
      CurrentBtn.disabled = false;
      CurrentBtn.style.cursor = "pointer";
      CurrentBtn.style.border = "2px solid lightcoral";
      Impressions.style.display = "inline-block";
      Impressions.classList.add("disable-style");
      setAnswerFound(false);
      setImpressions_1("Oops! Sorry, Try again later on.");
    }

  const rightAnswerBtn_2 = (e) => {
    const CurrentBtn = e.target;
    const nearParent = CurrentBtn.closest(".question-container");
    
    const Impressions = nearParent.querySelector(".impression-section");
    const DisableBtn = nearParent.querySelectorAll(".disable-btn");
    DisableBtn.forEach((btn) => {
      btn.disabled = true;   
      btn.style.cursor = "not-allowed";
    })
    CurrentBtn.disabled = false;
    CurrentBtn.style.cursor = "pointer";
    Impressions.style.display = "inline-block";
    CurrentBtn.style.border = "2px solid lightgreen";
    Impressions.classList.add("true-style");
    setAnswerFound(true);
    setImpressions_2("Congratulations! You got it.")
  }
    const wrongAnswerBtn_2 = (e) =>{
      const CurrentBtn = e.target;
      const nearParent = CurrentBtn.closest(".question-container");
    
      const Impressions = nearParent.querySelector(".impression-section");
      const DisableBtn = nearParent.querySelectorAll(".disable-btn");
      DisableBtn.forEach((btn) => {
        btn.disabled = true;   
        btn.style.cursor = "not-allowed";
      })
      CurrentBtn.disabled = false;
      CurrentBtn.style.cursor = "pointer";
      CurrentBtn.style.border = "2px solid lightcoral";
      Impressions.style.display = "inline-block";
      Impressions.classList.add("disable-style");
      setAnswerFound(false);
      setImpressions_2("Oops! Sorry, Try again later on.");
    }

  const rightAnswerBtn_3 = (e) => {
    const CurrentBtn = e.target;
    const nearParent = CurrentBtn.closest(".question-container");
    
    const Impressions = nearParent.querySelector(".impression-section");
    const DisableBtn = nearParent.querySelectorAll(".disable-btn");
    DisableBtn.forEach((btn) => {
      btn.disabled = true;   
      btn.style.cursor = "not-allowed";
    })
    CurrentBtn.disabled = false;
    CurrentBtn.style.cursor = "pointer";
    Impressions.style.display = "inline-block";
    CurrentBtn.style.border = "2px solid lightgreen";
    Impressions.classList.add("true-style");
    setAnswerFound(true);
    setImpressions_3("Congratulations! You got it.")
  }
    const wrongAnswerBtn_3 = (e) =>{
      const CurrentBtn = e.target;
      const nearParent = CurrentBtn.closest(".question-container");
    
      const Impressions = nearParent.querySelector(".impression-section");
      const DisableBtn = nearParent.querySelectorAll(".disable-btn");
      DisableBtn.forEach((btn) => {
        btn.disabled = true;   
        btn.style.cursor = "not-allowed";
      })
      CurrentBtn.disabled = false;
      CurrentBtn.style.cursor = "pointer";
      CurrentBtn.style.border = "2px solid lightcoral";
      Impressions.style.display = "inline-block";
      Impressions.classList.add("disable-style");
      setAnswerFound(false);
      setImpressions_3("Oops! Sorry, Try again later on.");
    }

  const rightAnswerBtn_4 = (e) => {
    const CurrentBtn = e.target;
    const nearParent = CurrentBtn.closest(".question-container");
    
    const Impressions = nearParent.querySelector(".impression-section");
    const DisableBtn = nearParent.querySelectorAll(".disable-btn");
    DisableBtn.forEach((btn) => {
      btn.disabled = true;   
      btn.style.cursor = "not-allowed";
    })
    CurrentBtn.disabled = false;
    CurrentBtn.style.cursor = "pointer";
    Impressions.style.display = "inline-block";
    CurrentBtn.style.border = "2px solid lightgreen";
    Impressions.classList.add("true-style");
    setAnswerFound(true);
    setImpressions_4("Congratulations! You got it.")
  }
    const wrongAnswerBtn_4 = (e) =>{
      const CurrentBtn = e.target;
      const nearParent = CurrentBtn.closest(".question-container");
    
      const Impressions = nearParent.querySelector(".impression-section");
      const DisableBtn = nearParent.querySelectorAll(".disable-btn");
      DisableBtn.forEach((btn) => {
        btn.disabled = true;   
        btn.style.cursor = "not-allowed";
      })
      CurrentBtn.disabled = false;
      CurrentBtn.style.cursor = "pointer";
      CurrentBtn.style.border = "2px solid lightcoral";
      Impressions.style.display = "inline-block";
      Impressions.classList.add("disable-style");
      setAnswerFound(false);
      setImpressions_4("Oops! Sorry, Try again later on.");
    }

  const rightAnswerBtn_5 = (e) => {
    const CurrentBtn = e.target;
    const nearParent = CurrentBtn.closest(".question-container");
    
    const Impressions = nearParent.querySelector(".impression-section");
    const DisableBtn = nearParent.querySelectorAll(".disable-btn");
    DisableBtn.forEach((btn) => {
      btn.disabled = true;   
      btn.style.cursor = "not-allowed";
    })
    CurrentBtn.disabled = false;
    CurrentBtn.style.cursor = "pointer";
    Impressions.style.display = "inline-block";
    CurrentBtn.style.border = "2px solid lightgreen";
    Impressions.classList.add("true-style");
    setAnswerFound(true);
    setImpressions_5("Congratulations! You got it.")
  }
    const wrongAnswerBtn_5 = (e) =>{
      const CurrentBtn = e.target;
      const nearParent = CurrentBtn.closest(".question-container");
    
      const Impressions = nearParent.querySelector(".impression-section");
      const DisableBtn = nearParent.querySelectorAll(".disable-btn");
      DisableBtn.forEach((btn) => {
        btn.disabled = true;   
        btn.style.cursor = "not-allowed";
      })
      CurrentBtn.disabled = false;
      CurrentBtn.style.cursor = "pointer";
      CurrentBtn.style.border = "2px solid lightcoral";
      Impressions.style.display = "inline-block";
      Impressions.classList.add("disable-style");
      setAnswerFound(false);
      setImpressions_5("Oops! Sorry, Try again later on.");
    }

  const rightAnswerBtn_6 = (e) => {
    const CurrentBtn = e.target;
    const nearParent = CurrentBtn.closest(".question-container");
    
    const Impressions = nearParent.querySelector(".impression-section");
    const DisableBtn = nearParent.querySelectorAll(".disable-btn");
    DisableBtn.forEach((btn) => {
      btn.disabled = true;   
      btn.style.cursor = "not-allowed";
    })
    CurrentBtn.disabled = false;
    CurrentBtn.style.cursor = "pointer";
    Impressions.style.display = "inline-block";
    CurrentBtn.style.border = "2px solid lightgreen";
    Impressions.classList.add("true-style");
    setAnswerFound(true);
    setImpressions_6("Congratulations! You got it.")
  }
    const wrongAnswerBtn_6 = (e) =>{
      const CurrentBtn = e.target;
      const nearParent = CurrentBtn.closest(".question-container");
    
      const Impressions = nearParent.querySelector(".impression-section");
      const DisableBtn = nearParent.querySelectorAll(".disable-btn");
      DisableBtn.forEach((btn) => {
        btn.disabled = true;   
        btn.style.cursor = "not-allowed";
      })
      CurrentBtn.disabled = false;
      CurrentBtn.style.cursor = "pointer";
      CurrentBtn.style.border = "2px solid lightcoral";
      Impressions.style.display = "inline-block";
      Impressions.classList.add("disable-style");
      setAnswerFound(false);
      setImpressions_6("Oops! Sorry, Try again later on.");
    }

  const rightAnswerBtn_7 = (e) => {
    const CurrentBtn = e.target;
    const nearParent = CurrentBtn.closest(".question-container");
    
    const Impressions = nearParent.querySelector(".impression-section");
    const DisableBtn = nearParent.querySelectorAll(".disable-btn");
    DisableBtn.forEach((btn) => {
      btn.disabled = true;   
      btn.style.cursor = "not-allowed";
    })
    CurrentBtn.disabled = false;
    CurrentBtn.style.cursor = "pointer";
    Impressions.style.display = "inline-block";
    CurrentBtn.style.border = "2px solid lightgreen";
    Impressions.classList.add("true-style");
    setAnswerFound(true);
    setImpressions_7("Congratulations! You got it.")
  }
    const wrongAnswerBtn_7 = (e) =>{
      const CurrentBtn = e.target;
      const nearParent = CurrentBtn.closest(".question-container");
    
      const Impressions = nearParent.querySelector(".impression-section");
      const DisableBtn = nearParent.querySelectorAll(".disable-btn");
      DisableBtn.forEach((btn) => {
        btn.disabled = true;   
        btn.style.cursor = "not-allowed";
      })
      CurrentBtn.disabled = false;
      CurrentBtn.style.cursor = "pointer";
      CurrentBtn.style.border = "2px solid lightcoral";
      Impressions.style.display = "inline-block";
      Impressions.classList.add("disable-style");
      setAnswerFound(false);
      setImpressions_7("Oops! Sorry, Try again later on.");
    }

  const rightAnswerBtn_8 = (e) => {
    const CurrentBtn = e.target;
    const nearParent = CurrentBtn.closest(".question-container");
    
    const Impressions = nearParent.querySelector(".impression-section");
    const DisableBtn = nearParent.querySelectorAll(".disable-btn");
    DisableBtn.forEach((btn) => {
      btn.disabled = true;   
      btn.style.cursor = "not-allowed";
    })
    CurrentBtn.disabled = false;
    CurrentBtn.style.cursor = "pointer";
    Impressions.style.display = "inline-block";
    CurrentBtn.style.border = "2px solid lightgreen";
    Impressions.classList.add("true-style");
    setAnswerFound(true);
    setImpressions_8("Congratulations! You got it.")
  }
    const wrongAnswerBtn_8 = (e) =>{
      const CurrentBtn = e.target;
      const nearParent = CurrentBtn.closest(".question-container");
    
      const Impressions = nearParent.querySelector(".impression-section");
      const DisableBtn = nearParent.querySelectorAll(".disable-btn");
      DisableBtn.forEach((btn) => {
        btn.disabled = true;   
        btn.style.cursor = "not-allowed";
      })
      CurrentBtn.disabled = false;
      CurrentBtn.style.cursor = "pointer";
      CurrentBtn.style.border = "2px solid lightcoral";
      Impressions.style.display = "inline-block";
      Impressions.classList.add("disable-style");
      setAnswerFound(false);
      setImpressions_8("Oops! Sorry, Try again later on.");
    }

  const rightAnswerBtn_9 = (e) => {
    const CurrentBtn = e.target;
    const nearParent = CurrentBtn.closest(".question-container");
    
    const Impressions = nearParent.querySelector(".impression-section");
    const DisableBtn = nearParent.querySelectorAll(".disable-btn");
    DisableBtn.forEach((btn) => {
      btn.disabled = true;   
      btn.style.cursor = "not-allowed";
    })
    CurrentBtn.disabled = false;
    CurrentBtn.style.cursor = "pointer";
    Impressions.style.display = "inline-block";
    CurrentBtn.style.border = "2px solid lightgreen";
    Impressions.classList.add("true-style");
    setAnswerFound(true);
    setImpressions_9("Congratulations! You got it.")
  }
    const wrongAnswerBtn_9 = (e) =>{
      const CurrentBtn = e.target;
      const nearParent = CurrentBtn.closest(".question-container");
    
      const Impressions = nearParent.querySelector(".impression-section");
      const DisableBtn = nearParent.querySelectorAll(".disable-btn");
      DisableBtn.forEach((btn) => {
        btn.disabled = true;   
        btn.style.cursor = "not-allowed";
      })
      CurrentBtn.disabled = false;
      CurrentBtn.style.cursor = "pointer";
      CurrentBtn.style.border = "2px solid lightcoral";
      Impressions.style.display = "inline-block";
      Impressions.classList.add("disable-style");
      setAnswerFound(false);
      setImpressions_9("Oops! Sorry, Try again later on.");
    }

  const rightAnswerBtn_10 = (e) => {
    const CurrentBtn = e.target;
    const nearParent = CurrentBtn.closest(".question-container");
    
    const Impressions = nearParent.querySelector(".impression-section");
    const DisableBtn = nearParent.querySelectorAll(".disable-btn");
    DisableBtn.forEach((btn) => {
      btn.disabled = true;   
      btn.style.cursor = "not-allowed";
    })
    CurrentBtn.disabled = false;
    CurrentBtn.style.cursor = "pointer";
    Impressions.style.display = "inline-block";
    CurrentBtn.style.border = "2px solid lightgreen";
    Impressions.classList.add("true-style");
    setAnswerFound(true);
    setImpressions_10("Congratulations! You got it.")
  }
    const wrongAnswerBtn_10 = (e) =>{
      const CurrentBtn = e.target;
      const nearParent = CurrentBtn.closest(".question-container");
    
      const Impressions = nearParent.querySelector(".impression-section");
      const DisableBtn = nearParent.querySelectorAll(".disable-btn");
      DisableBtn.forEach((btn) => {
        btn.disabled = true;   
        btn.style.cursor = "not-allowed";
      })
      CurrentBtn.disabled = false;
      CurrentBtn.style.cursor = "pointer";
      CurrentBtn.style.border = "2px solid lightcoral";
      Impressions.style.display = "inline-block";
      Impressions.classList.add("disable-style");
      setAnswerFound(false);
      setImpressions_10("Oops! Sorry, Try again later on.");
    }

  const rightAnswerBtn_11 = (e) => {
    const CurrentBtn = e.target;
    const nearParent = CurrentBtn.closest(".question-container");
    
    const Impressions = nearParent.querySelector(".impression-section");
    const DisableBtn = nearParent.querySelectorAll(".disable-btn");
    DisableBtn.forEach((btn) => {
      btn.disabled = true;   
      btn.style.cursor = "not-allowed";
    })
    CurrentBtn.disabled = false;
    CurrentBtn.style.cursor = "pointer";
    Impressions.style.display = "inline-block";
    CurrentBtn.style.border = "2px solid lightgreen";
    Impressions.classList.add("true-style");
    setAnswerFound(true);
    setImpressions_11("Congratulations! You got it.")
  }
    const wrongAnswerBtn_11 = (e) =>{
      const CurrentBtn = e.target;
      const nearParent = CurrentBtn.closest(".question-container");
    
      const Impressions = nearParent.querySelector(".impression-section");
      const DisableBtn = nearParent.querySelectorAll(".disable-btn");
      DisableBtn.forEach((btn) => {
        btn.disabled = true;   
        btn.style.cursor = "not-allowed";
      })
      CurrentBtn.disabled = false;
      CurrentBtn.style.cursor = "pointer";
      CurrentBtn.style.border = "2px solid lightcoral";
      Impressions.style.display = "inline-block";
      Impressions.classList.add("disable-style");
      setAnswerFound(false);
      setImpressions_11("Oops! Sorry, Try again later on.");
    }


    const checkInputAnswer_1 = (e) => {
      e.preventDefault();
      const CurrentBtn = e.currentTarget;
      const nearParent = CurrentBtn.closest(".question-container");
      
      const Impressions = nearParent.querySelector(".impression-section");
      const checkSpinner = nearParent.querySelector(".check-spinner");
      const checkSpinnerText = nearParent.querySelector(".check-spinner-text");
      const userInput = nearParent.querySelector(".input-answer");
      const InputValue = userInput.value.trim();
      const checkAnswerBtn = nearParent.querySelector(".check-answer-btn");
      const LowerCaseValue = InputValue.toLowerCase();
      
      if(InputValue === "") {
        setEmptyInput(true);
        checkSpinner.style.display = "inline-block";
        checkSpinnerText.textContent = "checking..."
        setTimeout(() => {
          Impressions.style.display = "inline-block";
          setInputImpressions_1("It's empty, Please enter a valid answer.");
          Impressions.classList.remove("true-style");
          Impressions.classList.remove("disable-style");
          Impressions.style.backgroundColor = "silver";
          checkSpinner.style.display = "none";
          checkSpinnerText.textContent = "check"
        }, 1000);

        setTimeout(() => {
          setEmptyInput(false);
          Impressions.style.display = "none";
          setInputImpressions_1("");
          Impressions.style.backgroundColor = "";
        }, 4000);
        return;
      }

      if(LowerCaseValue === "took off"){
        setEmptyInput(false);
        setAnswerFound(true);
        checkSpinner.style.display = "inline-block";
        checkSpinnerText.textContent = "checking..."
        setTimeout(() => { 
          Impressions.style.display = "inline-block";
            Impressions.style.backgroundColor = "";
            Impressions.classList.remove("disable-style");
            Impressions.classList.add("true-style");
            setInputImpressions_1("Congratulations! You got it.");
            checkSpinner.style.display = "none";
            checkSpinnerText.textContent = "check";
            checkAnswerBtn.disabled = true;
            checkAnswerBtn.style.cursor = "not-allowed";
        }, 2000)

      }else{
        setEmptyInput(false);
        setAnswerFound(false);
        checkSpinner.style.display = "inline-block";
        checkSpinnerText.textContent = "checking..."
        Impressions.style.display = "inline-block";
        setTimeout(() => {
            Impressions.style.backgroundColor = "";
            Impressions.classList.remove("true-style");
            Impressions.classList.add("disable-style");
            setInputImpressions_1("Oops! Sorry, Try again later on.");
            checkSpinner.style.display = "none";
            checkSpinnerText.textContent = "check";
            checkAnswerBtn.disabled = true;
            checkAnswerBtn.style.cursor = "not-allowed";
        }, 2000)
      }
    }

    const checkInputAnswer_2 = (e) => {
      e.preventDefault();
      const CurrentBtn = e.currentTarget;
      const nearParent = CurrentBtn.closest(".question-container");
      
      const Impressions = nearParent.querySelector(".impression-section");
      const checkSpinner = nearParent.querySelector(".check-spinner");
      const checkSpinnerText = nearParent.querySelector(".check-spinner-text");
      const userInput = nearParent.querySelector(".input-answer");
      const InputValue = userInput.value.trim();
      const checkAnswerBtn = nearParent.querySelector(".check-answer-btn");
      const LowerCaseValue = InputValue.toLowerCase();
      
      if(InputValue === "") {
        setEmptyInput(true);
        checkSpinner.style.display = "inline-block";
        checkSpinnerText.textContent = "checking..."
        setTimeout(() => {
          Impressions.style.display = "inline-block";
          setInputImpressions_2("It's empty, Please enter a valid answer.");
          Impressions.classList.remove("true-style");
          Impressions.classList.remove("disable-style");
          Impressions.style.backgroundColor = "silver";
          checkSpinner.style.display = "none";
          checkSpinnerText.textContent = "check"
        }, 1000);

        setTimeout(() => {
          setEmptyInput(false);
          Impressions.style.display = "none";
          setInputImpressions_2("");
          Impressions.style.backgroundColor = "";
        }, 4000);
        return;
      }

      if(LowerCaseValue === "saw"){
        setEmptyInput(false);
        setAnswerFound(true);
        checkSpinner.style.display = "inline-block";
        checkSpinnerText.textContent = "checking..."
        setTimeout(() => { 
          Impressions.style.display = "inline-block";
            Impressions.style.backgroundColor = "";
            Impressions.classList.remove("disable-style");
            Impressions.classList.add("true-style");
            setInputImpressions_2("Congratulations! You got it.");
            checkSpinner.style.display = "none";
            checkSpinnerText.textContent = "check";
            checkAnswerBtn.disabled = true;
            checkAnswerBtn.style.cursor = "not-allowed";
        }, 2000)

      }else{
        setEmptyInput(false);
        setAnswerFound(false);
        checkSpinner.style.display = "inline-block";
        checkSpinnerText.textContent = "checking..."
        Impressions.style.display = "inline-block";
        setTimeout(() => {
            Impressions.style.backgroundColor = "";
            Impressions.classList.remove("true-style");
            Impressions.classList.add("disable-style");
            setInputImpressions_2("Oops! Sorry, Try again later on.");
            checkSpinner.style.display = "none";
            checkSpinnerText.textContent = "check";
            checkAnswerBtn.disabled = true;
            checkAnswerBtn.style.cursor = "not-allowed";
        }, 2000)
      }
    }

    const checkInputAnswer_3 = (e) => {
      e.preventDefault();
      const CurrentBtn = e.currentTarget;
      const nearParent = CurrentBtn.closest(".question-container");
      
      const Impressions = nearParent.querySelector(".impression-section");
      const checkSpinner = nearParent.querySelector(".check-spinner");
      const checkSpinnerText = nearParent.querySelector(".check-spinner-text");
      const userInput = nearParent.querySelector(".input-answer");
      const InputValue = userInput.value.trim();
      const checkAnswerBtn = nearParent.querySelector(".check-answer-btn");
      const LowerCaseValue = InputValue.toLowerCase();
      
      if(InputValue === "") {
        setEmptyInput(true);
        checkSpinner.style.display = "inline-block";
        checkSpinnerText.textContent = "checking..."
        setTimeout(() => {
          Impressions.style.display = "inline-block";
          setInputImpressions_3("It's empty, Please enter a valid answer.");
          Impressions.classList.remove("true-style");
          Impressions.classList.remove("disable-style");
          Impressions.style.backgroundColor = "silver";
          checkSpinner.style.display = "none";
          checkSpinnerText.textContent = "check";
        }, 1000);

        setTimeout(() => {
          setEmptyInput(false);
          Impressions.style.display = "none";
          setInputImpressions_3("");
          Impressions.style.backgroundColor = "";
        }, 4000);
        return;
      }

      if(LowerCaseValue === "she will be travelling to lomé by 9 o'clock tomorrow." || LowerCaseValue === "tomorrow, she will be travelling to lomé by 9 o'clock."){
        setEmptyInput(false);
        setAnswerFound(true);
        checkSpinner.style.display = "inline-block";
        checkSpinnerText.textContent = "checking..."
        setTimeout(() => { 
          Impressions.style.display = "inline-block";
            Impressions.style.backgroundColor = "";
            Impressions.classList.remove("disable-style");
            Impressions.classList.add("true-style");
            setInputImpressions_3("Congratulations! You got it.");
            checkSpinner.style.display = "none";
            checkSpinnerText.textContent = "check"
            checkAnswerBtn.disabled = true;
            checkAnswerBtn.style.cursor = "not-allowed";
        }, 2000)

      }else{
        setEmptyInput(false);
        setAnswerFound(false);
        checkSpinner.style.display = "inline-block";
        checkSpinnerText.textContent = "checking..."
        Impressions.style.display = "inline-block";
        setTimeout(() => {
            Impressions.style.backgroundColor = "";
            Impressions.classList.remove("true-style");
            Impressions.classList.add("disable-style");
            setInputImpressions_3("Oops! Sorry, Try again later on.");
            checkSpinner.style.display = "none";
            checkSpinnerText.textContent = "check"
            checkAnswerBtn.disabled = true;
            checkAnswerBtn.style.cursor = "not-allowed";
        }, 2000)
      }
    }

    const checkInputAnswer_4 = (e) => {
      e.preventDefault();
      const CurrentBtn = e.currentTarget;
      const nearParent = CurrentBtn.closest(".question-container");
      
      const Impressions = nearParent.querySelector(".impression-section");
      const checkSpinner = nearParent.querySelector(".check-spinner");
      const checkSpinnerText = nearParent.querySelector(".check-spinner-text");
      const userInput = nearParent.querySelector(".input-answer");
      const InputValue = userInput.value.trim();
      const checkAnswerBtn = nearParent.querySelector(".check-answer-btn");
      const LowerCaseValue = InputValue.toLowerCase();
      
      if(InputValue === "") {
        setEmptyInput(true);
        checkSpinner.style.display = "inline-block";
        checkSpinnerText.textContent = "checking..."
        setTimeout(() => {
          Impressions.style.display = "inline-block";
          setInputImpressions_4("It's empty, Please enter a valid answer.");
          Impressions.classList.remove("true-style");
          Impressions.classList.remove("disable-style");
          Impressions.style.backgroundColor = "silver";
          checkSpinner.style.display = "none";
          checkSpinnerText.textContent = "check"
        }, 1000);

        setTimeout(() => {
          setEmptyInput(false);
          Impressions.style.display = "none";
          setInputImpressions_4("");
          Impressions.style.backgroundColor = "";
        }, 4000);
        return;
      }

      if(LowerCaseValue === "i worked here 2 years ago."){
        setEmptyInput(false);
        setAnswerFound(true);
        checkSpinner.style.display = "inline-block";
        checkSpinnerText.textContent = "checking..."
        setTimeout(() => { 
          Impressions.style.display = "inline-block";
            Impressions.style.backgroundColor = "";
            Impressions.classList.remove("disable-style");
            Impressions.classList.add("true-style");
            setInputImpressions_4("Congratulations! You got it.");
            checkSpinner.style.display = "none";
            checkSpinnerText.textContent = "check";
            checkAnswerBtn.disabled = true;
            checkAnswerBtn.style.cursor = "not-allowed";
        }, 2000)

      }else{
        setEmptyInput(false);
        setAnswerFound(false);
        checkSpinner.style.display = "inline-block";
        checkSpinnerText.textContent = "checking..."
        Impressions.style.display = "inline-block";
        setTimeout(() => {
            Impressions.style.backgroundColor = "";
            Impressions.classList.remove("true-style");
            Impressions.classList.add("disable-style");
            setInputImpressions_4("Oops! Sorry, Try again later on.");
            checkSpinner.style.display = "none";
            checkSpinnerText.textContent = "check";
            checkAnswerBtn.disabled = true;
            checkAnswerBtn.style.cursor = "not-allowed";
        }, 2000)
      }
    }

    const checkInputAnswer_5 = (e) => {
      e.preventDefault();
      const CurrentBtn = e.currentTarget;
      const nearParent = CurrentBtn.closest(".question-container");
      
      const Impressions = nearParent.querySelector(".impression-section");
      const checkSpinner = nearParent.querySelector(".check-spinner");
      const checkSpinnerText = nearParent.querySelector(".check-spinner-text");
      const userInput = nearParent.querySelector(".input-answer");
      const InputValue = userInput.value.trim();
      const checkAnswerBtn = nearParent.querySelector(".check-answer-btn");
      const LowerCaseValue = InputValue.toLowerCase();
      
      if(InputValue === "") {
        setEmptyInput(true);
        checkSpinner.style.display = "inline-block";
        checkSpinnerText.textContent = "checking..."
        setTimeout(() => {
          Impressions.style.display = "inline-block";
          setInputImpressions_5("It's empty, Please enter a valid answer.");
          Impressions.classList.remove("true-style");
          Impressions.classList.remove("disable-style");
          Impressions.style.backgroundColor = "silver";
          checkSpinner.style.display = "none";
          checkSpinnerText.textContent = "check"
        }, 1000);

        setTimeout(() => {
          setEmptyInput(false);
          Impressions.style.display = "none";
          setInputImpressions_5("");
          Impressions.style.backgroundColor = "";
        }, 4000);
        return;
      }

      if(LowerCaseValue === "had stirred"){
        setEmptyInput(false);
        setAnswerFound(true);
        checkSpinner.style.display = "inline-block";
        checkSpinnerText.textContent = "checking..."
        setTimeout(() => { 
          Impressions.style.display = "inline-block";
            Impressions.style.backgroundColor = "";
            Impressions.classList.remove("disable-style");
            Impressions.classList.add("true-style");
            setInputImpressions_5("Congratulations! You got it.");
            checkSpinner.style.display = "none";
            checkSpinnerText.textContent = "check";
            checkAnswerBtn.disabled = true;
            checkAnswerBtn.style.cursor = "not-allowed";
        }, 2000)

      }else{
        setEmptyInput(false);
        setAnswerFound(false);
        checkSpinner.style.display = "inline-block";
        checkSpinnerText.textContent = "checking..."
        Impressions.style.display = "inline-block";
        setTimeout(() => {
            Impressions.style.backgroundColor = "";
            Impressions.classList.remove("true-style");
            Impressions.classList.add("disable-style");
            setInputImpressions_5("Oops! Sorry, Try again later on.");
            checkSpinner.style.display = "none";
            checkSpinnerText.textContent = "check";
            checkAnswerBtn.disabled = true;
            checkAnswerBtn.style.cursor = "not-allowed";
        }, 2000)
      }
    }
    const checkInputAnswer_6 = (e) => {
      e.preventDefault();
      const CurrentBtn = e.currentTarget;
      const nearParent = CurrentBtn.closest(".question-container");
      
      const Impressions = nearParent.querySelector(".impression-section");
      const checkSpinner = nearParent.querySelector(".check-spinner");
      const checkSpinnerText = nearParent.querySelector(".check-spinner-text");
      const userInput = nearParent.querySelector(".input-answer");
      const InputValue = userInput.value.trim();
      const checkAnswerBtn = nearParent.querySelector(".check-answer-btn");
      const LowerCaseValue = InputValue.toLowerCase();
      
      if(InputValue === "") {
        setEmptyInput(true);
        checkSpinner.style.display = "inline-block";
        checkSpinnerText.textContent = "checking..."
        setTimeout(() => {
          Impressions.style.display = "inline-block";
          setInputImpressions_6("It's empty, Please enter a valid answer.");
          Impressions.classList.remove("true-style");
          Impressions.classList.remove("disable-style");
          Impressions.style.backgroundColor = "silver";
          checkSpinner.style.display = "none";
          checkSpinnerText.textContent = "check"
        }, 1000);

        setTimeout(() => {
          setEmptyInput(false);
          Impressions.style.display = "none";
          setInputImpressions_6("");
          Impressions.style.backgroundColor = "";
        }, 4000);
        return;
      }

      if(LowerCaseValue === "are attending"){
        setEmptyInput(false);
        setAnswerFound(true);
        checkSpinner.style.display = "inline-block";
        checkSpinnerText.textContent = "checking..."
        setTimeout(() => { 
          Impressions.style.display = "inline-block";
            Impressions.style.backgroundColor = "";
            Impressions.classList.remove("disable-style");
            Impressions.classList.add("true-style");
            setInputImpressions_6("Congratulations! You got it.");
            checkSpinner.style.display = "none";
            checkSpinnerText.textContent = "check";
            checkAnswerBtn.disabled = true;
            checkAnswerBtn.style.cursor = "not-allowed";
        }, 2000)

      }else{
        setEmptyInput(false);
        setAnswerFound(false);
        checkSpinner.style.display = "inline-block";
        checkSpinnerText.textContent = "checking..."
        Impressions.style.display = "inline-block";
        setTimeout(() => {
            Impressions.style.backgroundColor = "";
            Impressions.classList.remove("true-style");
            Impressions.classList.add("disable-style");
            setInputImpressions_6("Oops! Sorry, Try again later on.");
            checkSpinner.style.display = "none";
            checkSpinnerText.textContent = "check";
            checkAnswerBtn.disabled = true;
            checkAnswerBtn.style.cursor = "not-allowed";
        }, 2000)
      }
    }

    const checkInputAnswer_7 = (e) => {
      e.preventDefault();
      const CurrentBtn = e.currentTarget;
      const nearParent = CurrentBtn.closest(".question-container");
      
      const Impressions = nearParent.querySelector(".impression-section");
      const checkSpinner = nearParent.querySelector(".check-spinner");
      const checkSpinnerText = nearParent.querySelector(".check-spinner-text");
      const userInput = nearParent.querySelector(".input-answer");
      const InputValue = userInput.value.trim();
      const checkAnswerBtn = nearParent.querySelector(".check-answer-btn");
      const LowerCaseValue = InputValue.toLowerCase();
      
      if(InputValue === "") {
        setEmptyInput(true);
        checkSpinner.style.display = "inline-block";
        checkSpinnerText.textContent = "checking..."
        setTimeout(() => {
          Impressions.style.display = "inline-block";
          setInputImpressions_7("It's empty, Please enter a valid answer.");
          Impressions.classList.remove("true-style");
          Impressions.classList.remove("disable-style");
          Impressions.style.backgroundColor = "silver";
          checkSpinner.style.display = "none";
          checkSpinnerText.textContent = "check"
        }, 1000);

        setTimeout(() => {
          setEmptyInput(false);
          Impressions.style.display = "none";
          setInputImpressions_7("");
          Impressions.style.backgroundColor = "";
        }, 4000);
        return;
      }

      if(LowerCaseValue === "leaves"){
        setEmptyInput(false);
        setAnswerFound(true);
        checkSpinner.style.display = "inline-block";
        checkSpinnerText.textContent = "checking..."
        setTimeout(() => { 
          Impressions.style.display = "inline-block";
            Impressions.style.backgroundColor = "";
            Impressions.classList.remove("disable-style");
            Impressions.classList.add("true-style");
            setInputImpressions_7("Congratulations! You got it.");
            checkSpinner.style.display = "none";
            checkSpinnerText.textContent = "check";
            checkAnswerBtn.disabled = true;
            checkAnswerBtn.style.cursor = "not-allowed";
        }, 2000)

      }else{
        setEmptyInput(false);
        setAnswerFound(false);
        checkSpinner.style.display = "inline-block";
        checkSpinnerText.textContent = "checking..."
        Impressions.style.display = "inline-block";
        setTimeout(() => {
            Impressions.style.backgroundColor = "";
            Impressions.classList.remove("true-style");
            Impressions.classList.add("disable-style");
            setInputImpressions_7("Oops! Sorry, Try again later on.");
            checkSpinner.style.display = "none";
            checkSpinnerText.textContent = "check";
            checkAnswerBtn.disabled = true;
            checkAnswerBtn.style.cursor = "not-allowed";
        }, 2000)
      }
    }

    const checkInputAnswer_8 = (e) => {
      e.preventDefault();
      const CurrentBtn = e.currentTarget;
      const nearParent = CurrentBtn.closest(".question-container");
      
      const Impressions = nearParent.querySelector(".impression-section");
      const checkSpinner = nearParent.querySelector(".check-spinner");
      const checkSpinnerText = nearParent.querySelector(".check-spinner-text");
      const userInput = nearParent.querySelector(".input-answer");
      const InputValue = userInput.value.trim();
      const checkAnswerBtn = nearParent.querySelector(".check-answer-btn");
      const LowerCaseValue = InputValue.toLowerCase();
      
      if(InputValue === "") {
        setEmptyInput(true);
        checkSpinner.style.display = "inline-block";
        checkSpinnerText.textContent = "checking..."
        setTimeout(() => {
          Impressions.style.display = "inline-block";
          setInputImpressions_8("It's empty, Please enter a valid answer.");
          Impressions.classList.remove("true-style");
          Impressions.classList.remove("disable-style");
          Impressions.style.backgroundColor = "silver";
          checkSpinner.style.display = "none";
          checkSpinnerText.textContent = "check"
        }, 1000);

        setTimeout(() => {
          setEmptyInput(false);
          Impressions.style.display = "none";
          setInputImpressions_8("");
          Impressions.style.backgroundColor = "";
        }, 4000);
        return;
      }

      if(LowerCaseValue === "roofs"){
        setEmptyInput(false);
        setAnswerFound(true);
        checkSpinner.style.display = "inline-block";
        checkSpinnerText.textContent = "checking..."
        setTimeout(() => { 
          Impressions.style.display = "inline-block";
            Impressions.style.backgroundColor = "";
            Impressions.classList.remove("disable-style");
            Impressions.classList.add("true-style");
            setInputImpressions_8("Congratulations! You got it.");
            checkSpinner.style.display = "none";
            checkSpinnerText.textContent = "check"
            checkAnswerBtn.disabled = true;
            checkAnswerBtn.style.cursor = "not-allowed";
        }, 2000)

      }else{
        setEmptyInput(false);
        setAnswerFound(false);
        checkSpinner.style.display = "inline-block";
        checkSpinnerText.textContent = "checking..."
        Impressions.style.display = "inline-block";
        setTimeout(() => {
            Impressions.style.backgroundColor = "";
            Impressions.classList.remove("true-style");
            Impressions.classList.add("disable-style");
            setInputImpressions_8("Oops! Sorry, Try again later on.");
            checkSpinner.style.display = "none";
            checkSpinnerText.textContent = "check"
            checkAnswerBtn.disabled = true;
            checkAnswerBtn.style.cursor = "not-allowed";
        }, 2000)
      }
    }

    const checkInputAnswer_9 = (e) => {
      e.preventDefault();
      const CurrentBtn = e.currentTarget;
      const nearParent = CurrentBtn.closest(".question-container");
      
      const Impressions = nearParent.querySelector(".impression-section");
      const checkSpinner = nearParent.querySelector(".check-spinner");
      const checkSpinnerText = nearParent.querySelector(".check-spinner-text");
      const userInput = nearParent.querySelector(".input-answer");
      const InputValue = userInput.value.trim();
      const checkAnswerBtn = nearParent.querySelector(".check-answer-btn");
      const LowerCaseValue = InputValue.toLowerCase();
      
      if(InputValue === "") {
        setEmptyInput(true);
        checkSpinner.style.display = "inline-block";
        checkSpinnerText.textContent = "checking..."
        setTimeout(() => {
          Impressions.style.display = "inline-block";
          setInputImpressions_9("It's empty, Please enter a valid answer.");
          Impressions.classList.remove("true-style");
          Impressions.classList.remove("disable-style");
          Impressions.style.backgroundColor = "silver";
          checkSpinner.style.display = "none";
          checkSpinnerText.textContent = "check"
        }, 1000);

        setTimeout(() => {
          setEmptyInput(false);
          Impressions.style.display = "none";
          setInputImpressions_9("");
          Impressions.style.backgroundColor = "";
        }, 4000);
        return;
      }

      if(LowerCaseValue === "sheep"){
        setEmptyInput(false);
        setAnswerFound(true);
        checkSpinner.style.display = "inline-block";
        checkSpinnerText.textContent = "checking..."
        setTimeout(() => { 
          Impressions.style.display = "inline-block";
            Impressions.style.backgroundColor = "";
            Impressions.classList.remove("disable-style");
            Impressions.classList.add("true-style");
            setInputImpressions_9("Congratulations! You got it.");
            checkSpinner.style.display = "none";
            checkSpinnerText.textContent = "check";
            checkAnswerBtn.disabled = true;
            checkAnswerBtn.style.cursor = "not-allowed";
        }, 2000)

      }else{
        setEmptyInput(false);
        setAnswerFound(false);
        checkSpinner.style.display = "inline-block";
        checkSpinnerText.textContent = "checking..."
        Impressions.style.display = "inline-block";
        setTimeout(() => {
            Impressions.style.backgroundColor = "";
            Impressions.classList.remove("true-style");
            Impressions.classList.add("disable-style");
            setInputImpressions_9("Oops! Sorry, Try again later on.");
            checkSpinner.style.display = "none";
            checkSpinnerText.textContent = "check"
            checkAnswerBtn.disabled = true;
            checkAnswerBtn.style.cursor = "not-allowed";
        }, 2000)
      }
    }

    const checkInputAnswer_10 = (e) => {
      e.preventDefault();
      const CurrentBtn = e.currentTarget;
      const nearParent = CurrentBtn.closest(".question-container");
      
      const Impressions = nearParent.querySelector(".impression-section");
      const checkSpinner = nearParent.querySelector(".check-spinner");
      const checkSpinnerText = nearParent.querySelector(".check-spinner-text");
      const userInput = nearParent.querySelector(".input-answer");
      const InputValue = userInput.value.trim();
      const checkAnswerBtn = nearParent.querySelector(".check-answer-btn");
      const LowerCaseValue = InputValue.toLowerCase();
      
      if(InputValue === "") {
        setEmptyInput(true);
        checkSpinner.style.display = "inline-block";
        checkSpinnerText.textContent = "checking..."
        setTimeout(() => {
          Impressions.style.display = "inline-block";
          setInputImpressions_10("It's empty, Please enter a valid answer.");
          Impressions.classList.remove("true-style");
          Impressions.classList.remove("disable-style");
          Impressions.style.backgroundColor = "silver";
          checkSpinner.style.display = "none";
          checkSpinnerText.textContent = "check"
        }, 1000);

        setTimeout(() => {
          setEmptyInput(false);
          Impressions.style.display = "none";
          setInputImpressions_10("");
          Impressions.style.backgroundColor = "";
        }, 4000);
        return;
      }

      if(LowerCaseValue === "sisters-in-law"){
        setEmptyInput(false);
        setAnswerFound(true);
        checkSpinner.style.display = "inline-block";
        checkSpinnerText.textContent = "checking..."
        setTimeout(() => { 
          Impressions.style.display = "inline-block";
            Impressions.style.backgroundColor = "";
            Impressions.classList.remove("disable-style");
            Impressions.classList.add("true-style");
            setInputImpressions_10("Congratulations! You got it.");
            checkSpinner.style.display = "none";
            checkSpinnerText.textContent = "check"
            checkAnswerBtn.disabled = true;
            checkAnswerBtn.style.cursor = "not-allowed";
        }, 2000)

      }else{
        setEmptyInput(false);
        setAnswerFound(false);
        checkSpinner.style.display = "inline-block";
        checkSpinnerText.textContent = "checking..."
        Impressions.style.display = "inline-block";
        setTimeout(() => {
            Impressions.style.backgroundColor = "";
            Impressions.classList.remove("true-style");
            Impressions.classList.add("disable-style");
            setInputImpressions_10("Oops! Sorry, Try again later on.");
            checkSpinner.style.display = "none";
            checkSpinnerText.textContent = "check"
            checkAnswerBtn.disabled = true;
            checkAnswerBtn.style.cursor = "not-allowed";
        }, 2000)
      }
    }

    const checkInputAnswer_11 = (e) => {
      e.preventDefault();
      const CurrentBtn = e.currentTarget;
      const nearParent = CurrentBtn.closest(".question-container");
      
      const Impressions = nearParent.querySelector(".impression-section");
      const checkSpinner = nearParent.querySelector(".check-spinner");
      const checkSpinnerText = nearParent.querySelector(".check-spinner-text");
      const userInput = nearParent.querySelector(".input-answer");
      const checkAnswerBtn = nearParent.querySelector(".check-answer-btn");
      const InputValue = userInput.value.trim();
      const LowerCaseValue = InputValue.toLowerCase();
      
      if(InputValue === "") {
        setEmptyInput(true);
        checkSpinner.style.display = "inline-block";
        checkSpinnerText.textContent = "checking..."
        setTimeout(() => {
          Impressions.style.display = "inline-block";
          setInputImpressions_11("It's empty, Please enter a valid answer.");
          Impressions.classList.remove("true-style");
          Impressions.classList.remove("disable-style");
          Impressions.style.backgroundColor = "silver";
          checkSpinner.style.display = "none";
          checkSpinnerText.textContent = "check"
        }, 1000);

        setTimeout(() => {
          setEmptyInput(false);
          Impressions.style.display = "none";
          setInputImpressions_11("");
          Impressions.style.backgroundColor = "";
        }, 4000);
        return;
      }

      if(LowerCaseValue === "my, your, her, his, its, our, your, their"){
        setEmptyInput(false);
        setAnswerFound(true);
        checkSpinner.style.display = "inline-block";
        checkSpinnerText.textContent = "checking..."
        setTimeout(() => { 
          Impressions.style.display = "inline-block";
            Impressions.style.backgroundColor = "";
            Impressions.classList.remove("disable-style");
            Impressions.classList.add("true-style");
            setInputImpressions_11("Congratulations! You got it.");
            checkSpinner.style.display = "none";
            checkSpinnerText.textContent = "check"
            checkAnswerBtn.disabled = true;
            checkAnswerBtn.style.cursor = "not-allowed";
        }, 2000)

      }else{
        setEmptyInput(false);
        setAnswerFound(false);
        checkSpinner.style.display = "inline-block";
        checkSpinnerText.textContent = "checking..."
        Impressions.style.display = "inline-block";
        setTimeout(() => {
            Impressions.style.backgroundColor = "";
            Impressions.classList.remove("true-style");
            Impressions.classList.add("disable-style");
            setInputImpressions_11("Oops! Sorry, Try again later on.");
            checkSpinner.style.display = "none";
            checkSpinnerText.textContent = "check"
            checkAnswerBtn.disabled = true;
            checkAnswerBtn.style.cursor = "not-allowed";
        }, 2000)
      }
    }

    const ResetAllContent = () => {
      const inputAnswer = document.querySelectorAll(".input-answer");
      const checkSpinnerReset = document.querySelector(".check-spinner-reset");
      const checkResetText = document.querySelector(".check-reset-text");
      const checkAnswerBtn = document.querySelectorAll(".check-answer-btn");
      const impressionSection = document.querySelectorAll(".impression-section");
      const allBtns = document.querySelectorAll("button");

      checkSpinnerReset.style.display = "inline-block";
      checkResetText.textContent = "Reseting...";

      setTimeout(() => {
      allBtns.forEach((btn) => {
        btn.disabled = false;
        btn.style.cursor = "pointer";
        btn.style.border = ""
      })
      checkAnswerBtn.forEach((btn) => {
        btn.disabled = false;
        btn.style.cursor = "pointer";
      })
        inputAnswer.forEach((inputItem) => {
          inputItem.value = "";
        })

        setImpressions_1("");
        setImpressions_2("");
        setImpressions_3("");
        setImpressions_4("");
        setImpressions_5("");
        setImpressions_6("");
        setImpressions_7("");
        setImpressions_8("");
        setImpressions_9("");
        setImpressions_10("");
        setImpressions_11("");

        setInputImpressions_1("")
        setInputImpressions_2("");
        setInputImpressions_3("");
        setInputImpressions_4("");
        setInputImpressions_5("");
        setInputImpressions_6("");
        setInputImpressions_7("");
        setInputImpressions_8("");
        setInputImpressions_9("");
        setInputImpressions_10("");
        setInputImpressions_11("");

        impressionSection.forEach((item) => {
          item.style.backgroundColor = "";
          item.classList.remove("true-style");
          item.classList.remove("disable-style");
          item.style.display = "none";
        })

          checkSpinnerReset.style.display = "none";
          checkResetText.textContent = "Reset";
        }, 2000)

    }


  return (
    <>
    <div className="grammar-test mt-4">
      <h1>⦔ Take a Grammar test</h1>
      <div className="test-section mt-5">
        
      <div className="question-container">
        <div className="question-wrapper">
          <p>1--{">"} How many categories or time frames are English tenses divided into ?</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_1} className="disable-btn" type="button">4</button>
            <button onClick={rightAnswerBtn_1} className="disable-btn" type="button">3</button>
            <button onClick={wrongAnswerBtn_1} className="disable-btn" type="button">8</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_1 : answerFound === false ? impressions_1 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>2--{">"} How many main tenses do we have in English ?</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_2} className="disable-btn" type="button">12</button>
            <button onClick={wrongAnswerBtn_2} className="disable-btn" type="button">9</button>
            <button onClick={wrongAnswerBtn_2} className="disable-btn" type="button">15</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_2 : answerFound === false ? impressions_2 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>3--{">"} The Simple Present descibes...</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_3} className="disable-btn" type="button">previous actions</button>
            <button onClick={wrongAnswerBtn_3} className="disable-btn" type="button">upcoming events</button>
            <button onClick={rightAnswerBtn_3} className="disable-btn" type="button">general facts</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_3 : answerFound === false ? impressions_3 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>4--{">"} The Simple Present descibes also repeated actions.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_4} className="disable-btn" type="button">True</button>
            <button onClick={wrongAnswerBtn_4} className="disable-btn" type="button">False</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_4 : answerFound === false ? impressions_4 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>5--{">"} Which of these groups of keywords below contains the right keywords that go with the Simple Present tense ?</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_5} className="disable-btn" type="button">[ often, usually, ago, always, frequently ]</button>
            <button onClick={wrongAnswerBtn_5} className="disable-btn" type="button">[ usually, always, tomorrow, constantly, now ]</button>
            <button onClick={rightAnswerBtn_5} className="disable-btn" type="button">[ never, always, seldom, often, weekly ]</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_5 : answerFound === false ? impressions_5 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>6--{">"} The Simple Past tense is used to describe...</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_6} className="disable-btn" type="button">actions that occured at a specific time in the past.</button>
            <button onClick={wrongAnswerBtn_6} className="disable-btn" type="button">actions that were taking place in the past</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_6 : answerFound === false ? impressions_6 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>7--{">"} ......describes actions happening now.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_7} className="disable-btn" type="button">Present Continuous</button>
            <button onClick={wrongAnswerBtn_7} className="disable-btn" type="button">Future Progressive</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_7 : answerFound === false ? impressions_7 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>8--{">"} ......describes actions that happened before another action in the past.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_8} className="disable-btn" type="button">Past Continuous</button>
            <button onClick={rightAnswerBtn_8} className="disable-btn" type="button">Past Perfect</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_8 : answerFound === false ? impressions_8 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>9--{">"} ......describes actions that started in the past and are still continuing or have recently stopped.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_9} className="disable-btn" type="button">Present Perfect</button>
            <button onClick={wrongAnswerBtn_9} className="disable-btn" type="button">Past Perfect Progressive</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_9 : answerFound === false ? impressions_9 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>10--{">"} ......describes actions that will be completed before a specific time in the future.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_10} className="disable-btn" type="button">Present Perfect</button>
            <button onClick={rightAnswerBtn_10} className="disable-btn" type="button">Future Perfect</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_10 : answerFound === false ? impressions_10 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>11--{">"} The plane......the day before.(take off)</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <input type="text" className="input-answer" placeholder="write here..." />
            <button onClick={checkInputAnswer_1} className="check-answer-btn" type="button"> <span className="check-spinner"></span> <span className="check-spinner-text ms-1">Check</span> </button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? inputImpressions_1 : answerFound === false ? inputImpressions_1 : emptyInput === true ? inputImpressions_1 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>12--{">"} He......his sister 2 hours ago.(to see)</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <input type="text" className="input-answer" placeholder="write here..." />
            <button onClick={checkInputAnswer_2} className="check-answer-btn" type="button"> <span className="check-spinner"></span> <span className="check-spinner-text ms-1">Check</span> </button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? inputImpressions_2 : answerFound === false ? inputImpressions_2 : emptyInput === true ? inputImpressions_2 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>13--{">"} to/Lomé/will/by/she/tomorrow/travelling/9 O{"'"}clock/be.(Put the words in the correct order to form a sentence)</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
          <textarea type="text" cols={25} rows={3} className="input-answer areas" placeholder="write here..."></textarea>
            <button onClick={checkInputAnswer_3} className="check-answer-btn areas-btn" type="button"> <span className="check-spinner"></span> <span className="check-spinner-text ms-1">Check</span> </button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? inputImpressions_3 : answerFound === false ? inputImpressions_3 : emptyInput === true ? inputImpressions_3 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>14--{">"} I have worked here for 2 years.(Rewrite this sentence using {`"`}ago{`"`})</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
          <textarea type="text" cols={25} rows={3} className="input-answer areas" placeholder="write here..."></textarea>
            <button onClick={checkInputAnswer_4} className="check-answer-btn areas-btn" type="button"> <span className="check-spinner"></span> <span className="check-spinner-text ms-1">Check</span> </button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? inputImpressions_4 : answerFound === false ? inputImpressions_4 : emptyInput === true ? inputImpressions_4 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>15--{">"} The doubling rule, which consists in doubling the final consonant of a verb ending with a consonant immediately preceded by a short vowel (if, of course, the syllable containing that short vowel is stressed), applies to the verb {`"`}to run,{`"`} but not to {`"`}to rain.{`"`} </p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_11} className="disable-btn" type="button">True</button>
            <button onClick={wrongAnswerBtn_11} className="disable-btn" type="button">False</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_11 : answerFound === false ? impressions_11 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>16--{">"} He......his coffee before he drank.(to stir)</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <input type="text" className="input-answer" placeholder="write here..." />
            <button onClick={checkInputAnswer_5} className="check-answer-btn" type="button"> <span className="check-spinner"></span> <span className="check-spinner-text ms-1">Check</span> </button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? inputImpressions_5 : answerFound === false ? inputImpressions_5 : emptyInput === true ? inputImpressions_5 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>17--{">"} What is the plural form of the word {`"`}Leaf{`"`} ?</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <input type="text" className="input-answer" placeholder="write here..." />
            <button onClick={checkInputAnswer_7} className="check-answer-btn" type="button"> <span className="check-spinner"></span> <span className="check-spinner-text ms-1">Check</span> </button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? inputImpressions_7 : answerFound === false ? inputImpressions_7 : emptyInput === true ? inputImpressions_7 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>18--{">"} What is the plural form of the word {`"`}Roof{`"`} ?</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <input type="text" className="input-answer" placeholder="write here..." />
            <button onClick={checkInputAnswer_8} className="check-answer-btn" type="button"> <span className="check-spinner"></span> <span className="check-spinner-text ms-1">Check</span> </button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? inputImpressions_8 : answerFound === false ? inputImpressions_8 : emptyInput === true ? inputImpressions_8 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>19--{">"} What is the plural form of the word {`"`}Sheep{`"`} ?</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <input type="text" className="input-answer" placeholder="write here..." />
            <button onClick={checkInputAnswer_9} className="check-answer-btn" type="button"> <span className="check-spinner"></span> <span className="check-spinner-text ms-1">Check</span> </button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? inputImpressions_9 : answerFound === false ? inputImpressions_9 : emptyInput === true ? inputImpressions_9 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>20--{">"} What is the plural form of the word {`"`}Sister-in-law{`"`} ?</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <input type="text" className="input-answer" placeholder="write here..." />
            <button onClick={checkInputAnswer_10} className="check-answer-btn" type="button"> <span className="check-spinner"></span> <span className="check-spinner-text ms-1">Check</span> </button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? inputImpressions_10 : answerFound === false ? inputImpressions_10 : emptyInput === true ? inputImpressions_10 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>21--{">"} Derive possessive adjectives from these personal pronouns, respectively (I, You, She, He, It, We, You, They).</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <textarea type="text" cols={25} rows={3} className="input-answer areas" placeholder="write here..."></textarea>
            <button onClick={checkInputAnswer_11} className="check-answer-btn areas-btn" type="button"> <span className="check-spinner"></span> <span className="check-spinner-text ms-1">Check</span> </button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? inputImpressions_11 : answerFound === false ? inputImpressions_11 : emptyInput === true ? inputImpressions_11 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>22--{">"} We......the meeting currently.(to attend)</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <input type="text" className="input-answer" placeholder="write here..." />
            <button onClick={checkInputAnswer_6} className="check-answer-btn" type="button"> <span className="check-spinner"></span> <span className="check-spinner-text ms-1">Check</span> </button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? inputImpressions_6 : answerFound === false ? inputImpressions_6 : emptyInput === true ? inputImpressions_6 : null}</p>}
        </div>
      </div>

    <div className="mt-3 d-flex justify-content-center">
      <button onClick={ResetAllContent} id="reset-test-btn" type="button"> <span className="check-spinner-reset me-1"></span> <span className="check-reset-text">Reset</span></button>
    </div>
      </div>
    </div>
    </>
  )
}