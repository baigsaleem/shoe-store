import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "auto",
    margin: 0,
    width: "100%",
    height: "100%",
    position: "relative",

    "&:hover": {
      cursor: "pointer",
    },
  },
  media: {
    height: 300,

    [theme.breakpoints.down("md")]: {
      height: 200,
    },
    [theme.breakpoints.down("xs")]: {
      height: 120,
    },
  },

  cardContent: {
    display: "flex",
    justifyContent: "space-between",

    [theme.breakpoints.only("md")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.only("xs")]: {
      flexDirection: "column",
    },
  },

  h3ResponsiveText: {
    [theme.breakpoints.only("md")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "0.9rem",
    },
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
  },
}));

export const shoes = {
  "air-jordan-3-valor-blue": {
    name: "VALOUR BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "jordan-mars-270-london": {
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "RACER BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "space-hippie-04": {
    name: "SPACE HIPPIE",
    img:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/c12e1cec-b4f3-48e1-ad24-83fba292caed/space-hippie-04-mens-shoe-gGWDLk.jpg",
  },
  "kyrie-rayguns-07": {
    name: "RAYGUNS BASKETBALL",
    img:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/4253255a-52d4-4a14-815d-d963912bbb0a/kyrie-7-rayguns-basketball-shoe-5Kj9Lr.jpg",
  },
  "air-max-3-mens-shoe": {
    name: "AIR MAX 3",
    img:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/be99c6a9-9f46-4fe7-b85a-4970d4c1fce9/air-max-3-mens-shoe-zWF1sC.jpg",
  },
};

const Products = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.root}>
      {Object.entries(shoes).map(([slug, { name, img }]) => (
        <Grid key={slug} item xs={6} md={4}>
          <Card className={classes.root}>
            <Link to={`/products/${slug}`}>
              <CardMedia className={classes.media} image={img} title={name} />
              <CardContent className={classes.cardContent}>
                <div style={{ width: "100%" }}>
                  <div className={classes.row}>
                    <Typography
                      variant="h6"
                      component="h3"
                      className={classes.h3ResponsiveText}
                    >
                      {name}
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Link>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
