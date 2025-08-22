// Semester 3
import Eighteenth_Century_English_Novel from "../../Docs/Semester_3/Eighteenth_Century_English_Novel.pdf";
import Eighteenth_Century_English_Novel_Exam_Paper_21_22 from "../../Docs/Semester_3/Eighteenth_Century_English_Novel_Exam_Paper_21_22.pdf";

import Morphology_and_Syntax_Exam_Paper_20_21 from "../../Docs/Semester_3/Morphology_and_Syntax_Exam_Paper_20_21.pdf";
import Morphology_and_Syntax_Exam_Paper_21_22 from "../../Docs/Semester_3/Morphology_and_Syntax_Exam_Paper_21_22.pdf";

import Roman_Africain_Case_Studies from "../../Docs/Semester_3/Roman_Africain_Case_Studies.pdf";
import Roman_Africain_Exam_Paper_20_21 from "../../Docs/Semester_3/Roman_Africain_Exam_Paper_20_21.pdf";

import Roman_Américain_Novels from "../../Docs/Semester_3/Roman_Américain_Novels.pdf";
import Huckleberry_Finn from "../../Docs/Semester_3/Huckleberry_Finn.pdf";
import Uncle_Toms_Cabin from "../../Docs/Semester_3/Uncle_Toms_Cabin.pdf";
import Roman_Américain_Exam_Paper_20_21 from "../../Docs/Semester_3/Roman_Américain_Exam_Paper_20_21.pdf";
import Roman_Américain_Exam_Paper_21_22 from "../../Docs/Semester_3/Roman_Américain_Exam_Paper_21_22.pdf";

import Théâtre_africain_Plays from "../../Docs/Semester_3/Théâtre_africain_Plays.pdf";
import Théâtre_africain_Exam_Paper_20_21 from "../../Docs/Semester_3/Théâtre_africain_Exam_Paper_20_21.pdf";
import Théâtre_africain_Exam_Paper_21_22 from "../../Docs/Semester_3/Théâtre_africain_Exam_Paper_21_22.pdf";

import Théâtre_classique_anglais_Plays from "../../Docs/Semester_3/Théâtre_classique_anglais_Plays.pdf";
import Théâtre_classique_anglais from "../../Docs/Semester_3/Théâtre_classique_anglais.pdf";
import Théâtre_classique_anglais_Exam_Paper_20_21 from "../../Docs/Semester_3/Théâtre_classique_anglais_Exam_Paper_20_21.pdf";
import Théâtre_classique_anglais_Exam_Paper_21_22 from "../../Docs/Semester_3/Théâtre_classique_anglais_Exam_Paper_21_22.pdf";

import Traduction_avancée from "../../Docs/Semester_3/Traduction_avancée.pdf";
import Traduction_avancée_Exam_Paper_21_22 from "../../Docs/Semester_3/Traduction_avancée_Exam_Paper_21_22.pdf";

//Semester 4
import African_Civilisation from "../../Docs/Semester_4/African_Civilisation.pdf";

import African_Poetry from "../../Docs/Semester_4/African_Poetry.pdf";
import African_Poetry_Exam_20_21 from "../../Docs/Semester_4/African_Poetry_Exam_20_21.pdf";
import African_Poetry_Exam_21_22 from "../../Docs/Semester_4/African_Poetry_Exam_21_22.pdf";

import American_Civilisation from "../../Docs/Semester_4/American_Civilisation.pdf";
import American_Civilisation_Exam_20_21 from "../../Docs/Semester_4/American_Civilisation_Exam_20_21.pdf";

import American_Poetry from "../../Docs/Semester_4/American_Poetry.pdf";
import American_Poetry_Exam_20_21 from "../../Docs/Semester_4/American_Poetry_Exam_20_21.pdf";
import American_Poetry_Exam_21_22 from "../../Docs/Semester_4/American_Poetry_Exam_21_22.pdf";

import Contemporary_British_Civilisation_Exam_20_21 from "../../Docs/Semester_4/Contemporary_British_Civilisation_Exam_20_21.pdf";
import Contemporary_British_Civilisation_Exam_21_22 from "../../Docs/Semester_4/Contemporary_British_Civilisation_Exam_21_22.pdf";

import Early_American_Theater from "../../Docs/Semester_4/Early_American_Theater.pdf";
import Early_American_Theater_Exam_20_21 from "../../Docs/Semester_4/Early_American_Theater_Exam_20_21.pdf";
import Early_American_Theater_Exam_21_22 from "../../Docs/Semester_4/Early_American_Theater_Exam_21_22.pdf";

