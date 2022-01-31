import './App.css';
import Grid from './Component/Grid';
import Popup from './Component/Popup';
import KeyBoard from './Component/KeyBoard';
import React, { useState, useEffect } from 'react';
import { randomWord, checkWord } from './Lib/wordHelper';

let gameWord = randomWord()

const App = () => {
  const [letters, setLetters] = useState([])
  const [color, setColor] = useState([])
  const [keyColor, setKeyColor] = useState([])
  const [keys, setKeys] = useState([])
  const [word, setWord] = useState('')
  const [pos, setPos] = useState(0)
  const [win, setWin] = useState(false)
  const [lost, setLost] = useState(false)
  const [trys, setTrys] = useState(0)
  const [gamesPlayed, setGamesPlayed] = useState(0)

  console.log(gameWord)

  function keyClick(letter) {
    if (letter === 'Backspace') {
      if(word.length > 0) {
        setLetters(letters.filter((_, i) => i < pos - 1))
        setWord(word.slice(0, -1))
        console.log(word)
        setPos(pos - 1)
      }
    } else if (letter === 'Enter') {
      if (word.length === 5) {
        let temptrys = trys + 1
        setTrys(temptrys)
        if (checkWord(gameWord, word.toLowerCase())) {
          setWin(true)
        }else if (temptrys === 5) {
          setLost(true)
        }
        Color()
        setWord('')
      }
    } else {
        if ( word.length < 5 && !win && !lost) {
          setWord(word + letter)
          setLetters([...letters, letter])
          setPos(pos + 1)
        }
    }
  }

  function Color() {
    let gameletters = gameWord.split("")
      let wordletters = word.toLowerCase().split("")
      let colors = []
      let keyColors = []
      let key = []
  
      for (let i = 0; i < wordletters.length; i++) {
          if (gameletters[i] === wordletters[i]) {
              colors.push('correct')
              keyColors.push('correct')
              key.push(wordletters[i].toUpperCase())
          } else if (gameletters.includes(wordletters[i])) {
              colors.push('almost')
              keyColors.push('almost')
              key.push(wordletters[i].toUpperCase())
          } else {
              colors.push('wrong')
              keyColors.push('wrong')
              key.push(wordletters[i].toUpperCase())
          }
      }
      setColor([...color, ...colors])
      setKeyColor([...keyColor, ...keyColors])
      setKeys([...keys, ...key])
      console.log(color)
  }

  function restart () {
    setLetters([])
    setColor([])
    setWord('')
    setPos(0)
    setWin(false)
    setLost(false)
    setTrys(0)
    gameWord = randomWord()
    setGamesPlayed(gamesPlayed + 1)
    setColor([])
    setKeyColor([])
  }

  useEffect(() => {
    function onDelete() {
      if (word.length > 0) {
        setLetters(letters.filter((_, i) => i < pos - 1))
        setWord(word.slice(0, -1))
        console.log(word)
        setPos(pos - 1)
      }
    }
  
    function onEnter() {
      if (word.length === 5) {
        let temptrys = trys + 1
        setTrys(temptrys)
        if (checkWord(gameWord, word.toLowerCase())) {
          setWin(true)
        }else if (temptrys === 5) {
          setLost(true)
        }
        getColor()
        setWord('')
      }
    }

    const getColor = () => {
      let gameletters = gameWord.split("")
      let wordletters = word.toLowerCase().split("")
      let colors = []
      let keyColors = []
      let key = []
  
      for (let i = 0; i < wordletters.length; i++) {
          if (gameletters[i] === wordletters[i]) {
              colors.push('correct')
              keyColors.push('correct')
              key.push(wordletters[i].toUpperCase())
          } else if (gameletters.includes(wordletters[i])) {
              colors.push('almost')
              keyColors.push('almost')
              key.push(wordletters[i].toUpperCase())
          } else {
              colors.push('wrong')
              keyColors.push('wrong')
              key.push(wordletters[i].toUpperCase())
          }
      }
      console.log(keyColors)
      setColor([...color, ...colors])
      setKeyColor([...keyColor, ...keyColors])
      setKeys([...keys, ...key])
      console.log(color)
  }

    const listener = (e) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else {
        const key = e.key.toUpperCase()
        if (key.length === 1 && key >= 'A' && key <= 'Z') {
          if ( word.length < 5 && !win && !lost) {
            setWord(word + key)
            setLetters([...letters, key])
            setPos(pos + 1)
          }
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [color, keyColor, keys, letters, lost, pos, trys, win, word])

  return (
    <div className="app">
      <div className="header">
        <h1>Wordle</h1>
      </div>
      <Grid letters={letters} color={color}/>
      { (win || lost) && <Popup word={word} win = {win} lost = {lost} gameWord = {gameWord} restart = {restart}/>}
      <div className="keyboardapp">
        <KeyBoard keyClick = {keyClick} keyColor={keyColor} keys={keys}/>
      </div>
    </div>
  );
}

export default App;
