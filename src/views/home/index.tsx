// Next, React
import { FC, useEffect, useState } from 'react';
import * as React from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import pkg from '../../../package.json';
import { RequestAirdrop } from '../../components/RequestAirdrop';
import { SendTransaction } from '../../components/SendTransaction';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions,TextField } from '@mui/material';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();
  
  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  const [inputValue, setInputValue] = useState(null);

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  }

  return (

    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <h1 className="text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
          Solana  Fiat  <span className='text-sm font-normal align-top text-slate-700'></span>
        </h1>
        <h4 className="md:w-full text-center text-slate-300 my-2">
          <p>Simply the fastest way to get to pay with solana blockchain</p>
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
        <Button size="small" color="primary"  onClick={handleOpen}>
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
          id="outlined-basic" label="Input your sol want to convert" variant="outlined" onChange={handleChange} type="number"/>
          {/* <TextField id="filled-basic" label="Estimate USD" variant="filled" />
          <p />
           */}
           <h4> Price at this time </h4>
           <h4 className="md:w-full text-center text-slate-300 my-2">
          <p>estimate to usd</p>
        </h4>
          {/* <Button onClick={handleClose}>Convert</Button> */}
          <SendTransaction inputValue={inputValue}/>
        </Box>
      </Modal>

        {/* <SendTransaction /> */}
      </CardActions>
    </Card>


        <div className="text-center">
          {/* <RequestAirdrop />
          {wallet.publicKey && <p>Public Key: {wallet.publicKey.toBase58()}</p>}
          {wallet && <p>SOL Balance: {(balance || 0).toLocaleString()}</p>} */}
          
        </div>
      </div>
    </div>
  );
};
