import React from "react";

import awssvg from "./skills/svg/aws.svg";
import html5svg from "./skills/svg/html5.svg";
import jssvg from "./skills/svg/js.svg";
import k8ssvg from "./skills/svg/k8s.svg";
import mysqlsvg from "./skills/svg/mysql.svg";
import pgsqlsvg from "./skills/svg/pgsql.svg";
import pythonsvg from "./skills/svg/python.svg";
import reactsvg from "./skills/svg/react.svg";
import reduxsvg from "./skills/svg/redux.svg";
import rubysvg from "./skills/svg/ruby.svg";

export default function Skills() {
  const skills_json = {
    aws: {
      name: "Amazon Web Services",
      icon: awssvg,
      desc: "",
    },
    html5: {
      name: "HTML5",
      icon: html5svg,
      desc: "",
    },
    js: {
      name: "JavaScript",
      icon: jssvg,
      desc: "",
    },
    k8s: {
      name: "Kubernetes",
      icon: k8ssvg,
      desc: "",
    },
    mysql: {
      name: "MySQL",
      icon: mysqlsvg,
      desc: "",
    },
    pgsql: {
      name: "PostgresQL",
      icon: pgsqlsvg,
      desc: "",
    },
    python: {
      name: "Python",
      icon: pythonsvg,
      desc: "",
    },
    react: {
      name: "React.JS",
      icon: reactsvg,
      desc: "",
    },
    redux: {
      name: "Redux",
      icon: reduxsvg,
      desc: "",
    },
    ruby: {
      name: "Ruby",
      icon: rubysvg,
      desc: "",
    },
  };
  return (
    <div id="skills">
      <div id="skillsholder">
        {Object.keys(skills_json).map((key) => {
          return (
            <div id="askill">
              <img
                src={skills_json[key]["icon"]}
                alt={skills_json[key]["name"]}
              />
              {skills_json[key]["name"]}
            </div>
          );
        })}
      </div>
      <p>...and more.</p>
    </div>
  );
}
