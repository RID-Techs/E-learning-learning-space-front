const oral_speaking = "https://oousnjsxqzaocpqjfvkp.supabase.co/storage/v1/object/public/e-learning/Sem_4/Oral_speaking_Sem_4.aac";
const prince_of_parthia = "https://oousnjsxqzaocpqjfvkp.supabase.co/storage/v1/object/public/e-learning/Sem_4/Parthia.aac";
const the_contrast = "https://oousnjsxqzaocpqjfvkp.supabase.co/storage/v1/object/public/e-learning/Sem_4/Contrast.aac";
export function Sem_4_Podcasts () {
  return (
        <div className="cours-podcasts-holder">

          <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : Oral Speaking Tips </p>
          </div>
          <div className="cours-podcast-body">
            <p>Content : Steps to confidently holding the floor in public </p>
            <audio controls>
            <source src={oral_speaking} type="audio/aac" />
            </audio>
          </div>
        </div>
          <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : American Drama At Its Origins </p>
          </div>
          <div className="cours-podcast-body">
            <p>Case Study : Thomas Godfrey's <em>The Prince Of Parthia</em> </p>
            <audio controls>
            <source src={prince_of_parthia} type="audio/aac" />
            </audio>
          </div>
        </div>
          <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : American Drama At Its Origins </p>
          </div>
          <div className="cours-podcast-body">
            <p>Case Study : Royall Tyler's <em>The Contrast</em> </p>
            <audio controls>
            <source src={the_contrast} type="audio/aac" />
            </audio>
          </div>
        </div>

        </div>
  )
}