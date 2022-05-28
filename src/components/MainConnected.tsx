import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { style } from "../views/home";
import { SendTransaction } from "./SendTransaction";

export type MainConnected = {
  handleOpen?: () => void;
  open?: boolean;
  handleClose?: () => void;
  valueRef?: any;
  time?: string;
  solPrice?: number | string;
};

export function MainConnected({
  handleOpen,
  open,
  handleClose,
  valueRef,
  time,
  solPrice,
}: MainConnected) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="static/solona_visa.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Solana Credit Card
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Create a credit card with instant time
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleOpen}>
          Create New Card
        </Button>

        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 300 }}>
            <h2 id="child-modal-title">Input Solona to convert to USD</h2>
            <TextField
              id="outlined-basic"
              label="Input sol want to convert"
              variant="outlined"
              inputRef={valueRef}
              type="number"
            />
            {/* <TextField id="filled-basic" label="Estimate USD" variant="filled" />
            <p />
             */}
            <h4 className="md:w-full text-center text-black my-2">
              Price at {time} as Binace exchange
            </h4>
            <h4 className="md:w-full text-center text-black my-2">
              SOL : UST {solPrice}{" "}
            </h4>
            <h4 className="md:w-full text-center text-black my-2"></h4>
            <p>estimate to usd</p>
            <h4 className="md:w-full text-center text-black my-2"></h4>
            <p>estimate to usd</p>

            {/* <Button onClick={handleClose}>Convert</Button> */}
            <SendTransaction inputValue={valueRef} />
          </Box>
        </Modal>

        {/* <SendTransaction /> */}
      </CardActions>
    </Card>
  );
}
