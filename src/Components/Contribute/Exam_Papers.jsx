import supabase from "../../Config/DbConnect";
import { toast, Zoom } from "react-toastify";
import "./paper.css";
import star from "/stars_2.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const uploadPicture = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="54"
    height="54"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#e2dada81"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
    <path d="M12 11v6" />
    <path d="M9.5 13.5l2.5 -2.5l2.5 2.5" />
  </svg>
);

const changePicture = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000000bb"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
    <path d="M12 11v6" />
    <path d="M9.5 13.5l2.5 -2.5l2.5 2.5" />
  </svg>
);

export function AddExamPapers() {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const navigate = useNavigate();

  const MendatoryFields = (msg) => {
    toast.warn(msg, {
      theme: "light",
      position: "top-center",
      autoClose: 2000,
      transition: Zoom,
    });
  };

  const ErrorMsg = (message) => {
    toast.error(message, {
      theme: "light",
      position: "top-center",
      autoClose: 2000,
      transition: Zoom,
    });
  };

  const [submitStatus, setSubmitStatus] = useState("completed");
  const [showThanks, setShowThanks] = useState(false);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const user = localStorage.getItem("User") ?? "E-member";
    if (user) {
      setUsername(user);
    }
  }, []);

  const handleShowThanks = () => {
    setShowThanks(false);
    navigate("/exam-papers");
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [showThanks]);

  const [choosedSemester, setChoosedSemester] = useState("");
  const [choosedTeachingUnit, setChoosedTeachingUnit] = useState("");
  const [paperYear, setPaperYear] = useState("");
  const [imgUploaded, setImgUploaded] = useState(false);
  const [previewedImg, setPreviewedImg] = useState("");
  const [examPaperImg, setExamPaperImg] = useState(null);

  const handleImgUpload = (e) => {
    const fileInput = e.target;
    if (fileInput.files && fileInput.files.length > 0) {
      setImgUploaded(true);
      const PreviewImage = URL.createObjectURL(fileInput.files[0]);
      setPreviewedImg(PreviewImage);
      setExamPaperImg(fileInput.files[0]);
    }
  };

  const handleSemester = (event) => {
    setChoosedTeachingUnit("");
    setPaperYear("");
    const choosedValue = event.target.value.trim();
    setChoosedSemester(choosedValue);
  };
  const handleChoosedTeachingUnit = (event) => {
    const choosedValue = event.target.value.trim();
    setChoosedTeachingUnit(choosedValue);
  };
  const handlePaperYear = (event) => {
    const choosedValue = event.target.value.trim();
    setPaperYear(choosedValue);
  };

  const sendData = async (e) => {
    e.preventDefault();
    setSubmitStatus("pending");

    if (!choosedSemester || !choosedTeachingUnit || !paperYear) {
      MendatoryFields("Please, All fields are required !");
      setSubmitStatus("completed");
      return;
    }

    if (!examPaperImg) {
      MendatoryFields("No file selected.");
      setSubmitStatus("completed");
      return;
    }

    const fileExt = examPaperImg.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `dea/${fileName}`;
    try {
      let { data: exam_paper, error } = await supabase
        .from("exam_paper")
        .select("paper_name,paper_year");

      if (error) {
        ErrorMsg("Something went wrong. Please try again later.");
        setSubmitStatus("completed");
        return;
      }

      if (exam_paper && exam_paper.length > 0) {
        const isPaperExists = exam_paper.some(
          (paper) =>
            paper.paper_name === choosedTeachingUnit &&
            paper.paper_year === paperYear
        );
        if (isPaperExists) {
          MendatoryFields(
            "This exam paper already exists for the selected semester and year."
          );
          setSubmitStatus("completed");
          return;
        }
      }

      if (examPaperImg) {
        const { error } = await supabase.storage
          .from("papers-bucket")
          .upload(filePath, examPaperImg);

        if (error) {
          console.error("Image upload error:", error.message);
          ErrorMsg("Image Upload failed");
          setSubmitStatus("completed");
          return;
        } else {
          const pictureUrl = `${supabaseUrl}/storage/v1/object/public/papers-bucket/${filePath}`;
          const { data, error } = await supabase
            .from("exam_paper")
            .insert({
              paper_semester: choosedSemester,
              paper_name: choosedTeachingUnit,
              paper_img: pictureUrl,
              paper_year: paperYear,
            })
            .select();

          if (error) {
            ErrorMsg(
              "An error occurred while submitting the form. Please try again later."
            );
            setSubmitStatus("completed");
            return;
          }
          if (data) {
            setPreviewedImg("");
            setImgUploaded(false);
            setChoosedSemester("");
            setChoosedTeachingUnit("");
            setPaperYear("");
            setExamPaperImg(null);
            setSubmitStatus("completed");
            setShowThanks(true);
          }
        }
      }
    } catch (error) {
      if (filePath) {
        const { error: deleteError } = await supabase.storage
          .from("papers-bucket")
          .remove([filePath]);

        if (deleteError) {
          ErrorMsg("Something went wrong. Please try again later.");
          setSubmitStatus("completed");
          // console.error("Image delete error:", deleteError.message);
        } else {
          setSubmitStatus("completed");
        }
      }
    }
  };

  return (
    <>
      {" "}
      {showThanks ? (
        <div className="thanks-wrapper contribute-msg-holder">
          <h5>
            <em>
              Thank you for your contribution, dear {username}{" "}
              <span className="highlight">༆</span>
            </em>
          </h5>
          <p>😉 Click the button below to explore available exam papers. 🪴</p>
          <button onClick={handleShowThanks} type="button">
            Explore Now ⤴
          </button>
          <p className="mt-4">Or ⤑ <span onClick={() => setShowThanks(false)} id="contribute-again">Contribute again</span></p>
        </div>
      ) : (
        <>
          <div className="contribute-msg-holder">
            <h3 className="ms-4 me-4 contribute-msg">
              {" "}
              Contribute to building a{" "}
              <span className="highlighter-holder">
                {" "}
                <span id="large-highlight">large</span>
              </span>
              ,{" "}
              <span className="highlighter-holder">
                {" "}
                <span id="rich-highlight">rich</span>
              </span>
              , and
              <span className="highlighter-holder">
                {" "}
                <span id="useful-highlight">useful</span>
              </span>{" "}
              <span className="highlighter-holder">
                {" "}
                <span id="collection-highlight">“Collection Of Papers”</span>
              </span>{" "}
              for{" "}
              <strong>
                <em>Students of Anglophone Studies (DEA).</em>
              </strong>
              <img src={star} alt="star" />{" "}
            </h3>
          </div>

          <div className="form-wrapper">
            <div className="form-container">
              <form onSubmit={sendData}>
                <div className="form-group">
                  <label htmlFor="semester-level">Choose A Semester</label>
                  <select onChange={handleSemester} id="semester-level">
                    <option value="">Choose</option>
                    <option value="Semester 1">Semester 1</option>
                    <option value="Semester 2">Semester 2</option>
                    <option value="Semester 3">Semester 3</option>
                    <option value="Semester 4">Semester 4</option>
                    <option value="Semester 5">Semester 5</option>
                    <option value="Semester 6">Semester 6</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="teaching-unit">Select A Teaching Unit</label>
                  <select
                    onChange={handleChoosedTeachingUnit}
                    id="teaching-unit"
                  >
                    <option value="">Choose</option>
                    {choosedSemester === "Semester 1" && (
                      <>
                        <option value="Phonetics and Phonology">
                          Phonetics and Phonology
                        </option>
                        <option value="English Grammar">English Grammar</option>
                        <option value="British Civilisation">
                          British Civilisation
                        </option>
                        <option value="American Civilisation">
                          American Civilisation : Colonial Period
                        </option>
                        <option value="African Civilisation : Pre-colonial Period">
                          African Civilisation : Pre-colonial Period
                        </option>
                        <option value="Méthodologie du Travail Universitaire">
                          Méthodologie du Travail Universitaire
                        </option>
                        <option value="Techniques d'Expression Écrite">
                          Techniques d{"'"}Expression Écrite
                        </option>
                        <option value="Techniques de Composition en Français">
                          Techniques de Composition en Français
                        </option>
                      </>
                    )}
                    {choosedSemester === "Semester 2" && (
                      <>
                        <option value="Anglophone Literature">
                          Anglophone Literature
                        </option>
                        <option value="Anglophone Poetry">
                          Anglophone Poetry
                        </option>
                        <option value="Anglophone Theater">
                          Anglophone Theater
                        </option>
                        <option value="Anglophone Prose">
                          Anglophone Prose
                        </option>
                        <option value="Creative Writing">
                          Creative Writing
                        </option>
                        <option value="Méthodologie de Traduction">
                          Méthodologie de Traduction
                        </option>
                        <option value="Techniques d'Expression Orale">
                          Techniques d{"'"}Expression Orale
                        </option>
                        <option value="Allemand / Espagnol">
                          Allemand / Espagnol
                        </option>
                      </>
                    )}
                    {choosedSemester === "Semester 3" && (
                      <>
                        <option value="Roman Africain">Roman Africain</option>
                        <option value="Roman Américain">Roman Américain</option>
                        <option value="Morphologie et Syntaxe">
                          Morphologie et Syntaxe
                        </option>
                        <option value="Roman Anglais du 18è siècle">
                          Roman Anglais du 18è siècle{" "}
                        </option>
                        <option value="Traduction Avancée">
                          Traduction Avancée
                        </option>
                        <option value="Théâtre Africain : Époque Coloniale">
                          Théâtre Africain : Époque Coloniale
                        </option>
                        <option value="Théâtre Classique Anglais">
                          Théâtre Classique Anglais
                        </option>
                        <option value="Techniques d'expression Écrite Avancée">
                          Techniques d{"'"}expression Écrite Avancée
                        </option>
                      </>
                    )}
                    {choosedSemester === "Semester 4" && (
                      <>
                        <option value="Théâtre Américain à ses Origines">
                          Théâtre Américain à ses Origines
                        </option>
                        <option value="Civilisation Africaine : Période Coloniale et Post-coloniale">
                          Civilisation Africaine : Période Coloniale et
                          Post-coloniale
                        </option>
                        <option value="Civilisation Britannique Contemporaine">
                          Civilisation Britannique Contemporaine
                        </option>
                        <option value="Civilisation Américaine de l'indépendance à nos jours">
                          Civilisation Américaine de l{"'"}indépendance à nos
                          jours
                        </option>
                        <option value="Poésie Africaine">
                          Poésie Africaine
                        </option>
                        <option value="Poésie Anglaise">Poésie Anglaise</option>
                        <option value="Poésie Américaine">
                          Poésie Américaine
                        </option>
                        <option value="Techniques d'Expression Orale Avancée">
                          Techniques d{"'"}Expression Orale Avancée
                        </option>
                      </>
                    )}
                    {choosedSemester === "Semester 5" && (
                      <>
                        <option value="Roman Anglais du 19è siècle">
                          Roman Anglais du 19è siècle
                        </option>
                        <option value="Roman Moderne Américain">
                          Roman Moderne Américain
                        </option>
                        <option value="Littérature et Culture">
                          Littérature et Culture
                        </option>
                        <option value="Roman Post-colonial Africain">
                          Roman Post-colonial Africain
                        </option>
                        <option value="Littérature et Environnement">
                          Littérature et Environnement
                        </option>
                        <option value="Analyse du Discours">
                          Analyse du Discours
                        </option>
                        <option value="Analyse Morpho-Phonologique">
                          Analyse Morpho-Phonologique
                        </option>
                      </>
                    )}
                    {choosedSemester === "Semester 6" && (
                      <>
                        <option value="Techniques de Rédaction Académique">
                          Techniques de Rédaction Académique
                        </option>
                        <option value="Théorie et Critique Littéraire">
                          Théorie et Critique Littéraire
                        </option>
                        <option value="Littérature Comparée">
                          Littérature Comparée
                        </option>
                        <option value="Étude et Critique de la Littérature Africaine">
                          Étude et Critique de la Littérature Africaine
                        </option>
                        <option value="Étude et Critique de la Littérature Anglaise">
                          Étude et Critique de la Littérature Anglaise
                        </option>
                        <option value="Étude et Critique de la Littérature Américaine">
                          Étude et Critique de la Littérature Américaine
                        </option>
                        <option value="Littérature et Media">
                          Littérature et Media
                        </option>
                      </>
                    )}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="upload-picture">
                    Upload the Exam Paper here ⤵
                    <input
                      onChange={handleImgUpload}
                      type="file"
                      id="upload-picture"
                    />
                    <div className="upload-picture-wrapper mt-2">
                      {imgUploaded ? (
                        <div>
                          <span className="change-img-holder">
                            <span id="change-img">Change {changePicture}</span>
                          </span>
                          <img
                            className="mt-2"
                            height={200}
                            src={previewedImg}
                            alt=""
                          />
                        </div>
                      ) : (
                        <figure id="upload-picture-holder">
                          {uploadPicture}
                        </figure>
                      )}
                    </div>
                  </label>
                </div>

                <div className="form-group">
                  <label htmlFor="paper-year">Mention its Academic Year </label>
                  <select onChange={handlePaperYear} id="paper-year">
                    <option value="">Choose</option>
                    <option value="2015 - 2016">2015 - 2016</option>
                    <option value="2016 - 2017">2016 - 2017</option>
                    <option value="2017 - 2018">2017 - 2018</option>
                    <option value="2018 - 2019">2018 - 2019</option>
                    <option value="2019 - 2020">2019 - 2020</option>
                    <option value="2020 - 2021">2020 - 2021</option>
                    <option value="2021 - 2022">2021 - 2022</option>
                    <option value="2022 - 2023">2022 - 2023</option>
                    <option value="2023 - 2024">2023 - 2024</option>
                    <option value="2024 - 2025">2024 - 2025</option>
                    <option value="Not Mentioned">Not Mentioned</option>
                  </select>
                </div>

                <div className="paper-submit-btn-holder">
                  {submitStatus === "pending" ? (
                    <button id="paper-submit-btn" type="button">
                      <span id="loading-circle"></span>{" "}
                      <span>Processing...</span>{" "}
                    </button>
                  ) : (
                    <button id="paper-submit-btn" type="submit">
                      Contribute 📑
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
