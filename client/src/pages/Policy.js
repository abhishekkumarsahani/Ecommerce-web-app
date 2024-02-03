import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            Welcome to our eCommerce web app's Privacy Policy. Your privacy is
            important to us, and we are committed to protecting your personal
            information. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website.
          </p>
          <h3>Information We Collect</h3>
          <p>
            We collect information that you provide to us voluntarily, such as
            your name, email address, and other personal details when you
            interact with our website.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
