import React from 'react';

const Lost = ({ gameWord, restart }) => (
    <div className='popup_inner' onClick={() => restart()}>
        <div className='lost'>
            <h1>You Lost!</h1>
            <h2>The real world was {gameWord}</h2>
            <button className='lost' onClick={() => restart()}>Play Again</button>
        </div>
    </div>
);

export default Lost;