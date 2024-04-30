import React from "react";
import "./style.scss";
import { BreadCrumbs } from "Components/UI Components/Molecules";
import { DashboardHeader, SideBar } from "Components/UI Components/Organisms";

const AboutPageTemplate = () => {
  return (
    <div className="main_body">
      <div className="dashboard_main">
        <SideBar />
        <div className="dashboard">
          <DashboardHeader />
          <div className="breadCrumbSection">
            <BreadCrumbs pageHistory={[["Home", "/"]]} currentPage={"about"} />
          </div>

          <div className="aboutSection">
            <h3>I&apos;m PMS-WebApp</h3>
            <div className="feildSection">
              <h4>Password Manager and Vault</h4>
              <p>
              In the digital age, the importance of robust cybersecurity measures cannot be overstated. 
              With the increasing frequency and sophistication of cyber threats, individuals and organizations alike face significant challenges 
              in safeguarding their sensitive information. Passwords remain a fundamental aspect of online security, 
              yet they are often vulnerable to various attacks such as phishing, brute force, and password spraying.
              To address these challenges and enhance security posture, 
              the implementation of a multifactor password manager system emerges as a critical solution. 
              This project aims to develop and deploy a comprehensive multifactor authentication (MFA) system integrated with a secure password manager.
              </p>
            </div>
            {/* <div className="feildSection">
              <h4>Contact Details</h4>
              <p>
                MERN Stack Developer with excellent experience in{" "}
                <a rel="noopener noreferrer" target="_blank" href="https://reactjs.org/">React js </a> &#34;Front-end
                Library&#34;, <a rel="noopener noreferrer" target="_blank" href="https://expressjs.com/">Express js</a>{" "}
                &#34;Node js Framework&#34;,{" "}
                <a rel="noopener noreferrer" target="_blank" href="https://nodejs.org/en/">Node js</a> &#34;JavaScript
                Engine and also Backend Handler&#34;,{" "}
                <a rel="noopener noreferrer" target="_blank" href="https://www.mongodb.com/">Mongo DB</a> &#34;A No-SQL
                Database used by Giant compnay&#34; and JavaScript Libraries,
                CSS Pre Processor.
              </p>
            </div> */}
            {/* <div className="feildSection">
              <h4>Ui / UX Designer</h4>
              <p>
                A Standard UI/UX Designer, who understand principle and
                Requirement of UI and UX. Experience in using Prototyping tools
                like{" "}
                <a rel="noopener noreferrer" target="_blank" href="https://www.adobe.com/products/xd.html">Adobe XD</a>{" "}
                and <a rel="noopener noreferrer" target="_blank" href="https://www.figma.com/">Figma</a>
              </p>
            </div> */}
            <div className="feildSection">
              <h4>Contact Details</h4>
              <p>
                <ul>Aditya Singh Rawat - <b>asr@gmail.com</b></ul>
                <ul>Tushar Shourie - <b>ts5556@gmail.com</b></ul>
                <ul>Prakash Singh - <b>prakashsingh@gmail.com</b></ul>
                <ul>Parv Sablok - <b>sablokparv@gmail.com</b></ul>
                <ul>Amit Kumar - <b>amitkumar1@gmail.com</b></ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageTemplate;