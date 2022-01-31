import React from 'react';

const Win = ({ gameWord, restart }) => {
    function copyToClipboard () {
        const el = document.createElement('textarea');
        el.value = gameWord;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }
    return (
    <div className='popup_inner'>
        <div className='win'>
                <h1>You Win!</h1>
                <h2>{gameWord}</h2>
                <button className='win' onClick={() => restart()}>Play Again</button>
                <button className='copy' onClick={() => copyToClipboard(gameWord)}>Copy to Clipboard</button>
        </div>
    </div>
)}

export default Win;