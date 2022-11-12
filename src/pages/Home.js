import * as React from "react";
import { useState } from "react";

import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";

import { useOnceEffect } from "../components/common/CustomHook";
import UserContext from "../components/common/UserContext";

import Faqs from "./Faqs";
import Roadmap from "./Roadmap";
import Contact from "./Contact";

import { MINT_TIME } from "../utils/config";
import "./Home.css";

const toTimestamp = (strDate) => {
  var datum = Date.parse(strDate);
  return datum / 1000;
};

export default function Home() {
  const userContext = React.useContext(UserContext);

  useOnceEffect(() => {
    userContext.setIsMintPage(false);
  }, []);

  const end = MINT_TIME;
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [mins, setMins] = useState("");
  const [secs, setSecs] = useState("");

  useOnceEffect(() => {
    // if (end >= Math.trunc(Date.now() / 1000)) {
    //   const intervalId = setInterval(() => {
    //     remainTime(end - Math.trunc(Date.now() / 1000));
    //   }, 1000);
    //   return () => clearInterval(intervalId);
    // }
  }, []);

  const remainTime = (seconds) => {
    if (Math.trunc(seconds / 86400) < 10)
      setDays("0" + Math.trunc(seconds / 86400));
    else setDays(Math.trunc(seconds / 86400));
    seconds %= 86400;

    if (Math.trunc(seconds / 3600) < 10)
      setHours("0" + Math.trunc(seconds / 3600));
    else setHours(Math.trunc(seconds / 3600));
    seconds %= 3600;

    if (Math.trunc(seconds / 60) < 10) setMins("0" + Math.trunc(seconds / 60));
    else setMins(Math.trunc(seconds / 60));
    seconds %= 60;

    if (seconds < 10) setSecs("0" + seconds);
    else setSecs(seconds);
  };

  return (
    <Grow in={true}>
      <div>
        <section>
          <Grid container>
            <Grid container item xs={12}>
              <img alt="landing" src="../img/landing.jpg" width={"100%"} />
            </Grid>
            <Grid container alignItems={"center"} justifyContent="center">
              <Grid container item xs={6} justifyContent="center">
                <h1 className="post-title main-color">
                  We Are Handy Meta Girls
                </h1>
              </Grid>
              <Grid container item xs={8} justifyContent="center">
                <p className="post-description main-color">
                  A 5,555 NFT collection exploring the Ethereum blockchain.
                  Handy Meta Girls will serve as a bridge for everyone to bring
                  the women's fashion industry into the metaverse.
                </p>
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid container className="time-grid">
            <div className="time-box">
              <div className="days">
                <div className="time-number time-block-label">{days}</div>
                <div className="time-text time-block-label">Days</div>
              </div>
              <div className="separator">:</div>
              <div className="hours">
                <div className="time-number time-block-label">{hours}</div>
                <div className="time-text time-block-label">Hours</div>
              </div>
              <div className="separator">:</div>
              <div className="mins">
                <div className="time-number time-block-label">{mins}</div>
                <div className="time-text time-block-label">Mins</div>
              </div>
              <div className="separator">:</div>
              <div className="secs">
                <div className="time-number time-block-label">{secs}</div>
                <div className="time-text time-block-label">Secs</div>
              </div>
            </div>
          </Grid> */}
        </section>
        <section>
          <Grid container className="main-content">
            <Grid container className="grid">
              <Grid item xs={6}>
                <Grid container justifyContent="center">
                  <h1>Handy Meta Girls Details</h1>
                  <Grid item xs={7.5}>
                    <span>
                      We are artists. We are visionaries. We are here to bring
                      Handy Meta Girls to planet earth. Our latest collection is
                      born from unique avatars that have been living rent-free
                      in our imagination and are ready to make their jump to the
                      screen. Handy Meta Girls are interested in the
                      construction industry, the connection of ordinary life
                      with the metaverse. Find them on the blockchain and
                      discover your favorite characters. Scroll through our
                      site, pick your NFT and connect your wallet for a valuable
                      and safe purchase.
                    </span>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <img
                  src="../img/IMG-20220822-WA0001.webp"
                  alt="Woman in Swimsuit"
                  className="img-women"
                />
              </Grid>
            </Grid>
            <Grid container className="grid">
              <Grid item xs={6}>
                <Grid container justifyContent="center" spacing={5}>
                  <h1>Our Founder: Maria</h1>
                  <Grid item xs={7.5}>
                    <span>
                      Our amazing founder who is building the Handy Meta Girls
                      has been working all her life to establish herself within
                      the space. She is from Ukraine and has spent several years
                      of her life in the USA and as of now is living in Slovakia
                      with her family making sure Handy Meta Girls are amazing!
                    </span>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <img
                  src="../img/IMG-20220822-WA0002.jpg"
                  alt="founder"
                  className="img-founder"
                />
              </Grid>
            </Grid>
            <Grid container className="grid">
              <Grid
                container
                item
                xs={4}
                justifyContent="center"
                alignItems="center"
              >
                <img src="../img/dress-up.png" alt="app" className="img-game" />
              </Grid>
              <Grid item xs={8}>
                <Grid container justifyContent="center" spacing={5}>
                  <h2>Handy Meta Girls Game</h2>
                  <Grid item xs={10}>
                    <span>
                      Handy Meta Girls game will be the main priority in our
                      roadmap. Unlike other NFT projects, our goal is to develop
                      and deliver the game to everyone right before our minting
                      period.
                    </span>
                    <br />
                    <span>
                      It is a free-to-play fashion-themed with a mini-racing
                      game for everyone and holders get special in-game rewards.
                      And by the way, coins earned from this game can be used in
                      our E-shop as well!
                    </span>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </section>
        <Roadmap />
        <Faqs />
        <Contact />
      </div>
    </Grow>
  );
}
