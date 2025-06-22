import Navigation from "../Components/Navigation";
import pic from "../assets/images/book.jpg";
import instagram from "../assets/icons/thatguywithabook.png";
import tweets from "../assets/icons/quakes.png";
import tumblr from "../assets/icons/tumblrblog.png";
import goodreads from "../assets/icons/social.png";

export default function Aboutme() {
  return (
    <div>
      <Navigation />
      <h2 className="author--book--title">The Creator</h2>
      <div className="nagraj--intro--card--container">
        <div className="nagraj--intro--card">
          <div>
           <img className="nagraj-image" src={pic} alt="Satria Rizki" />
            <div className="author-info">
              <p className="satria-rizki-para">
                Hello! I&apos;m <strong>Satria Rizki</strong>, the creator and manager of this website.
                As a lifelong learner, I believe that every book holds the power to inspire and broaden our horizons.
                <br />
                <br />
                This website was created as a space to share my love for literacy, spark meaningful conversations, and spread the joy of reading to everyone who visits.
              </p>
              <div className="nagraj--links">
                <a
                  href="https://www.instagram.com/Satriarizkirr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={instagram}
                    alt="Instagram"
                    className="nagraj--social"
                  />
                </a>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
