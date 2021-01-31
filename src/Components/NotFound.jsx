import React from "react";
import { Container, Typography } from "@material-ui/core";

const NotFound = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Opps...!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Sorry Page not found.
      </Typography>
    </Container>
  );
};

export default NotFound;
