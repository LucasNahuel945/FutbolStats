import React, {Fragment} from 'react';
import './Standings.css'

const Standings = (props) => {
    
    const {standings} = props;
    
    console.log(standings);
    return (
        <Fragment>
        {
            standings.map(group =>
                <table className='table-positions'>
                    <thead>
                        <tr>
                            <th className='rank'>#</th>
                            <th className='tteam'>Club</th>
                            <th>G</th>
                            <th>E</th>
                            <th>P</th>
                            <th></th>
                            <th>GF</th>
                            <th>GC</th>
                            <th>Dif</th>
                            <th></th>
                            <th>Pts</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        group.map(team =>
                            <tr>
                                <td className='rank'>{team.rank}</td>
                                <td className='tteam'>
                                    <div> <img className='team-logo' src={team.team.logo} alt={team.team.name}/> </div>
                                    <div> {team.team.name} </div>
                                </td>
                                <td>{team.stats.all.win}</td>
                                <td>{team.stats.all.draw}</td>
                                <td>{team.stats.all.lose}</td>
                                <td></td>
                                <td>{team.stats.all.goals.for}</td>
                                <td>{team.stats.all.goals.against}</td>
                                <td>{team.stats.all.goals.diff}</td>
                                <td></td>
                                <td>{team.stats.all.points}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            )
        }
        </Fragment>
    )
}

export default Standings;
