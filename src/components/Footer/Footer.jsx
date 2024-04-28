import Logo from "../../images/alabs_layout/Asset 1.svg";
import Title from "../Title";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="container">
        <div className="row flex">
          <div className="col">
            <img src={Logo} alt="" />
          </div>
          <div className="col">
            <Title title="Quick Links" />
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="https://wa.me/254794878861" target="_blank">
                  Book with us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <Title title="Contact us" />
            <ul>
              <li>
                {" "}
                <p>
                  <i class="fa-regular fa-envelope"></i>
                </p>{" "}
                <p>
                  <Link
                    to="mailto:liveliveentertain@gmail.com"
                    className="email"
                  >
                    liveliveentertain@gmail.com
                  </Link>
                </p>
              </li>
              <li>
                {" "}
                <p>
                  <i class="fa-solid fa-phone"></i>
                </p>{" "}
                <p>+254794878861</p>
              </li>
              <li>
                {" "}
                <p>
                  <i class="fa-sharp fa-solid fa-location-dot"></i>
                </p>{" "}
                <p>Gracewood Plaza Kikuyu, Kiambu County</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container footer-subsection">
        <div className="row">
          <p>Live Live Entertainment. Inc.2024</p>
          <ul>
            <li className="social-media">
              <a href="#">Follow us</a>
              <Link
                to="https://www.instagram.com/live_liveentertainment"
                target="_blank"
              >
                {" "}
                <i class="fa-brands fa-instagram"></i>
              </Link>
              <Link
                to="https://www.facebook.com/photo/?fbid=122112697628172328&set=a.122107261694172328"
                target="_blank"
              >
                {" "}
                <i class="fa-brands fa-facebook"></i>
              </Link>
              <Link
                to="https://www.youtube.com/@live_liveentertainment"
                target="_blank"
              >
                <i class="fa-brands fa-youtube"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
