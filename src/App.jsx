import { useState } from 'react';
import QuotesBox from './Components/QuotesBox';
import quotes from './Components/quotes.json';
import './styles.css';


const arrayColor = [
  "#2284DF", "#5258E3", "#7BF574", "#986B4B", "#78E905", "#789D7C", "#6A040C", "#47C111", "#478B22", "#E95860"
]

function App() {


  const createNumberRandom = array => {
    return Math.floor(Math.random() * array.length)
  }

  const getElementRandom = array => {
    const i = createNumberRandom(array)
    return array[i]
  }

  const [quoteRandom, setQuoteRandom] = useState(getElementRandom(quotes))
  const [colorRandom, setColorRandom] = useState(getElementRandom(arrayColor))

  const clickButton = () => {
    setQuoteRandom(getElementRandom(quotes))
    setColorRandom(getElementRandom(arrayColor))

  }

  const appStyle = {
    backgroundColor: colorRandom
  }

  return (
    <div style={appStyle} className="App">
     <QuotesBox
      quoteRandom={quoteRandom}
      colorRandom={colorRandom}
      clickButton={clickButton}
     />
    </div>
  );
}

export default App;
