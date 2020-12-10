import matchs from  './matchs';
import teams from  './teams';
import standings from  './standings';

function matchAdapter(match){
  return {
    fixture: {
      "id": match.fixture,
      "referee": match.fixture,
      "timezone": match.fixture.timezone,
      "date": match.fixture.date,
      "timestamp": match.fixture,
      "periods": match.fixture.periods,
      "venue": match.fixture.venue,
      "status": match.fixture.status,
    },
    league: {
      "id": match.league.id,
      "name": match.league.name,
      "country": match.league.country,
      "logo": match.league.logo,
      "flag": match.league.flag,
      "season": match.league.season,
      "round": match.league.round
    },
    home: {
      "id": match.teams.home.id,
      "name": match.teams.home.name,
      "logo": match.teams.home.logo,
      "goals": match.goals.home,
      "penalty": match.score.penalty.home,
      "winner": match.teams.home.winner,
    },
    away: {
      "id": match.teams.away.id,
      "name": match.teams.away.name,
      "logo": match.teams.away.logo,
      "goals": match.goals.away,
      "penalty": match.score.penalty.away,
      "winner": match.teams.home.winner,
    }
  }
}

function teamAdapter(team){
  return {
    "id": team.team.id,
    "name": team.team.name,
    "country": team.team.country,
    "founded": team.team.founded,
    "national": team.team.national,
    "logo": team.team.logo,
    "venue": team.venue, // id, name, address, city, capacity, surface, image
  }
}

function standinsAdapter(standings){
  return standings.map( standing => {
    return {
      "rank": standing.rank,
      "team": standing.team,
      "group": standing.group,
      "form": standing.form,
      "status": standing.status,
      "description": standing.description,
      "updated": standing.update,
      "stats": {
        "all":{
          "played": standing.all.played,
          "win": standing.all.win,
          "draw": standing.all.draw,
          "lose": standing.all.lose,
          "goals": {
            "for": standing.all.goals.for,
            "against": standing.all.goals.against,
            "diff": standing.goalsDiff
          },
          "points": standing.points,
        },
        "home": {
          "played": standing.home.played,
          "win": standing.home.win,
          "draw": standing.home.draw,
          "lose": standing.home.lose,
          "goals": {
            "for": standing.home.goals.for,
            "against": standing.home.goals.against,
            "diff": standing.home.goals.for - standing.home.goals.against
          },
          "points": (standing.home.win*3) + standing.home.draw,
        },
        "away":{
          "played": standing.away.played,
          "win": standing.away.win,
          "draw": standing.away.draw,
          "lose": standing.away.lose,
          "goals": {
            "for": standing.away.goals.for,
            "against": standing.away.goals.against,
            "diff": standing.away.goals.for - standing.away.goals.against
          },
          "points": (standing.away.win*3) + standing.away.draw,
        },
      }
    }
  })
}

function formatDate(date, utc){
  date = date.split('T');
  let time = date[1].split('+')[0].split(':'); //[hh,mm,ss]
  date = date[0].split('-').reverse(); //[dd,mm,yyyy]
  let hour = (new Number(time[0])) + utc;
  time= [
      ((hour < 0) ? hour+24 :
          (hour > 23) ? hour-24 : hour).toString(), 
      time[1] ];
  date[2] = date[2].slice(2,4);
  
  return {
      "date": date.join('/'),
      "time": time.join(':'),
      "day": date[2],
      "month": date[1],
      "year": date[0],
      "hour": time[0],
      "min":time[1]
  }
}

var standingsAdapter = {
  libertadores: standings.libertadores.map( standing => standinsAdapter(standing)),
  champions:  standings.champions.map( standing =>standinsAdapter(standing))
}

var matchsAdapter = {
  libertadores: matchs.libertadores.map( match => matchAdapter(match) ),
  champions: matchs.champions.map( match => matchAdapter(match) )
}

var teamsAdapter = {
  libertadores: teams.libertadores.map( team => teamAdapter(team) ),
  champions: teams.champions.map( team => teamAdapter(team) )
}

export {
  formatDate,
  teamsAdapter as teams,
  matchsAdapter as matchs,
  standingsAdapter as standings
}
