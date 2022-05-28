// Next, React
import { FC, useEffect, useState, useRef } from "react";
import * as React from "react";
import Link from "next/link";

// Wallet
import { useWallet, useConnection } from "@solana/wallet-adapter-react";

// Components
import pkg from "../../../package.json";
import { RequestAirdrop } from "../../components/RequestAirdrop";
import { SendTransaction } from "../../components/SendTransaction";

// Store
import useUserSOLBalanceStore from "../../stores/useUserSOLBalanceStore";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, TextField } from "@mui/material";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import axios from "axios";

export const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export const HomeView: FC = ({}) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance);
  const { getUserSOLBalance } = useUserSOLBalanceStore();
  const valueRef = useRef(null);

  const [solPrice, setSolPrice] = useState(0);

  const today = new Date();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  useEffect(() => {
    const performRequest = () =>
      axios
        .get(`https://api.binance.com/api/v3/ticker/price?symbol=SOLUSDT`)
        .then((response) => {
          console.log("call sol price");
          const solPriceUsd = response.data.price;
          setSolPrice(solPriceUsd);
        });

    const price = setInterval(performRequest, 5000); // Every 5 seconds?
    performRequest(); // Initial request

    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58());
      getUserSOLBalance(wallet.publicKey, connection);
    }

    return () => {
      // Don't forget to cleanup the interval when this effect is cleaned up.
      clearInterval(price);
    };
  }, [wallet.publicKey, connection]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const connectToWallet = () => {
    console.log("connect to wallet");
  };

  console.log("balance: ", balance);

  if (wallet.publicKey) {
    console.log("111: tttt ");

    return (
      <div className="md:hero mx-auto p-4">
        <div className="md:hero-content flex flex-col">
          <h1 className="text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
            Solana Fiat{" "}
            <span className="text-sm font-normal align-top text-slate-700"></span>
          </h1>
          <h4 className="md:w-full text-center text-slate-300 my-2">
            <p>Simply the fastest way to get to pay with solana blockchain</p>
            <p>Pay anywhere and anytime with solana </p>
          </h4>

          
          <div className="text-center">
            {/* <RequestAirdrop />
            {wallet.publicKey && <p>Public Key: {wallet.publicKey.toBase58()}</p>}
            {wallet && <p>SOL Balance: {(balance || 0).toLocaleString()}</p>} */}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <h1 className="text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
          Solana Fiat{" "}
          <span className="text-sm font-normal align-top text-slate-700"></span>
        </h1>
        <h4 className="md:w-full text-center text-slate-300 my-2">
          <p>
            Simply the fastdddddddest way to get to pay with soest way to get to
            pay with soto pay with solana blockchain
          </p>
          <p>Pay anywhere and anytime with solana </p>
        </h4>

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
            <Button size="small" color="primary" onClick={connectToWallet}>
              Create New Card
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};
