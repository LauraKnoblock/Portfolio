
import './App.css';
import { useState } from 'react';

function App() {
  const [showDescription, setShowDescription] = useState(false);

  const handleH1Hover = () => {
    setShowDescription(true);
  };

  const handleH1Leave = () => {
    setTimeout(() => {
      if (!showDescription) {
    setShowDescription(false);
  }}, 200);
}
  return (
    <div className="App">
      <header className="App-header">
      <style>
@import url('https://fonts.googleapis.com/css2?family=Calistoga&family=Poppins&display=swap');
</style>
        <img src={process.env.PUBLIC_URL + '/Logo.png'} className="App-logo" alt="logo" />
        <h1 className="grow" onMouseEnter={handleH1Hover} onMouseLeave={handleH1Leave}>
          Laura Knoblock
        </h1>
        <h4 className={`description ${showDescription ? 'animate' : 'hidden'}`}>Full Stack Web Developer with a flair for design</h4>
        <div className="links">
          <ul>
            <li>
            <a href="https://www.linkedin.com/in/laura-elizabeth-knoblock">
            <img src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt="LinkedIn Logo"></img>
            </a>
            <a href="https://github.com/LauraKnoblock">
            <img src={process.env.PUBLIC_URL + 'GitHub_Logo.png'} alt="GitHub Logo"></img>
            </a>
            </li>
          </ul>
        </div>
      
        
      </header>
     
    </div>
  );
}

export default App;
