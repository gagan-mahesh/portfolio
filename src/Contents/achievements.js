import React from "react";
import aiiot from "../Contents/aiiot.pdf";
import linux_cmd_cert from "../Contents/linux_cmd_cert.pdf";

export const achievements = [
  {
    header: "Leadership roles",
    description: [
      {
        desc: (
          <React.Fragment>
            Played the <b>Team Lead</b> role for the internship projects in
            TASKMONK Technologies. Was responsible for presenting the progress
            to the team mentor with weekly and/or daily updates and overseeing
            feature division and delivery on time
          </React.Fragment>
        ),
      },
      {
        desc: "Team lead in all college projects",
      },
    ],
  },
  {
    header: "Achievements",
    description: [
      {
        desc: (
          <React.Fragment>
            Won best research paper award in{" "}
            <b>
              AIIOT Virtual Conference on Artificial Intelligence for Internet
              of Things
            </b>{" "}
            (April 2022).
          </React.Fragment>
        ),
      },
      {
        desc: "Received Best outgoing student award in school (10th grade)",
      },
    ],
    certificates: [
      {
        file: aiiot,
        caption: "Download AIIOT certificate",
      },
    ],
  },
  {
    header: "Certifications",
    description: [
      {
        desc: (
          <React.Fragment>
            <b>Linux Command Line Certification</b>
            <br />
            <a href="https://www.linkedin.com/learning/certificates/49255db2c7fcd94422d9ae71fb653d69c461e1ff3957f6782a0c796021d481c5?trk=share_certificate">
              View Certificate
            </a>
          </React.Fragment>
        ),
      },
      {
        desc: (
          <React.Fragment>
            <b>Linux Files and Permissions Certification</b>
            <br />
            <a href="https://www.linkedin.com/learning/certificates/e2249069838bbb659a1e71e4142457a909cdccc1755cf8d6d37b0ccc53292b46?trk=share_certificate">
              View Certificate
            </a>
          </React.Fragment>
        ),
      },
    ],
  },
];
