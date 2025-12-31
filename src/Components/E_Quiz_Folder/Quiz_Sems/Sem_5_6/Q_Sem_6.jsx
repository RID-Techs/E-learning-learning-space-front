import { useNavigate } from "react-router-dom";

export function Sem_6_Quiz () {
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
                  <p>Techniques de Rédaction Académique</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("Techniques de Rédaction Académique-Semester 6")} type="button">Create a quiz</button>
              </div>
            </div>

            <div className="quiz-semester-course">
              <div className="quiz-semester-course-header">
                <div>
                  <figure className="course-pic-quiz">᪣</figure>
                </div>
                <div>
                  <p>Théorie et Critique Littéraire</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("Théorie et Critique Littéraire-Semester 6")} type="button">Create a quiz</button>
              </div>
            </div>

            <div className="quiz-semester-course">
              <div className="quiz-semester-course-header">
                <div>
                  <figure className="course-pic-quiz">᪣</figure>
                </div>
                <div>
                  <p>Littérature Comparée</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("Littérature Comparée-Semester 6")} type="button">Create a quiz</button>
              </div>
            </div>

            <div className="quiz-semester-course">
              <div className="quiz-semester-course-header">
                <div>
                  <figure className="course-pic-quiz">᪣</figure>
                </div>
                <div>
                  <p> Étude et Critique de la Littérature Africaine</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("Étude et Critique de la Littérature Africaine-Semester 6")} type="button">Create a quiz</button>
              </div>
            </div>

            <div className="quiz-semester-course">
              <div className="quiz-semester-course-header">
                <div>
                  <figure className="course-pic-quiz">᪣</figure>
                </div>
                <div>
                  <p> Étude et Critique de la Littérature Anglaise</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("Étude et Critique de la Littérature Anglaise-Semester 6")} type="button">Create a quiz</button>
              </div>
            </div>

            <div className="quiz-semester-course">
              <div className="quiz-semester-course-header">
                <div>
                  <figure className="course-pic-quiz">᪣</figure>
                </div>
                <div>
                  <p> Étude et Critique de la Littérature Américaine</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("Étude et Critique de la Littérature Américaine-Semester 6")} type="button">Create a quiz</button>
              </div>
            </div>

            <div className="quiz-semester-course">
              <div className="quiz-semester-course-header">
                <div>
                  <figure className="course-pic-quiz">᪣</figure>
                </div>
                <div>
                  <p> Littérature et Media</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("Littérature et Media-Semester 6")} type="button">Create a quiz</button>
              </div>
            </div>

          </div>
        </div>
     </div>
     </>
  )
}