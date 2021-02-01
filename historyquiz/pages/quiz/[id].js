import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/components/screens/Quiz';

// eslint-disable-next-line react/prop-types
export default function QuizDaGaleraPage({ dbExterno }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizScreen
        externalQuestions={dbExterno.questions}
        externalBg={dbExterno.bg}
      />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const dbExterno = await fetch('https://chessquiz-alura.leo0liveira.vercel.app/api/db')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Falha no engano');
    })
    .then((responseToObject) => responseToObject)
    .catch((err) => {
      // console.log(err);
    });

  // console.log('dbExterno', dbExterno);

  return {
    props: {
      dbExterno,
    },
  };
}
