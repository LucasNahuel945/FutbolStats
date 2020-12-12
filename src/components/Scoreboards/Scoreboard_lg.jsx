import React, {Fragment} from 'react';
import {formatDate} from '../../data/data';
import './Scoreboard.css';

const Scoreboard_lg = (props) =>{
    const {match} = props;

    return (
    <Fragment>
    <div className='flex-rows match-lg scoreboard'>
        <div className='match-date'> {formatDate(match.fixture.date, -3).time} </div>
        <div className='flex-rows expand'>
            <div className='team-label'>
                <div> <img className='team-logo' src={match.home.logo} alt={match.home.name}/> </div>
                <div> {match.home.name} </div>
            </div>
            <div className='score'> {match.home.goals!=null ? match.home.goals : '-'} </div>
        </div>
        <div className='flex-rows-r expand'>
            <div className='team-label'>
                <div> <img className='team-logo' src={match.away.logo} alt={match.away.name}/> </div>
                <div> {match.away.name} </div>
            </div>
            <div className='score'> {match.away.goals!=null ? match.away.goals : '-'} </div>
        </div>
    </div>
    </Fragment>
    )
}

export default Scoreboard_lg
