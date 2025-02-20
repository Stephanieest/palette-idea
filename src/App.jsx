import React, { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <header>
        <h1>Welcome to Palette</h1>
      </header>
      <div className="corner-toggle">
        <label className="toggle-switch">
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          <span className="slider"></span>
          <span className="toggle-label">Dark Mode</span>
        </label>
      </div>
      <main>
        <section>
          <h2>Palette</h2>
          <p>Explore beautiful color schemes and futuristic themes for your UI.</p>
          <button className="futuristic-btn">Discover More</button>
        </section>
        <section>
          <h2>Food & Culture</h2>
          <p>Enjoy delicious insights into American, Arabic, and global cuisines.</p>
          <button className="futuristic-btn">Read More</button>
        </section>
        <section>
          <h2>Cartoons & Fun</h2>
          <p>From nostalgic classics to modern animation, dive into the world of cartoons!</p>
          <button className="futuristic-btn">Explore</button>
        </section>
      </main>
    </div>
  );
}

export default App;
