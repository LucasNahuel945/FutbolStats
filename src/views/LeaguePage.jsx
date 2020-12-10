import React, {Fragment, useState} from 'react';

// components
import MatchsSmallList from '../components/Match/MatchSmallList';
import MatchsList from '../components/Match/MatchsList';
import Header from '../components/Header/Header';

const LeaguePage = (props) => {
    
    const [league, setLeague] = useState(props.league);
    const [matchs, setMatchs] = useState(props.matchs);

    return(
        <Fragment>
            <Header league={league}/>
            <MatchsSmallList matchs={matchs.filter( match => match.fixture.status.short === 'NS')}/>
        </Fragment>
    );
}

export default LeaguePage;
