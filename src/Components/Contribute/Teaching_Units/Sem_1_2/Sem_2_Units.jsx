import supabase from "../../../../Config/DbConnect";
import { toast, Zoom } from "react-toastify";
import { useState } from "react";
import { DisplayPapers } from "../../Dispay_Papers";
import paper from "/paper.png";

export function Semester2Units() {

    const ErrorMsg = (message) => {
      toast.error(message, {
        theme: "light",
        position: "top-center",
        autoClose: 2000,
        transition: Zoom,
      });
    };

  const [displayPapers, setDisplayPapers] = useState(false);
  const [fetchingData_1, setFetchingData_1] = useState(false);
  const [fetchingData_2, setFetchingData_2] = useState(false);
  const [fetchingData_3, setFetchingData_3] = useState(false);
  const [fetchingData_4, setFetchingData_4] = useState(false);
  const [fetchingData_5, setFetchingData_5] = useState(false);
  const [fetchingData_6, setFetchingData_6] = useState(false);
  const [fetchingData_7, setFetchingData_7] = useState(false);
  const [fetchingData_8, setFetchingData_8] = useState(false);

  
  const [examPapers_Unit_1, setExamPapers_Unit_1] = useState([]);
  const [examPapers_Unit_2, setExamPapers_Unit_2] = useState([]);
  const [examPapers_Unit_3, setExamPapers_Unit_3] = useState([]);
  const [examPapers_Unit_4, setExamPapers_Unit_4] = useState([]);
  const [examPapers_Unit_5, setExamPapers_Unit_5] = useState([]);
  const [examPapers_Unit_6, setExamPapers_Unit_6] = useState([]);
  const [examPapers_Unit_7, setExamPapers_Unit_7] = useState([]);
  const [examPapers_Unit_8, setExamPapers_Unit_8] = useState([]);

  const [subject_1, setSubject_1] = useState(false);
  const [subject_2, setSubject_2] = useState(false);
  const [subject_3, setSubject_3] = useState(false);
  const [subject_4, setSubject_4] = useState(false);
  const [subject_5, setSubject_5] = useState(false);
  const [subject_6, setSubject_6] = useState(false);
  const [subject_7, setSubject_7] = useState(false);
  const [subject_8, setSubject_8] = useState(false);

  const closeDisplayPapers = () => {
    setDisplayPapers(false);
    setSubject_1(false);
    setSubject_2(false);
    setSubject_3(false);
    setSubject_4(false);
    setSubject_5(false);
    setSubject_6(false);
    setSubject_7(false);
    setSubject_8(false);
    document.body.style.overflow = "auto";
  };

  const displayPapersHandler_Unit_1 = async () => {
    if(examPapers_Unit_1.length > 0) {
      setDisplayPapers(!displayPapers);
      setSubject_1(true);
      document.body.style.overflow = "hidden";
    }
    if(examPapers_Unit_1.length === 0) {
      await fetchExamPapers_Unit_1();
    }
  };

  const displayPapersHandler_Unit_2 = async () => {
    if(examPapers_Unit_2.length > 0) {
      setDisplayPapers(!displayPapers);
      setSubject_2(true);
      document.body.style.overflow = "hidden";
    }
    if(examPapers_Unit_2.length === 0) {
      await fetchExamPapers_Unit_2();
    }
  };

  const displayPapersHandler_Unit_3 = async () => {
    if(examPapers_Unit_3.length > 0) {
      setDisplayPapers(!displayPapers);
      setSubject_3(true);
      document.body.style.overflow = "hidden";
    }
    if(examPapers_Unit_3.length === 0) {
      await fetchExamPapers_Unit_3();
    }
  };

  const displayPapersHandler_Unit_4 = async () => {
    if(examPapers_Unit_4.length > 0) {
      setDisplayPapers(!displayPapers);
      setSubject_4(true);
      document.body.style.overflow = "hidden";
    }
    if(examPapers_Unit_4.length === 0) {
      await fetchExamPapers_Unit_4();
    }
  };

  const displayPapersHandler_Unit_5 = async () => {
    if(examPapers_Unit_5.length > 0) {
      setDisplayPapers(!displayPapers);
      setSubject_5(true);
      document.body.style.overflow = "hidden";
    }
    if(examPapers_Unit_5.length === 0) {
      await fetchExamPapers_Unit_5();
    }
  };

  const displayPapersHandler_Unit_6 = async () => {
    if(examPapers_Unit_6.length > 0) {
      setDisplayPapers(!displayPapers);
      setSubject_6(true);
      document.body.style.overflow = "hidden";
    }
    if(examPapers_Unit_6.length === 0) {
      await fetchExamPapers_Unit_6();
    }
  };

  const displayPapersHandler_Unit_7 = async () => {
    if(examPapers_Unit_7.length > 0) {
      setDisplayPapers(!displayPapers);
      setSubject_7(true);
      document.body.style.overflow = "hidden";
    }
    if(examPapers_Unit_7.length === 0) {
      await fetchExamPapers_Unit_7();
    }
  };

  const displayPapersHandler_Unit_8 = async () => {
    if(examPapers_Unit_8.length > 0) {
      setDisplayPapers(!displayPapers);
      setSubject_8(true);
      document.body.style.overflow = "hidden";
    }
    if(examPapers_Unit_8.length === 0) {
      await fetchExamPapers_Unit_8();
    }
  };

    const fetchExamPapers_Unit_1 = async () => {
      document.body.style.overflow = "hidden";
      setFetchingData_1(true);
      try {
        const { data, error } = await supabase
        .from('exam_paper')
        .select('*')
        .eq('paper_semester', 'Semester 2')
        .eq('paper_name', 'Anglophone Literature')
        .order('paper_year', { ascending: false });
        
        if (error) {
          setFetchingData_1(false);
          document.body.style.overflow = "auto";
          throw error;
        }
        if (!data || data.length === 0) {
          setFetchingData_1(false);
          document.body.style.overflow = "auto";
          ErrorMsg("No exam papers found for this Teaching Unit.");
          throw new Error("No exam papers found for this Teaching Unit.");
        }
        setExamPapers_Unit_1(data);
        setFetchingData_1(false);
        setDisplayPapers(!displayPapers);
        setSubject_1(true);
      } catch (error) {
        setFetchingData_1(false);
        document.body.style.overflow = "auto";
        if(import.meta.env.VITE_ENV === "development") {
          console.error("Error fetching exam papers:", error);
        }
      }
    }

    const fetchExamPapers_Unit_2 = async () => {
      document.body.style.overflow = "hidden";
      setFetchingData_2(true);
      try {
        const { data, error } = await supabase
        .from('exam_paper')
        .select('*')
        .eq('paper_semester', 'Semester 2')
        .eq('paper_name', 'Anglophone Poetry')
        .order('paper_year', { ascending: false });
        
        if (error) {
          setFetchingData_2(false);
          document.body.style.overflow = "auto";
          throw error;
        }
        if (!data || data.length === 0) {
          setFetchingData_2(false);
          document.body.style.overflow = "auto";
          ErrorMsg("No exam papers found for this Teaching Unit.");
          throw new Error("No exam papers found for this Teaching Unit.");
        }
        setExamPapers_Unit_2(data);
        setFetchingData_2(false);
        setDisplayPapers(!displayPapers);
        setSubject_2(true);
      } catch (error) {
        setFetchingData_2(false);
        document.body.style.overflow = "auto";
        if(import.meta.env.VITE_ENV === "development") {
          console.error("Error fetching exam papers:", error);
        }
      }
    }

    const fetchExamPapers_Unit_3 = async () => {
      document.body.style.overflow = "hidden";
      setFetchingData_3(true);
      try {
        const { data, error } = await supabase
        .from('exam_paper')
        .select('*')
        .eq('paper_semester', 'Semester 2')
        .eq('paper_name', 'Anglophone Theater')
        .order('paper_year', { ascending: false });
        
        if (error) {
          setFetchingData_3(false);
          document.body.style.overflow = "auto";
          throw error;
        }
        if (!data || data.length === 0) {
          setFetchingData_3(false);
          document.body.style.overflow = "auto";
          ErrorMsg("No exam papers found for this Teaching Unit.");
          throw new Error("No exam papers found for this Teaching Unit.");
        }
        setExamPapers_Unit_3(data);
        setFetchingData_3(false);
        setDisplayPapers(!displayPapers);
        setSubject_3(true);
      } catch (error) {
        setFetchingData_3(false);
        document.body.style.overflow = "auto";
        if(import.meta.env.VITE_ENV === "development") {
          console.error("Error fetching exam papers:", error);
        }
      }
    }
    const fetchExamPapers_Unit_4 = async () => {
      document.body.style.overflow = "hidden";
      setFetchingData_4(true);
      try {
        const { data, error } = await supabase
        .from('exam_paper')
        .select('*')
        .eq('paper_semester', 'Semester 2')
        .eq('paper_name', 'Anglophone Prose')
        .order('paper_year', { ascending: false });
        
        if (error) {
          setFetchingData_4(false);
          document.body.style.overflow = "auto";
          throw error;
        }
        if (!data || data.length === 0) {
          setFetchingData_4(false);
          document.body.style.overflow = "auto";
          ErrorMsg("No exam papers found for this Teaching Unit.");
          throw new Error("No exam papers found for this Teaching Unit.");
        }
        setExamPapers_Unit_4(data);
        setFetchingData_4(false);
        setDisplayPapers(!displayPapers);
        setSubject_4(true);
      } catch (error) {
        setFetchingData_4(false);
        document.body.style.overflow = "auto";
        if(import.meta.env.VITE_ENV === "development") {
          console.error("Error fetching exam papers:", error);
        }
      }
    }

        const fetchExamPapers_Unit_5 = async () => {
      document.body.style.overflow = "hidden";
      setFetchingData_5(true);
      try {
        const { data, error } = await supabase
        .from('exam_paper')
        .select('*')
        .eq('paper_semester', 'Semester 2')
        .eq('paper_name', 'Creative Writing')
        .order('paper_year', { ascending: false });
        
        if (error) {
          setFetchingData_5(false);
          document.body.style.overflow = "auto";
          throw error;
        }
        if (!data || data.length === 0) {
          setFetchingData_5(false);
          document.body.style.overflow = "auto";
          ErrorMsg("No exam papers found for this Teaching Unit.");
          throw new Error("No exam papers found for this Teaching Unit.");
        }
        setExamPapers_Unit_5(data);
        setFetchingData_5(false);
        setDisplayPapers(!displayPapers);
        setSubject_5(true);
      } catch (error) {
        setFetchingData_5(false);
        document.body.style.overflow = "auto";
        if(import.meta.env.VITE_ENV === "development") {
          console.error("Error fetching exam papers:", error);
        }
      }
    }

    const fetchExamPapers_Unit_6 = async () => {
      document.body.style.overflow = "hidden";
      setFetchingData_6(true);
      try {
        const { data, error } = await supabase
        .from('exam_paper')
        .select('*')
        .eq('paper_semester', 'Semester 2')
        .eq('paper_name', 'Méthodologie du Traduction')
        .order('paper_year', { ascending: false });
        
        if (error) {
          setFetchingData_6(false);
          document.body.style.overflow = "auto";
          throw error;
        }
        if (!data || data.length === 0) {
          setFetchingData_6(false);
          document.body.style.overflow = "auto";
          ErrorMsg("No exam papers found for this Teaching Unit.");
          throw new Error("No exam papers found for this Teaching Unit.");
        }
        setExamPapers_Unit_6(data);
        setFetchingData_6(false);
        setDisplayPapers(!displayPapers);
        setSubject_6(true);
      } catch (error) {
        setFetchingData_6(false);
        document.body.style.overflow = "auto";
        if(import.meta.env.VITE_ENV === "development") {
          console.error("Error fetching exam papers:", error);
        }
      }
    }
    const fetchExamPapers_Unit_7 = async () => {
      document.body.style.overflow = "hidden";
      setFetchingData_7(true);
      try {
        const { data, error } = await supabase
        .from('exam_paper')
        .select('*')
        .eq('paper_semester', 'Semester 2')
        .eq('paper_name', 'Techniques d\'Expression Orale')
        .order('paper_year', { ascending: false });
        
        if (error) {
          setFetchingData_7(false);
          document.body.style.overflow = "auto";
          throw error;
        }
        if (!data || data.length === 0) {
          setFetchingData_7(false);
          document.body.style.overflow = "auto";
          ErrorMsg("No exam papers found for this Teaching Unit.");
          throw new Error("No exam papers found for this Teaching Unit.");
        }
        setExamPapers_Unit_7(data);
        setFetchingData_7(false);
        setDisplayPapers(!displayPapers);
        setSubject_7(true);
      } catch (error) {
        setFetchingData_7(false);
        document.body.style.overflow = "auto";
        if(import.meta.env.VITE_ENV === "development") {
          console.error("Error fetching exam papers:", error);
        }
      }
    }
    const fetchExamPapers_Unit_8 = async () => {
      document.body.style.overflow = "hidden";
      setFetchingData_8(true);
      try {
        const { data, error } = await supabase
        .from('exam_paper')
        .select('*')
        .eq('paper_semester', 'Semester 2')
        .eq('paper_name', 'Allemand / Espagnol')
        .order('paper_year', { ascending: false });
        
        if (error) {
          setFetchingData_8(false);
          document.body.style.overflow = "auto";
          throw error;
        }
        if (!data || data.length === 0) {
          setFetchingData_8(false);
          document.body.style.overflow = "auto";
          ErrorMsg("No exam papers found for this Teaching Unit.");
          throw new Error("No exam papers found for this Teaching Unit.");
        }
        setExamPapers_Unit_8(data);
        setFetchingData_8(false);
        setDisplayPapers(!displayPapers);
        setSubject_8(true);
      } catch (error) {
        setFetchingData_8(false);
        document.body.style.overflow = "auto";
        if(import.meta.env.VITE_ENV === "development") {
          console.error("Error fetching exam papers:", error);
        }
      }
    }    

  return (
    <>
    {displayPapers && (
      <>
      <div className="display-papers-wrapper">
        <div className="close-display-papers">
          <div className="close-display-papers-body">
            <button onClick={closeDisplayPapers} type="button">Close</button>
          </div>
        </div>
        <hr />
      {subject_1 && <DisplayPapers papers={examPapers_Unit_1} />}
      {subject_2 && <DisplayPapers papers={examPapers_Unit_2} />}
      {subject_3 && <DisplayPapers papers={examPapers_Unit_3} />}
      {subject_4 && <DisplayPapers papers={examPapers_Unit_4} />}
      {subject_5 && <DisplayPapers papers={examPapers_Unit_5} />}
      {subject_6 && <DisplayPapers papers={examPapers_Unit_6} />}
      {subject_7 && <DisplayPapers papers={examPapers_Unit_7} />}
      {subject_8 && <DisplayPapers papers={examPapers_Unit_8} />}
      <hr />
      <div className="close-display-papers">
          <div className="close-display-papers-body">
            <button onClick={closeDisplayPapers} type="button">Close</button>
          </div>
        </div>
      </div>
      </>
    )}

    <div className="units-wrapper">
      <ul className="units-holder">
        <li>
          <div className="unit-info-header">
            <img src={paper} height={64} alt="paper" />
            <p>Unit : Anglophone Literature</p>
          </div>
          <div className="unit-info-body">
            {
              fetchingData_1 ? (
                  <button type="button">
                      <span id="loading-circle"></span>{" "}
                      <span>Processing...</span>{" "}
                    </button>
              ) : (
                <button onClick={displayPapersHandler_Unit_1} type="button">View the exam papers</button>
              )
            }
          </div>
        </li>
        <li>
          <div className="unit-info-header">
            <img src={paper} height={64} alt="paper" />
            <p>Unit : Anglophone Poetry</p>
          </div>
          <div className="unit-info-body">
            {
              fetchingData_2 ? (
                  <button type="button">
                      <span id="loading-circle"></span>{" "}
                      <span>Processing...</span>{" "}
                    </button>
              ) : (
                <button onClick={displayPapersHandler_Unit_2} type="button">View the exam papers</button>
              )
            }
          </div>
        </li>
        <li>
          <div className="unit-info-header">
            <img src={paper} height={64} alt="paper" />
            <p>Unit : Anglophone Theater</p>
          </div>
          <div className="unit-info-body">
            {
              fetchingData_3 ? (
                  <button type="button">
                      <span id="loading-circle"></span>{" "}
                      <span>Processing...</span>{" "}
                    </button>
              ) : (
                <button onClick={displayPapersHandler_Unit_3} type="button">View the exam papers</button>
              )
            }
          </div>
        </li>
        <li>
          <div className="unit-info-header">
            <img src={paper} height={64} alt="paper" />
            <p>Unit : Anglophone Prose</p>
          </div>
          <div className="unit-info-body">
            {
              fetchingData_4 ? (
                  <button type="button">
                      <span id="loading-circle"></span>{" "}
                      <span>Processing...</span>{" "}
                    </button>
              ) : (
                <button onClick={displayPapersHandler_Unit_4} type="button">View the exam papers</button>
              )
            }
          </div>
        </li>
        <li>
          <div className="unit-info-header">
            <img src={paper} height={64} alt="paper" />
            <p>Unit : Creative Writing</p>
          </div>
          <div className="unit-info-body">
            {
              fetchingData_5 ? (
                  <button type="button">
                      <span id="loading-circle"></span>{" "}
                      <span>Processing...</span>{" "}
                    </button>
              ) : (
                <button onClick={displayPapersHandler_Unit_5} type="button">View the exam papers</button>
              )
            }
          </div>
        </li>
        <li>
          <div className="unit-info-header">
            <img src={paper} height={64} alt="paper" />
            <p>Unit : Méthodologie du Traduction</p>
          </div>
          <div className="unit-info-body">
            {
              fetchingData_6 ? (
                  <button type="button">
                      <span id="loading-circle"></span>{" "}
                      <span>Processing...</span>{" "}
                    </button>
              ) : (
                <button onClick={displayPapersHandler_Unit_6} type="button">View the exam papers</button>
              )
            }
          </div>
        </li>
        <li>
          <div className="unit-info-header">
            <img src={paper} height={64} alt="paper" />
            <p>Unit : Techniques d{"'"}Expression Orale</p>
          </div>
          <div className="unit-info-body">
            {
              fetchingData_7 ? (
                  <button type="button">
                      <span id="loading-circle"></span>{" "}
                      <span>Processing...</span>{" "}
                    </button>
              ) : (
                <button onClick={displayPapersHandler_Unit_7} type="button">View the exam papers</button>
              )
            }
          </div>
        </li>
        <li>
          <div className="unit-info-header">
            <img src={paper} height={64} alt="paper" />
            <p>Unit : Allemand / Espagnol</p>
          </div>
          <div className="unit-info-body">
            {
              fetchingData_8 ? (
                  <button type="button">
                      <span id="loading-circle"></span>{" "}
                      <span>Processing...</span>{" "}
                    </button>
              ) : (
                <button onClick={displayPapersHandler_Unit_8} type="button">View the exam papers</button>
              )
            }
          </div>
        </li>
      </ul>
    </div>
    
    </>
  );
}