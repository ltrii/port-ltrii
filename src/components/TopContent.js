import React from "react";

export default function TopContent() {
  return (
    <div id="topcontent">
      <div>
        <p>
          <b>Hello!</b> My name is <i>Leland Rogers</i> and I work at{" "}
          <a href="https://www.singlestore.com" id="s2">
            SingleStore
          </a>{" "}
          as a Technical Support Engineer. I
          have learned many skills while helping customers solve highly
          technical problems.{" "}
        </p>
        <p>
          Whether reading Go code to find why something is working the way it
          is, working with engineers to get to the root of a problem, or
          researching technologies that interface with SingleStore (many
          different disparate types: S3, Kerberos, GCP, AKS, EKS, Spark, and
          many more) working there has been a constant growth opportunity.{" "}
        </p>
        <p>
          I think it's best to say I am very adaptable and quick to learn
          anything I develop a passion for.{" "}
        </p>
        <p>
          Outside of the technical aspect I've also learned a lot about working
          with customers directly and making sure expectations are set while
          also providing guidance and thorough support.
        </p>
        <p>
          Due to the variety of deployment methods for our software I have been
          able to learn Kubernetes skills effectively and build out personal
          projects utilizing Kubernetes as well. I've come to enjoy working with
          Kubernetes, and I provide a significant portion of support for our
          operator.
        </p>
        I'm also a Full Stack Web Developer with skills covering HTML, CSS,
        LESS, React.js, Redux, SQL and more. On top of that I have experience
        with Python, C, and other programming languages.
      </div>
      <div>
        <h3>Contact</h3>
        <p>
          You can email me at{" "}
          <a href="mailto:leland@ltrii.com">leland@ltrii.com</a>
        </p>
        <p>
          You can find me on{" "}
          <a href="https://www.linkedin.com/in/leland-rogers/">LinkedIn</a>.
        </p>
      </div>
      <p id="tooltip">Not your color? Refresh to get a new background.</p>
    </div>
  );
}
