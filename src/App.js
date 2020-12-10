import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Pages
import LeaguePage from './views/LeaguePage';
import TeamsPage from './views/TeamsPage';
import RoundsPage from './views/RoundsPage';
import StandingsPage from './views/StandingsPage'

// Data
import { teams, matchs, standings} from './data/data';

const leagues = [
    {
        name: 'libertadores',
        teams: teams.libertadores,
        matchs: matchs.libertadores,
        standings: standings.libertadores
    },{
        name: 'champions',
        teams: teams.champions,
        matchs: matchs.champions,
        standings: standings.champions
    }];

const App = () => {
  return ( 
    <Fragment>
    {
        leagues.map(league =>
            <Router>
                <Route
                    exact path = {'/'+league.name}
                    render = {()=> <LeaguePage league={league.name} matchs={league.matchs}/>}
                />
                <Route
                    exact path = {'/'+league.name+'/teams'}
                    render = {() => <TeamsPage league={league.name} teams={league.teams}/>}
                />
                <Route
                    exact path = {'/'+league.name+'/instances'}
                    render = {()=> <RoundsPage  league={league.name} matchs={league.matchs}/>}
                />
                <Route
                    exact path = {'/'+league.name+'/standings'}
                    render = {()=> <StandingsPage  league={league.name} standings={league.standings}/>}
                />

            </Router>
        )
    }
    </Fragment>
    );
}

export default App;
