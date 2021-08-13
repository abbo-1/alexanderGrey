import './App.css';
import Typewriter from 'typewriter-effect';

function App() {
  return (
    <div className="App">
        <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('<span style="color: #ffffff;">Alexander Gray</span>')
    
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .start();
  }}
/>


    </div>
  );
}

export default App;
