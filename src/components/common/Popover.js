import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Grid from "@mui/material/Grid";

const style = {
  h1: {
    marginLeft: "30px",
    fontSize: "25px",
    lineHeight: "1.35em",
    color: "rgb(173, 51, 60)",
    textTransform: "none",
    fontWeight: "bold",
    fontFamily: "Montserrat"
  },
  box: {
    width: 130,
    height: 105,
    color: "rgb(173, 51, 60)",
    fontSize: "50px",
    lineHeight: "1.35em",
    backgroundColor: "rgba(173, 51, 60, 0.15)",
    "&:hover": {
      backgroundColor: "primary.main",
      opacity: [0.9, 0.8, 0.7],
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  num: {
    fontWeight: "bold",
  },
  des: {
    fontSize: "18px",
    lineHeight: "1.75em",
    marginLeft: "100px",
  },
};

export default function BasicPopover({ num, label, description }) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button onClick={handleClick}>
        <Box style={style.box}>
          <div style={style.num}>{num}</div>
        </Box>
        <h1 style={style.h1}>{label}</h1>
      </Button>
      <Collapse in={open} timeout="auto" unmountOnExit style={style.collapse}>
        <Grid container item xs={12} justifyContent="center">
          <p style={style.des}>{description}</p>
        </Grid>
      </Collapse>
    </div>
  );
}
