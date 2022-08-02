import React from "react";
import "./About.css";
const About = () => {
  return (
    <div>
      <section className="start-container">
        <div className="start-container-general">
          <div className="main-content">
            <div>
              <h2>About</h2>
              <h1>
                Hello, I am Andrew Garfield, Actor, Model, Film Producer,
                Narrator also etc...
              </h1>
              <h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                explicabo assumenda provident, impedit deleniti placeat,
                nesciunt magnam omnis et, nulla ea minima beatae amet. Obcaecati
                delectus nemo aperiam ratione ducimus.
              </h3>
              <h4>
                --------------------------------------------------------------
                <br />
                <img
                  className="signa_content"
                  src="https://otvet.imgsmail.ru/download/3b4628072a8c04a1cbdefb4fe07716d4_i-4455.jpg"
                  alt="signa"
                />
              </h4>
            </div>
          </div>
          <div className="main-info">
            <div className="main-info-name">Basic information</div>
            <div className="main-info-2_2">
              <div className="main-info-part-1">
                <h2>Address:</h2>
                <h2>Date of Birth:</h2>
                <h2>Place of Birth:</h2>
                <h2>Language</h2>
                <h2>Gender</h2>
              </div>
              <div className="main-info-part-2">
                <h3>43/R/13 Creative Town, Bangladesh</h3>
                <h3>1 January, 1992</h3>
                <h3>Dhaka, Bangladesh</h3>
                <h3>Bangla, English, German, French</h3>
                <h3>Male</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="start-info-film">
        <div class="start-film-general">
          <span>Education</span>
          <div class="film-general">
            <div class="film-year">May 2004</div>
            <div class="film-info">
              <div class="film-info-size">
                <div class="film-name">
                  Royal Central School of Speech & Drama
                </div>
                <div class="film-desk">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores commodi quisquam unde nihil nulla placeat molestias
                  voluptatem, nemo debitis adipisci vitae earum pariatur
                  consequuntur hic ab, minus eius quasi enim dicta! Nostrum,
                  blanditiis delectus doloremque fugiat quidem necessitatibus,
                  ut atque deserunt voluptas ipsam modi enim quasi alias iusto!
                  Ducimus, pariatur!
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- todo second --> */}
        <div class="start-film-general">
          <div class="film-general">
            <div class="film-year">September 2008</div>
            <div class="film-info">
              <div class="film-info-size">
                <div class="film-name">Banstead Preparatory School</div>
                <div class="film-desk">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores commodi quisquam unde nihil nulla placeat molestias
                  voluptatem, nemo debitis adipisci vitae earum pariatur
                  consequuntur hic ab, minus eius quasi enim dicta! Nostrum,
                  blanditiis delectus doloremque fugiat quidem necessitatibus,
                  ut atque deserunt voluptas ipsam modi enim quasi alias iusto!
                  Ducimus, pariatur!
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- todo thirds --> */}
        <div class="start-film-general">
          <div class="film-general">
            <div class="film-year">July 2016</div>
            <div class="film-info">
              <div class="film-info-size">
                <div class="film-name">City of London Freemens School</div>
                <div class="film-desk">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores commodi quisquam unde nihil nulla placeat molestias
                  voluptatem, nemo debitis adipisci vitae earum pariatur
                  consequuntur hic ab, minus eius quasi enim dicta! Nostrum,
                  blanditiis delectus doloremque fugiat quidem necessitatibus,
                  ut atque deserunt voluptas ipsam modi enim quasi alias iusto!
                  Ducimus, pariatur!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
