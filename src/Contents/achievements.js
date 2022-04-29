import React from "react";
import aiiot from "../Contents/aiiot.pdf";

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
];
