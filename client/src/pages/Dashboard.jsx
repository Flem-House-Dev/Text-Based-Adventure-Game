import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <br></br><br></br>
      <header className="home-header">
        <h1>Welcome to the Text-Based Adventure Game</h1>
        <p>Embark on an epic journey and explore the unknown!</p><br></br>
      </header>

      <main className="home-main">
        <section className="home-introduction">
          <br></br>
          <h2>About the Game</h2>
          <p>
            This is a classic text-based adventure game where you make choices
            to navigate through an exciting story. Each decision affects the
            outcome of your adventure.
          </p>
          <Link to="/game">
            <button className="start-game-button">Start Game</button>
          </Link>
        </section>
      </main>
    </div>
  );
}
