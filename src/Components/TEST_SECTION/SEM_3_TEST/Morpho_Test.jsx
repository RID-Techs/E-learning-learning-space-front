import {useState} from "react"
export function Morphology_Test () {
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
  const [impressions_27, setImpressions_27] = useState("");
  const [impressions_28, setImpressions_28] = useState("");
  const [impressions_29, setImpressions_29] = useState("");
  const [impressions_30, setImpressions_30] = useState("");
  const [impressions_31, setImpressions_31] = useState("");
  const [impressions_32, setImpressions_32] = useState("");
  const [impressions_33, setImpressions_33] = useState("");
  const [impressions_34, setImpressions_34] = useState("");
  const [impressions_35, setImpressions_35] = useState("");
  const [impressions_36, setImpressions_36] = useState("");
  const [impressions_37, setImpressions_37] = useState("");
  const [impressions_38, setImpressions_38] = useState("");
  const [impressions_39, setImpressions_39] = useState("");
  const [impressions_40, setImpressions_40] = useState("");

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
    // =========================================================
  const rightAnswerBtn_27 = (e) => {
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
    setImpressions_27("Congratulations! You got it.")
  }
    const wrongAnswerBtn_27 = (e) =>{
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
      setImpressions_27("Oops! Sorry, Try again later on.");
    }
    // =========================================================
    // =========================================================
  const rightAnswerBtn_28 = (e) => {
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
    setImpressions_28("Congratulations! You got it.")
  }
    const wrongAnswerBtn_28 = (e) =>{
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
      setImpressions_28("Oops! Sorry, Try again later on.");
    }
    // =========================================================
    // =========================================================
  const rightAnswerBtn_29 = (e) => {
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
    setImpressions_29("Congratulations! You got it.")
  }
    const wrongAnswerBtn_29 = (e) =>{
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
      setImpressions_29("Oops! Sorry, Try again later on.");
    }
    // =========================================================
    // =========================================================
  const rightAnswerBtn_30 = (e) => {
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
    setImpressions_30("Congratulations! You got it.")
  }
    const wrongAnswerBtn_30 = (e) =>{
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
      setImpressions_30("Oops! Sorry, Try again later on.");
    }
    // =========================================================
    // =========================================================
  const rightAnswerBtn_31 = (e) => {
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
    setImpressions_31("Congratulations! You got it.")
  }
    const wrongAnswerBtn_31 = (e) =>{
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
      setImpressions_31("Oops! Sorry, Try again later on.");
    }
    // =========================================================
    // =========================================================
  const rightAnswerBtn_32 = (e) => {
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
    setImpressions_32("Congratulations! You got it.")
  }
    const wrongAnswerBtn_32 = (e) =>{
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
      setImpressions_32("Oops! Sorry, Try again later on.");
    }
    // =========================================================
    // =========================================================
  const rightAnswerBtn_33 = (e) => {
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
    setImpressions_33("Congratulations! You got it.")
  }
    const wrongAnswerBtn_33 = (e) =>{
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
      setImpressions_33("Oops! Sorry, Try again later on.");
    }
    // =========================================================

    // =========================================================
  const rightAnswerBtn_34 = (e) => {
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
    setImpressions_34("Congratulations! You got it.")
  }
    const wrongAnswerBtn_34 = (e) =>{
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
      setImpressions_34("Oops! Sorry, Try again later on.");
    }
    // =========================================================

    // =========================================================
  const rightAnswerBtn_35 = (e) => {
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
    setImpressions_35("Congratulations! You got it.")
  }
    const wrongAnswerBtn_35 = (e) =>{
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
      setImpressions_35("Oops! Sorry, Try again later on.");
    }
    // =========================================================
    // =========================================================
  const rightAnswerBtn_36 = (e) => {
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
    setImpressions_36("Congratulations! You got it.")
  }
    const wrongAnswerBtn_36 = (e) =>{
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
      setImpressions_36("Oops! Sorry, Try again later on.");
    }
    // =========================================================
    // =========================================================
  const rightAnswerBtn_37 = (e) => {
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
    setImpressions_37("Congratulations! You got it.")
  }
    const wrongAnswerBtn_37 = (e) =>{
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
      setImpressions_37("Oops! Sorry, Try again later on.");
    }
    // =========================================================
    // =========================================================
  const rightAnswerBtn_38 = (e) => {
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
    setImpressions_38("Congratulations! You got it.")
  }
    const wrongAnswerBtn_38 = (e) =>{
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
      setImpressions_38("Oops! Sorry, Try again later on.");
    }
    // =========================================================
    // =========================================================
  const rightAnswerBtn_39 = (e) => {
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
    setImpressions_39("Congratulations! You got it.")
  }
    const wrongAnswerBtn_39 = (e) =>{
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
      setImpressions_39("Oops! Sorry, Try again later on.");
    }
    // =========================================================
    // =========================================================
  const rightAnswerBtn_40 = (e) => {
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
    setImpressions_40("Congratulations! You got it.")
  }
    const wrongAnswerBtn_40 = (e) =>{
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
      setImpressions_40("Oops! Sorry, Try again later on.");
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
        setImpressions_27("");
        setImpressions_28("");
        setImpressions_29("");
        setImpressions_30("");
        setImpressions_31("");
        setImpressions_32("");
        setImpressions_33("");
        setImpressions_34("");
        setImpressions_35("");
        setImpressions_36("");
        setImpressions_37("");
        setImpressions_38("");
        setImpressions_39("");
        setImpressions_40("");

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
      <h1>⦔ Take a Morphology and Syntax test</h1>
      <div className="test-section mt-5">
        
      <div className="question-container">
        <div className="question-wrapper">
          <p>1--{">"} The study of the concrete sounds and their production is known as......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_1} className="disable-btn" type="button">Phonetics</button>
            <button onClick={wrongAnswerBtn_1} className="disable-btn" type="button">Phonology</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_1 : answerFound === false ? impressions_1 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>2--{">"} ......is the study of the minimal meaningful linguistic units and word formation.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_2} className="disable-btn" type="button">Lexicology</button>
            <button onClick={rightAnswerBtn_2} className="disable-btn" type="button">Morphology</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_2 : answerFound === false ? impressions_2 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>3--{">"} Syntax does not deal with the arrangement of words to form phrases and sentences.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_3} className="disable-btn" type="button">False</button>
            <button onClick={wrongAnswerBtn_3} className="disable-btn" type="button">True</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_3 : answerFound === false ? impressions_3 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>4--{">"} Words are meaningful linguistic units that can be combined at syntactic level to form phrases and sentences.</p>
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
          <p>5--{">"} The basic item of study in morphology is the......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_5} className="disable-btn" type="button">Phoneme</button>
            <button onClick={rightAnswerBtn_5} className="disable-btn" type="button">Morpheme</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_5 : answerFound === false ? impressions_5 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>6--{">"} A morpheme can have grammatical function.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_6} className="disable-btn" type="button">True</button>
            <button onClick={wrongAnswerBtn_6} className="disable-btn" type="button">False</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_6 : answerFound === false ? impressions_6 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>7--{">"} A morpheme can either be a free morpheme or a bound one.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_7} className="disable-btn" type="button">False</button>
            <button onClick={rightAnswerBtn_7} className="disable-btn" type="button">True</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_7 : answerFound === false ? impressions_7 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>8--{">"} The concrete material reprensation of a morpheme is known as......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_8} className="disable-btn" type="button">an allomorph</button>
            <button onClick={rightAnswerBtn_8} className="disable-btn" type="button">a morph</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_8 : answerFound === false ? impressions_8 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>9--{">"} Affixes are different from prefixes.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_9} className="disable-btn" type="button">False</button>
            <button onClick={wrongAnswerBtn_9} className="disable-btn" type="button">True</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_9 : answerFound === false ? impressions_9 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>10--{">"} ......can stand alone and still convey a meaning.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_10} className="disable-btn" type="button">Dependent morphemes</button>
            <button onClick={rightAnswerBtn_10} className="disable-btn" type="button">Free morphemes</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_10 : answerFound === false ? impressions_10 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>11--{">"} Free functional morphemes are words that can stand alone as individual words and serve a grammatical function rather than carrying lexical meaning. </p>
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
          <p>12--{">"} Nouns and verbs are free content morphemes.</p>
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
          <p>13--{">"} The prefix included in the word <strong>unhappy</strong> is......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_13} className="disable-btn" type="button">{`"`}-un{`"`}</button>
            <button onClick={rightAnswerBtn_13} className="disable-btn" type="button">{`"`}un-{`"`}</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_13 : answerFound === false ? impressions_13 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>14--{">"} ......are semantically pertinent as they add meaning to radicals.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_14} className="disable-btn" type="button">Prefixes</button>
            <button onClick={wrongAnswerBtn_14} className="disable-btn" type="button">Inflectional morphemes</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_14 : answerFound === false ? impressions_14 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>15--{">"} The word classes included in the Free functional morphemes are.....</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_15} className="disable-btn" type="button">Conjunctions, Pronouns and Adverbs</button>
            <button onClick={rightAnswerBtn_15} className="disable-btn" type="button">Conjunctions, Pronouns and Interjections</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_15 : answerFound === false ? impressions_15 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>16--{">"} The radical is also called......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_16} className="disable-btn" type="button">Roote</button>
            <button onClick={rightAnswerBtn_16} className="disable-btn" type="button">Stem</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_16 : answerFound === false ? impressions_16 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>17--{">"} Bound morphemes are classified into Bound Derivational Morpheme and Bound Inflectional Morpheme.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_17} className="disable-btn" type="button">False</button>
            <button onClick={rightAnswerBtn_17} className="disable-btn" type="button">True</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_17 : answerFound === false ? impressions_17 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>18--{">"} The suffix contained in the word <strong>fearless</strong> is......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_18} className="disable-btn" type="button">{`"`}-less{`"`}</button>
            <button onClick={wrongAnswerBtn_18} className="disable-btn" type="button">{`"`}less-{`"`}</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_18 : answerFound === false ? impressions_18 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>19--{">"} Which suffix is used to form nouns ?</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_19} className="disable-btn" type="button">{`"`}-nes{`"`}</button>
            <button onClick={rightAnswerBtn_19} className="disable-btn" type="button">{`"`}-ship{`"`}</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_19 : answerFound === false ? impressions_19 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>20--{">"} A......does not alter a word{"'"}s meaning or its word class.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_20} className="disable-btn" type="button">bound derivational morpheme</button>
            <button onClick={rightAnswerBtn_20} className="disable-btn" type="button">bound inflectional morpheme</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_20 : answerFound === false ? impressions_20 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>21--{">"} Can allomorphs be marked by conditioning ?</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_21} className="disable-btn" type="button">Yes</button>
            <button onClick={wrongAnswerBtn_21} className="disable-btn" type="button">No</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_21 : answerFound === false ? impressions_21 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>22--{">"} Morpho-phonological rules can be used to predict and analyze......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_22} className="disable-btn" type="button">Lexically conditioned allomorphs</button>
            <button onClick={rightAnswerBtn_22} className="disable-btn" type="button">Phonologically conditioned allomorphs</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_22 : answerFound === false ? impressions_22 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>23--{">"} The simple past morpheme <strong>{`"`}-ed{`"`}</strong> has different forms regarding the context in which it takes place.</p>
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
          <p>24--{">"}  Word Formation Procedures involves going through two possibilities. THey are......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_24} className="disable-btn" type="button">Endoglosic and Exoglosic Procedures</button>
            <button onClick={rightAnswerBtn_24} className="disable-btn" type="button">Endoglossic and Exoglossic Procedures</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_24 : answerFound === false ? impressions_24 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>25--{">"} An intralinguistic word creation procedure calls for an......word formation procedure.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_25} className="disable-btn" type="button">endoglossic</button>
            <button onClick={wrongAnswerBtn_25} className="disable-btn" type="button">exoglossic</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_25 : answerFound === false ? impressions_25 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>26--{">"} Which procedure is highly used ?</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_26} className="disable-btn" type="button">Derivation</button>
            <button onClick={wrongAnswerBtn_26} className="disable-btn" type="button">clipping</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_26 : answerFound === false ? impressions_26 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>27--{">"} Which procedure involves shortening a word through disaffixation ?</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_27} className="disable-btn" type="button">Back Formation</button>
            <button onClick={wrongAnswerBtn_27} className="disable-btn" type="button">Acronymy</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_27 : answerFound === false ? impressions_27 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>28--{">"} The word <strong>Brunch</strong> is created through which procedure ?</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_28} className="disable-btn" type="button">Coinage</button>
            <button onClick={rightAnswerBtn_28} className="disable-btn" type="button">Blending</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_28 : answerFound === false ? impressions_28 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>29--{">"} The word <strong>Café</strong> can be used in English language thanks to a procedure which is part of the......word formation prcedure.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_29} className="disable-btn" type="button">endoglossic</button>
            <button onClick={rightAnswerBtn_29} className="disable-btn" type="button">exoglossic</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_29 : answerFound === false ? impressions_29 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>30--{">"} ......is a language in which morphemes in words are amalgamated together so that it is not easy to distinguish them.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_30} className="disable-btn" type="button">Fusional language</button>
            <button onClick={wrongAnswerBtn_30} className="disable-btn" type="button">Agglutinating language</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_30 : answerFound === false ? impressions_30 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>31--{">"} The study of the rules governing the way words are arranged to form sentences in a language is known as......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_31} className="disable-btn" type="button">Syntax</button>
            <button onClick={wrongAnswerBtn_31} className="disable-btn" type="button">Semantics</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_31 : answerFound === false ? impressions_31 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>32--{">"} Word classes are also known as parts of speech.</p>
        </div>
        <div className="answer-wrapper">
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_32} className="disable-btn" type="button">True</button>
            <button onClick={wrongAnswerBtn_32} className="disable-btn" type="button">False</button>
          </div>
        </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_32 : answerFound === false ? impressions_32 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>33--{">"} A finite verb is included in a phrase.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_33} className="disable-btn" type="button">True</button>
            <button onClick={rightAnswerBtn_33} className="disable-btn" type="button">False</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_33 : answerFound === false ? impressions_33 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>34--{">"} One characteristic of a phrase is......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_34} className="disable-btn" type="button">Functional unit</button>
            <button onClick={wrongAnswerBtn_34} className="disable-btn" type="button">Relative clause</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_34 : answerFound === false ? impressions_34 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>35--{">"} We have four forms and three types of sentence.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_35} className="disable-btn" type="button">False</button>
            <button onClick={rightAnswerBtn_35} className="disable-btn" type="button">True</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_35 : answerFound === false ? impressions_35 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>36--{">"} The opposite of semantic sentence is an......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_36} className="disable-btn" type="button">unsemantic sentence</button>
            <button onClick={rightAnswerBtn_36} className="disable-btn" type="button">asemantic sentence</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_36 : answerFound === false ? impressions_36 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>37--{">"} Phrase Structure Rules are also known as......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_37} className="disable-btn" type="button">Rewriting Rules</button>
            <button onClick={wrongAnswerBtn_37} className="disable-btn" type="button">False</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_37 : answerFound === false ? impressions_37 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>38--{">"} The linear combination of constituents and their hierarchical relation is showed through the......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_38} className="disable-btn" type="button">Tree diagram</button>
            <button onClick={wrongAnswerBtn_38} className="disable-btn" type="button">Labeled bracketing</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_38 : answerFound === false ? impressions_38 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>39--{">"} ......is a transformational operation.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_39} className="disable-btn" type="button">Promoninalization</button>
            <button onClick={rightAnswerBtn_39} className="disable-btn" type="button">Displacement</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_39 : answerFound === false ? impressions_39 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>40--{">"} Carrying out an immediate constituent analysis requires the use of......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_40} className="disable-btn" type="button">Three diagram</button>
            <button onClick={rightAnswerBtn_40} className="disable-btn" type="button">Rewriting rules</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_40 : answerFound === false ? impressions_40 : null}</p>}
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