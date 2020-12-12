import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Pages
import LeaguePage from './views/LeaguePage';
import TeamsPage from './views/TeamsPage';
import RoundsPage from './views/RoundsPage';
import StandingsPage from './views/StandingsPage'

// Data
import { teams, matches, standings, rounds} from './data/data';

const leagues = [
    {
        name: 'libertadores',
        teams: teams.libertadores,
        matches: matches.libertadores,
        standings: standings.libertadores,
        rounds: rounds.libertadores
    },{
        name: 'champions',
        teams: teams.champions,
        matches: matches.champions,
        standings: standings.champions,
        rounds: rounds.champions
    }];

const App = () => {
  return ( 
    <Fragment>
    {
        leagues.map(league =>
            <Router>
                <Route
                    exact path = {'/'+league.name}
                    render = {()=> <LeaguePage league={league.name} matches={league.matches}/>}
                />
                <Route
                    exact path = {'/'+league.name+'/teams'}
                    render = {() => <TeamsPage league={league.name} teams={league.teams}/>}
                />
                <Route
                    exact path = {'/'+league.name+'/instances'}
                    render = {()=> <RoundsPage  league={league.name} matches={league.matches} rounds={league.rounds}/>}
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
