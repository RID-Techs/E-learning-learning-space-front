
import {useState} from "react"
export function American_Test () {
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
  const [impressions_41, setImpressions_41] = useState("");
  const [impressions_42, setImpressions_42] = useState("");

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
    // =========================================================
  const rightAnswerBtn_41 = (e) => {
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
    setImpressions_41("Congratulations! You got it.")
  }
    const wrongAnswerBtn_41 = (e) =>{
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
      setImpressions_41("Oops! Sorry, Try again later on.");
    }
    // =========================================================
    // =========================================================
  const rightAnswerBtn_42 = (e) => {
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
    setImpressions_42("Congratulations! You got it.")
  }
    const wrongAnswerBtn_42 = (e) =>{
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
      setImpressions_42("Oops! Sorry, Try again later on.");
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
        setImpressions_41("");
        setImpressions_42("");

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
      <h1>⦔ Take an Amercian Civilization test</h1>
      <div className="test-section mt-5">
        
      <div className="question-container">
        <div className="question-wrapper">
          <p>1--{">"} Who were the first inhabitants of the Americas ?</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_1} className="disable-btn" type="button">The Native Americans</button>
            <button onClick={wrongAnswerBtn_1} className="disable-btn" type="button">White men</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_1 : answerFound === false ? impressions_1 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>2--{">"} The indigenous indians were fishermen and hunters.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_2} className="disable-btn" type="button">False</button>
            <button onClick={rightAnswerBtn_2} className="disable-btn" type="button">True</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_2 : answerFound === false ? impressions_2 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>3--{">"} The native americans considered <strong>nature</strong> as a......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_3} className="disable-btn" type="button">Sacred entity</button>
            <button onClick={wrongAnswerBtn_3} className="disable-btn" type="button">a new world</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_3 : answerFound === false ? impressions_3 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>4--{">"} The Olmecs and Toltecs were some of the......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_4} className="disable-btn" type="button">Native American Civilizations</button>
            <button onClick={wrongAnswerBtn_4} className="disable-btn" type="button">Western Tribes</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_4 : answerFound === false ? impressions_4 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>5--{">"} The first mass of Thanksgiving on american soil was actually celebrated by the...... </p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_5} className="disable-btn" type="button">Indians</button>
            <button onClick={rightAnswerBtn_5} className="disable-btn" type="button">Spanish</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_5 : answerFound === false ? impressions_5 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>6--{">"} The first mass of Thanksgiving was celebrated on......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_6} className="disable-btn" type="button">September 8, 1565</button>
            <button onClick={wrongAnswerBtn_6} className="disable-btn" type="button">September 8, 1567</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_6 : answerFound === false ? impressions_6 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>7--{">"} The Pilgrims crossed the Atlantic on the Mayflower in 1620 in pursuit of......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_7} className="disable-btn" type="button">Pilgrimage</button>
            <button onClick={rightAnswerBtn_7} className="disable-btn" type="button">Religious Freedom</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_7 : answerFound === false ? impressions_7 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>8--{">"} ......was one of the first settlers to arrive in Maryland on March 25, 1634, and who worked with the Piscataway Indians of Maryland.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_8} className="disable-btn" type="button">Roger Williams</button>
            <button onClick={rightAnswerBtn_8} className="disable-btn" type="button">Father Andew White SJ</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_8 : answerFound === false ? impressions_8 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>9--{">"} The European diseases (smallpox, typhus and measles), the different spiritual beliefs and lack of respect towards nature are the main reason that shortened the harmonious cohabitation between European immigrants and Native Americans.</p>
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
          <p>10--{">"} Who translated the Bible into the Massachusetts language ?</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_10} className="disable-btn" type="button">The Baptist</button>
            <button onClick={rightAnswerBtn_10} className="disable-btn" type="button">John Eliot</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_10 : answerFound === false ? impressions_10 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>11--{">"} When did <strong>Christopher Columbus</strong> land in the New World ?</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_11} className="disable-btn" type="button">October 12, 1492</button>
            <button onClick={wrongAnswerBtn_11} className="disable-btn" type="button">November 12, 1492</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_11 : answerFound === false ? impressions_11 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>12--{">"} The English immigrants wrote a document called the <strong>Mayflower Compact</strong> in order to......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_12} className="disable-btn" type="button">Rule native americans</button>
            <button onClick={rightAnswerBtn_12} className="disable-btn" type="button">Organize themselves</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_12 : answerFound === false ? impressions_12 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>13--{">"} ......is a set of rules for self-governance which was established by the English settlers when they sailed to America on the Mayflower in 1620.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_13} className="disable-btn" type="button">The American Constitution</button>
            <button onClick={rightAnswerBtn_13} className="disable-btn" type="button">The Mayflower Compact</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_13 : answerFound === false ? impressions_13 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>14--{">"} The <strong>Mayflower Compact</strong> was signed on......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_14} className="disable-btn" type="button">November 11, 1620</button>
            <button onClick={wrongAnswerBtn_14} className="disable-btn" type="button">October 19, 1492</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_14 : answerFound === false ? impressions_14 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>15--{">"} The first lasting English settlement was made in...... at......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_15} className="disable-btn" type="button">1620 & Massachusetts</button>
            <button onClick={rightAnswerBtn_15} className="disable-btn" type="button">1607 & Jamestown</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_15 : answerFound === false ? impressions_15 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>16--{">"} In 1621, a group of Englishmen settled at Plymouth in Massachusetts. They were called......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_16} className="disable-btn" type="button">the Swedish</button>
            <button onClick={rightAnswerBtn_16} className="disable-btn" type="button">the Pilgrims</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_16 : answerFound === false ? impressions_16 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>17--{">"} The English settlement at Jamestown in 1607 lasted because of the money it made by.......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_17} className="disable-btn" type="button">Selling Gold</button>
            <button onClick={rightAnswerBtn_17} className="disable-btn" type="button">Planting Tobacco</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_17 : answerFound === false ? impressions_17 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>18--{">"} The ideal society which the Pilgrims and Puritans wanted to create in order to make a better society was called......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_18} className="disable-btn" type="button">a City on Hill</button>
            <button onClick={wrongAnswerBtn_18} className="disable-btn" type="button">Holy believers</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_18 : answerFound === false ? impressions_18 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>19--{">"} The <strong>Mayflower Compact</strong> was signed by......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_19} className="disable-btn" type="button">9 Pilgrims</button>
            <button onClick={rightAnswerBtn_19} className="disable-btn" type="button">41 English colonists</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_19 : answerFound === false ? impressions_19 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>20--{">"} How many colonies did we have by 1733 ?</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_20} className="disable-btn" type="button">Eleven (11)</button>
            <button onClick={rightAnswerBtn_20} className="disable-btn" type="button">Thirteen (13)</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_20 : answerFound === false ? impressions_20 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>21--{">"} The nothern group which was called New England included <strong>New Hampshire, Massachusetts, Rhode Island, and Connecticut.</strong></p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_21} className="disable-btn" type="button">True</button>
            <button onClick={wrongAnswerBtn_21} className="disable-btn" type="button">False</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_21 : answerFound === false ? impressions_21 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>22--{">"} There were three Middle colonies.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_22} className="disable-btn" type="button">False</button>
            <button onClick={rightAnswerBtn_22} className="disable-btn" type="button">True</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_22 : answerFound === false ? impressions_22 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>23--{">"} The South economy was powered by......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_23} className="disable-btn" type="button">Forestry and Fishing</button>
            <button onClick={rightAnswerBtn_23} className="disable-btn" type="button">Plantations</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_23 : answerFound === false ? impressions_23 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>24--{">"} ......were first farmed by......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_24} className="disable-btn" type="button">Tobacco & slaves</button>
            <button onClick={rightAnswerBtn_24} className="disable-btn" type="button">Plantations & indentured servants</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_24 : answerFound === false ? impressions_24 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>25--{">"} Who won the French and Indian War ?</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_25} className="disable-btn" type="button">the English</button>
            <button onClick={wrongAnswerBtn_25} className="disable-btn" type="button">the Indians</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_25 : answerFound === false ? impressions_25 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>26--{">"} What ended the Seven Years{`'`} War ?</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_26} className="disable-btn" type="button">the Proclamation line of 1763</button>
            <button onClick={wrongAnswerBtn_26} className="disable-btn" type="button">the Atlantic economy</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_26 : answerFound === false ? impressions_26 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>27--{">"} Which religious movement arose in the early 1700s ?</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_27} className="disable-btn" type="button">the Great Awakening</button>
            <button onClick={wrongAnswerBtn_27} className="disable-btn" type="button">Christianity</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_27 : answerFound === false ? impressions_27 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>28--{">"} The main cause of the American Revolution was......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_28} className="disable-btn" type="button">the political upheaval</button>
            <button onClick={rightAnswerBtn_28} className="disable-btn" type="button">the new Taxes</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_28 : answerFound === false ? impressions_28 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>29--{">"} Colonists wanted to have votes in the British Parliament before paying taxes, so they argued the position of......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_29} className="disable-btn" type="button">revolution</button>
            <button onClick={rightAnswerBtn_29} className="disable-btn" type="button">No taxation without representation</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_29 : answerFound === false ? impressions_29 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>30--{">"} An event occured on March 5, 1770, and this event is known as......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_30} className="disable-btn" type="button">the Boston Massacre</button>
            <button onClick={wrongAnswerBtn_30} className="disable-btn" type="button">the Boston Tea Party</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_30 : answerFound === false ? impressions_30 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>31--{">"} Members or supporters of the conservative party were called loyalists or......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_31} className="disable-btn" type="button">Tories</button>
            <button onClick={wrongAnswerBtn_31} className="disable-btn" type="button">Patriots</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_31 : answerFound === false ? impressions_31 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>32--{">"} The battle which fuelled the Revolutionary War took place at.......</p>
        </div>
        <div className="answer-wrapper">
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_32} className="disable-btn" type="button">Lexington and Concord</button>
            <button onClick={wrongAnswerBtn_32} className="disable-btn" type="button">Boston</button>
          </div>
        </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_32 : answerFound === false ? impressions_32 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>33--{">"} The Continental Army was under the leadership of......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_33} className="disable-btn" type="button">General George Washington</button>
            <button onClick={wrongAnswerBtn_33} className="disable-btn" type="button">the Crown</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_33 : answerFound === false ? impressions_33 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>34--{">"} General George Washington was appointed on June 15, 1775.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_34} className="disable-btn" type="button">True</button>
            <button onClick={wrongAnswerBtn_34} className="disable-btn" type="button">False</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_34 : answerFound === false ? impressions_34 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>35--{">"} What did we call the group of patriot colonists who destroyed 342 chests of Tea by throwing them into water ?</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_35} className="disable-btn" type="button">Tories</button>
            <button onClick={rightAnswerBtn_35} className="disable-btn" type="button">Sons of Liberty</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_35 : answerFound === false ? impressions_35 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>36--{">"} The British Parliament passed <strong>four (4) punitive laws</strong> in response to......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_36} className="disable-btn" type="button">the Battle of Saratoga</button>
            <button onClick={rightAnswerBtn_36} className="disable-btn" type="button">the Boston Tea Party</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_36 : answerFound === false ? impressions_36 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>37--{">"} The britains called those four punitive laws as <strong>Coercive Acts</strong>, whereas the colonists referred them as......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_37} className="disable-btn" type="button">the Intolerable Acts</button>
            <button onClick={wrongAnswerBtn_37} className="disable-btn" type="button">the Quebec Act</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_37 : answerFound === false ? impressions_37 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>38--{">"} Amongst those coercive laws, there were three (3) laws for Massachusetts</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_38} className="disable-btn" type="button">True</button>
            <button onClick={wrongAnswerBtn_38} className="disable-btn" type="button">False</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_38 : answerFound === false ? impressions_38 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>39--{">"} To offset big costs of the British military organization in America, the British Parliament passed......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_39} className="disable-btn" type="button">the Currency Act of 1764</button>
            <button onClick={rightAnswerBtn_39} className="disable-btn" type="button">the Stamp Act of 1765</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_39 : answerFound === false ? impressions_39 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>40--{">"} The First Continental Congress took place from September 5 to October 26, 1774 at Carpenters{`'`} Hall in Philadelphia. Also it was presided by Peyton Randolph, and Charles Thomson was the secretary of the Continental Congress.</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={wrongAnswerBtn_40} className="disable-btn" type="button">False</button>
            <button onClick={rightAnswerBtn_40} className="disable-btn" type="button">True</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_40 : answerFound === false ? impressions_40 : null}</p>}
        </div>
      </div>


      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>41--{">"} The Second Continental Congress which was presided by John Hancock took place in Pennsylvania State House (Independance Hall) on......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_41} className="disable-btn" type="button">May 10, 1775</button>
            <button onClick={wrongAnswerBtn_41} className="disable-btn" type="button">June 17, 1775</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_41 : answerFound === false ? impressions_41 : null}</p>}
        </div>
      </div>

      <div className="question-container mt-3">
        <div className="question-wrapper">
          <p>42--{">"} The United States{"'"} Independance day is celebrated on......</p>
        </div>
        <div className="answer-wrapper">
          <div className="correct-answer">
            <button onClick={rightAnswerBtn_42} className="disable-btn" type="button">July 4, 1776</button>
            <button onClick={wrongAnswerBtn_42} className="disable-btn" type="button">July 4, 1777</button>
          </div>
        </div>
        <div className="impression-section mt-3">
          { <p className="impression-msg">{answerFound === true ? impressions_42 : answerFound === false ? impressions_42 : null}</p>}
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