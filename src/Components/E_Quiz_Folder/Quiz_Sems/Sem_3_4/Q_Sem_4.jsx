import { useNavigate } from "react-router-dom";

export function Sem_4_Quiz () {
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
                  <p>Civilisation Britannique Contemporaine</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("Civilisation Britannique Contemporaine-Semester 4")} type="button">Create a quiz</button>
              </div>
            </div>

            <div className="quiz-semester-course">
              <div className="quiz-semester-course-header">
                <div>
                  <figure className="course-pic-quiz">᪣</figure>
                </div>
                <div>
                  <p>Théâtre Américain à ses Origines</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("Théâtre Américain à ses Origines-Semester 4")} type="button">Create a quiz</button>
              </div>
            </div>

            <div className="quiz-semester-course">
              <div className="quiz-semester-course-header">
                <div>
                  <figure className="course-pic-quiz">᪣</figure>
                </div>
                <div>
                  <p>Poésie Anglaise</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("Poésie Anglaise-Semester 4")} type="button">Create a quiz</button>
              </div>
            </div>

            <div className="quiz-semester-course">
              <div className="quiz-semester-course-header">
                <div>
                  <figure className="course-pic-quiz">᪣</figure>
                </div>
                <div>
                  <p> Civilisation Africaine : Période Coloniale et Post-coloniale</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("Civilisation Africaine : Période Coloniale et Post-coloniale-Semester 4")} type="button">Create a quiz</button>
              </div>
            </div>

            <div className="quiz-semester-course">
              <div className="quiz-semester-course-header">
                <div>
                  <figure className="course-pic-quiz">᪣</figure>
                </div>
                <div>
                  <p> Poésie Américaine</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("Poésie Américaine-Semester 4")} type="button">Create a quiz</button>
              </div>
            </div>

            <div className="quiz-semester-course">
              <div className="quiz-semester-course-header">
                <div>
                  <figure className="course-pic-quiz">᪣</figure>
                </div>
                <div>
                  <p> Civilisation Américaine de l{"'"}indépendance à nos jours</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("Civilisation Américaine de l'indépendance à nos jours-Semester 4")} type="button">Create a quiz</button>
              </div>
            </div>

            <div className="quiz-semester-course">
              <div className="quiz-semester-course-header">
                <div>
                  <figure className="course-pic-quiz">᪣</figure>
                </div>
                <div>
                  <p> Poésie Africaine</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("Poésie Africaine-Semester 4")} type="button">Create a quiz</button>
              </div>
            </div>

          </div>
        </div>
     </div>
     </>
  )
}