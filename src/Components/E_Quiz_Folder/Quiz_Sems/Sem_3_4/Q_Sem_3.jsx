import { useNavigate } from "react-router-dom";

export function Sem_3_Quiz () {
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
                  <p>Morphologie et Syntaxe</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("Morphologie et Syntaxe-Semester 3")} type="button">Create a quiz</button>
              </div>
            </div>

            <div className="quiz-semester-course">
              <div className="quiz-semester-course-header">
                <div>
                  <figure className="course-pic-quiz">᪣</figure>
                </div>
                <div>
                  <p>Roman Anglais du 18è siècle</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("Roman Anglais du 18è siècle-Semester 3")} type="button">Create a quiz</button>
              </div>
            </div>

            <div className="quiz-semester-course">
              <div className="quiz-semester-course-header">
                <div>
                  <figure className="course-pic-quiz">᪣</figure>
                </div>
                <div>
                  <p>Roman Américain</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("Roman Américain-Semester 3")} type="button">Create a quiz</button>
              </div>
            </div>

            <div className="quiz-semester-course">
              <div className="quiz-semester-course-header">
                <div>
                  <figure className="course-pic-quiz">᪣</figure>
                </div>
                <div>
                  <p> Roman Africain</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("Roman Africain-Semester 3")} type="button">Create a quiz</button>
              </div>
            </div>

            <div className="quiz-semester-course">
              <div className="quiz-semester-course-header">
                <div>
                  <figure className="course-pic-quiz">᪣</figure>
                </div>
                <div>
                  <p> Traduction Avancée</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("Traduction Avancée-Semester 3")} type="button">Create a quiz</button>
              </div>
            </div>

            <div className="quiz-semester-course">
              <div className="quiz-semester-course-header">
                <div>
                  <figure className="course-pic-quiz">᪣</figure>
                </div>
                <div>
                  <p> Théâtre Africain : Époque Coloniale</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("Théâtre Africain : Époque Coloniale-Semester 3")} type="button">Create a quiz</button>
              </div>
            </div>

            <div className="quiz-semester-course">
              <div className="quiz-semester-course-header">
                <div>
                  <figure className="course-pic-quiz">᪣</figure>
                </div>
                <div>
                  <p> Théâtre Classique Anglais</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("Théâtre Classique Anglais-Semester 3")} type="button">Create a quiz</button>
              </div>
            </div>

            <div className="quiz-semester-course">
              <div className="quiz-semester-course-header">
                <div>
                  <figure className="course-pic-quiz">᪣</figure>
                </div>
                <div>
                  <p> Techniques d{"'"}expression Écrite Avancée</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("Techniques d'expression Écrite Avancée-Semester 3")} type="button">Create a quiz</button>
              </div>
            </div>

          </div>
        </div>
     </div>
     </>
  )
}