import English_Poetry from "../../Docs/Semester_4/English_Poetry.pdf";
import English_Poetry_Exam_20_21 from "../../Docs/Semester_4/English_Poetry_Exam_20_21.pdf";
import English_Poetry_Exam_21_22 from "../../Docs/Semester_4/English_Poetry_Exam_21_22.pdf";

import Advanced_Oral_Expression from "../../Docs/Semester_4/Advanced_Oral_Expression.pdf";

import The_Prince_of_Parthia_Sem_4 from "../../Docs/Semester_4/The_Prince_of_Parthia_Sem_4.pdf";
import The_Contrast_Sem_4 from "../../Docs/Semester_4/The_Contrast_Sem_4.pdf";
  
  const getSem_3_NewBadge_1 = localStorage.getItem("Sem_3_NewBadge_1");
  const getSem_3_NewBadge_2 = localStorage.getItem("Sem_3_NewBadge_2");
  const isTrue_Sem3_1 = getSem_3_NewBadge_1 === "true";
  const isTrue_Sem3_2 = getSem_3_NewBadge_2 === "true";
  
  export const pdfFiles_sem_3 = [
    {
      id: 1,
      name: "18th Century English Novel",
      course_key: "English_Novel",
      course_index: 0,
      url: Eighteenth_Century_English_Novel,
      opendoc:
        "https://drive.google.com/file/d/1f_EOGRNxN0JPzNBYXDybPCAFeeTVEpGs/view?usp=drive_link",
    },
    {
      id: 2,
      name: "18th Century English Novel Exam Paper of 2021 - 2022",
      course_key: "English_Novel",
      course_index: 0,
      url: Eighteenth_Century_English_Novel_Exam_Paper_21_22,
      opendoc:
        "https://drive.google.com/file/d/1p7bO7duaZouT0Hl4ibnJQO3jW9LpVsqb/view?usp=drive_link",
    },
    {
      id: 3,
      name: "Morphology and Syntax Exam Paper of 2020 - 2021",
      course_key: "Morphology_and_Syntax",
      course_index: 1,
      url: Morphology_and_Syntax_Exam_Paper_20_21,
      opendoc:
        "https://drive.google.com/file/d/1vrIyEk8h0M0Ie7eOjmKK28TQXxGgfcKh/view?usp=drive_link",
    },
    {
      id: 4,
      name: "Morphology and Syntax Exam Paper of 2021 - 2022",
      course_key: "Morphology_and_Syntax",
      course_index: 1,
      url: Morphology_and_Syntax_Exam_Paper_21_22,
      opendoc:
        "https://drive.google.com/file/d/1O2bF2pQH9Wo_-1Owgckv_pRIUPIWTKR9/view?usp=drive_link",
    },
    {
      id: 5,
      name: "African Novel : Cases Studies",
      course_key: "African_Novel",
      course_index: 2,
      url: Roman_Africain_Case_Studies,
      opendoc:
        "https://drive.google.com/file/d/1nYmeyonQUE88HFdoPnnCHeweUnOg4izf/view?usp=drive_link",
    },
    {
      id: 6,
      name: "African Novel Exam_Paper 2020-2021",
      course_key: "African_Novel",
      course_index: 2,
      url: Roman_Africain_Exam_Paper_20_21,
      opendoc:
        "https://drive.google.com/file/d/16KxiV_ByEwgNeUkgXGXrYmClJn-H54QX/view?usp=drive_link",
    },
    {
      id: 7,
      name: "American Novel : Case Studies",
      course_key: "American_Novel",
      course_index: 3,
      url: Roman_Américain_Novels,
      opendoc:
        "https://drive.google.com/file/d/1c_qVhwxRfA8AfsG5_LNeWoKrdj3ywcT0/view?usp=drive_link",
    },
    {
      id: 8,
      name: "American Novel : Uncle Tom's Cabin by Harriet Beecher Stowe",
      course_key: "American_Novel",
      course_index: 3,
      newAdded_1: isTrue_Sem3_1,
      url: Uncle_Toms_Cabin,
      opendoc:
        "https://drive.google.com/file/d/1CYJxjhLyjVge5mdDVWo7yle49JXRmLcp/view?usp=drive_link",
    },
    {
      id: 9,
      name: "American Novel : The Adventures of Huckleberry Finn by Mark Twain",
      course_key: "American_Novel",
      course_index: 3,
      newAdded_2: isTrue_Sem3_2,
      url: Huckleberry_Finn,
      opendoc:
        "https://drive.google.com/file/d/1elzeJN_nooeQ2V2dQBO55a9IwBqf9w0f/view?usp=drive_link",
    },
    {
      id: 10,
      name: "American Novel Exam_Paper 2020-2021",
      course_key: "American_Novel",
      course_index: 3,
      url: Roman_Américain_Exam_Paper_20_21,
      opendoc:
        "https://drive.google.com/file/d/1oZAg-qFggqFs4cKQzbjxq7cAuBXDJl_-/view?usp=drive_link",
    },
    {
      id: 11,
      name: "American Novel Exam_Paper 2021-2022",
      course_key: "American_Novel",
      course_index: 3,
      url: Roman_Américain_Exam_Paper_21_22,
      opendoc:
        "https://drive.google.com/file/d/12qD2ejMDuh4Jb59baFSwenRKusXTTKu_/view?usp=drive_link",
    },
    {
      id: 12,
      name: "Théâtre africain : époque coloniale, Given Play (Wole Soyinka's The Lion and The Jewel)",
      course_key: "Théâtre_Africain",
      course_index: 4,
      url: Théâtre_africain_Plays,
      opendoc:
        "https://drive.google.com/file/d/1v_68TpKK14E1W6AgP1Aa1ICXgnRSo-QQ/view?usp=drive_link",
    },
    {
      id: 13,
      name: "Théâtre africain Exam_Paper 2020-2021",
      course_key: "Théâtre_Africain",
      course_index: 4,
      url: Théâtre_africain_Exam_Paper_20_21,
      opendoc:
        "https://drive.google.com/file/d/1ooRtoQXdSnjX5xBMoH47f5Bi00eaY_qm/view?usp=drive_link",
    },
    {
      id: 14,
      name: "Théâtre africain Exam_Paper 2021 - 2022",
      course_key: "Théâtre_Africain",
      course_index: 4,
      url: Théâtre_africain_Exam_Paper_21_22,
      opendoc:
        "https://drive.google.com/file/d/1g6olhFVme4o2usQblCMjR51-j7eSb8hx/view?usp=drive_link",
    },
    {
      id: 15,
      name: "Théâtre classique anglais",
      course_key: "Théâtre_Classique",
      course_index: 5,
      url: Théâtre_classique_anglais,
      opendoc:
        "https://drive.google.com/file/d/1h3-HFzUXygInZ2ST7JyNHLw0pISUWKHt/view?usp=drive_link",
    },
    {
      id: 16,
      name: "Théâtre classique anglais : Given Plays",
      course_key: "Théâtre_Classique",
      course_index: 5,
      url: Théâtre_classique_anglais_Plays,
      opendoc:
        "https://drive.google.com/file/d/1EV1xqvaoHFIeVg_71N-hAWJp5CWGefsL/view?usp=drive_link",
    },
    {
      id: 17,
      name: "Théâtre classique anglais Exam_Paper 2020-2021",
      course_key: "Théâtre_Classique",
      course_index: 5,
      url: Théâtre_classique_anglais_Exam_Paper_20_21,
      opendoc:
        "https://drive.google.com/file/d/1xZm_mmCoPI3EJipiQx6pLGMnccBvach4/view?usp=drive_link",
    },
    {
      id: 18,
      name: "Théâtre classique anglais Exam_Paper 2021-2022",
      course_key: "Théâtre_Classique",
      course_index: 5,
      url: Théâtre_classique_anglais_Exam_Paper_21_22,
      opendoc:
        "https://drive.google.com/file/d/16V1-MRfbBIjExQYob-y_PMIBClBqDUMe/view?usp=drive_link",
    },
    {
      id: 19,
      name: "Traduction avancée",
      course_key: "Traduction_Avancée",
      course_index: 6,
      url: Traduction_avancée,
      opendoc:
        "https://drive.google.com/file/d/1C8MsE_Dy8ei4n958YzYoPHsLfbSYlX4k/view?usp=drive_link",
    },
    {
      id: 20,
      name: "Traduction_avancée Exam_Paper 2021-2022",
      course_key: "Traduction_Avancée",
      course_index: 6,
      url: Traduction_avancée_Exam_Paper_21_22,
      opendoc:
        "https://drive.google.com/file/d/1J5gfwpKlRzsQQYNubpc4k4DolOY7j9yd/view?usp=drive_link",
    },
  ];

