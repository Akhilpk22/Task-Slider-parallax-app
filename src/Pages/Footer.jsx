import React from "react";

function Footer() {
  return (
    <>
      <footer
        style={{ height: "auto", width: "100%" }}
        className="bg-dark text-light py-3 "
      >
        <div className="container p-5">
          <div className="row">
            <div className="col-md-4">
              <h3>About Us</h3>
              <p>Your company description goes here.</p>
            </div>
            <div className="col-md-4">
              <h3>Contact Us</h3>
              <p>Email: info@example.com</p>
              <p>Phone: +123 456 789</p>
            </div>
            <div className="col-md-4">
              <h3>Follow Us</h3>
              <p>Stay connected on social media.</p>
              {/* Add social media icons or links here */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
