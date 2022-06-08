/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { INTERNSHIP, COLLEGE, PERSONAL } from "../Contents/Constants/constants";
import github from "../Stylings/github32.png";

export const portfolio_internship = [
  {
    category: INTERNSHIP,
    company: "Taskmonk",
    project: {
      title: <b>GAGGLE</b>,
      desc: [
        {
          item: "Worked on building features for the app that was under development by the company",
        },
        {
          item: (
            <React.Fragment>
              Features were mainly associated with media handling for the app.{" "}
              <i>Some of them included:</i>
              <ul>
                <li>Creating the native Gallery component</li>
                <li>
                  Uploading images, videos, docs to the database using APIs
                  developed by the team
                </li>
                <li>Filtering and searching the files in the native gallery</li>
                <li>Developed the media player for the gallery, etc.</li>
                <li>Also developed git skills during the project</li>
              </ul>
            </React.Fragment>
          ),
        },
      ],
    },
  },
  {
    category: INTERNSHIP,
    company: "Taskmonk",
    project: {
      title: (
        <React.Fragment>
          <b>
            HOTEL BIDDING SYSTEM: <i>Minimum Viable Product</i>
          </b>
        </React.Fragment>
      ),
      desc: [
        {
          item: "Worked on building features for the app that was under development by the company",
        },
        {
          item: "Implemented using react, redux, python, flask(python), SQLite, Firebase, etc.",
        },
        {
          item: "Used POSTMAN for testing the APIs and developed REST APIs using Flask",
        },
        {
          item: "Designed database using SQLite and user authentication using Firebase APIs",
        },
        {
          item: "Front-end with react JS and used redux for maintaining state cycles for the product",
        },
      ],
    },
  },
];

export const portfolio_college = [
  {
    category: COLLEGE,
    company: "PES UNIVERSITY",
    project: {
      title: (
        <React.Fragment>
          <b>Movie recommendation application</b>
        </React.Fragment>
      ),
      desc: [
        {
          item: "Languages and Technologies used: Python, Flask, TensorFlow, HTML, CSS, Redis queue, Docker, Docker-compose, Tweepy",
        },
        {
          item: (
            <React.Fragment>
              <i>Features implemented:</i>
              <ul>
                <li>
                  Extract tweets based on a particular user account (of any
                  “news corporation” such as TOI) and count of tweets needed
                </li>
                <li>Extract only hyperlinks from these tweets</li>
                <li>
                  Summarize each hyperlink (extraction of the news article from
                  the provided hyperlinks)
                </li>
                <li>
                  Mask the latency by introducing worker queues (Redis queues)
                  to process the data in the background
                </li>
                <li>Detect the given summarized article’s emotion</li>
                <li>
                  Containerize the entire application and maintaining multiple
                  containers through docker compose
                </li>
              </ul>
            </React.Fragment>
          ),
        },
      ],
      reference: (
        <React.Fragment>
          <a
            href="https://github.com/gagan-mahesh/capstonephase2"
            class="btn card-logo-button"
          >
            <span>
              View in github <img src={github} alt="Github Image" />
            </span>
          </a>
        </React.Fragment>
      ),
    },
  },
];

export const portfolio_personal = [];
