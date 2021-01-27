import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter, useState } from 'next/router';

import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head />
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>
              {'📜  '}
              {db.title}
              {' '}
            </h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              {' '}
              {db.description}
              {' '}
            </p>
            <form onSubmit={(e) => {
              e.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Qual seu nome?"
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar como
                {' '}
                {name.length === 0 ? '...' : name}
              </button>

            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content />
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/lucas0liveira/" />
    </QuizBackground>

  );
}
