import React, {Fragment} from 'react';
import Teams from '../components/Teams/Teams';
import Header from '../components/Header/Header'

const TeamsPage = (props) => {
    const {teams, league} = props;

    return(
        <Fragment>
            <Header league={league}/>
            <Teams   teams={teams}/>
        </Fragment>
    )
}

export default TeamsPage;
