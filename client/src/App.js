import logo from './logo.png';
import './App.css';
import {useState} from 'react'

function App() {
  let [playstate,setplaystate] = useState('running')
  function animation(){
    setplaystate((playstate === 'running') ? 'paused' : 'running')
  }
  return (
    <div className="App">
      <header className="App-header">
        <div id="vue">
          <img src={logo} className="App-logo" alt="logo" style={{animationPlayState: playstate}} />
        </div>
        <p class="textVue">VueТылочка</p>
        <p>И совсем это не React....</p>
        <button onClick={animation}>Крутить <span>VueТылочку</span></button>
        <p class="rub">-50 рублей</p>
      </header>
    </div>
  );
}


function Animation() {
  let pause = "animation-play-state: paused;"
  let play = "animation-play-state: running;"
  document.querySelector(".App-logo").style = ''

  if(document.querySelector(".App-logo").style === play) {
    document.querySelector(".App-logo").style = pause
  } else {
    document.querySelector(".App-logo").style = play
  }
}

export default App;
