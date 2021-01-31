import React from "react";
import { Container, Typography } from "@material-ui/core";

const Home = () => {
  return (
    <Container>
      <br />
      <br />
      <br />
      <br />
      <Typography variant="h3" gutterBottom>
        Home
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>WELCOME TO OUR SHOE STORE SITE</strong> <br />
        This site uses the Javascript's React Library and this current project
        created is for using React Router to link several pages of this site.
        This website contains a home, products and an about page which you can
        access by clicking on the icon's for these pages or you can click the
        menu button on the top to expand the Drawer, which is implemented using
        material ui feature of React. Click on the Product button to visit the
        product page where you can view our various shoes.
      </Typography>
    </Container>
  );
};

export default Home;
