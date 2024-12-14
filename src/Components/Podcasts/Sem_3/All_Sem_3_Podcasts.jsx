
import American_Novel from "../cours_podcasts/Sem_3/American_Novel.aac"
import Uncle_Tom from "../cours_podcasts/Sem_3/Uncle_Tom.aac"
import Huckleberry_Finn from "../cours_podcasts/Sem_3/Huckleberry_Finn.aac"
import English_18_Novel from "../cours_podcasts/Sem_3/English_18_Novel.aac"
import African_drama from "../cours_podcasts/Sem_3/African_drama.aac"
import The_Lion_and_Jewel from "../cours_podcasts/Sem_3/The_Lion_and_Jewel.aac"
export function Sem_3_Podcasts () {
  return (
        <div className="cours-podcasts-holder">

          <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : American Novel </p>
          </div>
          <div className="cours-podcast-body">
            <p>Content : Explanation of the course</p>
            <audio controls>
              <source src={American_Novel} type="audio/aac" />
            </audio>
          </div>
        </div>
          <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : American Novel </p>
          </div>
          <div className="cours-podcast-body">
            <p>Case Study : Harriet Beecher Stowe{"'"}s <em>Uncle Tom{"'"}s Cabin</em></p>
            <audio controls>
              <source src={Uncle_Tom} type="audio/aac" />
            </audio>
          </div>
        </div>
          <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : American Novel </p>
          </div>
          <div className="cours-podcast-body">
          <p>Case Study : Mark Twain{"'"}s <em>The Adventures of Huckleberry Finn </em></p>
            <audio controls>
              <source src={Huckleberry_Finn} type="audio/aac" />
            </audio>
          </div>
        </div>
          <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : 18<sup>th</sup> Century English Novel </p>
          </div>
          <div className="cours-podcast-body">
          <p>Content : Explanation of the course</p>
            <audio controls>
              <source src={English_18_Novel} type="audio/aac" />
            </audio>
          </div>
        </div>
          <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : African Drama</p>
          </div>
          <div className="cours-podcast-body">
          <p>Content : Explanation of the course</p>
            <audio controls>
              <source src={African_drama} type="audio/aac" />
            </audio>
          </div>
        </div>
          <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : African Drama</p>
          </div>
          <div className="cours-podcast-body">
          <p>Case Study : Wole Soyinka{"'"}s <em>The Lion and the Jewel</em></p>
            <audio controls>
              <source src={The_Lion_and_Jewel} type="audio/aac" />
            </audio>
          </div>
        </div>

        </div>
  )
}