import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  const arr = [
    ["Our Story", "Industries", "Contact us"],
    ["Executive Search", "Board Services", "Articles"],
    ["Board Services", "Reports"],
    ["Zenithr", "Thomas", "Best Places to Work"],
  ];
  const Item = ({ title, arr }) => {
    return (
      <div className="item">
        <p className="title">{title}</p>
        <div className="line"></div>
        {arr.map((i) => {
          return (
            <div className="item-arrow">
              <span>→</span>
              <p className="item-l">{i}</p>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-detail">
            <div className="footer-list">
            <div className="footer-logo">
              <p>
                <Link to={"/"}>
                  <img src={require("../../assets/3.png")} alt="logo" />
                </Link>
              </p>
            </div>
              <Item title={"Company"} arr={arr[0]} />
              <Item title={"Services"} arr={arr[0]} />
              <Item title={"Research Center"} arr={arr[1]} />
              <Item title={"Strategic Allies"} arr={arr[2]} />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-final">
      <div className="line-footer"></div>
        <div className="container">
          <div className="footer-final-content">
            <div className="list-icon">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-snapchat"></i>
            </div>
            <div className="text">SearchX Your HR Services partner by OceanX</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