export const pdfFiles_sem_4 = [
      {
        id: 1,
        name: "African Civilisation",
        course_key: "African_Civilisation",
        course_index: 0,
        url: African_Civilisation,
        opendoc:
          "https://drive.google.com/file/d/1Bauz4Jx1jigBed9w34wd38BVITD6DHWu/view?usp=drive_link",
      },
      {
        id: 2,
        name: "African Poetry",
        course_key: "African_Poetry",
        course_index: 1,
        url: African_Poetry,
        opendoc:
          "https://drive.google.com/file/d/1Z5U92uM73Rg4W4UrKX4qxWfMwMpTH9h7/view?usp=drive_link",
      },
      {
        id: 3,
        name: "African Poetry Exam_Paper 2020-2021",
        course_key: "African_Poetry",
        course_index: 1,
        url: African_Poetry_Exam_20_21,
        opendoc:
          "https://drive.google.com/file/d/13Og6krqLYtzB3AevjwFh0l3sqrRpC5PA/view?usp=drive_link",
      },
      {
        id: 4,
        name: "African Poetry Exam_Paper 2021-2022",
        course_key: "African_Poetry",
        course_index: 1,
        url: African_Poetry_Exam_21_22,
        opendoc:
          "https://drive.google.com/file/d/1OfkX3EWgqGcBGOXb62sGUXgxk7sQbeAH/view?usp=drive_link",
      },
      {
        id: 5,
        name: "American Civilisation",
        course_key: "American_Civilisation",
        course_index: 2,
        url: American_Civilisation,
        opendoc:
          "https://drive.google.com/file/d/1FxQTPg33UbD8pVckLjX1ILe7Ra9y1pfx/view?usp=drive_link",
      },
      {
        id: 6,
        name: "American Civilisation Exam_Paper 2020-2021",
        course_key: "American_Civilisation",
        course_index: 2,
        url: American_Civilisation_Exam_20_21,
        opendoc:
          "https://drive.google.com/file/d/1EruyqohSQrw-SVpTIoMctS9bLEukfHma/view?usp=drive_link",
      },
      {
        id: 7,
        name: "American Poetry",
        course_key: "American_Poetry",
        course_index: 3,
        url: American_Poetry,
        opendoc:
          "https://drive.google.com/file/d/1ECo8FnicJ67kZ7mHbORdUxuE5IqgkLoM/view?usp=drive_link",
      },
      {
        id: 8,
        name: "American Poetry Exam_Paper 2020-2021",
        course_key: "American_Poetry",
        course_index: 3,
        url: American_Poetry_Exam_20_21,
        opendoc:
          "https://drive.google.com/file/d/1NvnHg91DbIXvGsBOtPkbIvzVRWm25q48/view?usp=drive_link",
      },
      {
        id: 9,
        name: "American Poetry Exam_Paper 2021-2022",
        course_key: "American_Poetry",
        course_index: 3,
        url: American_Poetry_Exam_21_22,
        opendoc:
          "https://drive.google.com/file/d/1eFdvz66eOGWRXFmjQBWldY5PZl1Km_sk/view?usp=drive_link",
      },
      {
        id: 10,
        name: "Contemporary British Civilisation Exam_Paper 2020-2021",
        course_key: "Contemporary_British_Civ",
        course_index: 4,
        url: Contemporary_British_Civilisation_Exam_20_21,
        opendoc:
          "https://drive.google.com/file/d/18HgqVJwu32kvJNNLby_vJ58xfFpp-fD_/view?usp=drive_link",
      },
      {
        id: 11,
        name: "Contemporary British Civilisation Exam_Paper 2021-2022",
        course_key: "Contemporary_British_Civ",
        course_index: 4,
        url: Contemporary_British_Civilisation_Exam_21_22,
        opendoc:
          "https://drive.google.com/file/d/1xZ1-fdPRv0FoQMzOr8_ddpxKVSQJFHdt/view?usp=drive_link",
      },
      {
        id: 12,
        name: "Early American Theater",
        course_key: "Early_Am_Theater",
        course_index: 5,
        url: Early_American_Theater,
        opendoc:
          "https://drive.google.com/file/d/1iBAF_BAEZCZze0wdmw8awWOqtSR5BlkC/view?usp=drive_link",
      },
      {
        id: 13,
        name: "Early American Theater Exam_Paper 2020-2021",
        course_key: "Early_Am_Theater",
        course_index: 5,
        url: Early_American_Theater_Exam_20_21,
        opendoc:
          "https://drive.google.com/file/d/1n4qAw5kE3Rb3_kt_aBAZ4Gi_9UCyUAcc/view?usp=drive_link",
      },
      {
        id: 14,
        name: "Early American Theater Exam_Paper 2021-2022",
        course_key: "Early_Am_Theater",
        course_index: 5,
        url: Early_American_Theater_Exam_21_22,
        opendoc:
          "https://drive.google.com/file/d/1ak5RF2ldeyFPDFBgHKjyepSLnrpBGh2B/view?usp=drive_link",
      },
      {
        id: 15,
        name: "English Poetry",
        course_key: "English_Poetry",
        course_index: 6,
        url: English_Poetry,
        opendoc:
          "https://drive.google.com/file/d/11anhfT8O7fd2HxqTxdkJSOLzQQW2Pc5H/view?usp=drive_link",
      },
      {
        id: 16,
        name: "English Poetry Exam_Paper 2020-2021",
        course_key: "English_Poetry",
        course_index: 6,
        url: English_Poetry_Exam_20_21,
        opendoc:
          "https://drive.google.com/file/d/1eBDeQ4uMwKutZdqTR5l2S2fKnBAtedmE/view?usp=drive_link",
      },
      {
        id: 17,
        name: "English Poetry Exam_Paper 2021-2022",
        course_key: "English_Poetry",
        course_index: 6,
        url: English_Poetry_Exam_21_22,
        opendoc:
          "https://drive.google.com/file/d/1Kqu1keWk5HOSqaGo6ardIrtuTxiEKXYV/view?usp=drive_link",
      },
      {
        id: 18,
        name: "The Prince of Parthia by Thomas Godfrey",
        course_key: "Early_Am_Theater",
        course_index: 5,
        url: The_Prince_of_Parthia_Sem_4,
        opendoc:
          "https://drive.google.com/file/d/1FIDQ52uifdMuck0Zk8_OmIpLi7GgUN_S/view?usp=drive_link",
      },
      {
        id: 19,
        name: "The Contrast by Royall Tyler",
        course_key: "Early_Am_Theater",
        course_index: 5,
        url: The_Contrast_Sem_4,
        opendoc:
          "https://drive.google.com/file/d/14fIc6Pqmu9Oip4g2UPR1uLNjEl9amYPp/view?usp=drive_link",
      },
      {
        id: 20,
        name: "Advanced Oral Expression",
        course_key: "Advanced_Oral_Exp",
        course_index: 7,
        url: Advanced_Oral_Expression,
        opendoc:
          "https://drive.google.com/file/d/1WEtSwwPo7go4_U0Jt_muh34ikLWIxCCR/view?usp=drive_link",
      },
    ];

