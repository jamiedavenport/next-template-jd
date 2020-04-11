import React from 'react';
import { AppProps } from 'next/app';
import '../tailwind.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default App;
