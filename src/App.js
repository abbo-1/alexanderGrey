import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typewriter from 'typewriter-effect';

import FirstBook from './components/Book1.js'
import SecondBook from './components/Book2.js'
import ThirdBook from './components/Book3.js'
import Title from './components/Title';

function App() {

  return (
    
  <div>
  {/* <Title /> */}
  <FirstBook />
  <SecondBook />
  <ThirdBook />
  </div>

  );
}

export default App;
