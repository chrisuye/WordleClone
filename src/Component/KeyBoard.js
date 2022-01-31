import React from 'react';
import './KeyBoard.css'

const KeyBoard = ({ keyClick, keyColor, keys }) => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    console.log(keyColor)

    return (
        <div className='keyboard'>
            <div className='keyboard_inner'>
                <div className='keyboard_row'>
                    {letters.map(letter => (
                        <div className={ keys.indexOf(letter) !== -1 ? 'keyboard_key ' + keyColor[keys.indexOf(letter)] : 'keyboard_key'} key={letter} onClick={() => keys.length > 0 ? keys.indexOf(letter) !== -1 && keyColor[keys.indexOf(letter)] === 'wrong' ? null : keyClick(letter) : keyClick(letter) }>
                            {letter}
                        </div>
                    ))}
                    <div className='keyboard_key' onClick={() => keyClick('Enter')}>
                        Enter
                    </div>
                    <div className='keyboard_key' onClick={() => keyClick('Backspace')}>
                        Delete
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KeyBoard;
            
