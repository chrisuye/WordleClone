import React from 'react';
import './Grid.css';

const Grid = ({ letters, color }) => (
    <div className='grid_container'>
        <div className='grid'>
        <div className='row'>
            <div className= {'cell ' + color[0]}>{letters[0]}</div>
            <div className={'cell ' + color[1]}>{letters[1]}</div>
            <div className={'cell ' + color[2]}>{letters[2]}</div>
            <div className={'cell ' + color[3]}>{letters[3]}</div>
            <div className={'cell ' + color[4]}>{letters[4]}</div>
        </div>
        <div className='row'>
            <div className={'cell ' + color[5]}>{letters[5]}</div>
            <div className={'cell ' + color[6]}>{letters[6]}</div>
            <div className={'cell ' + color[7]}>{letters[7]}</div>
            <div className={'cell ' + color[8]}>{letters[8]}</div>
            <div className={'cell ' + color[9]}>{letters[9]}</div>
        </div>
        <div className='row'>
            <div className={'cell ' + color[10]}>{letters[10]}</div>
            <div className={'cell ' + color[11]}>{letters[11]}</div>
            <div className={'cell ' + color[12]}>{letters[12]}</div>
            <div className={'cell ' + color[13]}>{letters[13]}</div>
            <div className={'cell ' + color[14]}>{letters[14]}</div>
        </div>
        <div className='row'>
            <div className={'cell ' + color[15]}>{letters[15]}</div>
            <div className={'cell ' + color[16]}>{letters[16]}</div>
            <div className={'cell ' + color[17]}>{letters[17]}</div>
            <div className={'cell ' + color[18]}>{letters[18]}</div>
            <div className={'cell ' + color[19]}>{letters[19]}</div>
        </div>
        <div className='row'>
            <div className={'cell ' + color[20]}>{letters[20]}</div>
            <div className={'cell ' + color[21]}>{letters[21]}</div>
            <div className={'cell ' + color[22]}>{letters[22]}</div>
            <div className={'cell ' + color[23]}>{letters[23]}</div>
            <div className={'cell ' + color[24]}>{letters[24]}</div>
        </div>
    </div>
    </div>
);

export default Grid;