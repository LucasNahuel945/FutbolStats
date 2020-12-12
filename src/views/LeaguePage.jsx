import React, {Fragment} from 'react';

// components
import Scoreboard_sm from '../components/Scoreboards/Scoreboard_sm';
import MatchesList from '../components/Scoreboards/MatchesList'
import Header from '../components/Header/Header';
import SidebarButton from '../components/Sidebar/SidebarButton';
import Sidebar from '../components/Sidebar/Sidebar';

const LeaguePage = (props) => {
    
    const {league, matches} = props

    var scoreboards = matches
        .filter( match => match.fixture.status.short === 'NS')
        .map(match => <Scoreboard_sm match={match}/>);

    return(
        <Fragment>
            <Header league={league}/>
            <SidebarButton/>
            <Sidebar/>
            <MatchesList scoreboards={scoreboards}/>
        </Fragment>
    );
}

export default LeaguePage;
