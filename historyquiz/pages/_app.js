import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>History Quiz</title>
        <meta name="title" content="History Quiz" />
        <meta name="description" content="Um pequeno Quiz sobre História com H maiúsculo. Vamos ver o quanto você sabe sobre os eventos e pessoas que, de um jeito ou de outro, nos trouxeram até aqui." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://historyquiz.vercel.app/" />
        <meta property="og:title" content="History Quiz" />
        <meta property="og:description" content="Um pequeno Quiz sobre História com H maiúsculo. Vamos ver o quanto você sabe sobre os eventos e pessoas que, de um jeito ou de outro, nos trouxeram até aqui." />
        <meta property="og:image" content={db.bg} />

        <link rel="shortcut icon" href={db.favicon} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://historyquiz.vercel.app/" />
        <meta property="twitter:title" content="History Quiz" />
        <meta property="twitter:description" content="Um pequeno Quiz sobre História com H maiúsculo. Vamos ver o quanto você sabe sobre os eventos e pessoas que, de um jeito ou de outro, nos trouxeram até aqui." />
        <meta property="twitter:image" content={db.bg} />

      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
