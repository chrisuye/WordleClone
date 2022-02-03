import React from 'react';
import Win from './Win';
import Lost from './Lost';
import './Popup.css'

const Popup = ({ word, win, lost, gameWord, restart }) => (
    <div className='popup'>
        {win && <Win gameWord={gameWord} restart={restart}/>}
        {lost && <Lost word={word} gameWord={gameWord} restart={restart}/>}
     </div>
);

export default Popup;