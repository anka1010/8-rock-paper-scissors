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
      <Play />
    </div>
  );
}

// HEADER
function Header() {
  return (
    <div className="header">
      <img src="./img/logo.svg" alt="game name" />
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

// PLAY
function Play() {
  return (
    <div className="play">
      <Scene1 />
    </div>
  );
}

function Scene1() {
  return (
    <div>
      <button className="button">Button 1</button>
      <button className="button">Button 2</button>
      <button className="button">Button 3</button>
    </div>
  );
}

// RULES
function Rules() {
  return <div className="rules">Rules</div>;
}
