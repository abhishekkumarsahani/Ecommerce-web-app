import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to [Your Company Name], your go-to destination for all your
            online shopping needs. We are passionate about providing
            high-quality products and a seamless shopping experience to our
            valued customers.
          </p>
          <p className="text-justify mt-2">
            At [Your Company Name], we believe in the power of e-commerce to
            simplify and enhance your lifestyle. Our dedicated team works
            tirelessly to curate a diverse selection of products that cater to
            your unique preferences and needs.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
