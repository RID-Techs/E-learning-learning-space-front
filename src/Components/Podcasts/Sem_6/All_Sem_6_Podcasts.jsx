const academic_Writing = "https://oousnjsxqzaocpqjfvkp.supabase.co/storage/v1/object/public/e-learning/Sem_6/Acdemic_writing.aac"
export function Sem_6_Podcasts () {
  return (
        <div className="cours-podcasts-holder">

          <div className="cours-podcast">
          <div className="cours-podcast-header">
            <p><span className="podcast-underliner">Podcast</span> : Technique de Rédaction Académique </p>
          </div>
          <div className="cours-podcast-body">
            <p>Content : Explanation of the course</p>
            <audio controls>
            <source src={academic_Writing} type="audio/aac" />
            </audio>
          </div>
        </div>

        </div>
  )
}