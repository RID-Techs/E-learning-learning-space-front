import {useState} from "react"
export function S3_American_Novel_Test () {
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
  const [impressions_12, setImpressions_12] = useState("");
  const [impressions_13, setImpressions_13] = useState("");
  const [impressions_14, setImpressions_14] = useState("");
  const [impressions_15, setImpressions_15] = useState("");
  const [impressions_16, setImpressions_16] = useState("");
  const [impressions_17, setImpressions_17] = useState("");
  const [impressions_18, setImpressions_18] = useState("");
  const [impressions_19, setImpressions_19] = useState("");
  const [impressions_20, setImpressions_20] = useState("");
  const [impressions_21, setImpressions_21] = useState("");
  const [impressions_22, setImpressions_22] = useState("");
  const [impressions_23, setImpressions_23] = useState("");
  const [impressions_24, setImpressions_24] = useState("");
  const [impressions_25, setImpressions_25] = useState("");
  const [impressions_26, setImpressions_26] = useState("");

  const [answerFound, setAnswerFound] = useState(null);

  const rightAnswerBtn_1 = (e) => {
    const CurrentBtn = e.currentTarget;
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
      const CurrentBtn = e.currentTarget;
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
    const CurrentBtn = e.currentTarget;
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
      const CurrentBtn = e.currentTarget;
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
    const CurrentBtn = e.currentTarget;
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
      const CurrentBtn = e.currentTarget;
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
    const CurrentBtn = e.currentTarget;
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
      const CurrentBtn = e.currentTarget;
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
    const CurrentBtn = e.currentTarget;
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
      const CurrentBtn = e.currentTarget;
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
    const CurrentBtn = e.currentTarget;
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
      const CurrentBtn = e.currentTarget;
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
    const CurrentBtn = e.currentTarget;
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
      const CurrentBtn = e.currentTarget;
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
    const CurrentBtn = e.currentTarget;
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
      const CurrentBtn = e.currentTarget;
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
    const CurrentBtn = e.currentTarget;
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
      const CurrentBtn = e.currentTarget;
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
    const CurrentBtn = e.currentTarget;
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
      const CurrentBtn = e.currentTarget;
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

    // =========================================================
  const rightAnswerBtn_11 = (e) => {
    const CurrentBtn = e.currentTarget;
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
      const CurrentBtn = e.currentTarget;
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
    // =========================================================

    // =========================================================
  const rightAnswerBtn_12 = (e) => {
    const CurrentBtn = e.currentTarget;
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
    setImpressions_12("Congratulations! You got it.")
  }
    const wrongAnswerBtn_12 = (e) =>{
      const CurrentBtn = e.currentTarget;
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
      setImpressions_12("Oops! Sorry, Try again later on.");
    }
    // =========================================================

    // =========================================================
  const rightAnswerBtn_13 = (e) => {
    const CurrentBtn = e.currentTarget;
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
    setImpressions_13("Congratulations! You got it.")
  }
    const wrongAnswerBtn_13 = (e) =>{
      const CurrentBtn = e.currentTarget;
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
      setImpressions_13("Oops! Sorry, Try again later on.");
    }
    // =========================================================

    // =========================================================
  const rightAnswerBtn_14 = (e) => {
    const CurrentBtn = e.currentTarget;
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
    setImpressions_14("Congratulations! You got it.")
  }
    const wrongAnswerBtn_14 = (e) =>{
      const CurrentBtn = e.currentTarget;
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
      setImpressions_14("Oops! Sorry, Try again later on.");
    }
    // =========================================================

    // =========================================================
  const rightAnswerBtn_15 = (e) => {
    const CurrentBtn = e.currentTarget;
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
    setImpressions_15("Congratulations! You got it.")
  }
    const wrongAnswerBtn_15 = (e) =>{
      const CurrentBtn = e.currentTarget;
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
      setImpressions_15("Oops! Sorry, Try again later on.");
    }
    // =========================================================

    // =========================================================
  const rightAnswerBtn_16 = (e) => {
    const CurrentBtn = e.currentTarget;
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
    setImpressions_16("Congratulations! You got it.")
  }
    const wrongAnswerBtn_16 = (e) =>{
      const CurrentBtn = e.currentTarget;
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
      setImpressions_16("Oops! Sorry, Try again later on.");
    }
    // =========================================================

    // =========================================================
  const rightAnswerBtn_17 = (e) => {
    const CurrentBtn = e.currentTarget;
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
    setImpressions_17("Congratulations! You got it.")
  }
    const wrongAnswerBtn_17 = (e) =>{
      const CurrentBtn = e.currentTarget;
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
      setImpressions_17("Oops! Sorry, Try again later on.");
    }
    // =========================================================

    // =========================================================
  const rightAnswerBtn_18 = (e) => {
    const CurrentBtn = e.currentTarget;
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
    setImpressions_18("Congratulations! You got it.")
  }
    const wrongAnswerBtn_18 = (e) =>{
      const CurrentBtn = e.currentTarget;
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
      setImpressions_18("Oops! Sorry, Try again later on.");
    }
    // =========================================================

    // =========================================================
  const rightAnswerBtn_19 = (e) => {
    const CurrentBtn = e.currentTarget;
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
    setImpressions_19("Congratulations! You got it.")
  }
    const wrongAnswerBtn_19 = (e) =>{
      const CurrentBtn = e.currentTarget;
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
      setImpressions_19("Oops! Sorry, Try again later on.");
    }
    // =========================================================

    // =========================================================
  const rightAnswerBtn_20 = (e) => {
    const CurrentBtn = e.currentTarget;
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
    setImpressions_20("Congratulations! You got it.")
  }
    const wrongAnswerBtn_20 = (e) =>{
      const CurrentBtn = e.currentTarget;
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
      setImpressions_20("Oops! Sorry, Try again later on.");
    }
    // =========================================================

    // =========================================================
  const rightAnswerBtn_21 = (e) => {
    const CurrentBtn = e.currentTarget;
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
    setImpressions_21("Congratulations! You got it.")
  }
    const wrongAnswerBtn_21 = (e) =>{
      const CurrentBtn = e.currentTarget;
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
      setImpressions_21("Oops! Sorry, Try again later on.");
    }
    // =========================================================

    // =========================================================
  const rightAnswerBtn_22 = (e) => {
    const CurrentBtn = e.currentTarget;
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
    setImpressions_22("Congratulations! You got it.")
  }
    const wrongAnswerBtn_22 = (e) =>{
      const CurrentBtn = e.currentTarget;
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
      setImpressions_22("Oops! Sorry, Try again later on.");
    }
    // =========================================================

    // =========================================================
  const rightAnswerBtn_23 = (e) => {
    const CurrentBtn = e.currentTarget;
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
    setImpressions_23("Congratulations! You got it.")
  }
    const wrongAnswerBtn_23 = (e) =>{
      const CurrentBtn = e.currentTarget;
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
      setImpressions_23("Oops! Sorry, Try again later on.");
    }
    // =========================================================
    // =========================================================
  const rightAnswerBtn_24 = (e) => {
    const CurrentBtn = e.currentTarget;
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
    setImpressions_24("Congratulations! You got it.")
  }
    const wrongAnswerBtn_24 = (e) =>{
      const CurrentBtn = e.currentTarget;
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
      setImpressions_24("Oops! Sorry, Try again later on.");
    }
    // =========================================================
    // =========================================================
  const rightAnswerBtn_25 = (e) => {
    const CurrentBtn = e.currentTarget;
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
    setImpressions_25("Congratulations! You got it.")
  }
    const wrongAnswerBtn_25 = (e) =>{
      const CurrentBtn = e.currentTarget;
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
      setImpressions_25("Oops! Sorry, Try again later on.");
    }
    // =========================================================
    // =========================================================
  const rightAnswerBtn_26 = (e) => {
    const CurrentBtn = e.currentTarget;
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
    setImpressions_26("Congratulations! You got it.")
  }
    const wrongAnswerBtn_26 = (e) =>{
      const CurrentBtn = e.currentTarget;
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
      setImpressions_26("Oops! Sorry, Try again later on.");
    }
    // =========================================================

    const ResetAllContent = () => {
      const inputAnswer = document.querySelectorAll(".input-answer");
      const checkSpinnerReset = document.querySelector(".check-spinner-reset");
      const checkResetText = document.querySelector(".check-reset-text");
      const checkAnswerBtn = document.querySelectorAll(".check-answer-btn");
      const impressionSection = document.querySelectorAll(".impression-section");
      const phoneticsItems = document.querySelectorAll(".phonetics-items");
      const allBtns = document.querySelectorAll("button");

      checkSpinnerReset.style.display = "inline-block";
      checkResetText.textContent = "Resetting...";

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
        setImpressions_12("");
        setImpressions_13("");
        setImpressions_14("");
        setImpressions_15("");
        setImpressions_16("");
        setImpressions_17("");
        setImpressions_18("");
        setImpressions_19("");
        setImpressions_20("");
        setImpressions_21("");
        setImpressions_22("");
        setImpressions_23("");
        setImpressions_24("");
        setImpressions_25("");
        setImpressions_26("");

        impressionSection.forEach((item) => {
          item.style.backgroundColor = "";
          item.classList.remove("true-style");
          item.classList.remove("disable-style");
          item.style.display = "none";
        })
        phoneticsItems.forEach((item) => {
          item.style.border = "";
          item.classList.remove("true-style");
          item.classList.remove("disable-style");
        })

          checkSpinnerReset.style.display = "none";
          checkResetText.textContent = "Reset";
        }, 2000)

    }

  return (
    <>
      <div className="grammar-test mt-4">
      <h1>⦔ Take an American Novel test</h1>
      <div className="test-section mt-5">
        
      <div className="question-container">
        <div className="question-wrapper">
          <p>1--{">"} Settlements, Puritan period and the Age of Reason or Enlightenment are the three main literary periods we have.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_1} className="disable-btn" type="button">True</button>
            <button onClick={wrongAnswerBtn_1} className="disable-btn" type="button">False</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_1 : answerFound === false ? impressions_1 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>2--{">"} The Fugitive Slave Act was passed in......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_2} className="disable-btn" type="button">1851</button>
            <button onClick={rightAnswerBtn_2} className="disable-btn" type="button">1850</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_2 : answerFound === false ? impressions_2 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>3--{">"} Harriet Beecher Stowe is the writer of the novel......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_3} className="disable-btn fw-bold fst-italic" type="button">Uncle Toms Cabin</button>
            <button onClick={rightAnswerBtn_3} className="disable-btn fw-bold fst-italic" type="button">Uncle Tom{`'`}s Cabin</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_3 : answerFound === false ? impressions_3 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>4--{">"} Uncle Tom is an African-American.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_4} className="disable-btn" type="button">False</button>
            <button onClick={rightAnswerBtn_4} className="disable-btn" type="button">True</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_4 : answerFound === false ? impressions_4 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>5--{">"} <strong><em>Uncle Tom{`'`}s Cabin</em></strong> was published in......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_5} className="disable-btn" type="button">1860s</button>
            <button onClick={rightAnswerBtn_5} className="disable-btn" type="button">1851</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_5 : answerFound === false ? impressions_5 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>6--{">"} Who is considered as a completely moral being and an unimpeachable Christian in <strong><em>Uncle Tom{`'`}s Cabin</em></strong> ?</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_6} className="disable-btn" type="button">Evangeline</button>
            <button onClick={wrongAnswerBtn_6} className="disable-btn" type="button">Marie St. Clare</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_6 : answerFound === false ? impressions_6 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>7--{">"} The character Simon Legree is a good-hearted person in <strong><em>Uncle Tom{`'`}s Cabin</em></strong>.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_7} className="disable-btn" type="button">True</button>
            <button onClick={rightAnswerBtn_7} className="disable-btn" type="button">False</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_7 : answerFound === false ? impressions_7 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>8--{">"} In <strong><em>Uncle Tom{`'`}s Cabin</em></strong>, the slave hunter hired by Mr Haley to bring back Eliza, Harry, and George is named......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_8} className="disable-btn" type="button">Tom Locker</button>
            <button onClick={rightAnswerBtn_8} className="disable-btn" type="button">Tom Loker</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_8 : answerFound === false ? impressions_8 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>9--{">"} In <strong><em>Uncle Tom{`'`}s Cabin</em></strong>, Christianity is used to fight slavery.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_9} className="disable-btn" type="button">True</button>
            <button onClick={wrongAnswerBtn_9} className="disable-btn" type="button">False</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_9 : answerFound === false ? impressions_9 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>10--{">"} In <strong><em>Uncle Tom{`'`}s Cabin</em></strong>, Beecher Stowe shows how African-Americans lost their dignity, their identity, and how they were dying inwardly, within their souls under the theme the <strong>Evil of Slavery</strong>.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_10} className="disable-btn" type="button">False</button>
            <button onClick={rightAnswerBtn_10} className="disable-btn" type="button">True</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_10 : answerFound === false ? impressions_10 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>11--{">"} <strong><em>Uncle Tom{`'`}s Cabin</em></strong> pertains to the literary period of...... </p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_11} className="disable-btn" type="button">Romanticism</button>
            <button onClick={wrongAnswerBtn_11} className="disable-btn" type="button">Realism</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_11 : answerFound === false ? impressions_11 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>12--{">"} Realism is the portrayal of real life events in a fictional way.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_12} className="disable-btn" type="button">False</button>
            <button onClick={rightAnswerBtn_12} className="disable-btn" type="button">True</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_12 : answerFound === false ? impressions_12 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>13--{">"} Mark Twain{"'"}s <strong><em>The Adventures of Huckleberry Finn</em></strong> is one fine example of novels written during Realism.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_13} className="disable-btn" type="button">False</button>
            <button onClick={rightAnswerBtn_13} className="disable-btn" type="button">True</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_13 : answerFound === false ? impressions_13 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>14--{">"} Who wrote <strong><em>The Scarlet Letter</em></strong> ?</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_14} className="disable-btn" type="button">Nathaniel Hawthorne</button>
            <button onClick={wrongAnswerBtn_14} className="disable-btn" type="button">William Dean Howells</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_14 : answerFound === false ? impressions_14 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>15--{">"} The most prominent theorists and practitioners of American Literary Realism are in the number of......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_15} className="disable-btn" type="button">Four (4)</button>
            <button onClick={rightAnswerBtn_15} className="disable-btn" type="button">Three (3)</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_15 : answerFound === false ? impressions_15 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>16--{">"} Realism has come to oppose.....</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_16} className="disable-btn" type="button">Puritanism</button>
            <button onClick={rightAnswerBtn_16} className="disable-btn" type="button">Idealism</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_16 : answerFound === false ? impressions_16 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>17--{">"} Mark Twain{"'"}s <strong><em>The Adventures of Huckleberry Finn</em></strong> is much more concerned with the Realism sub-genre...... </p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_17} className="disable-btn" type="button">Regionalism</button>
            <button onClick={rightAnswerBtn_17} className="disable-btn" type="button">Local Color</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_17 : answerFound === false ? impressions_17 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>18--{">"} Does Regionalism go beyond borders ?</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_18} className="disable-btn" type="button">Yes</button>
            <button onClick={wrongAnswerBtn_18} className="disable-btn" type="button">No</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_18 : answerFound === false ? impressions_18 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>19--{">"} Mark Twain is not a pen name.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_19} className="disable-btn" type="button">True</button>
            <button onClick={rightAnswerBtn_19} className="disable-btn" type="button">False</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_19 : answerFound === false ? impressions_19 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>20--{">"} Who is Huck{"'"}s first true friend ? </p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_20} className="disable-btn" type="button">Tom Sawyer</button>
            <button onClick={rightAnswerBtn_20} className="disable-btn" type="button">Jim</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_20 : answerFound === false ? impressions_20 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>21--{">"} The main concern in Mark Twain{"'"}s <strong><em>The Adventures of Huckleberry Finn</em></strong> is..... </p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_21} className="disable-btn" type="button">Racism</button>
            <button onClick={wrongAnswerBtn_21} className="disable-btn" type="button">Christian values</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_21 : answerFound === false ? impressions_21 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>22--{">"} THe actual name of <strong><em>The Adventures of Huckleberry Finn</em></strong> writer is......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_22} className="disable-btn" type="button">Mark Twain</button>
            <button onClick={rightAnswerBtn_22} className="disable-btn" type="button">Samuel Langhorne Clemmons</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_22 : answerFound === false ? impressions_22 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>23--{">"} Jim Crow Law is a racially segregating law.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_23} className="disable-btn" type="button">False</button>
            <button onClick={rightAnswerBtn_23} className="disable-btn" type="button">True</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_23 : answerFound === false ? impressions_23 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>24--{">"} The period in which black intellectuals, poets, musicians and writers explored their cultural identity is known as......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_24} className="disable-btn" type="button">Black pride</button>
            <button onClick={rightAnswerBtn_24} className="disable-btn" type="button">Harlem Renaissance</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_24 : answerFound === false ? impressions_24 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>25--{">"} The Harlem Renaissance came into being mostly because the......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_25} className="disable-btn" type="button">Great Migration</button>
            <button onClick={wrongAnswerBtn_25} className="disable-btn" type="button">Cultural movements</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_25 : answerFound === false ? impressions_25 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>26--{">"} The......unfortunately ends the Harlem Renaissance movement.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_26} className="disable-btn" type="button">Great depression</button>
            <button onClick={wrongAnswerBtn_26} className="disable-btn" type="button">Racism</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_26 : answerFound === false ? impressions_26 : null}</p>}
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