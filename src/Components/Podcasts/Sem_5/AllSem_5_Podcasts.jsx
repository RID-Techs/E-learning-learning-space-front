import { Link } from "react-router-dom";
export function Sem_5_Podcasts () {
  const EnglishNovel_19ThCentury = "https://ik.imagekit.io/g4xui13wk/Sem_5/Novel_19th_English.aac";
  const Frankenstein = "https://ik.imagekit.io/g4xui13wk/Sem_5/Frankenstein.aac";
  const Frankenstein_Themes = "https://ik.imagekit.io/g4xui13wk/Sem_5/Frankenstein_themes.aac";
  const Hard_Times = "https://ik.imagekit.io/g4xui13wk/Sem_5/Hard_Times.aac";
  const Discourse_analysis = "https://ik.imagekit.io/g4xui13wk/Sem_5/Discourse_analysis.aac";
  const Discourse_analysis_GRA = "https://ik.imagekit.io/g4xui13wk/Sem_5/Grammar_In_Communication.aac";
  const Literature_Culture = "https://ik.imagekit.io/g4xui13wk/Sem_5/Literature_Culture.aac";
  const Purple_Hibscus = "https://ik.imagekit.io/g4xui13wk/Sem_5/Purple_Hibscus.aac";
  const Things_Apart = "https://ik.imagekit.io/g4xui13wk/Sem_5/Things_Apart.aac";
  const Of_Mice = "https://ik.imagekit.io/g4xui13wk/Sem_5/Of_Mice.aac";
  const Toni_Morrison_Bluest_Eye = "https://ik.imagekit.io/g4xui13wk/Sem_5/Toni_Morrison_Bluest_Eye.aac";
  const phono_sem_5 = "https://ik.imagekit.io/g4xui13wk/Sem_5/phono_sem_5.aac";
  const SmoulderingCharcoal = "https://ik.imagekit.io/g4xui13wk/Sem_5/Smouldering_Charcoal.ogg";
  const DauntingOdyssey = "https://ik.imagekit.io/g4xui13wk/Sem_5/Daunting_Odyssey.ogg";
  const BluestRacismSexism = "https://ik.imagekit.io/g4xui13wk/Sem_5/Bluest_Racism_sexism.ogg";
  const CultureInHibiscus = "https://ik.imagekit.io/g4xui13wk/Sem_5/Culture_in_Hibiscus.ogg";
  const IjemMessiah = "https://ik.imagekit.io/g4xui13wk/Sem_5/Ijem_Messiah.ogg";
  const getMemberStatus = localStorage.getItem("isLoggedIn");
  const isMember = getMemberStatus === "true";
  return (
        <>
                  <div className="modal" id="logInMember" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-primary-emphasis fw-bold">E-learning Member</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>Want to get access ? Alright, <strong>register</strong> to enjoy all the <strong>Resources</strong>, available exclusively to <strong>E-learning members</strong>, and therefore assess your learning progress and continue improving.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <Link to={"/signin"}>
            <button type="button" className="btn btn-primary fw-bold fst-italic" data-bs-dismiss="modal">Sign in <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
      <path d="M3 12h13l-3 -3" />
      <path d="M13 15l3 -3" />
    </svg> </button>
            </Link>
          </div>
        </div>
      </div>
    </div>

        <div className="cours-podcasts-holder">

          <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : Morpho-Phonological Analysis </p>
          </div>
          <div className="cours-podcast-body">
            <p>Content : Explanation of some key concepts</p>
            {
              isMember ? (
            <audio controls>
            <source src={phono_sem_5} type="audio/aac" />
            </audio>
                
              ) : (
              <div className="podcast-not-allowed">
                <p data-bs-toggle="modal" data-bs-target="#logInMember"> <span>▸</span> <span> Play 🧩🎙️</span></p>
              </div>
              )
            }
          </div>
        </div>
      <div className="cours-podcast">
        <div className="cours-podcast-header">
          <p><span className="podcast-underliner">Podcast</span> : American Novel </p>
        </div>
        <div className="cours-podcast-body">
          <p>Case Study : Toni Morrison{"'"}s <em>The Bluest Eye</em></p>
          {
              isMember ? (
          <audio controls>
            <source src={Toni_Morrison_Bluest_Eye} type="audio/aac" />
          </audio>
                
              ) : (
              <div className="podcast-not-allowed">
                <p data-bs-toggle="modal" data-bs-target="#logInMember"> <span>▸</span> <span> Play 🧩🎙️</span></p>
              </div>
              )
            }
        </div>
      </div>
      <div className="cours-podcast">
        <div className="cours-podcast-header">
          <p><span className="podcast-underliner">Podcast</span> : American Novel </p>
        </div>
        <div className="cours-podcast-body">
          <p>Case Study : Toni Morrison{"'"}s <em>The Bluest Eye (Theme of Racism and Sexism)</em></p>
          {
              isMember ? (
          <audio controls>
            <source src={BluestRacismSexism} type="audio/aac" />
          </audio>
                
              ) : (
              <div className="podcast-not-allowed">
                <p data-bs-toggle="modal" data-bs-target="#logInMember"> <span>▸</span> <span> Play 🧩🎙️</span></p>
              </div>
              )
            }
        </div>
      </div>
      <div className="cours-podcast">
        <div className="cours-podcast-header">
          <p><span className="podcast-underliner">Podcast</span> : American Novel </p>
        </div>
        <div className="cours-podcast-body">
          <p>Case Study : John Steinbeck{"'"}s <em>Of Mice and Men</em></p>
          {
              isMember ? (
          <audio controls>
            <source src={Of_Mice} type="audio/aac" />
          </audio>
                
              ) : (
              <div className="podcast-not-allowed">
                <p data-bs-toggle="modal" data-bs-target="#logInMember"> <span>▸</span> <span> Play 🧩🎙️</span></p>
              </div>
              )
            }
        </div>
      </div>
          <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : 19<sup>th</sup> Century English Novel </p>
          </div>
          <div className="cours-podcast-body">
            <p>Content : Explanation of the course</p>
            {
              isMember ? (
            <audio controls>
              <source src={EnglishNovel_19ThCentury} type="audio/aac" />
            </audio>
                
              ) : (
              <div className="podcast-not-allowed">
                <p data-bs-toggle="modal" data-bs-target="#logInMember"> <span>▸</span> <span> Play 🧩🎙️</span></p>
              </div>
              )
            }
          </div>
        </div>
          <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : 19<sup>th</sup> Century English Novel </p>
          </div>
          <div className="cours-podcast-body">
            <p>Case Study : Mary Shelly{"'"}s <em>Frankenstein</em></p>
            {
              isMember ? (
            <audio controls>
              <source src={Frankenstein} type="audio/aac" />
            </audio>
                
              ) : (
              <div className="podcast-not-allowed">
                <p data-bs-toggle="modal" data-bs-target="#logInMember"> <span>▸</span> <span> Play 🧩🎙️</span></p>
              </div>
              )
            }
          </div>
        </div>
          <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : 19<sup>th</sup> Century English Novel </p>
          </div>
          <div className="cours-podcast-body">
          <p>Case Study : Mary Shelly{"'"}s <em>Frankenstein (Themes) </em></p>
            {
              isMember ? (
            <audio controls>
              <source src={Frankenstein_Themes} type="audio/aac" />
            </audio>
                
              ) : (
              <div className="podcast-not-allowed">
                <p data-bs-toggle="modal" data-bs-target="#logInMember"> <span>▸</span> <span> Play 🧩🎙️</span></p>
              </div>
              )
            }
          </div>
        </div>
          <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : 19<sup>th</sup> Century English Novel </p>
          </div>
          <div className="cours-podcast-body">
          <p>Case Study : Charles Dickens{"'"} <em>Hard Times</em></p>
            {
              isMember ? (
            <audio controls>
              <source src={Hard_Times} type="audio/aac" />
            </audio>
                
              ) : (
              <div className="podcast-not-allowed">
                <p data-bs-toggle="modal" data-bs-target="#logInMember"> <span>▸</span> <span> Play 🧩🎙️</span></p>
              </div>
              )
            }
          </div>
        </div>
          <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : Discourse Analysis</p>
          </div>
          <div className="cours-podcast-body">
          <p>Content : Explanation of the course</p>
            {
              isMember ? (
            <audio controls>
              <source src={Discourse_analysis} type="audio/aac" />
            </audio>
                
              ) : (
              <div className="podcast-not-allowed">
                <p data-bs-toggle="modal" data-bs-target="#logInMember"> <span>▸</span> <span> Play 🧩🎙️</span></p>
              </div>
              )
            }
          </div>
        </div>
          <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : Discourse Analysis</p>
          </div>
          <div className="cours-podcast-body">
          <p>Content : Explanation of the course (Grammar in Communication)</p>
            {
              isMember ? (
                
            <audio controls>
              <source src={Discourse_analysis_GRA} type="audio/aac" />
            </audio>
              ) : (
              <div className="podcast-not-allowed">
                <p data-bs-toggle="modal" data-bs-target="#logInMember"> <span>▸</span> <span> Play 🧩🎙️</span></p>
              </div>
              )
            }
          </div>
        </div>
          <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : Littérature et Culture</p>
          </div>
          <div className="cours-podcast-body">
          <p>Content : Explanation of the course</p>
            {
              isMember ? (
            <audio controls>
              <source src={Literature_Culture} type="audio/aac" />
            </audio>
                
              ) : (
              <div className="podcast-not-allowed">
                <p data-bs-toggle="modal" data-bs-target="#logInMember"> <span>▸</span> <span> Play 🧩🎙️</span></p>
              </div>
              )
            }
          </div>
        </div>
        <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : Littérature et Culture</p>
          </div>
          <div className="cours-podcast-body">
          <p>Case Study : Chimamanda Ngozi
          Adichie{"'"}s <em>Purple Hibiscus</em></p>
            {
              isMember ? (
            <audio controls>
              <source src={Purple_Hibscus} type="audio/aac" />
            </audio>
                
              ) : (
              <div className="podcast-not-allowed">
                <p data-bs-toggle="modal" data-bs-target="#logInMember"> <span>▸</span> <span> Play 🧩🎙️</span></p>
              </div>
              )
            }
          </div>
        </div>
        <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : Littérature et Culture</p>
          </div>
          <div className="cours-podcast-body">
          <p>Case Study : Chimamanda Ngozi
          Adichie{"'"}s <em>Purple Hibiscus (Theme of Culture)</em></p>
            {
              isMember ? (
            <audio controls>
              <source src={CultureInHibiscus} type="audio/aac" />
            </audio>
                
              ) : (
              <div className="podcast-not-allowed">
                <p data-bs-toggle="modal" data-bs-target="#logInMember"> <span>▸</span> <span> Play 🧩🎙️</span></p>
              </div>
              )
            }
          </div>
        </div>
        <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : Littérature et Culture</p>
          </div>
          <div className="cours-podcast-body">
          <p>Case Study : Chinua Achebe{"'"}s <em>Things Fall Apart</em></p>
            {
              isMember ? (
                
            <audio controls>
              <source src={Things_Apart} type="audio/aac" />
            </audio>
              ) : (
              <div className="podcast-not-allowed">
                <p data-bs-toggle="modal" data-bs-target="#logInMember"> <span>▸</span> <span> Play 🧩🎙️</span></p>
              </div>
              )
            }
          </div>
        </div>
        <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : Roman Post-Colonial Africain</p>
          </div>
          <div className="cours-podcast-body">
          <p>Case Study : Zeleza{"'"}s <em>Smouldering Charcoal</em></p>
            {
              isMember ? (
                
            <audio controls>
              <source src={SmoulderingCharcoal} type="audio/aac" />
            </audio>
              ) : (
              <div className="podcast-not-allowed">
                <p data-bs-toggle="modal" data-bs-target="#logInMember"> <span>▸</span> <span> Play 🧩🎙️</span></p>
              </div>
              )
            }
          </div>
        </div>
        <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : Roman Post-Colonial Africain</p>
          </div>
          <div className="cours-podcast-body">
          <p>Case Study : Chinwe OKOLI{"'"}s <em>A Daunting Odyssey</em></p>
            {
              isMember ? (
                
            <audio controls>
              <source src={DauntingOdyssey} type="audio/aac" />
            </audio>
              ) : (
              <div className="podcast-not-allowed">
                <p data-bs-toggle="modal" data-bs-target="#logInMember"> <span>▸</span> <span> Play 🧩🎙️</span></p>
              </div>
              )
            }
          </div>
        </div>
        <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : Roman Post-Colonial Africain</p>
          </div>
          <div className="cours-podcast-body">
          <p>Case Study : Chinwe OKOLI{"'"}s <em>A Daunting Odyssey (Ijem seen as a messiah)</em></p>
            {
              isMember ? (
                
            <audio controls>
              <source src={IjemMessiah} type="audio/aac" />
            </audio>
              ) : (
              <div className="podcast-not-allowed">
                <p data-bs-toggle="modal" data-bs-target="#logInMember"> <span>▸</span> <span> Play 🧩🎙️</span></p>
              </div>
              )
            }
          </div>
        </div>

        </div>
        </>
  )
}