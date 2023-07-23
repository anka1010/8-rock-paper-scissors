import { useState } from "react";

export default function App() {
  return (
    <div className="container">
      <Game />
      <Rules />
    </div>
  );
}

// GAME
function Game() {
  return (
    <div className="game">
      <Header />
      <Main />
    </div>
  );
}

// HEADER
function Header() {
  return (
    <div className="header">
      <img src="./img/logo.svg" alt="Rock, Paper, Scissors" />
      <Score />
    </div>
  );
}

function Score() {
  return (
    <div className="score">
      <p className="score-text">score</p>
      <p className="score-number">12</p>
    </div>
  );
}

// MAIN
function Main() {
  const [userPick, setUserPick] = useState();
  const [housePick, setHousePick] = useState();

  // if (!userPick)
  return (
    <div className="main">
      <Scene1 onUserPick={setUserPick} />
      <Scene2 />
    </div>
  );
}

function Scene1({ onUserPick }) {
  return (
    <div className="scene-1">
      <button className="btn rock" onClick={() => onUserPick("rock")}></button>
      <button
        className="btn paper"
        onClick={() => onUserPick("paper")}
      ></button>
      <button
        className="btn scissors"
        onClick={() => onUserPick("scissors")}
      ></button>
    </div>
  );
}

function Scene2() {
  return (
    <div className="scene-2">
      <div>
        <h2>You picked</h2>
        <button className="btn rock"></button>
      </div>
      <div>
        <h2>The house picked</h2>
        <button className="btn scissors"></button>
      </div>
    </div>
  );
}
function Scene3() {}
function Scene4() {}
function Scene5() {}

// RULES
function Rules() {
  return <div className="rules">Rules</div>;
}
