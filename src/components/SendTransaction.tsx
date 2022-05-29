import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { FC, useCallback } from 'react';
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { notify } from "../utils/notifications";
import { Keypair, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction, TransactionSignature } from '@solana/web3.js';
import axios from "axios";

export const SendTransaction = ({ inputValue }: { inputValue?: any }) => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    const onClick = useCallback(async () => {
        if (!publicKey) {
            notify({ type: 'error', message: `Wallet not connected!` });
            console.log('error', `Send Transaction: Wallet not connected!`);
            return;
        }

        // const pubKey = new PublicKey("7BzGMomgbswT6ynUmbkqA2mh2h9oGNgfKwfR2GrEmvRT");
        let signature: TransactionSignature = '';
        try {
            const destAddress = Keypair.generate().publicKey;
            // anything below this will fail, as this would be below the rent-exemption rate.
            const amount = (inputValue.current.value * LAMPORTS_PER_SOL) 
        
            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: publicKey,
                    toPubkey: destAddress,
                    lamports: amount,
                })
            );

            signature = await sendTransaction(transaction, connection);

            await connection.confirmTransaction(signature, 'confirmed');
            notify({ type: 'success', message: 'Transaction successful!', txid: signature });
            
            // const headers = { 
            //     "Content-Type": "application/json"
            // };

            // const body =  JSON.stringify({"funding_program_name": "card-product-fund"});

            // axios.post('http://localhost:3000/api/card_funding_source_creation', body, { headers })
            // .then(response => {
            //     console.log("get api response", response)
            // });
            
            const response = await fetch("http://localhost:3000/api/card_funding_source_creation", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({"funding_program_name": "card-product-fund"}),
                    
                });

                

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();

            const token = data.token
            
            // 

            const res = await fetch("http://localhost:3000/api/card_creation",
            {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({"funding_program_name": "card-product-fund"}),
                    
                });

                

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
                
            }
            this.props.setOpen(false)
            
        } catch (error: any) {
                notify({ type: 'error', message: `Transaction failed!`, description: error?.message, txid: signature });
                console.log('error', `Transaction failed! ${error?.message}`, signature);
                return;
            }
        }, [publicKey, notify, connection, sendTransaction]);
    
       
    return (
        <div>
            <button
                className="group w-60 m-2 btn animate-pulse disabled:animate-none bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ... "
                onClick={onClick} disabled={!publicKey}
            >
                <div className="hidden group-disabled:block ">
                    Wallet not connected
                </div>
                <span className="block group-disabled:hidden" > 
                    Create New Card With Your Solana
                </span>
            </button>
        </div>
    );
};
