import React from "react";
import "./Content.css";

const Content = () => {
  return (
    <div>
      <header>
        <div className="about-person">
          <div className="about-person-size">
            <div className="about-person-inside">
              <div>
                <img
                  src="https://www.startfilm.ru/images/base/person/27_04_15/30359_130530jkny_andrewgarfield_01.jpg"
                  alt="Andrew Russell Garfield"
                />
              </div>
              <h2>I'm Andrew Garfield</h2>
              <h3>Actor Model Producer Narrator</h3>
              <div className="media-link">
                <a href="#">
                  <img
                    src="https://www.artworks3.com/images/twitter-icon.png"
                    alt="#"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://www.fintechfutures.com/files/2016/06/Facebook.png"
                    alt="#"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://avatars.mds.yandex.net/get-zen_doc/1718877/pub_5e00f02a9515ee00afc8481e_5e00f1c8ba281e00ae82c7e6/scale_1200"
                    alt="#"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://4.bp.blogspot.com/-qDKf4t-SPJ4/VU9ltpv8JNI/AAAAAAAAFOo/UONJkNLVRdY/s1600/icon%2Bchrome%2B1.png"
                    alt="#"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://1.bp.blogspot.com/-lt46xpzmL2w/YEyr5FPidjI/AAAAAAAACr0/YFISxJY_dzQUyRZEC7a0ULa-Hv6Sj26QACLcBGAsYHQ/s16000/nwdn_file_temp_1615637411069.jpg"
                    alt="#"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Content;
