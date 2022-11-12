import * as React from "react";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Grow from "@mui/material/Grow";

import { useOnceEffect } from "../components/common/CustomHook";
import UserContext from "../components/common/UserContext";

const style = {
  grid: {
    backgroundColor: "#fff8e9",
  },
  h1: {
    fontWeight: "bold",
    color: "#ad333c",
    font: "normal normal normal 40px/1.35em 'rozha one', serif",
    textAlign: "center",
  },
  img: {
    width: "100%",
  },
  p: {
    textAlign: "center",
    color: "#ad333c",
    font: "normal normal normal 18px/1.875em avenir-lt-w01_35-light1475496, avenir-lt-w05_35-light, sans-serif",
  },
};

const CustomButton = styled(Button)(() => ({
  color: "#ad333c",
  borderColor: "#ad333c",
  "&:hover": {
    color: "#FFF",
    backgroundColor: "#ad333c",
    borderColor: "#ad333c",
  },
}));

export default function SimpleBottomNavigation() {
  const userContext = React.useContext(UserContext);
  useOnceEffect(() => {
    userContext.setIsMintPage(false);
  }, []);
  return (
    <Grow in={true}>
      <Grid container>
        <Grid
          container
          alignItems={"center"}
          justifyContent="center"
          style={style.grid}
        >
          <Grid container item xs={6} justifyContent="center">
            <Grid item xs={8}>
              <h1 style={style.h1}>The Full Story</h1>
              <p style={style.p}>
                We are visionary pioneers who explore new opportunities in the
                digital world and pursue a way to combine conventional art with
                the magic of blockchain technology. Our latest collection has
                grown into one of the most popular collections in the Metaverse
                thanks to the quality artwork and intent behind it. We believe
                that together, we can make the world a better place, one NFT at
                a time.
              </p>
              <p style={style.p}>
                For us, blockchain is a safe and reliable platform where artists
                can share their art around the globe and beyond. Keep Handy Meta
                Girls going—join our growing community today. You’re one of us
                now.
              </p>
              <CustomButton variant="outlined">Get in Touch</CustomButton>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <img alt="logo" src="../img/04.png" style={style.img} />
          </Grid>
        </Grid>
      </Grid>
    </Grow>
  );
}