export const Reminders_sem_3 = [
    { courseKey: "English_Novel", availableDocsIn: {
            answerHub: false,
            podcast: true,
            test: true,
            examPapers: true,
          }},
    { courseKey: "Morphology_and_Syntax", availableDocsIn: {
            answerHub: true,
            podcast: true,
            test: true,
            examPapers: true,
          }},
    { courseKey: "African_Novel", availableDocsIn: {
            answerHub: true,
            podcast: false,
            test: false,
            examPapers: true,
          }},
    { courseKey: "American_Novel", availableDocsIn: {
            answerHub: true,
            podcast: true,
            test: true,
            examPapers: true,
          }},
    { courseKey: "Théâtre_Africain", availableDocsIn: {
            answerHub: true,
            podcast: true,
            test: false,
            examPapers: true,
          }},
    { courseKey: "Théâtre_Classique", availableDocsIn: {
            answerHub: true,
            podcast: false,
            test: false,
            examPapers: true,
          }},
    { courseKey: "Traduction_Avancée", availableDocsIn: {
            answerHub: false,
            podcast: false,
            test: false,
            examPapers: true,
          }},
    { courseKey: "Expression_Écrite_Avancée", availableDocsIn: {
            answerHub: false,
            podcast: false,
            test: false,
            examPapers: true,
          }}
]

