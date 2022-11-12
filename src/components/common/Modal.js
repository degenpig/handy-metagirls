import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

import { IPFS_URL1, IPFS_URL2, IPFS_URL3 } from "../../utils/config";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "rgba(0, 0, 0, 0.7)",
  border: "1px solid #fff",
  boxShadow: 24,
  p: 4,
  color: "#fff",
};

export default function TransitionsModal({ open, setOpen, id, address }) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              textAlign="center"
            >
              Congratulations!
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{ mt: 2 }}
              textAlign="center"
            >
              You have successfully mint NFT.
            </Typography>
            <br />
            {id ? (
              <img
                alt="Your New NFT"
                src={
                  id <= 5447
                    ? `${IPFS_URL1}${id}.png`
                    : parseInt(id) <= 5547
                    ? `${IPFS_URL2}${id - 5447}.png`
                    : `${IPFS_URL3}${id - 5547}.png`
                }
                style={{ width: "100%" }}
              />
            ) : (
              <></>
            )}
            <Typography textAlign="center">Token : #{parseInt(id)}</Typography>
            <Typography textAlign="center">Owner : {address}</Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
