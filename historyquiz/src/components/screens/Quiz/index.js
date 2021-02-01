/* eslint-disable eqeqeq */
/* eslint-disable react/prop-types */
import React from 'react';
import Widget from '../../Widget';
import QuizLogo from '../../QuizLogo';
import QuizBackground from '../../QuizBackground';
import QuizContainer from '../../QuizContainer';
import Button from '../../Button';
import AlternativesForm from '../../AlternativesForm';
import LoadingWidget from '../../LoadingWidget';

function ResultWidget({ results }) {
  return (
    <Widget
      style={{
        height: '570px',
      }}
    >
      <Widget.Header>
        <h2>Score Final</h2>
      </Widget.Header>

      <Widget.Content>
        Você acertou
        {' '}
        {results.reduce((somatoriaAtual, resultAtual) => {
          const isAcerto = resultAtual === true;
          if (isAcerto) {
            return somatoriaAtual + 1;
          }
          return somatoriaAtual;
        }, 0)}
        {' '}
        perguntas!
        <ul>
          {results.map((result, index) => (
            <li key={`result_${result}`}>
              {index + 1}
              º Questão:
              {' '}
              {result === true ? 'Acertou' : 'Errou'}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question, totalQuestions, questionIndex, onSubmit, addResults,
}) {
  const [selected, setSelected] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const isCorrect = selected === question.answer - 1;

  return (
    <Widget>
      <Widget.Header>
        <h3>
          {' '}
          Pergunta
          {' '}
          {questionIndex + 1}
          {' '}
          de
          {` ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <img
        alt="Imagem pergunta"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />

      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <AlternativesForm
          onSubmit={(e) => {
            e.preventDefault();
            setIsQuestionSubmited(true);
            setTimeout(() => {
              addResults(isCorrect);
              onSubmit();
              setIsQuestionSubmited(false);
              setSelected(undefined);
            }, 0.8 * 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const selectedalternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';

            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={alternativeIndex === selected}
                data-status={isQuestionSubmited && selectedalternativeStatus}
              >
                <input
                  disabled={alternativeIndex != selected && alternativeIndex == -1}
                  onChange={() => setSelected(alternativeIndex)}
                  checked={alternativeIndex == selected}
                  style={{ display: 'none' }}
                  id={alternativeId}
                  // name={questionId}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          <Button type="submit" disabled={selected === undefined}>
            Confirmar
          </Button>

        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};
export default function QuizPage({ externalQuestions, externalBg}) {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [results, setResults] = React.useState([]);
  const totalQuestions = externalQuestions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = externalQuestions[questionIndex];

  function addResults(result) {
    setResults([
      ...results,
      result,
    ]);
  }

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1.2 * 1000);
  });

  function handleSubmit() {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={externalBg}>
      <QuizContainer>
        <QuizLogo />
        { screenState === screenStates.QUIZ && (
        <QuestionWidget
          question={question}
          totalQuestions={totalQuestions}
          questionIndex={questionIndex}
          onSubmit={handleSubmit}
          addResults={addResults}
        />
        )}
        {screenState === screenStates.LOADING && <LoadingWidget />}
        {screenState === screenStates.RESULT && <ResultWidget results={results} />}
      </QuizContainer>
    </QuizBackground>
  );
}
