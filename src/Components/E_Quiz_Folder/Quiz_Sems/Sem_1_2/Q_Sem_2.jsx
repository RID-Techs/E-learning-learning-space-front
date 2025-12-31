import { useNavigate } from "react-router-dom";

export function Sem_2_Quiz () {
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
                  <p>Anglophone Literature</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("Anglophone Literature-Semester 2")} type="button">Create a quiz</button>
              </div>
            </div>

            <div className="quiz-semester-course">
              <div className="quiz-semester-course-header">
                <div>
                  <figure className="course-pic-quiz">᪣</figure>
                </div>
                <div>
                  <p>Creative Writing</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("Creative Writing-Semester 2")} type="button">Create a quiz</button>
              </div>
            </div>

            <div className="quiz-semester-course">
              <div className="quiz-semester-course-header">
                <div>
                  <figure className="course-pic-quiz">᪣</figure>
                </div>
                <div>
                  <p>Anglophone Poetry</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("Anglophone Poetry-Semester 2")} type="button">Create a quiz</button>
              </div>
            </div>

            <div className="quiz-semester-course">
              <div className="quiz-semester-course-header">
                <div>
                  <figure className="course-pic-quiz">᪣</figure>
                </div>
                <div>
                  <p> Anglophone Theater</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("Anglophone Theater-Semester 2")} type="button">Create a quiz</button>
              </div>
            </div>

            <div className="quiz-semester-course">
              <div className="quiz-semester-course-header">
                <div>
                  <figure className="course-pic-quiz">᪣</figure>
                </div>
                <div>
                  <p> Anglophone Prose</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("Anglophone Prose-Semester 2")} type="button">Create a quiz</button>
              </div>
            </div>

            <div className="quiz-semester-course">
              <div className="quiz-semester-course-header">
                <div>
                  <figure className="course-pic-quiz">᪣</figure>
                </div>
                <div>
                  <p> Méthodologie de Traduction</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("Méthodologie de Traduction-Semester 2")} type="button">Create a quiz</button>
              </div>
            </div>

            <div className="quiz-semester-course">
              <div className="quiz-semester-course-header">
                <div>
                  <figure className="course-pic-quiz">᪣</figure>
                </div>
                <div>
                  <p> Allemand</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("Allemand-Semester 2")} type="button">Create a quiz</button>
              </div>
            </div>

            <div className="quiz-semester-course">
              <div className="quiz-semester-course-header">
                <div>
                  <figure className="course-pic-quiz">᪣</figure>
                </div>
                <div>
                  <p> Espagnol</p>
                </div>
              </div>
              <div className="quiz-semester-course-body">
                <button onClick={() => createQuiz("Espagnol-Semester 2")} type="button">Create a quiz</button>
              </div>
            </div>

          </div>
        </div>
     </div>
     </>
  )
}