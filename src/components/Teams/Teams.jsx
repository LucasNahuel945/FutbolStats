import React from 'react';
import './Teams.css';

const Teams = (props) => {
    const {teams} = props;
    
    return(
        <div className='container teams-list'>
        {
            teams.map(team => 
                <div className='box team-label btn'> 
                    <img className='team-logo' src={team.logo} alt={team.name} /> 
                    <div> {team.name} </div> 
                </div>
            )
        }
        </div>
    )
}

export default Teams