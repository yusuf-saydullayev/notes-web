import "./App.css";
import Logo from "./images/logo.png";
import Logo2 from "./images/logo-2.png";
import About1 from "./images/about/1.jpg";
import About3 from "./images/about/3.jpg";
import About2 from "./images/about/2.jpg";

function App() {
  return (
    <div className="App">
      <div id="preloader">
        <div className="book">
          <div className="book__page"></div>
          <div className="book__page"></div>
          <div className="book__page"></div>
        </div>
      </div>

      <div className="navbar-default navbar-fixed-top" id="navigation">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              <img className="logo-1" src={Logo} alt="LOGO" />
              <img className="logo-2" src={Logo2} alt="LOGO" />
            </a>
          </div>

          <nav className="collapse navbar-collapse" id="navbar">
            <ul className="nav navbar-nav navbar-right" id="top-nav">
              <li className="current">
                <a href="#hero-area">Home</a>
              </li>
              <li>
                <a href="#about">About us</a>
              </li>
              <li>
                <a href="#service">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <section id="hero-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="block">
                <h1 className="wow fadeInDown">A passionate web company</h1>
                <p className="wow fadeInDown" data-wow-delay="0.3s">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                </p>
                <div className="wow fadeInDown" data-wow-delay="0.3s">
                  <a
                    className="btn btn-default btn-home"
                    href="#about"
                    role="button"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow zoomIn">
              <div className="block">
                <div className="counter text-center">
                  <ul id="countdown_dashboard">
                    <li>
                      <div className="dash days_dash">
                        <div className="digit">0</div>
                        <div className="digit">0</div>
                        <div className="digit">0</div>
                        <span className="dash_title">Days</span>
                      </div>
                    </li>
                    <li>
                      <div className="dash hours_dash">
                        <div className="digit">0</div>
                        <div className="digit">0</div>
                        <span className="dash_title">Hours</span>
                      </div>
                    </li>
                    <li>
                      <div className="dash minutes_dash">
                        <div className="digit">0</div>
                        <div className="digit">0</div>
                        <span className="dash_title">Minutes</span>
                      </div>
                    </li>
                    <li>
                      <div className="dash seconds_dash">
                        <div className="digit">0</div>
                        <div className="digit">0</div>
                        <span className="dash_title">Seconds</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-12 wow fadeInLeft">
              <div className="sub-heading">
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magnam ipsa recusandae consequatur veniam, reiciendis odit
                  quia eaque vel eius a.
                </h3>
              </div>
              <div className="block">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ulla-mco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Neque, aspernatur.
                </p>
              </div>
            </div>
            <div
              className="col-md-5 col-sm-12 wow fadeInLeft"
              data-wow-delay="0.3s"
            >
              <div className="about-slider">
                <div className="init-slider">
                  <div className="about-item">
                    <img src={About1} alt="" className="img-responsive" />
                  </div>
                  <div className="about-item">
                    <img src={About2} alt="" className="img-responsive" />
                  </div>
                  <div className="about-item">
                    <img src={About3} alt="" className="img-responsive" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="service" className="section">
        <div className="container">
          <div className="row">
            <div className="heading wow fadeInUp">
              <h2>Our service</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et <br /> dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex
              </p>
            </div>
            <div className="col-sm-6 col-md-3 wow fadeInLeft">
              <div className="service">
                <div className="icon-box">
                  <span className="icon">
                    <i className="ion-android-desktop" />
                  </span>
                </div>
                <div className="caption">
                  <h3>Fully Responsive</h3>
                  <p>
                    Lorem ipsum dolor sit amet, con-sectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-md-3 wow fadeInLeft"
              data-wow-delay="0.3s"
            >
              <div className="service">
                <div className="icon-box">
                  <span className="icon">
                    <i className="ion-speedometer" />
                  </span>
                </div>
                <div className="caption">
                  <h3>Speed Optimized</h3>
                  <p>
                    Lorem ipsum dolor sit amet, con-sectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-md-3 wow fadeInLeft"
              data-wow-delay="0.6s"
            >
              <div className="service">
                <div className="icon-box">
                  <span className="icon">
                    <i className="ion-ios-infinite-outline"></i>
                  </span>
                </div>
                <div className="caption">
                  <h3>Tons of Feature</h3>
                  <p>
                    Lorem ipsum dolor sit amet, con-sectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-md-3 wow fadeInLeft"
              data-wow-delay="0.9s"
            >
              <div className="service">
                <div className="icon-box">
                  <span className="icon">
                    <i className="ion-ios-cloud-outline"></i>
                  </span>
                </div>
                <div className="caption">
                  <h3>Cloud Option</h3>
                  <p>
                    Lorem ipsum dolor sit amet, con-sectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="call-to-action" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 wow text-center">
              <div className="block">
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod
                </p>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Email Address"
                  />
                  <button className="btn btn-default btn-submit" type="submit">
                    Get Notified
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="block">
                <div className="heading wow fadeInUp">
                  <h2>Get In Touch</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et <br /> dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-5 wow fadeInUp">
              <div className="block text-left">
                <div className="sub-heading">
                  <h4>Contact Address</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet quos maxime voluptate doloribus, voluptatum nemo vel
                    ipsa in eligendi, ullam. Ducimus consequuntur labore error
                    hic.
                  </p>
                </div>
                <address className="address">
                  <hr />
                  <p>
                    Dhanmondi 32,
                    <br /> Dhaka,
                    <br /> Bangladesh
                  </p>
                  <hr />
                  <p>
                    <strong>E:</strong>&nbsp;hello@foundry.net
                    <br />
                    <strong>P:</strong>&nbsp;+614 3948 2726
                  </p>
                </address>
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-12 col-md-5 col-md-offset-1 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="form-group">
                <form action="#" method="post" id="contact-form">
                  <div className="input-field">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      name="name"
                    />
                  </div>
                  <div className="input-field">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      name="email"
                    />
                  </div>
                  <div className="input-field">
                    <textarea
                      className="form-control"
                      placeholder="Your Message"
                      rows="3"
                      name="message"
                    ></textarea>
                  </div>
                  <button className="btn btn-send" type="submit">
                    Send me
                  </button>
                </form>
                <div id="success">
                  <p>Your Message was sent successfully</p>
                </div>
                <div id="error">
                  <p>Your Message was not sent successfully</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section clas="wow fadeInUp">
        <div className="map-wrapper"></div>
      </section>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <p>
                  Copyright &copy; <a href="!#">Themefisher</a>| All right
                  reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
