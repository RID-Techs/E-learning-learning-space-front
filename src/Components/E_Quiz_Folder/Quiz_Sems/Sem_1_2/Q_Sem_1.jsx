import { useNavigate } from "react-router-dom";

export function Sem_1_Quiz () {
const navigate = useNavigate();
  const createQuiz = (course) => {
    navigate(`/E-Quiz/${course}`);
  }
  return (
     <>
     <div className="quiz-semester-wrapper">
        <div className="quiz-semester-holder">
          <div className="quiz-semester">

            <div className="quiz-semester-course">
              <div className="quiz-semester-course-header">
                <div>
                  <figure className="course-pic-quiz">᪣</figure>
                </div>
                <div>
                  <p>Phonetics and Phonology</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("Phonetics and Phonology-Semester 1")} type="button">Create a quiz</button>
              </div>
            </div>

            <div className="quiz-semester-course">
              <div className="quiz-semester-course-header">
                <div>
                  <figure className="course-pic-quiz">᪣</figure>
                </div>
                <div>
                  <p>English Grammar</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("English Grammar-Semester 1")} type="button">Create a quiz</button>
              </div>
            </div>

            <div className="quiz-semester-course">
              <div className="quiz-semester-course-header">
                <div>
                  <figure className="course-pic-quiz">᪣</figure>
                </div>
                <div>
                  <p>Méthodologie du Travail Universitaire</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("Méthodologie du Travail Universitaire-Semester 1")} type="button">Create a quiz</button>
              </div>
            </div>

            <div className="quiz-semester-course">
              <div className="quiz-semester-course-header">
                <div>
                  <figure className="course-pic-quiz">᪣</figure>
                </div>
                <div>
                  <p> African Civilisation</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("African Civilisation-Semester 1")} type="button">Create a quiz</button>
              </div>
            </div>

            <div className="quiz-semester-course">
              <div className="quiz-semester-course-header">
                <div>
                  <figure className="course-pic-quiz">᪣</figure>
                </div>
                <div>
                  <p> British Civilisation</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("British Civilisation-Semester 1")} type="button">Create a quiz</button>
              </div>
            </div>

            <div className="quiz-semester-course">
              <div className="quiz-semester-course-header">
                <div>
                  <figure className="course-pic-quiz">᪣</figure>
                </div>
                <div>
                  <p> American Civilisation</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("American Civilisation-Semester 1")} type="button">Create a quiz</button>
              </div>
            </div>

            <div className="quiz-semester-course">
              <div className="quiz-semester-course-header">
                <div>
                  <figure className="course-pic-quiz">᪣</figure>
                </div>
                <div>
                  <p> Techniques d{"'"}Expression Écrite</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("Techniques d'Expression Écrite-Semester 1")} type="button">Create a quiz</button>
              </div>
            </div>

            <div className="quiz-semester-course">
              <div className="quiz-semester-course-header">
                <div>
                  <figure className="course-pic-quiz">᪣</figure>
                </div>
                <div>
                  <p> Techniques de Composition en Français</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("Techniques de Composition en Français-Semester 1")} type="button">Create a quiz</button>
              </div>
            </div>

          </div>
        </div>
     </div>
     </>
  )
}