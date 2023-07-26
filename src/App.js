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

  let result;

  return (
    <div className="main">
      {/* {!userPick && !housePick && <ScenePlay onUserPick={setUserPick} />}
      {userPick && !housePick && <SceneUserPicked />}
      {userPick && housePick && <SceneHousePicked />} */}
      <SceneUserLose />
      {/* <SceneUserWin /> */}
    </div>
  );
}

function ScenePlay({ onUserPick }) {
  return (
    <div className="scene-play">
      <button
        className="btn btn-active rock"
        onClick={() => onUserPick("rock")}
      ></button>
      <button
        className="btn btn-active paper"
        onClick={() => onUserPick("paper")}
      ></button>
      <button
        className="btn btn-active scissors"
        onClick={() => onUserPick("scissors")}
      ></button>
    </div>
  );
}

function SceneUserPicked() {
  return (
    <div className="scene-picked">
      <div>
        <h2>You picked</h2>
        <button className="btn scissors"></button>
      </div>
      <div>
        <h2>The house picked</h2>
        <button className="house-pick"></button>
      </div>
    </div>
  );
}

function SceneHousePicked() {
  return (
    <div className="scene-picked">
      <div>
        <h2>You picked</h2>
        <button className="btn scissors"></button>
      </div>
      <div>
        <h2>The house picked</h2>
        <button className="btn rock"></button>
      </div>
    </div>
  );
}

function SceneUserLose() {
  return <div className="scene-result"></div>;
}

function SceneUserWin() {
  return <div>You win</div>;
}

// RULES
function Rules() {
  return <div className="rules">Rules</div>;
}
