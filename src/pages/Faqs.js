import * as React from "react";

import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";

import Popover from "../components/common/Popover";
import { useOnceEffect } from "../components/common/CustomHook";
import UserContext from "../components/common/UserContext";

const style = {
  section: {
    backgroundColor: "#FFE3E1",
  },
  grid: {
    backgroundColor: "rgba(255, 0, 0, 0.2)",
    height: "200px",
    width: "100%",
    position: "absolute",
  },
  box: {
    margin: 0,
    marginTop: "30px",
    color: "#ad333c",
    fontSize: "40px",
    lineHeight: "1.35em",
    padding: "0px",
  },
  bg: {
    backgroundImage: "url('../img/faq-bg.webp')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    height: "200px",
  },
  h1: {
    color: "#fff",
    fontSize: "40px",
    lineHeight: "1.35em",
    textAlign: "center",
    margin: 0,
    fontWeight: "bold",
    marginBottom: "15px",
  },
};

export default function Faqs() {
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
          alignItems="center"
          style={style.grid}
        >
          <h1 style={style.h1}>FAQs</h1>
        </Grid>
        <Grid style={style.bg}></Grid>
        <Grid container justifyContent="center" style={style.box}>
          <Grid item>
            <h1>Frequently Asked Questions</h1>
          </Grid>
          <Grid item container xs={8}>
            <Grid item xs={12}>
              <Popover
                num="01"
                label="What's an NFT?"
                description="An NFT is a “non-fungible token” which is just a complicated way of saying it’s a unique digital item that people can buy, own and trade. Think of it as a digital collectible. A lot of NFTs are just cool pieces of digital art, but some have extra utility like exclusive access to websites, communities, or other perks."
              />
            </Grid>
            <Grid item xs={12}>
              <Popover
                num="02"
                label="Why should we buy Handy Meta Girls NFT?"
                description="Being a holder of our NFT comes with a lot of benefits which include being entitled to our future airdrops, access to our Handy Meta Girls game, discount to our E-shop where everyone can buy merchandise about Handy Meta Girls, participate to clothing design contest, and many more."
              />
            </Grid>
            <Grid item xs={12}>
              <Popover
                num="03"
                label="How can I buy Handy Meta Girls NFTs?"
                description="First, you need an Ethereum wallet. A popular one is MetaMask wallet - it is available as a Chrome browser or a mobile app for iOS and Android. When you install the app, you will be prompted to create a wallet that can be used to mint."
              />
            </Grid>
            <Grid item xs={12}>
              <Popover
                num="04"
                label="When is the Mint Date?"
                description="The date of the launch of the mint for Handy Meta Girls will be on November 11th!"
              />
            </Grid>
            <Grid item xs={12}>
              <Popover
                num="05"
                label="What will the mint price & supply be?"
                description="The official supply of Handy Meta Girls will include a unique collection of 5555 NFTs, with a minting price of TBA!"
              />
            </Grid>
          </Grid>
        </Grid>
      </section>
    </Grow>
  );
}
