import React, {Fragment} from 'react';
import MatchsList from '../components/Match/MatchsList';
import Header from '../components/Header/Header'

const Rounds = (props) => {
    const {matchs, league} = props;

    return(
        <Fragment>
            <Header league={league}/>
            
            <p className='round-label'> Octavos de Final</p>
            <MatchsList matchs={matchs.filter(match => match.league.round === '8th Finals')}/>

            <p className='round-label'> Fase de Grupos - Fecha 6 </p>
            <MatchsList matchs={matchs.filter(match => match.league.round === 'Group Stage - 6')}/>
            
            <p className='round-label'> Fase de Grupos - Fecha 5 </p>
            <MatchsList matchs={matchs.filter(match => match.league.round === 'Group Stage - 5')}/>
            
            <p className='round-label'> Fase de Grupos - Fecha 4 </p>
            <MatchsList matchs={matchs.filter(match => match.league.round === 'Group Stage - 4')}/>
            
            <p className='round-label'> Fase de Grupos - Fecha 3 </p>
            <MatchsList matchs={matchs.filter(match => match.league.round === 'Group Stage - 3')}/>
            
            <p className='round-label'> Fase de Grupos - Fecha 2 </p>
            <MatchsList matchs={matchs.filter(match => match.league.round === 'Group Stage - 2')}/>
            
            <p className='round-label'> Fase de Grupos - Fecha 1 </p>
            <MatchsList matchs={matchs.filter(match => match.league.round === 'Group Stage - 1')}/>
        </Fragment>
    )
}

export default Rounds;