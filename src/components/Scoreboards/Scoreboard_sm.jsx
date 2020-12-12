import React from 'react';
import {formatDate} from '../../data/data';
import './Scoreboard.css';


const Scoreboard_sm = (props) =>{
    
    const {home, away} = props.match;
    const date = formatDate(props.match.fixture.date, -3);

    return (
        <div className='match-sm flex-columns'> 
            <div className='flex-rows match-date'> 
                <div className='time bg-green'>{date.time}</div>
                <div className='date bg-black'>{date.date} </div>
            </div>

            <div className='flex-columns bg-white scoreboard'>
                <div className='flex-rows expand'>
                    <div className='team-label'>
                        <div> <img className='team-logo' src={home.logo} alt={home.name}/> </div>
                        <div> {home.name} </div>
                    </div>
                    <div className='score'> {home.goals!=null ? home.goals : '-'} </div>
                </div>

                <div className='flex-rows expand'>
                    <div className='team-label'>
                        <div> <img className='team-logo' src={away.logo} alt={away.name}/> </div>
                        <div> {away.name} </div>
                    </div>
                    <div className='score'> {away.goals!=null ? away.goals : '-'} </div>
                </div>
            </div>
        </div>
    );
}

export default Scoreboard_sm;
