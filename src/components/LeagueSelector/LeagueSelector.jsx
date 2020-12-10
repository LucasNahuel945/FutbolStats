import React from 'react';
import { Link } from 'react-router-dom';
import './LeagueSelector.css';

const LeagueSelector = (porps) => {
    return (
        <div className='league-selector'>
            <Link to='/libertadores' className='team-label league-box'> 
                <div> <img className='league-logo' src="https://vignette.wikia.nocookie.net/revenge-history/images/6/6a/Coplibertadores.png/revision/latest/scale-to-width-down/300?cb=20191006031455&path-prefix=es" alt="copa libertadores conmebol"/> </div> 
                <div className='name'>Conmebol Libertadores</div>
            </Link>
            
            <Link to='/champions' className='team-label league-box'>
                <div> <img className='league-logo' src="https://media.api-sports.io/football/leagues/2.png" alt="champions league"/> </div>
                <div className='name'>Champions League</div>
            </Link>
        </div>
    )
}

export default LeagueSelector;
