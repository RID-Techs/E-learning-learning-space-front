import { useState } from "react";
// import supabase from "../../Config/DbConnect";
import "./paper.css";
import warning from "/warning.png";
import { useEffect } from "react";
export function GetALlExamPapers() {
  const [semester_1_Box, setSemester_1_Box] = useState(false);
  const [semester_2_Box, setSemester_2_Box] = useState(false);
  const [semester_3_Box, setSemester_3_Box] = useState(false);
  const [semester_4_Box, setSemester_4_Box] = useState(false);
  const [semester_5_Box, setSemester_5_Box] = useState(false);
  const [semester_6_Box, setSemester_6_Box] = useState(false);

  const handleSemester1CheckboxChange = (event) => {
    setSemester_1_Box(event.target.checked);
    setSemester_2_Box(false);
    setSemester_3_Box(false);
    setSemester_4_Box(false);
    setSemester_5_Box(false);
    setSemester_6_Box(false);
  };

  const handleSemester2CheckboxChange = (event) => {
    setSemester_2_Box(event.target.checked);
    setSemester_1_Box(false);
    setSemester_3_Box(false);
    setSemester_4_Box(false);
    setSemester_5_Box(false);
    setSemester_6_Box(false);
  };

  const handleSemester3CheckboxChange = (event) => {
    setSemester_3_Box(event.target.checked);
    setSemester_1_Box(false);
    setSemester_2_Box(false);
    setSemester_4_Box(false);
    setSemester_5_Box(false);
    setSemester_6_Box(false);
  };

  const handleSemester4CheckboxChange = (event) => {
    setSemester_4_Box(event.target.checked);
    setSemester_1_Box(false);
    setSemester_2_Box(false);
    setSemester_3_Box(false);
    setSemester_5_Box(false);
    setSemester_6_Box(false);
  };

  const handleSemester5CheckboxChange = (event) => {
    setSemester_5_Box(event.target.checked);
    setSemester_1_Box(false);
    setSemester_2_Box(false);
    setSemester_3_Box(false);
    setSemester_4_Box(false);
    setSemester_6_Box(false);
  };

  const handleSemester6CheckboxChange = (event) => {
    setSemester_6_Box(event.target.checked);
    setSemester_1_Box(false);
    setSemester_2_Box(false);
    setSemester_3_Box(false);
    setSemester_4_Box(false);
    setSemester_5_Box(false);
  };

  const noneOfTheSemestersSelected = !semester_1_Box && !semester_2_Box && !semester_3_Box && !semester_4_Box && !semester_5_Box && !semester_6_Box;

  const [username, setUsername] = useState("");
      useEffect(() => {
        const user = localStorage.getItem("User") ?? "E-member";
        if(user) {
          setUsername(user);
        }
      }, []);

  // useEffect(() => {
  //   async function fetchExamPapers() {
  //     try {
  //       const { data, error } = await supabase
  //         .from('exam_papers')
  //         .select('*')
  //         .order('created_at', { ascending: false });

  //       if (error) throw error;

  //       setExamPapers(data);
  //     } catch (error) {
  //       console.error("Error fetching exam papers:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchExamPapers();
  // }, []);

  return (
    <>
    <div className="exam-paper-welcome-msg contribute-msg-holder">
      <h4><em>Welcome to the <span id="collection-highlight">Collection of Exam papers</span> section, dear {username} <span className="highlight">༆</span></em></h4>
      <div className="contribute-msg-group">
        <p>Here you can find all the exam papers that have been contributed by our community. 🎋🤗</p>
        <p>If you want to contribute, please click right here ⤑ <a href="/Exam-papers/add" id="contribute-link">Contribute</a> </p>
      </div>
    </div>

    <div className="semester-boxes-wrapper">
      <div className="semester-boxes-holder">
        <div className="semesters-boxes">
          <div className="semester-checkbox-group">
            <label htmlFor="semester1-checkbox">
            <input type="checkbox" checked={semester_1_Box} onChange={handleSemester1CheckboxChange} className="semester-checkbox" id="semester1-checkbox" />
              <div className={semester_1_Box ? "semester-checkbox-custom-checked-wrapper" : "semester-checkbox-custom-unchecked-wrapper"}>
                <span className={semester_1_Box ? "semester-checkbox-custom-checked" : "semester-checkbox-custom-unchecked"}></span>
                <span>Semester 1</span>
              </div>
            </label>
          </div>
          <div className="semester-checkbox-group">
            <label htmlFor="semester2-checkbox">
            <input type="checkbox" checked={semester_2_Box} onChange={handleSemester2CheckboxChange} className="semester-checkbox" id="semester2-checkbox" />
              <div className={semester_2_Box ? "semester-checkbox-custom-checked-wrapper" : "semester-checkbox-custom-unchecked-wrapper"} >
                <span className={semester_2_Box ? "semester-checkbox-custom-checked" : "semester-checkbox-custom-unchecked"}></span>
                <span>Semester 2</span>
              </div>
            </label>
          </div>
          <div className="semester-checkbox-group">
            <label htmlFor="semester3-checkbox">
            <input type="checkbox" checked={semester_3_Box} onChange={handleSemester3CheckboxChange} className="semester-checkbox" id="semester3-checkbox" />
              <div className={semester_3_Box ? "semester-checkbox-custom-checked-wrapper" : "semester-checkbox-custom-unchecked-wrapper"} >
                <span className={semester_3_Box ? "semester-checkbox-custom-checked" : "semester-checkbox-custom-unchecked"}></span>
                <span>Semester 3</span>
              </div>
            </label>
          </div>
          <div className="semester-checkbox-group">
            <label htmlFor="semester4-checkbox">
            <input type="checkbox" checked={semester_4_Box} onChange={handleSemester4CheckboxChange} className="semester-checkbox" id="semester4-checkbox" />
              <div className={semester_4_Box ? "semester-checkbox-custom-checked-wrapper" : "semester-checkbox-custom-unchecked-wrapper"} >
                <span className={semester_4_Box ? "semester-checkbox-custom-checked" : "semester-checkbox-custom-unchecked"}></span>
                <span>Semester 4</span>
              </div>
            </label>
          </div>
          <div className="semester-checkbox-group">
            <label htmlFor="semester5-checkbox">
            <input type="checkbox" checked={semester_5_Box} onChange={handleSemester5CheckboxChange} className="semester-checkbox" id="semester5-checkbox" />
              <div className={semester_5_Box ? "semester-checkbox-custom-checked-wrapper" : "semester-checkbox-custom-unchecked-wrapper"} >
                <span className={semester_5_Box ? "semester-checkbox-custom-checked" : "semester-checkbox-custom-unchecked"}></span>
                <span>Semester 5</span>
              </div>
            </label>
          </div>
          <div className="semester-checkbox-group">
            <label htmlFor="semester6-checkbox">
            <input type="checkbox" checked={semester_6_Box} onChange={handleSemester6CheckboxChange} className="semester-checkbox" id="semester6-checkbox" />
              <div className={semester_6_Box ? "semester-checkbox-custom-checked-wrapper" : "semester-checkbox-custom-unchecked-wrapper"} >
                <span className={semester_6_Box ? "semester-checkbox-custom-checked" : "semester-checkbox-custom-unchecked"}></span>
                <span>Semester 6</span>
              </div>
            </label>
          </div>

        </div>
      </div>
    </div>

       { noneOfTheSemestersSelected && (
        <div className="no-semester-selected-msg-wrapper">
        <div className="no-semester-selected-msg">
          <img src={warning} height={32} alt="Warning" />
          <p>Please select a semester to view the exam papers.</p>
        </div>
        </div>
      )}

    </>
  );
}