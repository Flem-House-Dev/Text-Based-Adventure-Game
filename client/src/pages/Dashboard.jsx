import { Link } from 'react-router-dom';

export default function Dashboard() {

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to the Text-Based Adventure Game</h1>
        <p>Embark on an epic journey and explore the unknown!</p>
      </header>

      <main className="home-main">
        <section className="home-introduction">
          <h2>About the Game</h2>
          <p>
            This is a classic text-based adventure game where you make choices
            to navigate through an exciting story. Each decision affects the
            outcome of your adventure.
          </p>
        </section>

        <section className="home-actions">
          <Link to="/game" className="home-button">Start Adventure</Link>
          <Link to="/login" className="home-button">Login</Link>
          <Link to="/signup" className="home-button">Sign Up</Link>
        </section>
      </main>
    </div>
  );
};

