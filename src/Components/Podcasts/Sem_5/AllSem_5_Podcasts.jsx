
import EnglishNovel_19ThCentury from "../cours_podcasts/Sem_5/Novel_19th_English.aac"
import Frankenstein from "../cours_podcasts/Sem_5/Frankenstein.aac"
import Frankenstein_Themes from "../cours_podcasts/Sem_5/Frankenstein_themes.aac"
import Hard_Times from "../cours_podcasts/Sem_5/Hard_Times.aac"
import Discourse_analysis from "../cours_podcasts/Sem_5/Discourse_analysis.aac"
import Discourse_analysis_GRA from "../cours_podcasts/Sem_5/Grammar_In_Communication.aac"
import Literature_Culture from "../cours_podcasts/Sem_5/Literature_Culture.aac"
import Purple_Hibscus from "../cours_podcasts/Sem_5/Purple_Hibscus.aac"
import Things_Apart from "../cours_podcasts/Sem_5/Things_Apart.aac"
import Of_Mice from "../cours_podcasts/Sem_5/Of_Mice.aac"
import Toni_Morrison_Bluest_Eye from "../cours_podcasts/Sem_5/Toni_Morrison_Bluest_Eye.aac"
import phono_sem_5 from "../cours_podcasts/Sem_5/phono_sem_5.aac"

export function Sem_5_Podcasts () {
  return (
        <div className="cours-podcasts-holder">

          <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : Morpho-Phonological Analysis </p>
          </div>
          <div className="cours-podcast-body">
            <p>Content : Explanation of some key concepts</p>
            <audio controls>
            <source src={phono_sem_5} type="audio/aac" />
            </audio>
          </div>
        </div>
      <div className="cours-podcast">
        <div className="cours-podcast-header">
          <p><span className="podcast-underliner">Podcast</span> : American Novel </p>
        </div>
        <div className="cours-podcast-body">
          <p>Case Study : Toni Morrison{"'"}s <em>The Bluest Eye</em></p>
          <audio controls>
            <source src={Toni_Morrison_Bluest_Eye} type="audio/aac" />
          </audio>
        </div>
      </div>
      <div className="cours-podcast">
        <div className="cours-podcast-header">
          <p><span className="podcast-underliner">Podcast</span> : American Novel </p>
        </div>
        <div className="cours-podcast-body">
          <p>Case Study : John Steinbeck{"'"}s <em>Of Mice and Men</em></p>
          <audio controls>
            <source src={Of_Mice} type="audio/aac" />
          </audio>
        </div>
      </div>
          <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : 19<sup>th</sup> Century English Novel </p>
          </div>
          <div className="cours-podcast-body">
            <p>Content : Explanation of the course</p>
            <audio controls>
              <source src={EnglishNovel_19ThCentury} type="audio/aac" />
            </audio>
          </div>
        </div>
          <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : 19<sup>th</sup> Century English Novel </p>
          </div>
          <div className="cours-podcast-body">
            <p>Case Study : Mary Shelly{"'"}s <em>Frankenstein</em></p>
            <audio controls>
              <source src={Frankenstein} type="audio/aac" />
            </audio>
          </div>
        </div>
          <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : 19<sup>th</sup> Century English Novel </p>
          </div>
          <div className="cours-podcast-body">
          <p>Case Study : Mary Shelly{"'"}s <em>Frankenstein (Themes) </em></p>
            <audio controls>
              <source src={Frankenstein_Themes} type="audio/aac" />
            </audio>
          </div>
        </div>
          <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : 19<sup>th</sup> Century English Novel </p>
          </div>
          <div className="cours-podcast-body">
          <p>Case Study : Charles Dickens{"'"} <em>Hard Times</em></p>
            <audio controls>
              <source src={Hard_Times} type="audio/aac" />
            </audio>
          </div>
        </div>
          <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : Discourse Analysis</p>
          </div>
          <div className="cours-podcast-body">
          <p>Content : Explanation of the course</p>
            <audio controls>
              <source src={Discourse_analysis} type="audio/aac" />
            </audio>
          </div>
        </div>
          <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : Discourse Analysis</p>
          </div>
          <div className="cours-podcast-body">
          <p>Content : Explanation of the course (Grammar in Communication)</p>
            <audio controls>
              <source src={Discourse_analysis_GRA} type="audio/aac" />
            </audio>
          </div>
        </div>
          <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : Littérature et Culture</p>
          </div>
          <div className="cours-podcast-body">
          <p>Content : Explanation of the course</p>
            <audio controls>
              <source src={Literature_Culture} type="audio/aac" />
            </audio>
          </div>
        </div>
        <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : Littérature et Culture</p>
          </div>
          <div className="cours-podcast-body">
          <p>Case Study : Chimamanda Ngozi
          Adichie{"'"}s <em>Purple Hibiscus</em></p>
            <audio controls>
              <source src={Purple_Hibscus} type="audio/aac" />
            </audio>
          </div>
        </div>
        <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : Littérature et Culture</p>
          </div>
          <div className="cours-podcast-body">
          <p>Case Study : Chinua Achebe{"'"}s <em>Things Fall Apart</em></p>
            <audio controls>
              <source src={Things_Apart} type="audio/aac" />
            </audio>
          </div>
        </div>

        </div>
  )
}