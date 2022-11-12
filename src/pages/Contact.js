import * as React from "react";

import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Grow from "@mui/material/Grow";

import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import { useOnceEffect } from "../components/common/CustomHook";
import UserContext from "../components/common/UserContext";

const style = {
  section: {
    backgroundColor: "#FFE3E1",
  },
  box: {
    width: "100%",
    height: "225px",
  },
  h1: {
    color: "#ad333c",
    fontSize: "40px",
    lineHeight: "1.35em",
    fontWeight: "100",
    textAlign: "center",
    marginBottom: 0,
  },
};

export default function Contact() {
  const userContext = React.useContext(UserContext);
  useOnceEffect(() => {
    userContext.setIsMintPage(false);
  }, []);
  return (
    <Grow in={true}>
      <section style={style.section}>
        <Grid
          container
          justifyContent="center"
          direction="column"
          style={style.box}
        >
          <Grid container item xs={4} justifyContent="center">
            <h1 style={style.h1}>Contact</h1>
          </Grid>
          <Grid container item xs={4} justifyContent="center">
            <IconButton
              variant="text"
              color="success"
              href="https://discord.gg/E222ymXmZe"
              target="_blank"
            >
              <SportsEsportsIcon />
            </IconButton>
            <IconButton
              variant="text"
              color="secondary"
              href="https://twitter.com/HandyMetaGirls"
              target="_blank"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              variant="text"
              color="error"
              href="https://www.instagram.com/handymetagirls/"
              target="_blank"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              variant="text"
              color="primary"
              href="https://www.facebook.com/profile.php?id=100084245494629"
              target="_blank"
            >
              <FacebookIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <img alt="landing" src="../img/landing.jpg" width={"100%"} />
        </Grid>
      </section>
    </Grow>
  );
}
