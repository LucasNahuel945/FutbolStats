import React, {Fragment} from 'react';
import Standings from '../components/Standings/Standings';
import Header from '../components/Header/Header'

const StandingsPage = (props) => {
    const {league, standings} = props;

    return(
        <Fragment>
            <Header league={league}/>
            <Standings standings={standings}/>
        </Fragment>
    )
}

export default StandingsPage;
