import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';

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
                name="nomeDoUsuario"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Qual seu nome?"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                Vamos jogar
                {name.length === 0 ? ' ...' : `, ${name}!`}
              </Button>

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
