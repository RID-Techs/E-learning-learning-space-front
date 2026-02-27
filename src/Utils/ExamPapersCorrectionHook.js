export const ExamPapersCorrection = (pdfFiles, paper) => {
  const allFoundDocs = pdfFiles.filter(
    (file) => file.course_key === paper.course_key && file.exam_paper
  );

  if (!allFoundDocs.length) return null;

  const exact = allFoundDocs.find(
    (examPaper) => normalize(examPaper.exam_paper.year) === normalize(paper.paper_year)
  );

  const others = allFoundDocs.filter(
    (examPaper) => normalize(examPaper.exam_paper.year) !== normalize(paper.paper_year)
  );

  console.log("allFoundDocs", allFoundDocs);

  return {
    available: true,
    exactPaperCorrection: exact || null,
    examPapers: others,
    numberOfCorrections: others.length,
  };
};

const normalize = (str) => str.replace(/\s/g, "");