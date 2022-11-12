import * as React from "react";
import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SailingIcon from "@mui/icons-material/Sailing";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

import UserContext from "../common/UserContext";
import Wallet from "../common/Wallet";

const style = {
  grid: {
    backgroundColor: "#FFD1D1",
    paddingBottom: "10px",
  },
};

export default function SimpleBottomNavigation() {
  const userContext = React.useContext(UserContext);
  return (
    <Grid container justifyContent="center" style={style.grid}>
      <Grid
        container
        item
        xs={11}
        justifyContent="right"
        sx={{ marginTop: "20px" }}
      >
        <Wallet />
      </Grid>
      <Grid container item xs={11} sx={{ marginTop: "10px" }}>
        <Grid container item xs={5} spacing={2} alignItems="center">
          <Grid item>
            <Link className="main-color" to="/home">
              HOME
            </Link>
          </Grid>
          <Grid item>
            <Link className="main-color" to="/about">
              ABOUT
            </Link>
          </Grid>
          <Grid item>
            <Link className="main-color" to="/roadmap">
              ROADMAP
            </Link>
          </Grid>
          <Grid item>
            <Link className="main-color" to="/faqs">
              FAQS
            </Link>
          </Grid>
          <Grid item>
            <Link className="main-color" to="/contact">
              TEAM
            </Link>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={2}
          justifyContent={"center"}
          alignItems="center"
        >
          {userContext.isMintPage ? (
            <></>
          ) : (
            <Link to="/mint">
              <Button
                variant="contained"
                color="error"
                style={{ fontFamily: "Montserrat" }}
              >
                Mint Now
              </Button>
            </Link>
          )}
        </Grid>
        <Grid
          container
          item
          xs={5}
          justifyContent="right"
          alignItems="center"
          spacing={2}
        >
          <IconButton
            variant="text"
            color="error"
            href="https://handymetagirls.gitbook.io/whitepaper/"
            target="_blank"
            size="small"
          >
            WHITEPAPER
          </IconButton>
          <IconButton
            variant="text"
            color="error"
            href="http://artreiz.com/MetaGirls/"
            target="_blank"
            size="small"
          >
            GAME
          </IconButton>
          <IconButton
            variant="text"
            color="error"
            href="https://opensea.io/collection/handymetagirlshmg"
            target="_blank"
          >
            <SailingIcon />
          </IconButton>
          <IconButton
            variant="text"
            color="error"
            href="https://discord.gg/E222ymXmZe"
            target="_blank"
          >
            <SportsEsportsIcon />
          </IconButton>
          <IconButton
            variant="text"
            color="error"
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
            color="error"
            href="https://www.facebook.com/profile.php?id=100084245494629"
            target="_blank"
          >
            <FacebookIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
}
