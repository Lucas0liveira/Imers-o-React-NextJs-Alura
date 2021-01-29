import styled from 'styled-components';
import React from 'react';
import Widget from '../Widget';

// total 350w 570h
// header 348w 52h
// img 348w 150h
// content 348w 385h
// h2 284w 32h
// topic 254w 38h
// btn 284w 34h

const Load = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    overflow:hidden;

    *{
      background-color: #032842;
      border-radius: 4px;
      @keyframes slide {
        0% {background-color: #032842}
        40% {background-color: #001524}
        100% {background-color: #032842}
      }
      animation-name: slide;
      animation-duration: 1s;
      animation-iteration-count:infinite;
    }

    .header {
      width: 358px;
      height: 48px;
      animation-delay:0.1s;
    }

    .img {
      width: 358px;
      height: 150px;
      animation-delay:0.2s;
    }

    .h2 {
      width: 284px;
      height: 64px;
      margin-top:42px;
      margin-bottom:18px;
      animation-delay:0.3s;
    }

    .topic {
      width: 284px;
      height: 38px;
      margin-bottom: 8px;
      animation-delay:0.4s;
    }

    .button {
      width: 284px;
      height: 34px;
      margin-top: 32px;
      animation-delay:0.5s;
    }
`;

export default function LoadingWidget() {
  return (
    <Widget style={{ height: '594px', border: 'none' }}>
      <Load>
        <div className="header" />
        <div className="img" />
        <div className="h2" />
        <div className="topic" />
        <div className="topic" />
        <div className="topic" />
        <div className="topic" />
        <div className="button" />
      </Load>
    </Widget>
  );
}
