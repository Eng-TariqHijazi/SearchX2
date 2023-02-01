import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <div className="overly">
        <div className="container">
            <div className="contact-content">
          <div className="content">
              <form>
                <div className="touch">Get in Touch</div>
                <div className="title">Send us message</div>
                <div className="name-email">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                </div>
                <div className="phone-subject">
                  <input type="text" placeholder="Phone" />
                  <input type="email" placeholder="Subject" />
                </div>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Message"
                ></textarea>
                 <div className="submit">
              <input type="submit" value="Submit      →" />
            </div>
              </form>
              <div className="information">
                <div className="information-title">Contact Information</div>
                <div className="information-detail">
                  <span>E: info@Sercah.net</span>
                  <span>P: +966 9200 19 590</span>
                  <span>M: +966 50 990 9551</span>
                </div>
                <div className="information-title">SearchX Address:</div>
                <div className="information-detail">
                  Aban Center, 7534 King Abdulaziz Road, Al Ghadeer, Riyadh
                  13311
                </div>
                <div className="list-icon">
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-linkedin"></i>
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-snapchat"></i>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
