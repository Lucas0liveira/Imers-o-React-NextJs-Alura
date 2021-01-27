import React from 'react';
import db from '../../../db.json';

export default function Head() {
  return (
    <>
      <title>History Quiz</title>
      <meta name="title" content="History Quiz" />
      <meta name="description" content="Um pequeno Quiz sobre História com H maiúsculo. Vamos ver o quanto você sabe sobre os eventos e pessoas que, de um jeito ou de outro, nos trouxeram até aqui." />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://historyquiz.vercel.app/" />
      <meta property="og:title" content="History Quiz" />
      <meta property="og:description" content="Um pequeno Quiz sobre História com H maiúsculo. Vamos ver o quanto você sabe sobre os eventos e pessoas que, de um jeito ou de outro, nos trouxeram até aqui." />
      <meta property="og:image" content={db.bg} />
      <div>
        Icons made by
        <a href="https://www.freepik.com" title="Freepik">Freepik</a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </div>

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://historyquiz.vercel.app/" />
      <meta property="twitter:title" content="History Quiz" />
      <meta property="twitter:description" content="Um pequeno Quiz sobre História com H maiúsculo. Vamos ver o quanto você sabe sobre os eventos e pessoas que, de um jeito ou de outro, nos trouxeram até aqui." />
      <meta property="twitter:image" content={db.bg} />
    </>
  );
}
