import React from "react";
import { Container, Typography } from "@material-ui/core";

const About = () => {
  return (
    <Container>
      <br />
      <br />
      <br />
      <br />
      <Typography variant="h3" gutterBottom>
        About
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>PROJECT AT A GLANCE</strong> <br />
        This Shoe Store App is created just for the purpose of learning React
        Library of Javascript. The aim of this site is to create a Single Page
        Application for a shoe store. The site pages and products i.e shoes are
        linked using React Router, a new feature added to React library of
        javascript. The appearance is mostly done using material ui which is
        also a feature of the react library. The products shown on the site are
        under copyright and hence there is no any intention for using them for
        selling products online rather it is just used for experimental purpose
        in order to learn and implement React native in web development.
      </Typography>
    </Container>
  );
};

export default About;
