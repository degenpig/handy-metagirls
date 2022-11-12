/* eslint-disable no-template-curly-in-string */
import * as React from "react";

import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";
import Button from "@mui/material/Button";

import { useOnceEffect } from "../components/common/CustomHook";
import UserContext from "../components/common/UserContext";
import Modal from "../components/common/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { ethers } from "ethers";
import { hasEthereum } from "../utils/ethereum";
import { abi } from "../utils/abi";
import {
  CONTRACT_ADDRESS,
  IPFS_URL1,
  IPFS_URL2,
  IPFS_URL3,
  TOTAL,
  MINT_TIME
} from "../utils/config";

const style = {
  section: {
    backgroundColor: "#FFE3E1",
    display: "flex",
  },
  gird: {
    paddingBottom: "20px",
  },
  h2: {
    color: "#ad333c",
    fontSize: "30px",
    lineHeight: "1.35em",
    textAlign: "center",
    marginBottom: 0,
  },
  h1: {
    color: "#d32f2f",
    fontSize: "35px",
    lineHeight: "1.35em",
    textAlign: "center",
    margin: 0,
  },
  img: {
    width: "20%",
    borderRadius: "10px",
  },
  p: {
    color: "#ad333c",
  },
  box: {
    display: "block",
  },
  sidebar: {
    backgroundColor: "#f4c6c3",
    padding: "10px",
    maxHeight: "535px",
    overflowY: "scroll",
  },
  nftbox: {
    // minHeight: "300px",
  },
  nftImage: {
    width: "100%",
    borderRadius: "10px",
  },
};

export default function Contact() {
  const userContext = React.useContext(UserContext);

  console.log(Date.now(), MINT_TIME)

  const [open, setOpen] = React.useState(false);
  const [tokenId, setTokenId] = React.useState(0);
  const [owner, setOwner] = React.useState("none");
  const [nfts, setNfts] = React.useState([]);
  const [cost, setCost] = React.useState(0);
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [totalMinted, setTotalMinted] = React.useState(0);
  const [isWL, setIsWL] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);

  useOnceEffect(() => {
    userContext.setIsMintPage(true);
    // getTotalSupply();
    // getTotalValue();
    // setLoading(false);
  }, []);

  useOnceEffect(() => {
    if (!loading) {
      getTotalSupply();
      if (!userContext.connected) {
        setMessage("You must connect the wallet");
      } else {
        setMessage("My NFT");
        getNftsOfCurrentWallet();
      }
    }
  }, [userContext.connected, loading]);

  // Get total supply of tokens from smart contract
  async function getTotalSupply() {
    try {
      // Fetch data from contract
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, provider);
      const data = await contract.totalSupply();

      setTotalMinted(data.toNumber());
    } catch (error) {
      console.log(error);
    }
  }

  // Get total value collected by the smart contract
  // async function getTotalValue() {
  //   try {
  //     const data = await contract.getBalance();

  //     setTotalValue(ethers.utils.formatEther(data).toString());
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // Get NFTs owned by current wallet
  async function getNftsOfCurrentWallet() {
    if (!hasEthereum()) return;

    try {
      // Fetch data from contract
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, provider);
      const address = await signer.getAddress();
      // For each token owned, get the tokenId
      const tokenIds = await contract.tokensOfOwner(address);
      console.log(tokenIds);
      let cost = await contract.price(address);
      cost = parseInt(cost) / 1000000000000000;
      setCost(cost);
      if (tokenIds.length) {
        setMessage("My NFT");
        setNfts(tokenIds);
      } else {
        if (!cost % 9) {
          setMessage(
            `You are in WhiteList. So you can mint NFT with ${cost / 1000} eth.`
          );
          setIsWL(true);
        } else {
          setMessage(
            `You aren't in WhiteList. So you can mint NFT with ${cost / 1000
            } eth.`
          );
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Mint NFTs owned by current wallet
  async function mintNft() {
    if (!hasEthereum()) return;

    try {
      // Fetch data from contract
      setLoading(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, provider);

      await contract.connect(signer).Mint(quantity, {
        value: ethers.utils.parseEther(((cost / 1000) * quantity).toString()),
        gasLimit: "1000000",
      });

      contract.on("Transfer", (from, to, tokenId) => {
        setOwner(to);
        setTokenId(parseInt(tokenId));
        setOpen(true);
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  const handleClick = async () => {
    await mintNft();
    // axios.defaults.baseURL =
    //   window.location.protocol + "//" + window.location.hostname + ":3004";
    // axios.post("/api/mintsignin");
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setQuantity(e.target.value);
  };

  return (
    <Grow in={true}>
      <section style={style.section}>
        <Modal open={open} setOpen={setOpen} id={tokenId} address={owner} />
        <Grid
          container
          justifyContent="center"
          direction="column"
          style={style.box}
          item
          xs={10}
        >
          <Grid
            container
            item
            xs={4}
            justifyContent="center"
            style={style.gird}
          >
            <h1 style={style.h2}>
              {loading ? "Loading..." : `${totalMinted}/${TOTAL}`}
            </h1>
          </Grid>
          <Grid
            container
            item
            xs={4}
            justifyContent="center"
            style={style.gird}
          >
            <img alt="logo" src="../img/mint-logo.gif" style={style.img} />
          </Grid>
          <Grid
            container
            item
            xs={6}
            justifyContent="center"
            style={style.gird}
          >
            <p style={style.p}>
              The launch of 5,555 Handy Meta Girls NFT to whitelisted members
              and to the public.
            </p>
          </Grid>
          <Grid
            container
            item
            xs={4}
            justifyContent="center"
            style={style.gird}
          >
            <FormControl sx={{ m: 1, minWidth: 80 }} error>
              <InputLabel id="demo-simple-select-error-label" style={{ fontFamily: "Montserrat" }}>
                Quantity
              </InputLabel>
              <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                value={quantity}
                label="Quantity"
                onChange={handleChange}
                disabled={!userContext.connected || loading || isWL}
                style={{ fontFamily: "Montserrat", height: "30px" }}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              color="error"
              disabled={!userContext.connected || loading || Date.now() / 1000 <= MINT_TIME}
              onClick={handleClick}
              style={{ fontFamily: "Montserrat" }}
            >
              Mint Now ({cost / 1000} eth)
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={2}
          style={style.sidebar}
          justifyContent="center"
          alignItems="center"
          className="scrollbar"
        >
          <Grid item xs={10}>
            <h1 style={style.h1}>{message}</h1>
          </Grid>
          {userContext.connected && nfts.length ? (
            <Grid container item xs={6}>
              {nfts.map((nft) => (
                <Grid item xs={12} style={style.nftbox} key={parseInt(nft)}>
                  <h2 style={style.h2}>{parseInt(nft)}</h2>
                  <img
                    alt={parseInt(nft)}
                    src={
                      parseInt(nft) <= 5447
                        ? `${IPFS_URL1}${parseInt(nft)}.png`
                        : parseInt(nft) <= 5547
                          ? `${IPFS_URL2}${parseInt(nft) - 5447}.png`
                          : `${IPFS_URL3}${parseInt(nft) - 5547}.png`
                    }
                    style={style.nftImage}
                  />
                </Grid>
              ))}
            </Grid>
          ) : (
            <></>
          )}
        </Grid>
        {/* </Grid> */}
      </section>
    </Grow >
  );
}
