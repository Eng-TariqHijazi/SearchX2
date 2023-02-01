import React from "react";
import "./About.css";
const About = () => {
  window.addEventListener("scroll", function () {
    var element = document.querySelector(".home");
    var bounding = element.getBoundingClientRect();
    var scroll = window.pageYOffset;
    if (bounding.top < window.innerHeight && bounding.bottom > 0) {
      element.style.backgroundImage = `linear-gradient( 210deg ,#068D72 ${scroll+380}px,#000 ,#000 ,#000 100%)`;
      console.log(window.outerHeight)
      console.log(scroll)
    }
    
  });

  const Service = ({ title, detail, dir }) => {
    return (
      <div
        className="service"
        style={{ flexDirection: dir ? "row" : "row-reverse" }}
      >
        <div className="img">
          <img src={require("../../assets/imgr.png")} alt="" srcset="" />
        </div>
        <div
          className="detail"
          style={{ padding: dir ? "0 0 0 80px " : "0 80px 0 0 " }}
        >
          <div className="title">{title}</div>
          <div className="line"></div>
          <div className="text-detail">{detail}</div>
        </div>
      </div>
    );
  };
  const Rates = ({ title, detail }) => {
    return (
      <div className="Rates">
        <div className="num">{title}</div>
        <div className="line-x"></div>
        <div className="text-rate">{detail}</div>
      </div>
    );
  };
  return (
      <div className="home">
        <div className="about">
          <div className="about-text">
            <div className="container">
              <div className="about-content">
                <div className="watch">
                  <img
                    src={require("../../assets/video-circle.png")}
                    alt="Watch"
                    srcset=""
                  />
                  <p>Watch</p>
                </div>
                <div className="title">
                  SearchX is a Saudi company established in 2022.
                </div>
                <div className="para">
                  We provide HR services, executive recruitment, HR consultancy,
                  talent assessment, employee experience, and recruitment
                  outsourcing process services. Working with some of the most
                  prestigious local groups and multinational organizations and
                  offering a diverse range of recruitment and HR services.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="content">
            <div className="text">
              We have the grounds to provide optimum services to our clients
              because we are:
            </div>
            <div className="services">
              <Service
                title={"Fully Experienced:"}
                detail={
                  "Our associates have experience and knowledge that is directly relevant to our clients' specific needs."
                }
                dir={true}
              />
              <Service
                title={"Client Oriented:"}
                detail={
                  "We work as a partner with our clients in every search. We make it our business to listen to our clients and absorb a full understanding of their needs."
                }
                dir={false}
              />
              <Service
                title={"Trusted Partners:"}
                detail={
                  "We extend our close working relationships to the long-term partnerships we share with our clients. Like this we continue to collaborate, in providing services or giving advice whenever and wherever necessary."
                }
                dir={true}
              />
            </div>
          </div>
          <div className="rate-content">
            <div className="list">
              <div className="title-list">
                <div className="title">
                  Search<span>X</span> by the Numbers
                </div>
                <div className="line"></div>
              </div>
              <Rates
                title={"20"}
                detail={"Countries and focusing on major emerging markets"}
              />
            </div>
            <div className="line-y"></div>
            <div className="list">
              <Rates
                title={"85%"}
                detail={"Success rate on executive search solutions"}
              />
              <Rates
                title={"02"}
                detail={
                  "Regional presence and headquarters in Saudi Arabia and Dubai"
                }
              />
            </div>
            <div className="line-y"></div>
            <div className="list">
              <Rates
                title={"3k+"}
                detail={"Business Leaders believe in Ash & Maple"}
              />
              <Rates
                title={"07"}
                detail={
                  "Global Presence in Bern, Zurich, Dubai, Riyadh, Karachi, Pune, Manila"
                }
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
