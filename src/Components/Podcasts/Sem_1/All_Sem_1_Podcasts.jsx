
import Phonetics_phonology from "../cours_podcasts/Sem_1/Phonetics_phonology.aac"

export function Sem_1_Podcasts () {
  return (
        <div className="cours-podcasts-holder">

          <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : Phonetics & Phonology </p>
          </div>
          <div className="cours-podcast-body">
            <p>Content : Explanation of the course</p>
            <audio controls>
            <source src={Phonetics_phonology} type="audio/aac" />
            </audio>
          </div>
        </div>

        </div>
  )
}