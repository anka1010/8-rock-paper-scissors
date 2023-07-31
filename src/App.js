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
  const [score, setScore] = useState(0);

  return (
    <div className="game">
      <Header score={score} />
      <Main />
    </div>
  );
}

// HEADER
function Header({ score, onScoreChange }) {
  return (
    <div className="header">
      <img src="./img/logo.svg" alt="Rock, Paper, Scissors" />
      <Score score={score} />
    </div>
  );
}

function Score({ score }) {
  return (
    <div className="score">
      <p className="score-text">score</p>
      <p className="score-number">{score}</p>
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
      {/* {!userPick && !housePick && <ScenePlay onUserPick={setUserPick} />} */}
      {/* {userPick && !housePick && <SceneUserPicked />} */}
      {/* {userPick && housePick && <SceneHousePicked />} */}
      {/* FIXME */}
      <ScenePlay onUserPick={setUserPick} />
      {/* <SceneUserPicked /> */}
      {/* <SceneHousePicked /> */}
      {/* <SceneUserLose /> */}
      {/* <SceneUserWin /> */}
    </div>
  );
}

// Play game, user choose
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

// User chose, show choice
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

// House chose, show choice
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

// User lose, show result
function SceneUserLose() {
  return <div className="scene-result"></div>;
}

// User win, show result
function SceneUserWin() {
  return <div>You win</div>;
}

// RULES
function Rules() {
  return <div className="rules">Rules</div>;
}
