import React, {Fragment} from 'react';
import Scoreboard_lg from '../components/Scoreboards/Scoreboard_lg';
import MatchesList from '../components/Scoreboards/MatchesList';
import Header from '../components/Header/Header';

const Rounds = (props) => {
    const {matches, league, rounds} = props;

    var matchesFilteredPerRound = rounds.map(round => 
        matches.filter(match => 
            match.league.round === round
        )
    );

    return(
        <Fragment>
            <Header league={league}/>
            {
                matchesFilteredPerRound.map( (matches,index) =>
                    <Fragment> 
                        <p className='round-label'> {rounds[index]} </p>
                        <MatchesList 
                            scoreboards={ 
                                matches.map(match => <Scoreboard_lg match={match}/>)
                            }
                        />
                    </Fragment>
                ).reverse()
            }
        </Fragment>
    )
}

export default Rounds;