export const Reminders_sem_4 = [
    { courseKey: "African_Civilisation", availableDocsIn: {
            answerHub: true,
            podcast: false,
            test: false,
            examPapers: true,
          }},
    { courseKey: "African_Poetry", availableDocsIn: {
            answerHub: true,
            podcast: false,
            test: false,
            examPapers: true,
          }},
    { courseKey: "American_Civilisation", availableDocsIn: {
            answerHub: false,
            podcast: false,
            test: false,
            examPapers: true,
          }},
    { courseKey: "American_Poetry", availableDocsIn: {
            answerHub: true,
            podcast: false,
            test: false,
            examPapers: true,
          }},
    { courseKey: "Contemporary_British_Civ", availableDocsIn: {
            answerHub: true,
            podcast: false,
            test: false,
            examPapers: true,
          }},
    { courseKey: "Early_Am_Theater", availableDocsIn: {
            answerHub: false,
            podcast: true,
            test: false,
            examPapers: true,
          }},
    { courseKey: "English_Poetry", availableDocsIn: {
            answerHub: true,
            podcast: false,
            test: false,
            examPapers: true,
          }},
    { courseKey: "Advanced_Oral_Exp", availableDocsIn: {
            answerHub: false,
            podcast: true,
            test: false,
            examPapers: true,
          }}
]