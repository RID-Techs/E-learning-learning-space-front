// Images logo, Homepage, Answers, user and warning are from https://icons8.com/
import logo from "/learns.png";
import Homepage from "/Homepage.png";
import Answers from "/answerss.png";
import user from "/user.png";
import WhatsApp from "/WhatsApp.png";
import AnimatedArrow from "/AnimatedArrow.gif";
import warning from "/warning.png";

// Image Faq from https://www.freepik.com/
import Faq from "/Faq.webp";
import { useEffect, useState } from "react";

export function Get_Answers() {
  const hola = localStorage.getItem("User")
  const [checked_1, setChecked_1] = useState(false);
  const [checked_2, setChecked_2] = useState(false);
  const [checked_3, setChecked_3] = useState(false);

  const [openAnswer, setOpenAnswer] = useState(false);
  console.log(openAnswer)

  const TrueCheck = (e) => {
    localStorage.removeItem("Answer_Sem_4");
    localStorage.removeItem("Answer_Sem_6");
    setChecked_1(e.target.checked);
    setChecked_2(false);
    setChecked_3(false);
    localStorage.setItem("Answer_Sem_2", true);
  };

  const TrueCheck_2 = (e) => {
    localStorage.removeItem("Answer_Sem_2");
    localStorage.removeItem("Answer_Sem_6");
    setChecked_2(e.target.checked);
    setChecked_1(false);
    setChecked_3(false);
    localStorage.setItem("Answer_Sem_4", true);
  };
  const TrueCheck_3 = (e) => {
    localStorage.removeItem("Answer_Sem_2");
    localStorage.removeItem("Answer_Sem_4");
    setChecked_3(e.target.checked);
    setChecked_1(false);
    setChecked_2(false);
    localStorage.setItem("Answer_Sem_6", true);
  };

  useEffect(() => {
    const getSem_2 = localStorage.getItem("Answer_Sem_2");
    const getSem_4 = localStorage.getItem("Answer_Sem_4");
    const getSem_6 = localStorage.getItem("Answer_Sem_6");

    if (getSem_2) {
      setChecked_1(true);
    }
    if (getSem_4) {
      setChecked_2(true);
    }
    if (getSem_6) {
      setChecked_3(true);
    }
  }, []);

  useEffect(() => {
    if(checked_1 || checked_2 || checked_3){
      const All_RevealAnswers = document.querySelectorAll(".reveal-answer")

      const handleClick = (event) => {
        const newTextContent = event.target.textContent.trim();
          setOpenAnswer((prevState) => {
          console.log(prevState, "implemented by RID-Techs")
          const newState = newTextContent === "Click to see the answer";
          event.target.textContent = newState ? "Close" : "Click to see the answer";
          return newState;
        })
      }

      All_RevealAnswers.forEach(Open_Answer => {
        Open_Answer.addEventListener("click", handleClick)
      })

      return () => {
        All_RevealAnswers.forEach(Open_Answer => {
          Open_Answer.removeEventListener("click", handleClick)
        })
      }
    }
  }, [checked_1, checked_2, checked_3])

  return (
    <>
      <div className="container-fluid header-wraper">
        <div className="header-holder">
          <header>
            <img src={logo} alt="E-learning" />
            <h1>E-learning</h1>
          </header>
        </div>

        <div className="header-elements">
          <ul>
            <a href="Home">
              <li>
                {" "}
                <img height={32} src={Homepage} alt="Semester" /> Homepage{" "}
              </li>
            </a>
            <a className="active" href="Get_Answers">
              <li>
                {" "}
                <img height={32} src={Answers} alt="Answers" /> E-learning Get
                Answers Spot{" "}
              </li>
            </a>
          </ul>
        </div>
      </div>

      <div className="container mt-5 welcome_2">
        <div className="welcome-text">
          <h2 id="welcome-message">
            {" "}
            <span id="my-semester-span">~</span> Dear {hola}{" "}
            <img src={user} alt="user" /> ~{" "}
          </h2>
          <p id="Enjoy">
            Here, you have{" "}
            <strong>
              <em>
                All the answers to the frequently asked questions with regard to
                each course.
              </em>
            </strong>
          </p>
          <p id="welcome-foot">Feel free to ask yours too !</p>
        </div>

        <div className="ms-lg-3">
          <img height={250} src={Faq} alt="Faq" />
        </div>
      </div>

      <div className="container mt-4">
        <hr className="divider" />
      </div>
      <div className="container mt-5">
        <h1 id="my-semester">
          {" "}
          <span id="my-semester-span">~</span>{" "}
          <span id="my-semester-text">Choose my semester</span>
        </h1>
      </div>

      <div className="container semester-choice mt-4">
        <ul>
          <label htmlFor="semester_2">
            <li>
              Semester 2{" "}
              <input
                checked={checked_1}
                onChange={TrueCheck}
                type="checkbox"
                id="semester_2"
              />
            </li>
          </label>
          <label htmlFor="semester_4">
            <li>
              Semester 4{" "}
              <input
                checked={checked_2}
                onChange={TrueCheck_2}
                type="checkbox"
                id="semester_4"
              />
            </li>
          </label>
          <label htmlFor="semester_6">
            <li>
              Semester 6{" "}
              <input
                checked={checked_3}
                onChange={TrueCheck_3}
                type="checkbox"
                id="semester_6"
              />
            </li>
          </label>
        </ul>
        <p>
          <span id="semester-note">Please note</span> : You have to choose your
          semester before seeing your{" "}
          <span id="semester-note-2">Answers to Questions</span> related to your
          semester{"'"}s courses !
        </p>
      </div>

      <div className="container mt-4">
        <h1 id="my-current-courses">
          {" "}
          <span id="my-semester-span">~</span>{" "}
          <span id="my-semester-text">Answers to Quesions</span>
        </h1>
      </div>

      <div className="container mt-5">
        {checked_1 === false && checked_2 === false && checked_3 === false ? (
          <p id="no-course">
            {" "}
            <img
              className="me-2"
              height={32}
              src={warning}
              alt="warning"
            />{" "}
            There is no answer for the moment ! Choose your semester first.
          </p>
        ) : null}
      </div>

      <div className="container">

        {checked_1 && (
          <div className="row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 g-4">
            <div className="col">
              <div className="faq-holder">
                <h5 className="faq-title">
                  🏅🖌🌿 : Compare and contrast African oral literature and
                  written literature ?
                </h5>
                <details>
                  <summary className="reveal-answer mt-3">
                    Click to see the answer
                  </summary>
                  <div className="mt-4 answer-content">
                    <strong>🌿 Similarities :</strong>
                    <p className="mt-2">
                      <span className="underline">
                        <strong>
                          <em>- Cultural Expression :</em>
                        </strong>
                      </span>{" "}
                      Both oral and written literature are forms of cultural
                      expression, reflecting the values, beliefs, and traditions
                      of African societies.
                    </p>

                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Storytelling :</em>
                        </strong>
                      </span>{" "}
                      Both oral and written traditions involve storytelling as a
                      fundamental method of conveying information, history, and
                      moral lessons.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Aesthetic Qualities :</em>
                        </strong>
                      </span>{" "}
                      Both forms can be highly artistic, using language, rhythm,
                      and imagery to create aesthetic experiences for the
                      audience or reader.
                    </p>

                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Preservation of Culture :</em>
                        </strong>
                      </span>{" "}
                      Both oral and written traditions serve to preserve and
                      transmit cultural heritage from one generation to another.
                    </p>

                    <strong>🌿 Differences :</strong>
                    <p className="mt-2">
                      <span className="underline">
                        <strong>
                          <em>- Medium of Transmission :</em>
                        </strong>
                      </span>{" "}
                      Oral literature is transmitted verbally, often through
                      performance, while written literature is conveyed through
                      written texts.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Flexibility :</em>
                        </strong>
                      </span>{" "}
                      Oral literature is more flexible and subject to change
                      with each performance, allowing for variations and
                      adaptations. Written literature tends to be fixed once it
                      is written.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Audience Participation :</em>
                        </strong>
                      </span>{" "}
                      Oral literature often involves direct audience
                      participation, with listeners responding to the performer.
                      Written literature is typically consumed individually,
                      without the same level of immediate interaction.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Accessibility :</em>
                        </strong>
                      </span>{" "}
                      Oral literature may be more accessible to a wider
                      audience, especially in societies with lower literacy
                      rates, while written literature requires literacy.
                    </p>
                    <p>
                      <strong>
                        <em>🏅🌿 By E-learning 🥇</em>
                      </strong>
                    </p>
                  </div>
                </details>
              </div>
            </div>

            <div className="col">
              <div className="faq-holder">
                <h5 className="faq-title">
                  🏅🖌🌿 : How Orature influences Written Literature ?
                </h5>
                <details>
                  <summary className="reveal-answer mt-3">
                    Click to see the answer
                  </summary>
                  <div className="mt-4 answer-content">
                    
                    <p className="mt-2">
                      <span className="underline">
                        <strong>
                          <em>- Preservation of Oral Traditions :</em>
                        </strong>
                      </span>{" "}
                      Many African writers draw on oral traditions in their written works to preserve and promote the richness of their cultural heritage. They incorporate folklore, myths, proverbs, and oral narratives into their written stories.
                    </p>

                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Linguistic Influence :</em>
                        </strong>
                      </span>{" "}
                      Orature contributes to the linguistic diversity and richness of written literature. Writers often integrate oral linguistic elements, such as idioms and speech patterns, into their written works.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Storytelling Techniques :</em>
                        </strong>
                      </span>{" "}
                      African writers often adopt storytelling techniques from orature, such as non-linear narrative structures, rhythmic language, and the use of multiple voices or perspectives in their written works.
                    </p>

                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Cultural Identity :</em>
                        </strong>
                      </span>{" "}
                      Orature helps writers explore and assert their cultural identity. By incorporating oral traditions into written literature, authors bridge the gap between the two forms and affirm the importance of their cultural roots.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Social Commentary :</em>
                        </strong>
                      </span>{" "}
                      Orature often serves as a medium for social and political commentary. When integrated into written literature, it allows writers to address contemporary issues while drawing on the deep well of cultural wisdom present in oral traditions.
                    </p>

                    <p>
                    <strong><em>In summary</em></strong>, African oral literature and written literature share common themes and serve as complementary expressions of cultural identity. Orature continues to influence written literature by providing a rich source of material, linguistic elements, and storytelling techniques.
                    </p>
            
                    <p>
                      <strong>
                        <em>🏅🌿 By E-learning 🥇</em>
                      </strong>
                    </p>
                  </div>
                </details>
              </div>
            </div>

          </div>
        )}

        {checked_2 && (
          <div className="row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 g-4">
            <div className="col">
              <div className="faq-holder">
                <h5 className="faq-title">
                  🏅🖌🌿 : Compare and contrast African oral literature and
                  written literature ?
                </h5>
                <details>
                  <summary className="reveal-answer mt-3">
                    Click to see the answer
                  </summary>
                  <div className="mt-4 answer-content">
                    <strong>🌿 Similarities :</strong>
                    <p className="mt-2">
                      <span className="underline">
                        <strong>
                          <em>- Cultural Expression :</em>
                        </strong>
                      </span>{" "}
                      Both oral and written literature are forms of cultural
                      expression, reflecting the values, beliefs, and traditions
                      of African societies.
                    </p>

                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Storytelling :</em>
                        </strong>
                      </span>{" "}
                      Both oral and written traditions involve storytelling as a
                      fundamental method of conveying information, history, and
                      moral lessons.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Aesthetic Qualities :</em>
                        </strong>
                      </span>{" "}
                      Both forms can be highly artistic, using language, rhythm,
                      and imagery to create aesthetic experiences for the
                      audience or reader.
                    </p>

                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Preservation of Culture :</em>
                        </strong>
                      </span>{" "}
                      Both oral and written traditions serve to preserve and
                      transmit cultural heritage from one generation to another.
                    </p>

                    <strong>🌿 Differences :</strong>
                    <p className="mt-2">
                      <span className="underline">
                        <strong>
                          <em>- Medium of Transmission :</em>
                        </strong>
                      </span>{" "}
                      Oral literature is transmitted verbally, often through
                      performance, while written literature is conveyed through
                      written texts.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Flexibility :</em>
                        </strong>
                      </span>{" "}
                      Oral literature is more flexible and subject to change
                      with each performance, allowing for variations and
                      adaptations. Written literature tends to be fixed once it
                      is written.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Audience Participation :</em>
                        </strong>
                      </span>{" "}
                      Oral literature often involves direct audience
                      participation, with listeners responding to the performer.
                      Written literature is typically consumed individually,
                      without the same level of immediate interaction.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Accessibility :</em>
                        </strong>
                      </span>{" "}
                      Oral literature may be more accessible to a wider
                      audience, especially in societies with lower literacy
                      rates, while written literature requires literacy.
                    </p>
                    <p>
                      <strong>
                        <em>🏅🌿 By E-learning 🥇</em>
                      </strong>
                    </p>
                  </div>
                </details>
              </div>
            </div>

            <div className="col">
              <div className="faq-holder">
                <h5 className="faq-title">
                  🏅🖌🌿 : How Orature influences Written Literature ?
                </h5>
                <details>
                  <summary className="reveal-answer mt-3">
                    Click to see the answer
                  </summary>
                  <div className="mt-4 answer-content">
                    
                    <p className="mt-2">
                      <span className="underline">
                        <strong>
                          <em>- Preservation of Oral Traditions :</em>
                        </strong>
                      </span>{" "}
                      Many African writers draw on oral traditions in their written works to preserve and promote the richness of their cultural heritage. They incorporate folklore, myths, proverbs, and oral narratives into their written stories.
                    </p>

                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Linguistic Influence :</em>
                        </strong>
                      </span>{" "}
                      Orature contributes to the linguistic diversity and richness of written literature. Writers often integrate oral linguistic elements, such as idioms and speech patterns, into their written works.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Storytelling Techniques :</em>
                        </strong>
                      </span>{" "}
                      African writers often adopt storytelling techniques from orature, such as non-linear narrative structures, rhythmic language, and the use of multiple voices or perspectives in their written works.
                    </p>

                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Cultural Identity :</em>
                        </strong>
                      </span>{" "}
                      Orature helps writers explore and assert their cultural identity. By incorporating oral traditions into written literature, authors bridge the gap between the two forms and affirm the importance of their cultural roots.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Social Commentary :</em>
                        </strong>
                      </span>{" "}
                      Orature often serves as a medium for social and political commentary. When integrated into written literature, it allows writers to address contemporary issues while drawing on the deep well of cultural wisdom present in oral traditions.
                    </p>

                    <p>
                    <strong><em>In summary</em></strong>, African oral literature and written literature share common themes and serve as complementary expressions of cultural identity. Orature continues to influence written literature by providing a rich source of material, linguistic elements, and storytelling techniques.
                    </p>
            
                    <p>
                      <strong>
                        <em>🏅🌿 By E-learning 🥇</em>
                      </strong>
                    </p>
                  </div>
                </details>
              </div>
            </div>

            <div className="col">
              <div className="faq-holder">
                <h5 className="faq-title">
                  🏅🖌🌿 : What are the characteristics of puritan poetry ?
                </h5>
                <details>
                  <summary className="reveal-answer mt-3">
                    Click to see the answer
                  </summary>
                  <div className="mt-4 answer-content">
                    <p>
                    🌿 Puritan poetry in the context of American poetry is characterized by several distinctive features that reflect the beliefs and values of the Puritans who colonized America in the 17th and 18th centuries. Some key characteristics of Puritan poetry include :
                    </p>
                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Religiosity :</em>
                        </strong>
                      </span>{" "}
                      Puritan poetry often reflects a profound religious devotion and a strong sense of duty towards God. The Puritans viewed poetry as a means to glorify God and convey moral teachings.
                    </p>

                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Simplicity and Clarity :</em>
                        </strong>
                      </span>{" "}
                      Puritan poets valued simplicity and clarity in expressing their ideas. They avoided pompous language and preferred direct, accessible language.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Focus on Religious and Moral Themes :</em>
                        </strong>
                      </span>{" "}
                      Puritan poetry focuses on themes such as salvation, redemption, sin, morality, and the afterlife. These poets sought to morally instruct their readers through their writings.
                    </p>

                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Use of Allegories and Metaphors :</em>
                        </strong>
                      </span>{" "}
                      Puritan poets often employed allegories and metaphors to effectively convey their messages. These rhetorical devices were used to illustrate religious and moral concepts.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Emphasis on Everyday Life and Spiritual Struggle :</em>
                        </strong>
                      </span>{" "}
                      While Puritan poetry centered on religious themes, it also addressed aspects of Puritan everyday life, as well as their spiritual and emotional struggles on the path to salvation.
                    </p>

                    <p>
                    <strong><em>In summary</em></strong>, Puritan poetry in the context of American literature is deeply religious, moralistic, simple in style, and focuses on themes such as redemption, sin, and spiritual life. These characteristics make it unique within the American poetic tradition.
                    </p>
            
                    <p>
                      <strong>
                        <em>🏅🌿 By E-learning 🥇</em>
                      </strong>
                    </p>
                  </div>
                </details>
              </div>
            </div>

            <div className="col">
              <div className="faq-holder">
                <h5 className="faq-title">
                  🏅🖌🌿 : Discuss Integration in the British Context.
                </h5>
                <details>
                  <summary className="reveal-answer mt-3">
                    Click to see the answer
                  </summary>
                  <div className="mt-4 answer-content">
                    <p>
                    🌿 Integration in the context of British civilization refers to the process of individuals or groups from diverse backgrounds becoming part of British society while maintaining their distinct identities. Britain has a long history of being a multicultural society due to its colonial past, global connections, and waves of immigration. Integration plays a crucial role in fostering social cohesion and ensuring equal opportunities for all. <br />
                    Here are some key points regarding integration in British civilization :
                    </p>
                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Multiculturalism :</em>
                        </strong>
                      </span>{" "}
                      British civilization embraces multiculturalism, recognizing and celebrating the diversity of cultures, languages, religions, and traditions within the country. It acknowledges that individuals can maintain their cultural heritage while also being active participants in British society.
                    </p>

                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Immigration and Settlement :</em>
                        </strong>
                      </span>{" "}
                      Britain has witnessed significant immigration throughout its history. Immigrants have arrived from former colonies, Europe, and other parts of the world. Successful integration involves providing support and opportunities for newcomers to settle, learn the language, find employment, and contribute to the wider society.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Equal Rights and Values :</em>
                        </strong>
                      </span>{" "}
                      Integration in British civilization is built on the principles of equal rights, democracy, and the rule of law. All individuals, regardless of their background, are expected to adhere to these values, which form the foundation of British society.
                    </p>

                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Education and Language :</em>
                        </strong>
                      </span>{" "}
                      Education plays a vital role in integration by providing opportunities for individuals to learn about British history, values, and customs. English language proficiency is also important for effective communication and full participation in society.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Social Cohesion :</em>
                        </strong>
                      </span>{" "}
                      Integration aims to promote social cohesion by fostering interactions, understanding, and mutual respect among different communities. This can be achieved through initiatives such as community programs, cultural events, and dialogue between different groups.
                    </p>
                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Legal Framework :</em>
                        </strong>
                      </span>{" "}
                      The British legal framework ensures that individuals are protected from discrimination based on their ethnicity, religion, or other characteristics. This provides a framework for a fair and inclusive society where everyone has equal opportunities.
                    </p>
                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Political Participation :</em>
                        </strong>
                      </span>{" "}
                      Integration involves encouraging individuals from diverse backgrounds to participate in the political process. This can include voting, running for office, and engaging in civic activities to shape policies and decisions that affect their lives.
                    </p>

                    <p>
                    It{"'"}s important to note that integration is an ongoing process that requires efforts from both the host society and individuals to create an inclusive and harmonious environment. By embracing diversity and promoting integration, British civilization continues to evolve, drawing strength from its multicultural fabric while maintaining a sense of national identity.
                    </p>
            
                    <p>
                      <strong>
                        <em>🏅🌿 By E-learning 🥇</em>
                      </strong>
                    </p>
                  </div>
                </details>
              </div>
            </div>

            <div className="col">
              <div className="faq-holder">
                <h5 className="faq-title">
                  🏅🖌🌿 : What are the landmarks which show the effectiveness of British integration ?
                </h5>
                <details>
                  <summary className="reveal-answer mt-3">
                    Click to see the answer
                  </summary>
                  <div className="mt-4 answer-content">
                    <p>
                    🌿 Here{"'"}s a comprehensive list of landmarks demonstrating the effectiveness of British integration, including dates :
                    </p>
                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Legal Framework and Anti-Discrimination Legislation :</em>
                        </strong>
                      </span>{" "} <br />
                       **1965** : Enactment of the Race Relations Act, prohibiting racial discrimination in public places and employment. <br />
                    
    **1976** : Passage of the Race Relations Act, strengthening protections against discrimination in housing, employment, and public services. <br />

    **2010**: Introduction of the Equality Act, consolidating and enhancing anti-discrimination laws to protect individuals from discrimination based on various characteristics including race, ethnicity, religion, and nationality.
                    </p>

                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Social Cohesion and Community Engagement :</em>
                        </strong>
                      </span>{" "} <br />
                      **2000**: Formation of the Commission on the Future of Multi-Ethnic Britain, emphasizing the importance of social cohesion and diversity in British society. <br />
                      **2007**: Launch of the Government{"'"}s Preventing Violent Extremism Strategy, promoting community engagement and integration efforts to prevent extremism and promote cohesion.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Political Representation and Participation :</em>
                        </strong>
                      </span>{" "} <br />
                      **1987**: Election of the first ethnic minority Members of Parliament (MPs), including Diane Abbott and Bernie Grant. <br />
                      **2000**: Increase in ethnic minority representation in local government following the Local Government Act, which introduced proportional representation in local elections.
                    </p>

                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Economic Opportunities and Employment Equality :</em>
                        </strong>
                      </span>{" "} <br />
                      **1965**: Establishment of the Race Relations Board to address racial discrimination in employment. <br />
                      **2010**: Implementation of the Equality Act, prohibiting discrimination in employment and occupation, and promoting equal opportunities in the workforce.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Education and Access to Opportunities :</em>
                        </strong>
                      </span>{" "} <br />
                      **1965**: Introduction of the Race Relations Act, aiming to promote equality of opportunity in education. <br />
                      **1999**: Implementation of recommendations from the Stephen Lawrence Inquiry report, addressing institutional racism in education and other sectors.
                    </p>
                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Cultural Diversity and Expression :</em>
                        </strong>
                      </span>{" "} <br />
                      **2006**: Creation of the Arts Council England{"'"}s Diversity Strategy, promoting diversity and inclusion in the arts. <br />
                      **1987**: Establishment of Black History Month in the UK, celebrating the contributions of black people to British society.
                    </p>
                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Media Representation and Diversity :</em>
                        </strong>
                      </span>{" "} <br />
                      **2008**: Launch of the BBC{"'"}s Diversity Strategy, aiming to increase diversity in programming and workforce representation. <br />
                      **2012**: Formation of the British Media Diversity Network, advocating for greater diversity and representation in the media industry.
                    </p>
                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Healthcare and Social Services Access :</em>
                        </strong>
                      </span>{" "} <br />
                      **2015**: Introduction of the NHS Race Equality Standard, aiming to tackle health inequalities and improve healthcare access for minority groups. <br />
                      **2009**: Launch of the Department of Health{"'"}s Tackling Health Inequalities: 10 Years On report, highlighting progress and challenges in addressing health disparities.
                    </p>

                    <p>
                    These landmarks illustrate the progression of integration efforts in Britain over time, reflecting legislative changes, policy initiatives, and societal developments aimed at fostering equality, inclusion, and social cohesion.
                    </p>
            
                    <p>
                      <strong>
                        <em>🏅🌿 By E-learning 🥇</em>
                      </strong>
                    </p>
                  </div>
                </details>
              </div>
            </div>

            <div className="col">
              <div className="faq-holder">
                <h5 className="faq-title">
                  🏅🖌🌿 : Discuss the British Nationality.
                </h5>
                <details>
                  <summary className="reveal-answer mt-3">
                    Click to see the answer
                  </summary>
                  <div className="mt-4 answer-content">
                    <p>
                    🌿 Here are some key dates into the discussion of British nationality :
                    </p>
                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Legal Framework :</em>
                        </strong>
                      </span>{" "} <br />
                      **1701**: The Act of Settlement established rules for succession to the English and Irish crowns, setting the foundation for modern British nationality law. <br />
                      **1981**: The British Nationality Act 1981 came into force, modernizing and consolidating British nationality law. It introduced new categories of British citizenship and replaced previous legislation dating back to the British Nationality Act 1948.
                    </p>

                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Cultural Identity :</em>
                        </strong>
                      </span>{" "} <br />
                      **Early Centuries**: The emergence of a distinct British identity evolved over centuries, shaped by historical events such as the Norman Conquest, the Acts of Union (1707 and 1801), and the British Empire{"'"}s expansion. <br />
                      **19th and 20th Centuries**: Industrialization, urbanization, and cultural movements like the Victorian era contributed to the development of a shared British identity across England, Scotland, Wales, and Ireland.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Political Context :</em>
                        </strong>
                      </span>{" "} <br />
                      **1997**: Devolution referendums in Scotland and Wales led to the establishment of the Scottish Parliament and the Senedd (Welsh Parliament) in 1999, granting greater autonomy to these regions. <br />
                      **1998**: The Good Friday Agreement was signed, paving the way for peace and power-sharing in Northern Ireland and impacting discussions of British and Irish national identity.
                    </p>

                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Global Context :</em>
                        </strong>
                      </span>{" "} <br />
                      **20th Century**: Decolonization movements and the dismantling of the British Empire reshaped British nationality, leading to the creation of new nation-states and the migration of people from former colonies to the UK. <br />
                      **1973**: The UK joined the European Economic Community (EEC), later becoming the European Union (EU), impacting British nationality and citizenship rights through EU law and freedom of movement.

                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Legal Rights and Responsibilities :</em>
                        </strong>
                      </span>{" "} <br />
                      **2000**: The Nationality, Immigration, and Asylum Act 2002 introduced changes to British nationality law, including provisions on acquisition and loss of citizenship. <br />
                      **2004**: The introduction of citizenship ceremonies marked a formal process for new British citizens to pledge allegiance and affirm their rights and responsibilities.
                    </p>

                    <p>
                    By incorporating these dates, the discussion of British nationality is situated within a historical and legislative context, highlighting key moments that have shaped citizenship, identity, and belonging in the UK.
                    </p>
            
                    <p>
                      <strong>
                        <em>🏅🌿 By E-learning 🥇</em>
                      </strong>
                    </p>
                  </div>
                </details>
              </div>
            </div>

            <div className="col">
              <div className="faq-holder">
                <h5 className="faq-title">
                  🏅🖌🌿 : Discuss the British welfare state.
                </h5>
                <details>
                  <summary className="reveal-answer mt-3">
                    Click to see the answer
                  </summary>
                  <div className="mt-4 answer-content">
                    <p>
                    🌿 The British welfare state refers to a system of social policies and programs aimed at providing financial and social support to citizens, particularly during times of need or vulnerability. Developed in the aftermath of World War II, the welfare state embodies principles of social solidarity, collective responsibility, and the provision of basic rights and services to all citizens. Here{"'"}s a discussion of the British welfare state with clear examples :
                    </p>
                    <p>
                      <span className="underline">
                        <strong>
                          <em>- National Health Service (NHS) :</em>
                        </strong>
                      </span>{" "} <br />
                      * The NHS, established in 1948, is one of the most iconic symbols of the British welfare state. <br />
                    * It provides healthcare services that are free at the point of use to residents of the UK, funded through general taxation. <br />
                    * Examples include primary care services (GPs), hospital treatment, emergency care, and specialist services such as mental health and maternity care.
                    </p>

                    <div>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Social Security Benefits :</em>
                        </strong>
                      </span>{" "} <br />
                      * The welfare state provides a safety net through various social security benefits to support individuals and families in times of financial hardship. <br />
                      **19th and 20th Centuries**: Industrialization, urbanization, and cultural movements like the Victorian era contributed to the development of a shared British identity across England, Scotland, Wales, and Ireland. <br />
                      * Examples include : <br />
          <div className="ms-4">
          **Universal Credit** : A means-tested benefit that provides financial support to people on low incomes or who are out of work. <br />
          **State Pension** : A regular payment to individuals who have reached the state pension age, ensuring financial security in retirement. <br />
          **Disability Living Allowance (DLA)** : Financial assistance for people with disabilities to cover the extra costs of living with a disability.
          </div>
                    </div>

                    <div className="mt-3">
                      <span className="underline">
                        <strong>
                          <em>- Education :</em>
                        </strong>
                      </span>{" "} <br />
                      The welfare state ensures access to education as a fundamental right, regardless of socio-economic background. <br />
                      Examples include : <br />
                      <p className="ms-3">
                      **State Schools** : Free education provided by state-funded schools, including primary, secondary, and further education. <br />
                      **Student Loans and Grants** : Financial support for higher education, including tuition fee loans, maintenance loans, and grants to cover living expenses.
                      </p>
                    </div>

                    <div>
                      <span className="underline">
                        <strong>
                          <em>- Social Housing :</em>
                        </strong>
                      </span>{" "} <br />
                      The provision of affordable housing is a key aspect of the welfare state, ensuring access to safe and secure accommodation for all citizens. <br />
                      Examples include : <br />
                      <p className="ms-3">
                      **Council Housing** : Social housing provided by local authorities at below-market rents for people in need of affordable housing. <br />
                      **Housing Benefit** : Financial assistance to help low-income households afford private rented accommodation or meet housing costs.
                      </p>
                    </div>

                    <div>
                      <span className="underline">
                        <strong>
                          <em>- Employment Support :</em>
                        </strong>
                      </span>{" "} <br />
                      The welfare state offers support to unemployed individuals and helps facilitate access to employment opportunities. <br />
                      Examples include : <br />
                      <p className="ms-3">
                      **Jobseeker{"'"}s Allowance (JSA)** : Financial support for people actively seeking work. <br />
                      **Employment Support Allowance (ESA)** : Financial assistance for individuals unable to work due to illness or disability.
                      </p>
                    </div>

                    <div>
                      <span className="underline">
                        <strong>
                          <em>- Childcare and Family Support :</em>
                        </strong>
                      </span>{" "} <br />
                      The welfare state provides support to families and children to ensure their well-being and development. <br />
                      Examples include : <br />
                      <p className="ms-3">
                      **Child Benefit** : Regular payments to support families with the cost of raising children. <br />
                      **Free Early Education** : Government-funded childcare and early education for young children, typically provided through nurseries, pre-schools, and childminders.
                      </p>
                    </div>

                    <p>
                    These examples illustrate the breadth and depth of the British welfare state, which seeks to address a wide range of social needs and promote equality of opportunity for all citizens. The welfare state plays a crucial role in fostering social cohesion, reducing poverty and inequality, and promoting the well-being of individuals and communities across the UK.
                    </p>
            
                    <p>
                      <strong>
                        <em>🏅🌿 By E-learning 🥇</em>
                      </strong>
                    </p>
                  </div>
                </details>
              </div>
            </div>

            <div className="col">
              <div className="faq-holder">
                <h5 className="faq-title">
                  🏅🖌🌿 : What are the differences and similarities between American Revolutionary poetry and Harlem Renaissance ?
                </h5>
                <details>
                  <summary className="reveal-answer mt-3">
                    Click to see the answer
                  </summary>
                  <div className="mt-4 answer-content">
                    <p>
                    🌿 Both American Revolutionary poetry and the Harlem Renaissance are significant movements in American literary history, but they emerged in different historical contexts and addressed distinct themes and concerns. Here{"'"}s an overview of their differences and similarities :
                    </p>
                    <p>
                      <span className="underline">
                        <strong>
                          <em>- American Revolutionary Poetry :</em>
                        </strong>
                      </span>{" "} <br />
                      <span className="underline">
                        <strong>
                          <em>- Context :</em>
                        </strong>
                      </span> <br />
                      **Time Period**: American Revolutionary poetry emerged during the late 18th century, primarily around the time of the American Revolutionary War (1775-1783).<br />
                      **Political Context**: This poetry reflected the revolutionary spirit and ideals of the American colonies seeking independence from British rule. It often expressed patriotic sentiments, calls for freedom, and critiques of British oppression. <br />
                    </p>
  
                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Themes and Concerns :</em>
                        </strong>
                      </span>{" "} <br />
                      **Patriotism and National Identity**: American Revolutionary poetry celebrated the idea of a new American nation and expressed pride in American identity. <br />
                      **Freedom and Liberty**: Poets of this era often emphasized the importance of individual rights, freedom from tyranny, and the pursuit of liberty.<br />
                      **Nature and Landscapes**: Many poems reflected the natural beauty of the American landscape and its potential for growth and freedom.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Key Figures and Works :</em>
                        </strong>
                      </span>{" "} <br />
                      **Phillis Wheatley**: An enslaved African American poet who wrote poems advocating for freedom and equality, such as {`"`}To His Excellency General Washington.{`"`} <br />
                      **Francis Hopkinson**: A signer of the Declaration of Independence who wrote patriotic poems and songs, including {`"`}The Battle of the Kegs.{`"`}
                    </p>

                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Harlem Renaissance :</em>
                        </strong>
                      </span>{" "} <br />
                      <span className="underline">
                        <strong>
                          <em>- Context :</em>
                        </strong>
                      </span> <br />
                      **Time Period**: The Harlem Renaissance flourished during the 1920s and 1930s, primarily in the Harlem neighborhood of New York City. <br />
                      **Cultural Context**: This literary and cultural movement emerged as a response to the Great Migration, where African Americans moved from the rural South to urban centers in the North, seeking economic opportunities and fleeing racial discrimination.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Themes and Concerns :</em>
                        </strong>
                      </span>{" "} <br />
                      **Identity and Racial Pride**: Harlem Renaissance poetry explored themes of African American identity, heritage, and pride, celebrating Black culture and history. <br />
                      **Social Justice and Civil Rights**: Poets of this era addressed racial inequality, discrimination, and social injustice, advocating for civil rights and equality. <br />
                      **Artistic Expression and Creativity**: The Harlem Renaissance celebrated artistic expression and creativity, embracing diverse forms of literature, music, and visual arts.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Key Figures and Works :</em>
                        </strong>
                      </span>{" "} <br />
                      **Langston Hughes**: A central figure of the Harlem Renaissance known for his powerful poems celebrating Black identity and culture, such as {`"`}The Negro Speaks of Rivers{`"`} and {`"`}Harlem (Dream Deferred).{`"`} <br />
                      **Claude McKay**: A Jamaican American poet who wrote about racial injustice and the experiences of Black migrants in poems like {`"`}If We Must Die{`"`} and {`"`}Harlem Shadows.{`"`}
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Differences :</em>
                        </strong>
                      </span>{" "} <br />
                      <span className="underline">
                        <strong>
                          <em>- Historical Context :</em>
                        </strong>
                      </span>{" "}
                      American Revolutionary poetry emerged during the struggle for independence from British rule, while the Harlem Renaissance occurred during the early 20th century, amid the Great Migration and heightened racial tensions.<br />
                      <span className="underline">
                        <strong>
                          <em>- Themes and Concerns :</em>
                        </strong>
                      </span>{" "}
                      While both movements addressed issues of identity and freedom, American Revolutionary poetry focused on political independence and national identity, while the Harlem Renaissance centered on racial identity, cultural pride, and social justice.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Similarities :</em>
                        </strong>
                      </span>{" "} <br />
                      <span className="underline">
                        <strong>
                          <em>- Expression of Identity :</em>
                        </strong>
                      </span>{" "}
                      Both movements explored themes of identity, whether national or racial, celebrating the unique heritage and experiences of their respective communities.<br />
                      <span className="underline">
                        <strong>
                          <em>- Literary Innovation :</em>
                        </strong>
                      </span>{" "}
                      Both American Revolutionary poetry and Harlem Renaissance literature contributed to literary innovation and cultural expression, showcasing the diversity and creativity of American literature.
                    </p>

                    <p>
                    In summary, American Revolutionary poetry and the Harlem Renaissance represent distinct yet significant moments in American literary history, each reflecting the social, cultural, and political contexts of their time while contributing to the rich tapestry of American literature and culture.
                    </p>
            
                    <p>
                      <strong>
                        <em>🏅🌿 By E-learning 🥇</em>
                      </strong>
                    </p>
                  </div>
                </details>
              </div>
            </div>

            <div className="col">
              <div className="faq-holder">
                <h5 className="faq-title">
                  🏅🖌🌿 : Show how the Berlin conference is central to the colonial administration of Africa ?
                </h5>
                <details>
                  <summary className="reveal-answer mt-3">
                    Click to see the answer
                  </summary>
                  <div className="mt-4 answer-content">
                    <p>
                    🌿 The Berlin Conference of 1884–1885 was a significant event in the colonial administration of Africa. Here{"'"}s how it played a central role :
                    </p>
                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Formalization of the Scramble for Africa :</em>
                        </strong>
                      </span>{" "}
                      The conference formalized the Scramble for Africa that was already in full swing. It regulated European colonization and trade in Africa during the New Imperialism period.
                    </p>

                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Principle of Effective Occupation :</em>
                        </strong>
                      </span>{" "}
                      The conference established clear rules for the annexation and administration of African territories through the Principle of Effective Occupation.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Division of Africa :</em>
                        </strong>
                      </span>{" "} The conference led to the division of Africa into arbitrary borders, drawn without consideration for ethnic or cultural boundaries. This division led to numerous conflicts and tensions that continue to this day.
                    </p>

                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Colonial Expansion :</em>
                        </strong>
                      </span>{" "} 
                      The conference contributed to ushering in a period of heightened colonial activity by European powers.
                    </p>

                    <p>
                      <strong>
                        <em>🏅🌿 By E-learning 🥇</em>
                      </strong>
                    </p>
                  </div>
                </details>
              </div>
            </div>

          </div>
        )}

        {checked_3 && (
          <div className="row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 g-4">
            <div className="col">
              <div className="faq-holder">
                <h5 className="faq-title">
                  🏅🖌🌿 : Discuss Socialism in <em>Things Fall Apart</em> by Tchinua achebe.
                </h5>
                <details>
                  <summary className="reveal-answer mt-3">
                    Click to see the answer
                  </summary>
                  <div className="mt-4 answer-content">
                  <p>
                    <span className="underline"><em>Things Fall Apart </em></span> by Chinua Achebe is a powerful novel that explores the impact of colonialism on Igbo society in Nigeria. While the book primarily focuses on the cultural clash between traditional Igbo values and the forces of European colonization, elements of socialism can be observed throughout the narrative.
                    </p>
                    <p>
                    In <span className="underline"><em>Things Fall Apart </em></span>, socialism is intricately woven into the fabric of Igbo society. The communal living, shared values, and collective decision-making processes within the Igbo community reflect socialist ideals of cooperation, mutual support, and a sense of common ownership. The emphasis on communal well-being over individual success is a key aspect of socialism that is portrayed in the novel. <br />
                    Furthermore, the Igbo system of governance, which includes village councils and democratic decision-making processes, can be seen as a form of grassroots socialism where power is distributed among the community members rather than concentrated in the hands of a few. The egalitarian nature of Igbo society, where social status is earned through hard work and merit rather than inherited wealth or privilege, aligns with socialist principles of equality and social justice. <br />
                    However, the intrusion of British colonialism disrupts the socialist structures within Igbo society. The imposition of Western economic systems, legal frameworks, and religious beliefs leads to the erosion of traditional socialistic values and practices. The introduction of a capitalist economy based on monetary wealth, individual land ownership, and hierarchical power structures undermines the communal way of life that existed in pre-colonial Igbo society.
                    </p>
                    <p>
                    In conclusion, <span className="underline"><em>Things Fall Apart </em></span> by Chinua Achebe offers a poignant exploration of socialism within the context of traditional Igbo society and its encounter with European colonialism. The novel highlights the strengths and vulnerabilities of socialist ideals in the face of external influences, shedding light on the complexities of social, cultural, and political dynamics in a rapidly changing world.
                    </p>
                    <p>
                      <strong>
                        <em>🏅🌿 By E-learning 🥇</em>
                      </strong>
                    </p>
                  </div>
                </details>
              </div>
            </div>

            <div className="col">
              <div className="faq-holder">
                <h5 className="faq-title">
                  🏅🖌🌿 : How  <em>Things Fall Apart</em> can be shown as a corner stone novel which inspired other themes on Africa ?
                </h5>
                <details>
                  <summary className="reveal-answer mt-3">
                    Click to see the answer
                  </summary>
                  <div className="mt-4 answer-content">
                    
                    <p className="mt-2">
                    Chinua Achebe{"'"}s novel <span className="underline"><em>Things Fall Apart</em></span> is considered a cornerstone of African literature that inspired many other works exploring themes related to Africa. Here are a few key ways the novel has been influential :
                    </p>

                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Portrayal of African culture :</em>
                        </strong>
                      </span>{" "}
                      <span className="underline"><em>Things Fall Apart</em></span>
                      provided one of the first realistic depictions of Igbo culture and society in literature. It challenged Western stereotypes and misconceptions about Africa by showcasing the complexity and richness of traditional African life. This paved the way for other African writers to confidently portray their own cultures.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Clash of cultures :</em>
                        </strong>
                      </span>{" "}
                      The novel{"'"}s central theme of the clash between traditional African culture and European colonialism resonated widely and inspired many other works exploring this conflict. The novel showed how colonization disrupted and undermined indigenous societies. This theme has been taken up by numerous other African writers.
                    </p>

                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Narrative style :</em>
                        </strong>
                      </span>{" "}
                      Achebe{"'"}s use of proverbs, folktales, and the Igbo language in the novel was groundbreaking and influenced the narrative styles of many later African writers. His blending of English with African storytelling techniques demonstrated the viability of African languages and oral traditions in literature.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Postcolonial perspective :</em>
                        </strong>
                      </span>{" "} 
                      <span className="underline"><em>Things Fall Apart</em></span> is considered an early example of postcolonial literature, written from the perspective of the colonized rather than the colonizer. This approach inspired other African writers to assert their own cultural identities and challenge colonial narratives.
                    </p>
                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Tragic hero :</em>
                        </strong>
                      </span>{" "} 
                      Okonkwo, the protagonist of <span className="underline"><em>Things Fall Apart</em></span>, is a tragic hero whose downfall is brought about by both his own flaws and the changing times. This archetype has been emulated by many other African writers in their own works.
                    </p>

                    <p>
                    <strong><em>In summary</em></strong>, <span className="underline"><em>Things Fall Apart</em></span> was a pioneering novel that opened up new possibilities for African literature. Its portrayal of African culture, its exploration of the colonial experience, and its innovative narrative style have all been hugely influential on subsequent generations of African writers.
                    </p>
            
                    <p>
                      <strong>
                        <em>🏅🌿 By E-learning 🥇</em>
                      </strong>
                    </p>
                  </div>
                </details>
              </div>
            </div>

            <div className="col">
              <div className="faq-holder">
                <h5 className="faq-title">
                  🏅🖌🌿 : Show how Achebe{"'"}s novel style inspired writers on clash culture ?
                </h5>
                <details>
                  <summary className="reveal-answer mt-3">
                    Click to see the answer
                  </summary>
                  <div className="mt-4 answer-content">
                    <p>
                    🌿 Chinua Achebe, a renowned Nigerian writer, has had a profound influence on writers, particularly in the context of cultural clashes. His novel style and storytelling approach have inspired many writers to explore similar themes. Here{"'"}s how :
                    </p>
                    <p>
                      <span className="underline">
                        <strong>
                          <em>- New Style of African Storytelling :</em>
                        </strong>
                      </span>{" "}
                      Achebe pioneered a new style of African storytelling, particularly evident in his novel <span className="underline"><em>Things Fall Apart</em></span>. His fresh literary voice shattered old myths about Africa, giving African people dignity and humanity on the printed page. This revolutionized how African life and culture could be portrayed through fiction writing.

                    </p>

                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Rich Cultural Context :</em>
                        </strong>
                      </span>{" "}
                      Achebe{"'"}s writing style was characterized by its rich cultural context. He incorporated elements from the Igbo society in his writings, enabling his audiences to escape the subject matter. This approach allowed him to present a more accurate portrayal of African society, inspiring writers to do the same.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Challenging Stereotypes :</em>
                        </strong>
                      </span>{" "}
                      Achebe sought to challenge stereotypes and present a more accurate portrayal of African society. His works revolve around issues touching directly or indirectly on social traditions, influences of colonization, and internal conflicts existing among contemporary Africans. This has inspired writers to tackle similar themes and challenge stereotypes in their works.
                    </p>

                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Influence on African Literature :</em>
                        </strong>
                      </span>{" "}
                      Achebe{"'"}s impact on African literature is immeasurable. He opened the door for generations of African writers to tell their own stories and challenge stereotypes. His work inspired a literary movement known as African literature in English, and he mentored many aspiring writers.
                    </p>

                    <p>
                    <strong>In summary</strong>, Achebe{"'"}s novel style and approach to storytelling have inspired many writers to explore themes of cultural clash, challenge stereotypes, and portray a more accurate and humanizing depiction of African societies. His influence continues to shape the landscape of literature, particularly in the context of postcolonial narratives.
                    </p>

                    <p>
                      <strong>
                        <em>🏅🌿 By E-learning 🥇</em>
                      </strong>
                    </p>
                  </div>
                </details>
              </div>
            </div>

            <div className="col">
              <div className="faq-holder">
                <h5 className="faq-title">
                  🏅🖌🌿 : How is Chinua Achebe{"'"}s <em>Things Fall Apart</em> relevant to the African literature of protest ?
                </h5>
                <details>
                  <summary className="reveal-answer mt-3">
                    Click to see the answer
                  </summary>
                  <div className="mt-4 answer-content">
                    <p>
                    🌿 Chinua Achebe{"'"}s <span className="underlin"><em>Things Fall Apart</em></span> is widely regarded as a seminal work in African literature, not only for its artistic merit but also for its profound impact in challenging colonial narratives and promoting a decolonial consciousness within African literature of protest. The novel{"'"}s relevance to African literature of protest can be seen through various key aspects :
                    </p>
                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Subversion of Colonial Narrative :</em>
                        </strong>
                      </span>{" "}
                      <span className="underlin"><em>Things Fall Apart</em></span> subverts the dominant colonial narrative by presenting a nuanced portrayal of pre colonial African society, highlighting its rich cultural traditions, complex social structures, and philosophical depth. Achebe{"'"}s narrative serves as a powerful critique of the dehumanizing effects of colonialism and the erasure of indigenous cultures, challenging the portrayal of African societies as primitive and uncivilized.
                    </p>

                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Reclamation of African Identity :</em>
                        </strong>
                      </span>{" "}
                      The novel emphasizes the importance of reclaiming and celebrating African cultural identities and traditions, showcasing the resilience and dignity of African communities in the face of colonial intrusion and cultural imperialism. Achebe{"'"}s portrayal of Igbo society serves as a poignant reflection on the enduring legacies of African civilizations, fostering a sense of cultural pride and empowerment within the broader discourse of African literature of protest.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Critique of Imperialism and Cultural Hegemony :</em>
                        </strong>
                      </span>{" "}
                      <span className="underlin"><em>Things Fall Apart</em></span> critiques the exploitative and oppressive nature of colonialism, highlighting its detrimental impacts on indigenous communities, social structures, and cultural practices. Achebe{"'"}s narrative sheds light on the complexities of power dynamics, cultural hybridity, and the erosion of indigenous knowledge systems, emphasizing the need to challenge the hegemony of Western cultural values and to assert the agency and autonomy of African communities.
                    </p>

                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Empowerment of Marginalized Voices :</em>
                        </strong>
                      </span>{" "}
                      The novel empowers marginalized voices within African societies, providing a platform for the representation and exploration of diverse cultural perspectives and experiences. Achebe{"'"}s narrative foregrounds the voices of indigenous characters, showcasing their agency, resilience, and cultural legacies, thereby challenging the marginalization and erasure of African narratives within the broader global literary canon.
                    </p>

                    <p>
                    Through its powerful critique of colonialism, its celebration of African cultural identities, and its empowerment of marginalized voices, <span className="underlin"><em>Things Fall Apart</em></span> embodies the spirit of resistance and resilience within African literature of protest, contributing to a broader decolonial discourse that seeks to challenge hegemonic narratives and promote cultural sovereignty within the African literary landscape.
                    </p>
            
                    <p>
                      <strong>
                        <em>🏅🌿 By E-learning 🥇</em>
                      </strong>
                    </p>
                  </div>
                </details>
              </div>
            </div>

            <div className="col">
              <div className="faq-holder">
                <h5 className="faq-title">
                  🏅🖌🌿 : Discuss and show how <em>Things Fall Apart</em> has fund a new era in African literature and how it has become an early landmark and how it is a worthy archetype ?
                </h5>
                <details>
                  <summary className="reveal-answer mt-3">
                    Click to see the answer
                  </summary>
                  <div className="mt-4 answer-content">
                    <p>
                    🌿 <span className="underlin"><em>Things Fall Apart</em></span> by Chinua Achebe has indeed marked a significant milestone in African literature, ushering in a new era and establishing itself as an early landmark in the literary landscape. Here{"'"}s how the novel has fundamentally influenced African literature and why it is considered a worthy archetype :
                    </p>
                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Pioneering African Perspective :</em>
                        </strong>
                      </span>{" "} <br />
                      <span className="underlin"><em>Things Fall Apart</em></span> is celebrated for offering a unique African perspective, challenging colonial narratives, and presenting the complexities of African societies authentically. By portraying the impact of colonialism on traditional African cultures, Achebe{"'"}s work set a precedent for African writers to reclaim their narratives and challenge Western representations of Africa.
                    </p>

                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Cultural Representation :</em>
                        </strong>
                      </span>{" "} <br />
                      The novel delves into the intricacies of Igbo culture, traditions, and societal norms, providing a rich and nuanced portrayal of pre-colonial African life. This focus on cultural authenticity and the exploration of indigenous belief systems became a hallmark of African literature inspired by Achebe{"'"}s work.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Exploration of Themes :</em>
                        </strong>
                      </span>{" "} <br />
                      <span className="underlin"><em>Things Fall Apart</em></span> explores themes such as colonialism, religion, language, justice, and change within the context of African society. These themes have resonated with readers globally and have been further developed and expanded upon by subsequent African writers, making the novel a foundational text for exploring these critical issues.
                    </p>

                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Character Development :</em>
                        </strong>
                      </span>{" "} <br />
                      The character of Okonkwo, a tragic hero grappling with the clash of cultures and the disintegration of his community, has become emblematic of the struggles faced by many African societies during the colonial period. Okonkwo{"'"}s story has served as a template for exploring the complexities of identity, tradition, and modernity in African literature.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Global Impact :</em>
                        </strong>
                      </span>{" "} <br />
                      <span className="underlin"><em>Things Fall Apart</em></span> has achieved widespread acclaim, with translations into over 50 languages and a global readership exceeding 10 million copies. Its success has not only elevated African literature onto the world stage but has also inspired a generation of African writers to tell their stories in their own voices, contributing to a diverse and vibrant literary landscape.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Authenticity and Cultural Representation :</em>
                        </strong>
                      </span>{" "} <br />
                      Achebe{"'"}s skillful storytelling, evocative language, and memorable characters have captivated readers worldwide, making his tales relatable and his legacy enduring. The novel provides a rich and complex portrayal of Igbo culture, highlighting its strengths and weaknesses while dispelling stereotypes about African cultures.
                    </p>
                    
                    <p>
                    In conclusion, <span className="underlin"><em>Things Fall Apart</em></span> stands as a seminal work that has shaped the trajectory of African literature, setting a high standard for authenticity, cultural representation, and thematic depth. Its enduring legacy as a pioneering text in African literature underscores its significance as a worthy archetype that continues to inspire and influence generations of writers across the African continent and beyond.
                    </p>
            
                    <p>
                      <strong>
                        <em>🏅🌿 By E-learning 🥇</em>
                      </strong>
                    </p>
                  </div>
                </details>
              </div>
            </div>

            <div className="col">
              <div className="faq-holder">
                <h5 className="faq-title">
                  🏅🖌🌿 : How does Chinua Achebe coexist Orature and Written Literature in <em>Things Fall Apart</em> ?
                </h5>
                <details>
                  <summary className="reveal-answer mt-3">
                    Click to see the answer
                  </summary>
                  <div className="mt-4 answer-content">
                    <p>
                    🌿 Chinua Achebe masterfully intertwines oral tradition (orature) with written literature in his novel <span className="underlin"><em>Things Fall Apart</em></span> through various techniques that bridge the gap between the two forms of storytelling :
                    </p>
                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Incorporation of Proverbs and Folktales :</em>
                        </strong>
                      </span>{" "} Achebe seamlessly weaves Igbo proverbs and folktales into the narrative, enriching the text with the oral tradition of the Igbo people. These proverbs and tales serve multiple purposes, from conveying moral lessons to providing cultural context, mirroring the oral storytelling practices prevalent in African societies.
                    </p>

                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Language as a Cultural Bridge :</em>
                        </strong>
                      </span>{" "} Achebe uses language as a tool to combat negative stereotypes about African languages and to highlight the complexity and richness of the Igbo language. By showcasing the diversity of languages in Africa and emphasizing the challenges of translation, Achebe underscores the importance of preserving oral traditions within a written text.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Character Dialogue and Speech Patterns :</em>
                        </strong>
                      </span>{" "} The dialogue in <span className="underlin"><em>Things Fall Apart</em></span> reflects the speech patterns and idioms of the Igbo people, capturing the authenticity of oral communication within the written form. Through the characters{"'"} conversations, Achebe brings to life the oral traditions of storytelling, communal wisdom sharing, and interpersonal communication.
                    </p>

                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Cultural Context and Rituals :</em>
                        </strong>
                      </span>{" "} Achebe integrates cultural rituals, ceremonies, and practices into the narrative, grounding the story in the oral traditions and customs of the Igbo society. These elements serve as a bridge between orature and written literature, showcasing the importance of storytelling, music, dance, and communal gatherings in African cultures.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Narrative Structure and Storytelling Techniques :</em>
                        </strong>
                      </span>{" "} Achebe{"'"}s narrative structure mirrors the oral storytelling tradition by incorporating multiple perspectives, non-linear storytelling, and communal memory within the text. This approach blurs the distinction between oral and written forms of storytelling, creating a dynamic and immersive reading experience.
                    </p>

                    <p>
                    In essence, Chinua Achebe skillfully merges orature and written literature in <span className="underlin"><em>Things Fall Apart</em></span> by infusing the text with oral elements such as proverbs, folktales, language nuances, cultural rituals, and storytelling techniques. This fusion not only preserves the authenticity of African oral traditions but also elevates the novel to a work that transcends traditional literary boundaries, making it a powerful example of how orature can coexist harmoniously with written literature.
                    </p>
            
                    <p>
                      <strong>
                        <em>🏅🌿 By E-learning 🥇</em>
                      </strong>
                    </p>
                  </div>
                </details>
              </div>
            </div>

            <div className="col">
              <div className="faq-holder">
                <h5 className="faq-title">
                  🏅🖌🌿 : Discuss Janie in <em>Their Eyes Were Watching God</em> by Zora Neale Hurston.
                </h5>
                <details>
                  <summary className="reveal-answer mt-3">
                    Click to see the answer
                  </summary>
                  <div className="mt-4 answer-content">
                    <p>
                    🌿 Janie Crawford, the protagonist of Zora Neale Hurston{"'"}s novel <span className="underline"><em>Their Eyes Were Watching God</em></span> undergoes a transformative journey of self-discovery and empowerment. Throughout the narrative, Janie{"'"}s character evolves from a naive and voiceless girl into a strong, independent woman who finds her own voice and agency.
                    </p>

                    <p>
                    Janie{"'"}s first two marriages to Logan Killicks and Jody Starks are marked by oppression and the suppression of her voice. Logan treats her as a possession, while Jody seeks to control and mold her into a trophy wife. However, Janie{"'"}s third marriage to Tea Cake represents a turning point in her life. Tea Cake encourages Janie to embrace her true self and find her own voice. This relationship allows Janie to experience true love and independence. <br />
                    The novel explores Janie{"'"}s ripening from a vibrant but voiceless teenage girl into a woman with her finger on the trigger of her own destiny. Her journey is one of self-discovery, as she navigates the complexities of love, gender norms, and societal expectations. Janie{"'"}s experiences with her three husbands shape her understanding of herself and the world around her.
                    </p>

                    <p>
                    By the end of the novel, Janie returns to Eatonville a strong and proud woman, having found her voice and independence. Her story serves as a testament to the power of self-discovery and the importance of finding one{"'"}s own path in life, regardless of societal pressures and expectations.
                    </p>
            
                    <p>
                      <strong>
                        <em>🏅🌿 By E-learning 🥇</em>
                      </strong>
                    </p>
                  </div>
                </details>
              </div>
            </div>

            <div className="col">
              <div className="faq-holder">
                <h5 className="faq-title">
                  🏅🖌🌿 : What role do you think Sofia plays in the Alice Walker{"'"}s novel <em>The Color Purple</em> ? Describe her character and how she contributes to the themes in the book.
                </h5>
                <details>
                  <summary className="reveal-answer mt-3">
                    Click to see the answer
                  </summary>
                  <div className="mt-4 answer-content">
                    <p>
                    🌿 Sofia plays a pivotal role in <span className="underline"><em>The Color Purple</em></span> as a strong, assertive woman who refuses to be oppressed by men or society. Her character directly challenges the traditional gender roles and expectations placed on black women in 1930s America.
                    </p>

                    <p>
                    Sofia is described as physically strong, with {`"`}muscle{`"`} in her {`"`}arms{`"`} and {`"`}legs{`"`}. She is unafraid to stand up to her husband Harpo when he tries to beat her into submission, even throwing him against a stove. Her indomitable spirit and unwillingness to be controlled by anyone, including white people, is central to her characterization. <br />
                    However, Sofia{"'"}s strength and independence ultimately lead to her downfall. When she refuses to be a maid for the mayor{"'"}s wife, she is beaten by the police and sentenced to 12 years in prison. This shows how black women who dared to assert their rights faced severe consequences from a racist and sexist society. <br />
                    Through Sofia, the novel exposes the oppression and violence faced by black women who tried to break free from the confines of their expected roles. Her character serves as a foil to the more passive Celie, who learns from Sofia{"'"}s example to stand up for herself against Mr. ____.
                    </p>

                    <p>
                    While Sofia{"'"}s story ends tragically, with her spirit broken by her imprisonment, she remains an inspirational figure in the novel. Her strength and refusal to be subservient, even in the face of overwhelming odds, makes her an important symbol of resistance against the intersecting oppressions of racism and sexism.
                    </p>
            
                    <p>
                      <strong>
                        <em>🏅🌿 By E-learning 🥇</em>
                      </strong>
                    </p>
                  </div>
                </details>
              </div>
            </div>

            <div className="col">
              <div className="faq-holder">
                <h5 className="faq-title">
                  🏅🖌🌿 : What does Expressive Realism mean in critical theory ? and What connection does it have with Common Sense theory ?
                </h5>
                <details>
                  <summary className="reveal-answer mt-3">
                    Click to see the answer
                  </summary>
                  <div className="mt-4 answer-content">
                    <p>
                    🌿 Expressive realism, in critical theory, is the idea that cultural texts (like literature and art) realistically depict the world while also expressing individual and collective experiences and emotions. It highlights how these texts reflect and shape social realities, influenced by and influencing the socio-political context. Associated with Raymond Williams, expressive realism emphasizes the interconnectedness of personal expression and social conditions, offering a nuanced view of how culture both represents and constructs reality.
                    </p>
                    <p>
                    Expressive realism is connected to common sense theory through its exploration of how cultural texts reflect and shape everyday beliefs and experiences. Here’s how they relate :
                    </p>

                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Reflection of Common Sense :</em>
                        </strong>
                      </span>{" "}
                      Expressive realism suggests that cultural texts depict the world in ways that align with the common sense of their time. These texts draw on widely held beliefs and perceptions, making them resonate with their audience’s everyday experiences and understanding of reality.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Shaping Common Sense :</em>
                        </strong>
                      </span>{" "} Cultural texts not only reflect but also influence common sense. By presenting certain views of reality and human experience, they contribute to shaping the shared beliefs and norms of society. In this way, expressive realism intersects with common sense theory by illustrating how literature and art help form and transform what people take for granted as “common sense.”
                    </p>

                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Ideological Function :</em>
                        </strong>
                      </span>{" "} 
                      Both expressive realism and common sense theory address the ideological functions of cultural texts. They show how texts can reinforce or challenge dominant ideologies by either perpetuating the status quo or offering new ways of seeing the world. This ideological aspect ties into the notion of common sense as an arena where power and resistance play out in everyday life.
                    </p>
                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Raymond Williams{"'"} Influence :</em>
                        </strong>
                      </span>{" "} 
                      Raymond Williams, who developed the concept of expressive realism, also explored how culture and common sense are intertwined. He argued that what is considered “common sense” is often the result of cultural hegemony, where dominant groups impose their worldview as natural and unquestionable. Expressive realism, therefore, helps to analyze how cultural texts participate in this process.
                    </p>

                    <p>
                    In summary, expressive realism and common sense theory are connected through their focus on how cultural texts reflect, shape, and influence everyday beliefs and social norms. Both examine the interplay between individual experiences and broader societal forces, highlighting the role of culture in constructing and challenging common sense.
                    </p>

                    <p>
                      <strong>
                        <em>🏅🌿 By E-learning 🥇</em>
                      </strong>
                    </p>
                  </div>
                </details>
              </div>
            </div>

            <div className="col">
              <div className="faq-holder">
                <h5 className="faq-title">
                  🏅🖌🌿 : Write the characterization of the protagonist of <em>Their Eyes Were Watching God</em> , written by Zora Neale Hurston.
                </h5>
                <details>
                  <summary className="reveal-answer mt-3">
                    Click to see the answer
                  </summary>
                  <div className="mt-4 answer-content">
                    <p>
                    🌿 The protagonist of Zora Neale Hurston{"'"}s novel <span className="underline"><em>Their Eyes Were Watching God</em></span> is Janie Crawford. Janie is a vibrant, resilient African American woman who embarks on a journey of self-discovery and empowerment over the course of the novel. Her characterization can be understood through several key aspects :
                    </p>
      
                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Appearance and Early Life :</em>
                        </strong>
                      </span>{" "}
                      Janie is described as a beautiful woman with long, flowing hair that symbolizes her independence and strength. Raised by her grandmother, Nanny, after her mother{"'"}s abandonment, Janie{"'"}s early life is marked by Nanny{"'"}s protective and somewhat restrictive guidance, aiming to secure Janie a stable future.
                    </p>

                    <p>
                      <span className="underline">
                        <strong>
                          <em>- Personal Growth and Independence :</em>
                        </strong>
                      </span>{" "} Throughout the novel, Janie{"'"}s journey is defined by her quest for true love and self-fulfillment. She marries three times, each marriage shaping her understanding of herself and her desires. Her first marriage to Logan Killicks is arranged by Nanny and lacks love and respect. Her second marriage to Joe “Jody” Starks offers material wealth and social status but stifles her independence and voice. Finally, her third marriage to Vergible “Tea Cake” Woods, though fraught with challenges, brings her the love and companionship she seeks.
                    </p>

                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Voice and Identity :</em>
                        </strong>
                      </span>{" "} 
                      A crucial aspect of Janie{"'"}s character is her evolving voice and identity. Initially, she is passive and subdued, adhering to the expectations imposed on her by Nanny and her husbands. Over time, Janie finds her voice, particularly after Jody{"'"}s death, and begins to assert her own needs and desires. Her relationship with Tea Cake allows her to express herself more freely and explore her own identity.
                    </p>

                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Resilience and Inner Strength :</em>
                        </strong>
                      </span>{" "} 
                      Janie{"'"}s resilience is a central theme in the novel. She endures significant hardships, including domestic abuse, social scorn, and personal loss. Despite these challenges, she remains determined to live life on her own terms. Her resilience is particularly evident in her ability to start anew after each setback and her unwavering belief in the possibility of happiness and fulfillment.
                    </p>

                    <p>
                      {" "}
                      <span className="underline">
                        <strong>
                          <em>- Symbolism and Connection to Nature :</em>
                        </strong>
                      </span>{" "} 
                      Janie has a profound connection to nature, which symbolizes her inner life and growth. The pear tree under which she experiences an awakening of her desires in her youth represents her ideal vision of love and harmony. Throughout the novel, Janie’s connection to the natural world reflects her emotional and spiritual journey.
                    </p>

                    <p>
                    <strong><em>In summary</em></strong>, Janie Crawford is a complex and dynamic character whose journey towards self-realization and empowerment is at the heart of <span className="underline"><em>Their Eyes Were Watching God</em></span>. Her development from a voiceless young girl to a self-assured woman who embraces her own identity and desires is a testament to her strength and resilience.
                    </p>

                    <p>
                      <strong>
                        <em>🏅🌿 By E-learning 🥇</em>
                      </strong>
                    </p>
                  </div>
                </details>
              </div>
            </div>

          </div> 
        )}

      <div className="put-question mt-5">
        <h3>Do you have a question ?</h3>
        <div className="contact-holder">
        <p id="Ifso">If so, then ask me here...</p>
        <p id="arrow-holder"><img id="arrow" src={AnimatedArrow} alt="arrow" /></p>
        <a href="https://wa.me/70454088?text=Hello Sir, I would like to ask a question." target="_blank"> <img height={32} src={WhatsApp} alt="WhatsApp" /> E-learning</a>
        </div>
      </div>

      </div>

      <footer className="container-fluid">
      <div className="footer-first-part">
      <div className="header-holder">
          <header>
            <img height={32} src={logo} alt="E-learning" />
            <h3>E-learning</h3>
          </header>
        </div>
        <div className="rights">
          <p>2024 | All Rights Reserved</p>
        </div>
        <div className="author">
          <p>Made with <span style={{color: "red"}}>&hearts;</span> by E-learning</p>
        </div>
      </div>
        <div className="Phone-number">
          <p>Contact : +228 79 83 62 19</p>
        </div>
      </footer>

    </>
  );
}
