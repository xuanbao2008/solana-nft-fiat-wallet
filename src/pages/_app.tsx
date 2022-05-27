import WalletContextProvider from 'contexts/WalletContextProvider';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import { AppBar } from '../components/AppBar';
import Notifications from '../components/Notification'

require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
          <Head>
            <title>Solana Scaffold Lite</title>
          </Head>

          <WalletContextProvider>
            <div className="flex flex-col h-screen">
              <Notifications />
              <AppBar/>
                <Component {...pageProps} />
            </div>
          </WalletContextProvider>
        </>
    );
};

export default App;
