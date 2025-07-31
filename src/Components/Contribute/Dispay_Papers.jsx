import PropTypes from "prop-types";
export function DisplayPapers({ papers }) {
  return (
    <div className="display-all-papers-wrapper">
      <div className="display-papers-holder">
        {papers.map((paper) => (
          <div key={paper.id} className="paper-item">
            <div className="paper-info-header">
              <img src={paper.paper_img} alt="paper" />
            </div>
            <div className="paper-info-body">
              <h5>📑 Unit : {paper.paper_name} </h5>
              <p>Academic Year : {paper.paper_year} 🧩📌</p>
              {paper.is_double_sided === "Yes" ? (
                <p>Paper Side : {paper.paper_side} 🎋</p>
              ) : null
              }
            </div>
            <div className="paper-info-footer">
              <a href={`${paper.paper_img}?download=${paper.paper_name}.jpg`} rel="noopener noreferrer" download={`${paper.paper_name}.jpg`}>Download ⤵</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

DisplayPapers.propTypes = {
  papers: PropTypes.arrayOf(
    PropTypes.shape({
      paper_name: PropTypes.string.isRequired,
      is_double_sided: PropTypes.string.isRequired,
      paper_side: PropTypes.string.isRequired,
      paper_year: PropTypes.string.isRequired,
      paper_img: PropTypes.string.isRequired
    })
  ).isRequired
};