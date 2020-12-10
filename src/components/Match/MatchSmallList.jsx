import React from 'react';
import Match from './Match';
import './Match.css';
import {formatDate} from '../../data/data';


const MatchsSmallList = (props) => {
    const {matchs} = props
    return (
        <div className='container matchs-list'>
        {matchs.map(match => <Match match={match}/>)}
        </div>
    )
}

export default MatchsSmallList;
