import React from "react";
import "./contact.css";
import Separator from "../../common/separator";
import SocialContact from "../../common/social-contact";
function Contact() {
  return (
    <div className="contact">
    <Separator />
    <label className="section-title">Contact</label>
    <div className="contact-container">
      <div className="contact-left">
      <div class="contact-info">
    <div class="card">
      <p>gunalnandakumar@gmail.com</p>
    </div>

    <div class="card">
      <p>9789418844</p>
    </div>

    <div class="card">
      <p>CHENNAI , INDIA</p>
    </div>
  </div>
        <p>Want to get in touch? Contact me on any of the platform</p>
        <SocialContact />
        </div>
      </div>
    </div>
  );
}

export default Contact;