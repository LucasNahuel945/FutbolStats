import React, {Fragment} from 'react';
import LeaguePage from './LeaguePage';

const Home = (props) => {
    const {league, matches} = props
    return(
        <Fragment>
            <LeaguePage 
                league={league}
                matches={matches}
            />
        </Fragment>
    );
}

export default Home;
