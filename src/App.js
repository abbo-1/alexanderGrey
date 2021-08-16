import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typewriter from 'typewriter-effect';

import FirstBook from './components/Book1.js'
import Title from './components/Title';

function App() {

  return (
    
  <div>


    {/* <div class="margin">
    <Typewriter
        onInit={(typewriter) => {
            typewriter.typeString('<span id="title" style="color: #ffffff;">Alexander Grey</span>')
    
            .callFunction(() => {
                console.log('String typed out!');
            })
            .pauseFor(2500)
            .start();
            }}
    />
    </div> */}
  {/* <Title /> */}
  <FirstBook />
  </div>
  );
}

export default App;
